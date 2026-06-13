"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import {
  AdditiveBlending,
  Color,
  Group,
  MathUtils,
  Mesh,
  ShaderMaterial,
  Vector2
} from "three";

type SceneQuality = "fallback" | "mobile" | "balanced" | "high";

type SceneProfile = {
  dpr: number;
  fps: number;
  particles: number;
  detail: number;
};

const profiles: Record<Exclude<SceneQuality, "fallback">, SceneProfile> = {
  mobile: { dpr: 1, fps: 26, particles: 190, detail: 0 },
  balanced: { dpr: 1.2, fps: 42, particles: 460, detail: 1 },
  high: { dpr: 1.5, fps: 54, particles: 760, detail: 2 }
};

const vertexShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  attribute float aScale;
  varying float vGlow;

  void main() {
    vec3 pos = position;
    float wave = sin(pos.x * 0.58 + uTime * 0.32) + cos(pos.y * 0.72 - uTime * 0.24);
    pos.z += wave * 0.18;
    pos.x += uPointer.x * (0.12 + aScale * 0.018);
    pos.y += uPointer.y * (0.09 + aScale * 0.014);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = aScale * (18.0 / max(1.0, -mvPosition.z));
    vGlow = 0.58 + 0.42 * sin(uTime * 0.46 + aScale);
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform vec3 uWarm;
  varying float vGlow;

  void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float alpha = smoothstep(0.5, 0.04, distanceToCenter) * vGlow;
    vec3 color = mix(uColor, uWarm, gl_PointCoord.x * 0.7);
    gl_FragColor = vec4(color, alpha * 0.78);
  }
`;

function supportsWebGL2() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

function selectQuality(): SceneQuality {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const compactViewport = window.matchMedia("(max-width: 767px)").matches;
  const navigatorWithHints = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = navigatorWithHints.deviceMemory ?? 4;

  if (reducedMotion || navigatorWithHints.connection?.saveData || !supportsWebGL2()) {
    return "fallback";
  }

  if (compactViewport) {
    return "mobile";
  }

  return cores >= 8 && memory >= 8 ? "high" : "balanced";
}

function seededRandom(seed: number) {
  let value = seed;

  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function FrameDriver({ active, fps }: { active: boolean; fps: number }) {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    if (!active) {
      return;
    }

    let animationFrame = 0;
    let lastFrame = 0;
    const interval = 1000 / fps;

    const requestFrame = (now: number) => {
      if (now - lastFrame >= interval) {
        lastFrame = now;
        invalidate();
      }

      animationFrame = window.requestAnimationFrame(requestFrame);
    };

    animationFrame = window.requestAnimationFrame(requestFrame);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [active, fps, invalidate]);

  return null;
}

function ParticleField({
  count,
  pointerTarget
}: {
  count: number;
  pointerTarget: MutableRefObject<Vector2>;
}) {
  const materialRef = useRef<ShaderMaterial>(null);
  const smoothedPointer = useRef(new Vector2());
  const { positions, scales } = useMemo(() => {
    const random = seededRandom(21);
    const points = new Float32Array(count * 3);
    const pointScales = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      const stride = index * 3;
      points[stride] = (random() - 0.5) * 15;
      points[stride + 1] = (random() - 0.5) * 8;
      points[stride + 2] = (random() - 0.5) * 9 - 1;
      pointScales[index] = random() * 5.5 + 2.2;
    }

    return { positions: points, scales: pointScales };
  }, [count]);
  const uniforms = useMemo(
    () => ({
      uColor: { value: new Color("#d8e1e8") },
      uPointer: { value: new Vector2() },
      uTime: { value: 0 },
      uWarm: { value: new Color("#b87945") }
    }),
    []
  );

  useFrame(({ clock }) => {
    if (!materialRef.current) {
      return;
    }

    smoothedPointer.current.lerp(pointerTarget.current, 0.045);
    materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    materialRef.current.uniforms.uPointer.value.copy(smoothedPointer.current);
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </points>
  );
}

function EnergyCore({
  detail,
  pointerTarget
}: {
  detail: number;
  pointerTarget: MutableRefObject<Vector2>;
}) {
  const groupRef = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);

  useFrame(({ clock }, delta) => {
    if (!groupRef.current || !coreRef.current) {
      return;
    }

    const time = clock.elapsedTime;
    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, pointerTarget.current.y * 0.12, 0.035);
    groupRef.current.rotation.z = MathUtils.lerp(groupRef.current.rotation.z, -pointerTarget.current.x * 0.1, 0.035);
    coreRef.current.rotation.x = time * 0.08;
    coreRef.current.rotation.y = time * 0.11;
  });

  return (
    <group ref={groupRef} position={[2.6, 0.4, -1.4]}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.85, detail]} />
        <meshStandardMaterial color="#0b1f33" metalness={0.84} roughness={0.36} transparent opacity={0.72} />
      </mesh>
      <mesh scale={1.08}>
        <icosahedronGeometry args={[1.85, Math.max(1, detail)]} />
        <meshBasicMaterial color="#b87945" wireframe transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.2, 0.4]}>
        <torusGeometry args={[2.55, 0.018, 8, 76]} />
        <meshBasicMaterial color="#b87945" transparent opacity={0.52} />
      </mesh>
      <mesh rotation={[1.2, 0.75, 0.1]}>
        <torusGeometry args={[2.15, 0.012, 8, 68]} />
        <meshBasicMaterial color="#d8e1e8" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function DepthGrid() {
  const gridRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.position.z = (clock.elapsedTime * 0.24) % 1.15;
    }
  });

  return (
    <group ref={gridRef} position={[0, -2.55, -3.5]}>
      <gridHelper args={[28, 34, "#b87945", "#20242a"]} />
    </group>
  );
}

function Scene({
  active,
  pointerTarget,
  profile
}: {
  active: boolean;
  pointerTarget: MutableRefObject<Vector2>;
  profile: SceneProfile;
}) {
  return (
    <>
      <fog attach="fog" args={["#0b1f33", 7.5, 18]} />
      <ambientLight intensity={0.72} />
      <pointLight position={[4, 3, 4]} intensity={15} color="#b87945" distance={12} />
      <ParticleField count={profile.particles} pointerTarget={pointerTarget} />
      <EnergyCore detail={profile.detail} pointerTarget={pointerTarget} />
      <DepthGrid />
      <FrameDriver active={active} fps={profile.fps} />
    </>
  );
}

export default function AdaptiveHeroScene() {
  const pointerTarget = useRef(new Vector2());
  const [active, setActive] = useState(true);
  const [quality] = useState<SceneQuality>(() => (typeof window === "undefined" ? "fallback" : selectQuality()));

  useEffect(() => {
    const syncActivity = () => setActive(document.visibilityState === "visible");
    const trackPointer = (event: PointerEvent) => {
      pointerTarget.current.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
    };

    document.addEventListener("visibilitychange", syncActivity);
    window.addEventListener("pointermove", trackPointer, { passive: true });

    return () => {
      document.removeEventListener("visibilitychange", syncActivity);
      window.removeEventListener("pointermove", trackPointer);
    };
  }, []);

  const profile = quality === "fallback" ? null : profiles[quality];

  return (
    <div className="hero-webgl" data-quality={quality} data-active={active} aria-hidden="true">
      <div className="hero-webgl__fallback" />
      {profile ? (
        <Canvas
          className="hero-webgl__canvas"
          camera={{ position: [0, 0.15, 8.5], fov: 48 }}
          dpr={[1, profile.dpr]}
          frameloop="demand"
          gl={{
            alpha: true,
            antialias: quality === "high",
            depth: true,
            powerPreference: "high-performance",
            preserveDrawingBuffer: false,
            stencil: false
          }}
          onCreated={({ gl }) => gl.setClearColor("#0b1f33", 0)}
        >
          <Scene active={active} pointerTarget={pointerTarget} profile={profile} />
        </Canvas>
      ) : null}
      <div className="hero-webgl__vignette" />
    </div>
  );
}
