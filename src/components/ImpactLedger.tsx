'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export function ImpactLedger() {
  const { executiveMetrics } = portfolioData;

  return (
    <section className="w-[min(1340px,calc(100%-48px))] mx-auto py-14 border-b border-[var(--border-color)] transition-colors duration-200" id="impact">
      
      {/* Section Eyebrow */}
      <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
        <span>PROVEN METRICS // MEASURABLE BUSINESS OUTCOMES</span>
      </div>

      {/* 5-Card Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {executiveMetrics.map((item, idx) => (
          <div
            key={item.id}
            className={`bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-5 shadow-[var(--card-shadow)] hover:-translate-y-1 transition-transform duration-200 flex flex-col justify-between ${
              idx === 4 ? 'col-span-2 sm:col-span-1' : ''
            }`}
          >
            <div>
              <div
                className="text-[34px] sm:text-[38px] font-[850] tracking-[-0.05em] leading-none mb-2"
                style={{ color: item.color }}
              >
                {item.number}
              </div>
              <div className="text-[12px] font-bold text-[var(--text-main)] mb-1">
                {item.label}
              </div>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] leading-[1.45]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
