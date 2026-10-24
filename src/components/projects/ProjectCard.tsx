'use client';

import React from 'react';
import { Project } from '@/data/portfolioData';

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = React.useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-5 sm:p-7 shadow-[var(--card-shadow)] flex flex-col justify-between hover:border-[var(--accent-blue)]/60 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(420px circle at var(--mouse-x, -100px) var(--mouse-y, -100px), var(--card-spotlight), transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* Top Details */}
      <div className="relative z-10 mb-5">
        {/* Category & Client Tag Row */}
        <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-2 mb-4">
          <span className="bg-[rgba(36,76,255,0.1)] border border-[rgba(36,76,255,0.25)] text-[var(--accent-blue)] px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase">
            {project.category}
          </span>
          <span className="font-mono text-[11px] text-[var(--text-muted)] font-semibold shrink-0">
            {project.client}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-[22px] sm:text-[24px] font-[850] tracking-[-0.04em] text-[var(--text-main)] mb-2.5">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-[13.5px] leading-[1.65] text-[var(--text-muted)] mb-5">
          {project.description}
        </p>

        {/* Code/Telemetry Preview Mockup */}
        <div className="bg-[#111318] border border-[#2B2D33] rounded-md p-4 text-slate-300 font-mono text-[11px] leading-relaxed mb-6">
          <div className="flex justify-between items-center border-b border-[#282A30] pb-2 text-[10px] text-slate-400 mb-2">
            <span>SYS_DIAGNOSTICS // ARCHITECTURE</span>
            <span className="text-[var(--accent-green)]">● VERIFIED</span>
          </div>

          <div className="space-y-1 my-2 text-slate-400">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex gap-2">
                <span className="text-[var(--accent-blue)]">&gt;</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="text-[var(--accent-lime)] text-[10px] pt-1 border-t border-[#282A30]">
            ● {project.stackBadge}
          </div>
        </div>
      </div>

      {/* Bottom Metrics & Action */}
      <div className="relative z-10 flex items-center justify-between border-t border-[var(--border-color)] pt-4 mt-auto">
        <div className="flex items-center gap-5 sm:gap-6 flex-wrap">
          {project.metrics.map((metric, idx) => (
            <div key={idx}>
              <strong className="block text-[18px] font-[850] tracking-tight text-[var(--text-main)] leading-tight">
                {metric.value}
              </strong>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="w-9 h-9 rounded-full bg-[var(--border-strong)] text-[var(--bg-card)] flex items-center justify-center text-sm font-bold shrink-0 group-hover:bg-[var(--accent-blue)] group-hover:text-white transition-colors duration-200"
        >
          →
        </div>
      </div>
    </article>
  );
}
