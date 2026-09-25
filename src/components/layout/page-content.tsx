"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

export function PageContent({ children, scrollToTop = false }: { children: ReactNode; scrollToTop?: boolean }) {
  const mainRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    // Reset after the destination mounts, without animating from the old page's position.
    // Explicit section links still keep their intended destination.
    if (scrollToTop && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    const main = mainRef.current;
    if (!main || !("IntersectionObserver" in window)) return;

    const elements = Array.from(main.querySelectorAll<HTMLElement>("[data-reveal]"));
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reveal = (element: HTMLElement) => element.removeAttribute("data-reveal-pending");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });

    const updateMotion = () => {
      observer.disconnect();
      for (const element of elements) {
        // Content already in view stays visible, including anchor destinations.
        if (!motion.matches && element.getBoundingClientRect().top >= window.innerHeight) {
          element.setAttribute("data-reveal-pending", "");
          observer.observe(element);
        } else {
          reveal(element);
        }
      }
    };
    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      const element = event.target.closest<HTMLElement>("[data-reveal]");
      if (element) {
        reveal(element);
        observer.unobserve(element);
      }
    };

    updateMotion();
    motion.addEventListener("change", updateMotion);
    main.addEventListener("focusin", revealFocused);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", updateMotion);
      main.removeEventListener("focusin", revealFocused);
      elements.forEach(reveal);
    };
  }, [scrollToTop]);

  return <main id="conteudo" ref={mainRef}>{children}</main>;
}
