"use client";

import { useEffect, useRef } from "react";

type Particle = {
  alpha: number;
  phase: number;
  size: number;
  speedX: number;
  speedY: number;
  warm: number;
  x: number;
  y: number;
};

function createParticle(width: number, height: number): Particle {
  return {
    alpha: 0.22 + Math.random() * 0.62,
    phase: Math.random() * Math.PI * 2,
    size: 0.55 + Math.random() * 1.35,
    speedX: -0.05 + Math.random() * 0.1,
    speedY: -0.09 - Math.random() * 0.12,
    warm: Math.random(),
    x: Math.random() * width,
    y: Math.random() * height
  };
}

function drawPerspectiveGrid(context: CanvasRenderingContext2D, width: number, height: number, time: number) {
  const horizon = height * 0.68 + Math.sin(time * 0.00035) * 6;
  const bottom = height + 26;
  const centerX = width / 2;
  const lineColor = "rgba(216, 225, 232, 0.055)";
  const copperColor = "rgba(184, 121, 69, 0.05)";

  context.save();
  context.lineWidth = 1;

  for (let index = -9; index <= 9; index += 1) {
    const spread = width * 0.1;
    const endX = centerX + index * spread;
    context.beginPath();
    context.moveTo(centerX + index * 7, horizon);
    context.lineTo(endX, bottom);
    context.strokeStyle = index % 3 === 0 ? copperColor : lineColor;
    context.stroke();
  }

  for (let index = 0; index < 12; index += 1) {
    const progress = index / 11;
    const eased = 1 - Math.pow(1 - progress, 2.35);
    const y = horizon + (bottom - horizon) * eased + ((time * 0.018) % 16) * progress;
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.strokeStyle = `rgba(216, 225, 232, ${0.025 + progress * 0.055})`;
    context.stroke();
  }

  context.restore();
}

export function AmbientTechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !context) {
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactQuery = window.matchMedia("(max-width: 767px)");
    let animationFrame = 0;
    let lastFrame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, compactQuery.matches ? 1 : 1.25);

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = compactQuery.matches ? 76 : Math.min(150, Math.max(96, Math.round((width * height) / 11000)));
      particles = Array.from({ length: targetCount }, () => createParticle(width, height));
    };

    const render = (now: number) => {
      const reducedMotion = reducedMotionQuery.matches;
      const targetInterval = reducedMotion ? Number.POSITIVE_INFINITY : 1000 / 28;

      if (!reducedMotion && now - lastFrame < targetInterval) {
        animationFrame = window.requestAnimationFrame(render);
        return;
      }

      const delta = Math.min(2.2, Math.max(0.45, (now - lastFrame) / 16.67 || 1));
      lastFrame = now;

      context.clearRect(0, 0, width, height);
      drawPerspectiveGrid(context, width, height, now);

      context.save();
      context.globalCompositeOperation = "lighter";

      for (const particle of particles) {
        if (!reducedMotion) {
          particle.x += particle.speedX * delta;
          particle.y += particle.speedY * delta;
          particle.phase += 0.018 * delta;
        }

        if (particle.y < -12) {
          particle.y = height + 12;
          particle.x = Math.random() * width;
        }

        if (particle.x < -12) {
          particle.x = width + 12;
        } else if (particle.x > width + 12) {
          particle.x = -12;
        }

        const pulse = 0.5 + Math.sin(particle.phase) * 0.5;
        const alpha = particle.alpha * (0.32 + pulse * 0.68);
        const color =
          particle.warm > 0.78 ? `rgba(184, 121, 69, ${alpha})` : `rgba(216, 225, 232, ${alpha * 0.74})`;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = color;
        context.fill();
      }

      context.restore();

      if (!reducedMotion && document.visibilityState === "visible") {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible" && !animationFrame) {
        lastFrame = 0;
        animationFrame = window.requestAnimationFrame(render);
      } else if (document.visibilityState !== "visible") {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    resize();
    animationFrame = window.requestAnimationFrame(render);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="ambient-tech-bg pointer-events-none fixed inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="ambient-tech-bg__canvas" />
      <div className="ambient-tech-bg__noise" />
      <div className="ambient-tech-bg__shade" />
    </div>
  );
}
