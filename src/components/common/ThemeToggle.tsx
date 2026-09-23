"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/hooks";

interface ThemeToggleProps {
  readonly className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Component mounted on client
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-xl border border-border-subtle bg-surface/50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-10 h-10 rounded-xl border border-border-subtle hover:border-border-default bg-surface hover:bg-surface-elevated text-text-primary hover:text-primary transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40 active:scale-95 ${className}`}
    >
      {isDark ? (
        <FiSun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <FiMoon className="w-5 h-5 text-indigo-600 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
