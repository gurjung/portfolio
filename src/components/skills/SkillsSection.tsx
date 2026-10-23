'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export function SkillsSection() {
  const { skillsMatrix } = portfolioData;

  return (
    <section className="w-full py-16 bg-[var(--bg-card-subtle)] border-y border-[var(--border-color)] transition-colors duration-200 scroll-mt-20" id="skills">
      <div className="w-[min(1340px,calc(100%-32px))] sm:w-[min(1340px,calc(100%-48px))] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
            <span>TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-[850] tracking-[-0.04em] text-[var(--text-main)] leading-tight">
            Tools of the Trade &amp; Engineering Standards
          </h2>
        </div>

        {/* 6-Category Grid (2x3 on desktop, 2-col on tablet, 1-col on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillsMatrix.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-strong)] rounded-xl p-5 shadow-[var(--card-shadow)] flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Card Header */}
              <div className="pb-3 border-b border-[var(--border-color)]">
                <h3 className="text-[13.5px] font-[800] tracking-tight text-[var(--text-main)] flex items-center gap-2">
                  {cat.category}
                </h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-[var(--text-main)] hover:border-[var(--border-strong)] hover:text-[var(--accent-blue)] px-2.5 py-1 rounded-md text-[12px] font-medium transition-colors duration-150 select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
