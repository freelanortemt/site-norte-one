"use client";

import { useEffect } from "react";

export function CinematicMotionEngine() {
  useEffect(() => {
    const desktopMotion = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");

    if (!desktopMotion.matches) {
      return;
    }

    let cancelled = false;
    let cleanup = () => {};

    void Promise.all([import("lenis"), import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
        if (cancelled) {
          return;
        }

        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
          anchors: true,
          duration: 1.05,
          smoothWheel: true,
          touchMultiplier: 1,
          wheelMultiplier: 0.86
        });
        const ticker = (time: number) => lenis.raf(time * 1000);
        const animations = gsap.utils.toArray<HTMLElement>("[data-cinematic]").map((item) =>
          gsap.fromTo(
            item,
            { autoAlpha: 0.36, y: 30 },
            {
              autoAlpha: 1,
              duration: 0.78,
              ease: "power3.out",
              scrollTrigger: {
                once: true,
                start: "top 88%",
                trigger: item
              },
              y: 0
            }
          )
        );

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);

        cleanup = () => {
          animations.forEach((animation) => animation.kill());
          gsap.ticker.remove(ticker);
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
          lenis.destroy();
        };
      }
    );

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return null;
}
