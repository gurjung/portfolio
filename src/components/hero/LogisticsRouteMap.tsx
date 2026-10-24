'use client';

import React from 'react';

export function LogisticsRouteMap() {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-3.5 sm:p-4 lg:p-5 shadow-[var(--card-shadow)] relative overflow-hidden transition-colors duration-200">
      
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] sm:text-[11px] font-bold text-[var(--text-muted)] mb-3 sm:mb-4">
        <span className="tracking-wider">CLIENT ARCHITECTURE &amp; DATA FLOW // 01</span>
        <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-extrabold text-[var(--accent-green)] uppercase bg-[rgba(34,197,94,0.12)] px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
          <span>Systems Online</span>
        </div>
      </div>

      {/* Stylized SVG Map Container */}
      <div className="bg-[var(--bg-card-subtle)] rounded-md relative p-2 sm:p-4 lg:p-5 min-h-[230px] sm:h-[260px] lg:h-[310px] flex flex-col justify-between overflow-hidden">
        <svg
          className="w-full h-[150px] sm:h-[180px] lg:h-[220px]"
          viewBox="0 0 760 190"
          fill="none"
          role="img"
          aria-label="Interactive client-side data pipeline connecting complex logic, real-time sync, and seamless UI"
        >
          <defs>
            <pattern id="routeGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#routeGrid)" />

          {/* Dotted Supply Chain Line flowing across top and arcing to bottom right */}
          <path
            d="M 130 50 C 250 50, 320 90, 430 90 S 560 140, 680 140"
            stroke="var(--accent-blue)"
            strokeWidth="3.5"
            strokeDasharray="7 7"
            fill="none"
          />

          {/* Point 1: Complex Logic */}
          <circle cx="130" cy="50" r="9" fill="var(--bg-card)" stroke="var(--accent-blue)" strokeWidth="3" />
          <text
            x="65"
            y="30"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fontWeight="700"
            fill="currentColor"
          >
            ● COMPLEX LOGIC
          </text>

          {/* Point 2: Real-time Sync */}
          <circle cx="430" cy="90" r="8" fill="var(--accent-orange)" stroke="#FFFFFF" strokeWidth="2.5" />
          <text
            x="370"
            y="118"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fontWeight="700"
            fill="var(--accent-orange)"
          >
            ● REAL-TIME SYNC
          </text>

          {/* Point 3: Seamless UI */}
          <circle cx="680" cy="140" r="9" fill="var(--bg-card)" stroke="var(--accent-blue)" strokeWidth="3" />
          <text
            x="605"
            y="168"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fontWeight="700"
            fill="currentColor"
          >
            ● SEAMLESS UI
          </text>
        </svg>

        {/* High-Throughput Client Engine Floating Badge */}
        <div className="relative sm:absolute sm:bottom-3 sm:left-4 lg:bottom-4 lg:left-5 mt-2 sm:mt-0 bg-[#151619]/95 backdrop-blur-md text-white p-3 sm:p-3.5 lg:p-4 rounded-md text-[11px] sm:text-[12px] border border-white/10 max-w-full sm:max-w-[320px] lg:max-w-[360px] shadow-xl z-10">
          <span className="block text-[9px] sm:text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">
            HIGH-THROUGHPUT CLIENT ENGINE ↗
          </span>
          <strong className="block text-[12.5px] sm:text-[13.5px] font-extrabold text-white leading-tight">
            Deterministic state. Zero layout shift.
          </strong>
          <div className="flex gap-5 mt-2 font-mono text-[10.5px] sm:text-[11px] text-slate-300">
            <div>
              <b className="text-[var(--accent-lime)] text-[13px] mr-1">−75%</b> Bundle footprint
            </div>
            <div>
              <b className="text-[var(--accent-lime)] text-[13px] mr-1">2K+</b> Concurrent users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

