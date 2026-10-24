'use client';

import React from 'react';
import Link from 'next/link';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { portfolioData } from '@/data/portfolioData';

export function HeroHeadline() {
  const { personal } = portfolioData;

  return (
    <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
      {/* Eyebrow Tag */}
      <div className="font-mono text-[9.5px] sm:text-[11px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-5 text-center lg:text-left max-w-[92vw]">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] shrink-0" />
          <span>{personal.eyebrow}</span>
        </span>
      </div>

      {/* Main Editorial Headline */}
      <h1 className="text-[clamp(26px,4.2vw,50px)] sm:text-[clamp(32px,4.4vw,56px)] lg:text-[clamp(36px,3.5vw,58px)] font-[850] leading-[1.08] tracking-[-0.045em] text-[var(--text-main)] mb-6">
        <span>{personal.headlineLine1}</span>
        {personal.headlineLine2 && (
          <>
            <br />
            <span>{personal.headlineLine2}</span>
          </>
        )}
        <br />
        <span className="relative inline-block text-white px-3.5 py-1 sm:px-6 sm:py-2.5 lg:px-7 lg:py-3 z-10 mt-2 sm:mt-2.5 whitespace-nowrap">
          <span
            className="absolute inset-0 bg-[var(--accent-blue)] rounded-lg sm:rounded-xl -z-10 -rotate-1 transform shadow-sm"
            aria-hidden="true"
          />
          {personal.headlineAccent}
        </span>
      </h1>

      {/* Intro Description */}
      <p className="text-[16px] leading-[1.65] text-[var(--text-muted)] max-w-[640px] lg:max-w-none mb-8 font-normal mx-auto lg:mx-0">
        {personal.intro}
      </p>

      {/* CTA Buttons & Social Links */}
      <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
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

        {personal.links.github && (
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-md bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <FaGithub className="w-[19px] h-[19px]" />
          </a>
        )}

        {personal.links.linkedin && (
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-md bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <FaLinkedinIn className="w-[19px] h-[19px]" />
          </a>
        )}
      </div>
    </div>
  );
}
