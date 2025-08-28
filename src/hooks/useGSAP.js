import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (lenis) => {
  const scope = useRef(null);

  useEffect(() => {
    if (!lenis) return;

    // Create a context for GSAP animations
    const ctx = gsap.context(() => {
      // Update ScrollTrigger on Lenis scroll
      lenis.on("scroll", ScrollTrigger.update);

      // Create a proxy for Lenis scroll
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      // Cleanup function
      return () => {
        lenis.off("scroll", ScrollTrigger.update);
        gsap.ticker.remove(lenis.raf);
      };
    }, scope);

    return () => ctx.revert();
  }, [lenis]);

  return scope;
};
