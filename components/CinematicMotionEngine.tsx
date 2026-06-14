"use client";

import { useEffect } from "react";

export function CinematicMotionEngine() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    const desktopMotion = window.matchMedia("(min-width: 1024px)");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-cinematic]"));
    let cancelled = false;
    let cleanupLenis = () => {};

    document.documentElement.classList.add("cinematic-motion-ready");

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min((index % 5) * 55, 220)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.14
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    if (desktopMotion.matches) {
      void import("lenis").then(({ default: Lenis }) => {
        if (cancelled) {
          return;
        }

        const lenis = new Lenis({
          anchors: true,
          duration: 1.05,
          smoothWheel: true,
          touchMultiplier: 1,
          wheelMultiplier: 0.86
        });
        let animationFrame = 0;
        const raf = (time: number) => {
          lenis.raf(time);
          animationFrame = window.requestAnimationFrame(raf);
        };

        animationFrame = window.requestAnimationFrame(raf);

        cleanupLenis = () => {
          window.cancelAnimationFrame(animationFrame);
          lenis.destroy();
        };
      });
    }

    return () => {
      cancelled = true;
      observer.disconnect();
      cleanupLenis();
      document.documentElement.classList.remove("cinematic-motion-ready");
    };
  }, []);

  return null;
}
