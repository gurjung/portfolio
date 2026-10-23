'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';

export function HeroHeadline() {
  const { personal } = portfolioData;

  return (
    <div className="flex flex-col justify-center">
      {/* Eyebrow Tag */}
      <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-5">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
        <span>{personal.eyebrow}</span>
      </div>

      {/* Main Editorial Headline */}
      <h1 className="text-[clamp(36px,5.5vw,78px)] font-[850] leading-[0.93] tracking-[-0.06em] text-[var(--text-main)] mb-6">
        {personal.headlineLine1}<br />
        {personal.headlineLine2}<br />
        <span className="relative inline-block text-white px-2.5 pb-1 z-10 mt-1">
          <span
            className="absolute inset-0 bg-[var(--accent-blue)] rounded-lg -z-10 -rotate-1 transform"
            aria-hidden="true"
          />
          {personal.headlineAccent}
        </span>
      </h1>

      {/* Intro Description */}
      <p className="text-[16px] leading-[1.65] text-[var(--text-muted)] max-w-[500px] mb-8 font-normal">
        {personal.intro}
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3.5 flex-wrap">
        <a
          href="#work"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-md text-[13px] font-[750] bg-[var(--border-strong)] text-[var(--bg-card)] border border-[var(--border-strong)] hover:bg-[var(--accent-blue)] hover:border-[var(--accent-blue)] hover:text-white hover:-translate-y-0.5 transition-all duration-200"
        >
          <span>View my work</span>
          <span className="text-sm">→</span>
        </a>

        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[13px] font-[750] bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all duration-200"
        >
          <span>Get in touch</span>
          <span>✉</span>
        </a>
      </div>
    </div>
  );
}
