'use client';

import React from 'react';

interface SonarDotProps {
  color?: string;
  size?: number; // size in px, defaults to 6
  className?: string;
}

export function SonarDot({
  color = 'var(--accent-green)',
  size = 6,
  className = '',
}: SonarDotProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      {/* Outer concentric radar wave 1 */}
      <span
        className="absolute inset-0 rounded-full animate-[sonarPing_2.2s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none"
        style={{ backgroundColor: color }}
      />
      {/* Outer concentric radar wave 2 (staggered delay) */}
      <span
        className="absolute inset-0 rounded-full animate-[sonarPing_2.2s_cubic-bezier(0,0,0.2,1)_infinite] [animation-delay:0.75s] pointer-events-none"
        style={{ backgroundColor: color }}
      />
      {/* Solid core luminous node */}
      <span
        className="relative rounded-full shadow-[0_0_6px_currentColor]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
        }}
      />
    </span>
  );
}
