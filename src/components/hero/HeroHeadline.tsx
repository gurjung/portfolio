'use client';

import React from 'react';
import Link from 'next/link';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { portfolioData } from '@/data/portfolioData';

export function HeroHeadline() {
  const { personal } = portfolioData;

  return (
    <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
      {/* Eyebrow Tag */}
      <div className="font-mono text-[9.5px] sm:text-[11px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-5 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2 max-w-[92vw] flex-wrap sm:flex-nowrap">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] shrink-0" />
        <span>{personal.eyebrow}</span>
      </div>

      {/* Main Editorial Headline */}
      <h1 className="text-[clamp(28px,4.5vw,54px)] sm:text-[clamp(34px,4.6vw,58px)] lg:text-[clamp(40px,3.8vw,62px)] font-[850] leading-[0.96] tracking-[-0.05em] text-[var(--text-main)] mb-6">
        {personal.headlineLine1}<br />
        {personal.headlineLine2}<br />
        <span className="relative inline-block text-white px-3.5 py-1 sm:px-6 sm:py-2.5 lg:px-7 lg:py-3 z-10 mt-1 sm:mt-2 whitespace-nowrap">
          <span
            className="absolute inset-0 bg-[var(--accent-blue)] rounded-lg sm:rounded-xl -z-10 -rotate-1 transform shadow-sm"
            aria-hidden="true"
          />
          {personal.headlineAccent}
        </span>
      </h1>

      {/* Intro Description */}
      <p className="text-[16px] leading-[1.65] text-[var(--text-muted)] max-w-[540px] mb-8 font-normal mx-auto lg:mx-0">
        {personal.intro}
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center justify-center lg:justify-start gap-3.5 flex-wrap">
        <a
          href="#work"
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-md text-[13px] font-[750] bg-[var(--border-strong)] text-[var(--bg-card)] border border-[var(--border-strong)] hover:bg-[var(--accent-blue)] hover:border-[var(--accent-blue)] hover:text-white hover:-translate-y-0.5 transition-all duration-200"
        >
          <span>View my work</span>
          <FiArrowRight className="w-[18px] h-[18px] shrink-0" />
        </a>

        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-md text-[13px] font-[750] bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all duration-200"
        >
          <span>Get in touch</span>
          <FiMail className="w-5 h-5 shrink-0 text-[var(--accent-blue)]" />
        </a>
      </div>
    </div>
  );
}
