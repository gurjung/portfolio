'use client';

import React from 'react';

export function LogisticsRouteMap() {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-4 shadow-[var(--card-shadow)] relative overflow-hidden transition-colors duration-200">
      
      {/* Visual Header */}
      <div className="flex justify-between items-center font-mono text-[10px] font-bold text-[var(--text-muted)] mb-3">
        <span>CONNECTED OPERATIONS // 01</span>
        <div className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-[var(--accent-green)] uppercase bg-[rgba(34,197,94,0.12)] px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
          <span>Systems Online</span>
        </div>
      </div>

      {/* Stylized SVG Map Container */}
      <div className="bg-[var(--bg-card-subtle)] rounded-md relative p-3.5 h-[175px] flex items-center justify-center overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 540 180"
          fill="none"
          role="img"
          aria-label="Interactive stylized distribution route connecting warehouse, in transit, and doorstep delivery"
        >
          <defs>
            <pattern id="routeGrid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeOpacity="0.07" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#routeGrid)" />

          {/* Dotted Supply Chain Line */}
          <path
            d="M 60 70 C 140 70, 160 130, 240 130 S 340 50, 420 80 S 480 140, 500 140"
            stroke="var(--accent-blue)"
            strokeWidth="3"
            strokeDasharray="6 6"
            fill="none"
          />

          {/* Point 1: Warehouse */}
          <circle cx="60" cy="70" r="8" fill="var(--bg-card)" stroke="var(--accent-blue)" strokeWidth="3" />
          <text
            x="50"
            y="50"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="700"
            fill="currentColor"
          >
            ● WAREHOUSE
          </text>

          {/* Point 2: In Transit */}
          <circle cx="240" cy="130" r="7" fill="var(--accent-orange)" stroke="#FFFFFF" strokeWidth="2" />
          <text
            x="228"
            y="155"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="700"
            fill="var(--accent-orange)"
          >
            ● IN TRANSIT
          </text>

          {/* Point 3: Customer Delivery */}
          <circle cx="500" cy="140" r="8" fill="var(--bg-card)" stroke="var(--accent-blue)" strokeWidth="3" />
          <text
            x="440"
            y="165"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="700"
            fill="currentColor"
          >
            ● DELIVERY
          </text>
        </svg>

        {/* Real-time Fleet Tracking Floating Badge */}
        <div className="absolute bottom-2.5 left-3.5 bg-[#151619]/92 backdrop-blur-md text-white p-2.5 px-3.5 rounded-md text-[11px] border border-white/10 max-w-[260px] shadow-lg">
          <span className="block text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">
            REAL-TIME FLEET TRACKING ↗
          </span>
          <strong className="block text-[12px] font-extrabold text-white">
            Multiple stops. One platform.
          </strong>
          <div className="flex gap-4 mt-1 font-mono text-[10px] text-slate-400">
            <div>
              <b className="text-[var(--accent-lime)] text-[12px]">−30%</b> Switching time
            </div>
            <div>
              <b className="text-[var(--accent-lime)] text-[12px]">6K+</b> Deliveries/day
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
