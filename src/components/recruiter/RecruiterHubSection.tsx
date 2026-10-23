"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export function RecruiterHubSection() {
  const { recruiterHub, personal } = portfolioData;

  const scrollToAiConsole = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroEl = document.getElementById("top");
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-[min(1340px,calc(100%-48px))] mx-auto py-20"
      id="recruiter-hub"
    >
      <div className="bg-[var(--bg-card)] border-2 border-[var(--border-strong)] rounded-xl p-8 sm:p-10 shadow-[var(--card-shadow)] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center transition-colors duration-200">
        {/* Left Column: Essential Parameters & Resume Action */}
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
            <span>HR &amp; TALENT ACQUISITION CONSOLE</span>
          </div>

          <h2 className="text-[28px] sm:text-[34px] font-[850] tracking-[-0.04em] text-[var(--text-main)] mb-3 leading-tight">
            The One-Stop Recruiter Snapshot
          </h2>

          <p className="text-[14px] text-[var(--text-muted)] leading-[1.6] max-w-[520px] mb-6">
            Evaluating Gurjung for your engineering team? Here are the essential
            parameters at a glance.
          </p>

          {/* Recruiter Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7 text-[13px]">
            <div className="bg-[var(--bg-card-subtle)] border border-[var(--border-color)] p-3 rounded-md">
              <span className="block font-mono text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider mb-1">
                TARGET ROLES
              </span>
              <strong className="text-[var(--text-main)] font-[750]">
                {recruiterHub.targetRoles}
              </strong>
            </div>

            <div className="bg-[var(--bg-card-subtle)] border border-[var(--border-color)] p-3 rounded-md">
              <span className="block font-mono text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider mb-1">
                PRIMARY LOCATION
              </span>
              <strong className="text-[var(--text-main)] font-[750]">
                {recruiterHub.primaryLocation}
              </strong>
            </div>

            <div className="bg-[var(--bg-card-subtle)] border border-[var(--border-color)] p-3 rounded-md">
              <span className="block font-mono text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider mb-1">
                CORE SPECIALIZATION
              </span>
              <strong className="text-[var(--text-main)] font-[750]">
                {recruiterHub.coreSpecialization}
              </strong>
            </div>

            <div className="bg-[var(--bg-card-subtle)] border border-[var(--border-color)] p-3 rounded-md">
              <span className="block font-mono text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider mb-1">
                EXPERIENCE LEVEL
              </span>
              <strong className="text-[var(--text-main)] font-[750]">
                {recruiterHub.experienceLevel}
              </strong>
            </div>

            <div className="bg-[var(--bg-card-subtle)] border border-[var(--border-color)] p-3 rounded-md sm:col-span-2">
              <span className="block font-mono text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider mb-1">
                ACADEMIC CREDENTIALS
              </span>
              <strong className="text-[var(--text-main)] font-[750]">
                {recruiterHub.education}
              </strong>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex items-center gap-3.5 flex-wrap">
            <a
              href={`/resume/${recruiterHub.resumeFileName}`}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[13px] font-[750] bg-[var(--border-strong)] text-[var(--bg-card)] border border-[var(--border-strong)] hover:bg-[var(--accent-blue)] hover:border-[var(--accent-blue)] hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Download Resume (PDF)</span>
              <span>↗</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[13px] font-[750] bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Schedule Recruiter Call</span>
              <span>✉</span>
            </a>
          </div>
        </div>

        {/* Right Column: Ask AI Screening Shortcut Card */}
        <div className="bg-[var(--bg-card-subtle)] border border-[var(--border-color)] rounded-lg p-6 sm:p-7 text-center flex flex-col items-center justify-center">
          <div
            className="text-[32px] text-[var(--accent-blue)] mb-2"
            aria-hidden="true"
          >
            ✦
          </div>
          <h3 className="text-[17px] font-[850] text-[var(--text-main)] mb-2">
            Have Custom Screening Questions?
          </h3>
          <p className="text-[12.5px] text-[var(--text-muted)] leading-[1.6] max-w-[340px] mb-5">
            Gurjung AI Assistant is powered by LLM API integration, answering
            queries grounded in his architectural decisions and background.
          </p>
          <a
            href="#top"
            onClick={scrollToAiConsole}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-[12px] font-mono font-bold bg-[var(--border-strong)] text-[var(--bg-card)] border border-[var(--border-strong)] hover:bg-[var(--accent-blue)] hover:border-[var(--accent-blue)] hover:text-white transition-all duration-200 cursor-pointer"
          >
            <span>Ask Gurjung AI Assistant</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </section>
  );
}
