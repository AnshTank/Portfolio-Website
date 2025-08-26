"use client";

import { useEffect, useState } from "react";

export function useMobilePerformance() {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      setShouldReduceMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    };

    checkMobile();
    checkReducedMotion();

    window.addEventListener("resize", checkMobile);
    
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", checkReducedMotion);

    return () => {
      window.removeEventListener("resize", checkMobile);
      mediaQuery.removeEventListener("change", checkReducedMotion);
    };
  }, []);

  return {
    isMobile,
    shouldReduceMotion,
    shouldDisableAnimations: isMobile || shouldReduceMotion,
  };
}