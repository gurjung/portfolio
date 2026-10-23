'use client';

import React from 'react';

export function LogisticsRouteMap() {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-3.5 sm:p-4 shadow-[var(--card-shadow)] relative overflow-hidden transition-colors duration-200">
      
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] font-bold text-[var(--text-muted)] mb-3">
        <span>CLIENT ARCHITECTURE &amp; DATA FLOW // 01</span>
        <div className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-[var(--accent-green)] uppercase bg-[rgba(34,197,94,0.12)] px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
          <span>Systems Online</span>
        </div>
      </div>

      {/* Stylized SVG Map Container */}
      <div className="bg-[var(--bg-card-subtle)] rounded-md relative p-2 sm:p-4 min-h-[220px] sm:h-[220px] flex flex-col justify-between overflow-hidden">
        <svg
          className="w-full h-[140px] sm:h-[160px]"
          viewBox="0 0 600 160"
          fill="none"
          role="img"
          aria-label="Interactive client-side data pipeline connecting complex logic, real-time sync, and seamless UI"
        >
          <defs>
            <pattern id="routeGrid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#routeGrid)" />

          {/* Dotted Supply Chain Line flowing across top and arcing to bottom right */}
          <path
            d="M 120 42 C 200 42, 240 68, 330 68 S 440 108, 520 108"
            stroke="var(--accent-blue)"
            strokeWidth="3"
            strokeDasharray="6 6"
            fill="none"
          />

          {/* Point 1: Complex Logic (Positioned cleanly on top-left) */}
          <circle cx="120" cy="42" r="8" fill="var(--bg-card)" stroke="var(--accent-blue)" strokeWidth="3" />
          <text
            x="60"
            y="24"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="700"
            fill="currentColor"
          >
            ● COMPLEX LOGIC
          </text>

          {/* Point 2: Real-time Sync (Positioned cleanly in upper-middle) */}
          <circle cx="330" cy="68" r="7" fill="var(--accent-orange)" stroke="#FFFFFF" strokeWidth="2" />
          <text
            x="280"
            y="94"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="700"
            fill="var(--accent-orange)"
          >
            ● REAL-TIME SYNC
          </text>

          {/* Point 3: Seamless UI (Positioned on bottom-right) */}
          <circle cx="520" cy="108" r="8" fill="var(--bg-card)" stroke="var(--accent-blue)" strokeWidth="3" />
          <text
            x="455"
            y="134"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="700"
            fill="currentColor"
          >
            ● SEAMLESS UI
          </text>
        </svg>

        {/* High-Throughput Client Engine Floating Badge (Placed bottom-left with zero overlap) */}
        <div className="relative sm:absolute sm:bottom-2.5 sm:left-3 mt-2 sm:mt-0 bg-[#151619]/95 backdrop-blur-md text-white p-2.5 px-3.5 rounded-md text-[11px] border border-white/10 max-w-full sm:max-w-[270px] shadow-lg z-10">
          <span className="block text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">
            HIGH-THROUGHPUT CLIENT ENGINE ↗
          </span>
          <strong className="block text-[12px] font-extrabold text-white leading-tight">
            Deterministic state. Zero layout shift.
          </strong>
          <div className="flex gap-4 mt-1.5 font-mono text-[10px] text-slate-400">
            <div>
              <b className="text-[var(--accent-lime)] text-[12px]">−75%</b> Bundle footprint
            </div>
            <div>
              <b className="text-[var(--accent-lime)] text-[12px]">2K+</b> Concurrent users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
