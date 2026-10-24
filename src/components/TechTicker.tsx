'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export function TechTicker() {
  const { tickerTechnologies } = portfolioData;

  return (
    <div className="w-full bg-[#151619] text-white border-y border-[#282A30] overflow-hidden flex items-center h-12 select-none">
      {/* Volt Lime Label Box */}
      <div className="bg-[var(--accent-lime)] text-[#151619] font-mono text-[11px] font-[850] px-5 h-full flex items-center whitespace-nowrap tracking-wider shrink-0 z-10 shadow-md">
        TECH STACK ↗
      </div>

      {/* Infinite Scrolling Ticker Track */}
      <div className="flex-1 min-w-0 flex overflow-hidden whitespace-nowrap py-1">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] gap-7 pl-5 text-[12px] font-bold font-mono text-slate-200">
          {tickerTechnologies.map((tech, idx) => (
            <span key={`tech-1-${idx}`} className="inline-flex items-center gap-7">
              {tech}
              <span className="text-[var(--accent-orange)] text-[10px]">✦</span>
            </span>
          ))}
        </div>

        {/* Duplicate Track for Smooth Infinite Loop */}
        <div aria-hidden="true" className="flex shrink-0 animate-[marquee_28s_linear_infinite] gap-7 pl-5 text-[12px] font-bold font-mono text-slate-200">
          {tickerTechnologies.map((tech, idx) => (
            <span key={`tech-2-${idx}`} className="inline-flex items-center gap-7">
              {tech}
              <span className="text-[var(--accent-orange)] text-[10px]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
