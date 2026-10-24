'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export function ExperienceSection() {
  const { careerExperience, education } = portfolioData;

  return (
    <section className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-20" id="experience">
      {/* Section Eyebrow & Title */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
          <span>CAREER TRAJECTORY</span>
        </div>
        <h2 className="text-[clamp(32px,4vw,44px)] font-[850] tracking-[-0.05em] text-[var(--text-main)] leading-none">
          Engineering Experience
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {/* Work Experience Cards */}
        {careerExperience.map((exp, idx) => (
          <div
            key={idx}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-7 sm:p-8 shadow-[var(--card-shadow)] transition-colors duration-200"
          >
            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5 border-b border-[var(--border-color)] pb-4">
              <div>
                <h3 className="text-[20px] font-[850] tracking-[-0.03em] text-[var(--text-main)]">
                  {exp.role}
                </h3>
                <div className="text-[13px] font-bold text-[var(--accent-blue)] mt-0.5">
                  {exp.company} · {exp.location}
                </div>
              </div>
              <div className="font-mono text-[11px] font-bold bg-[var(--bg-card-subtle)] border border-[var(--border-color)] px-3 py-1 rounded text-[var(--text-muted)] self-start">
                {exp.period}
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3 text-[13.5px] text-[var(--text-muted)] leading-[1.65]">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="relative pl-5">
                  <span className="absolute left-0 text-[var(--accent-blue)] font-bold">→</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Education Card */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-6 sm:p-7 shadow-[var(--card-shadow)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-200">
          <div>
            <h3 className="text-[17px] font-[850] text-[var(--text-main)] tracking-tight">
              {education.institution}
            </h3>
            <div className="text-[13px] text-[var(--text-muted)] mt-1">
              {education.degree} · <strong className="text-[var(--text-main)] font-mono">{education.score}</strong>
            </div>
          </div>
          <div className="font-mono text-[11px] font-bold bg-[var(--bg-card-subtle)] border border-[var(--border-color)] px-3 py-1 rounded text-[var(--text-muted)] shrink-0 self-start sm:self-auto">
            {education.period}
          </div>
        </div>
      </div>
    </section>
  );
}
