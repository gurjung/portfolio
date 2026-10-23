'use client';

import React from 'react';
import { Project } from '@/data/portfolioData';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-7 shadow-[var(--card-shadow)] flex flex-col justify-between hover:border-[var(--border-strong)] hover:-translate-y-1 transition-all duration-200">
      
      {/* Top Details */}
      <div className="mb-5">
        {/* Category & Client Tag Row */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="bg-[rgba(36,76,255,0.1)] border border-[rgba(36,76,255,0.25)] text-[var(--accent-blue)] px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase">
            {project.category}
          </span>
          <span className="font-mono text-[11px] text-[var(--text-muted)] font-semibold">
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
      <div className="flex items-center justify-between border-t border-[var(--border-color)] pt-4 mt-auto">
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
          className="w-9 h-9 rounded-full bg-[var(--border-strong)] text-[var(--bg-card)] flex items-center justify-center text-sm font-bold shrink-0 hover:bg-[var(--accent-blue)] hover:text-white transition-colors duration-150"
        >
          →
        </div>
      </div>
    </article>
  );
}
