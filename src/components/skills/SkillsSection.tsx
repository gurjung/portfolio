'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export function SkillsSection() {
  const { skillsMatrix } = portfolioData;

  return (
    <section className="w-full py-16 bg-[var(--bg-card-subtle)] border-y border-[var(--border-color)] transition-colors duration-200" id="skills">
      <div className="w-[min(1340px,calc(100%-48px))] mx-auto">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
            <span>TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-[26px] sm:text-[30px] font-[850] tracking-[-0.04em] text-[var(--text-main)] leading-tight">
            Tools of the Trade &amp; Engineering Standards
          </h2>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsMatrix.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-5 shadow-[var(--card-shadow)] flex flex-col justify-between"
            >
              <h3 className="text-[13px] font-[850] tracking-tight text-[var(--text-main)] mb-3.5">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-[var(--text-main)] px-2.5 py-1 rounded text-[11px] font-mono font-medium"
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
