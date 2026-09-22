"use client";

import { useState, useEffect } from "react";

/**
 * Hook to determine if the page has scrolled past a specific threshold.
 * Useful for toggling elevation and shadows on sticky navigation bars.
 */
export function useScrollShadow(threshold = 90): boolean {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY >= threshold);
    };

    // Initialize check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return hasScrolled;
}
