'use client';

import React, { useState, useRef } from 'react';
import { portfolioData } from '@/data/portfolioData';

// Connected workflow synergy networks across categories
const SKILL_SYNERGIES: Record<string, string[]> = {
  // Core Frontend
  React: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Redux', 'shadcn/ui', 'Jest', 'React Testing Library'],
  'Next.js': ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Prisma', 'PostgreSQL', 'Zod', 'Zero CLS', 'Core Web Vitals'],
  TypeScript: ['React', 'Next.js', 'Zod', 'TanStack Query', 'Node.js', 'Express.js', 'Prisma'],
  JavaScript: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3'],
  HTML5: ['CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
  CSS3: ['HTML5', 'Tailwind CSS', 'Styled Components', 'React'],
  'Chart.js': ['React', 'TypeScript', 'TanStack Query', 'REST APIs'],

  // State & Data
  'TanStack Query': ['React', 'Next.js', 'REST APIs', 'TypeScript', 'Zod'],
  Redux: ['React', 'TypeScript', 'REST APIs'],
  Jotai: ['React', 'Next.js', 'TypeScript'],
  WebSockets: ['React', 'Twilio Flex', 'Zoom Contact Center', 'Node.js', 'Express.js'],
  Zod: ['TypeScript', 'Next.js', 'React', 'REST APIs', 'TanStack Query'],
  'REST APIs': ['React', 'Next.js', 'Node.js', 'Express.js', 'TanStack Query'],

  // Styling
  'Tailwind CSS': ['Next.js', 'React', 'shadcn/ui', 'CSS3'],
  'shadcn/ui': ['Tailwind CSS', 'React', 'Next.js', 'TypeScript'],
  'Material UI': ['React', 'TypeScript'],
  'Ant Design': ['React', 'TypeScript'],
  'Styled Components': ['React', 'CSS3', 'TypeScript'],

  // Backend & DB
  'Node.js': ['Express.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Prisma', 'REST APIs'],
  'Express.js': ['Node.js', 'TypeScript', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  PostgreSQL: ['Prisma', 'Next.js', 'Node.js', 'Supabase'],
  MongoDB: ['Node.js', 'Express.js', 'REST APIs'],
  Prisma: ['PostgreSQL', 'Next.js', 'Node.js', 'TypeScript'],
  Supabase: ['PostgreSQL', 'Next.js', 'React'],
  Firebase: ['React', 'Next.js', 'TypeScript'],

  // Platforms, Testing & Perf
  'Twilio Flex': ['Zoom Contact Center', 'WebSockets', 'React', 'REST APIs'],
  'Zoom Contact Center': ['Twilio Flex', 'WebSockets', 'React', 'REST APIs'],
  Jest: ['React Testing Library', 'React', 'TypeScript'],
  'React Testing Library': ['Jest', 'React', 'TypeScript'],
  'Zero CLS': ['Core Web Vitals', 'Next.js', 'React'],
  'Core Web Vitals': ['Zero CLS', 'Next.js', 'React', 'Tailwind CSS'],

  // AI & LLM Engineering
  'LLMs & AI Assistant': ['RAG', 'Vector DB', 'LangGraph', 'Gemini', 'Claude', 'ChatGPT', 'Antigravity', 'Prompt Engineering', 'TypeScript', 'Next.js'],
  ChatGPT: ['LLMs & AI Assistant', 'Claude', 'Gemini', 'Antigravity', 'Prompt Engineering'],
  Claude: ['LLMs & AI Assistant', 'Gemini', 'ChatGPT', 'Antigravity', 'RAG'],
  Antigravity: ['LLMs & AI Assistant', 'Gemini', 'Claude', 'RAG', 'Vector DB', 'LangGraph'],
  Gemini: ['LLMs & AI Assistant', 'Claude', 'ChatGPT', 'Antigravity', 'RAG'],
  RAG: ['LLMs & AI Assistant', 'Vector DB', 'LangGraph', 'Antigravity', 'Gemini', 'Claude', 'Next.js'],
  'Vector DB': ['RAG', 'LangGraph', 'LLMs & AI Assistant', 'Antigravity', 'Supabase'],
  LangGraph: ['RAG', 'Vector DB', 'LLMs & AI Assistant', 'Gemini', 'Claude', 'ChatGPT', 'Antigravity'],
  'Prompt Engineering': ['LLMs & AI Assistant', 'ChatGPT', 'Claude', 'Gemini'],
};

function MagneticSkillBadge({
  skill,
  activeHoveredSkill,
  onHover,
  onLeave,
}: {
  skill: string;
  activeHoveredSkill: string | null;
  onHover: (skill: string) => void;
  onLeave: () => void;
}) {
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const isSelf = activeHoveredSkill === skill;
  const isSynergized =
    activeHoveredSkill &&
    SKILL_SYNERGIES[activeHoveredSkill]?.includes(skill);
  const isDimmed = activeHoveredSkill && !isSelf && !isSynergized;

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!badgeRef.current) return;
    const rect = badgeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Gentle micro magnetic pull (capped at 4px)
    const dx = Math.max(-4, Math.min(4, (e.clientX - centerX) * 0.18));
    const dy = Math.max(-3, Math.min(3, (e.clientY - centerY) * 0.18));
    setOffset({ x: dx, y: dy });
  };

  const handleMouseEnter = () => {
    onHover(skill);
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    onLeave();
  };

  return (
    <span
      ref={badgeRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.15s ease-out, background-color 0.35s ease-out, border-color 0.35s ease-out, color 0.35s ease-out, box-shadow 0.35s ease-out, opacity 0.35s ease-out',
      }}
      className={`relative px-2.5 py-1 rounded-md text-[12px] font-mono font-medium select-none cursor-pointer border ${
        isSelf
          ? 'bg-[var(--accent-blue)] text-white border-[var(--accent-blue)] shadow-[0_0_10px_rgba(36,76,255,0.35)] z-20'
          : isSynergized
          ? 'bg-[var(--accent-blue)]/12 text-[var(--accent-blue)] border-[var(--accent-blue)]/70 shadow-[0_0_6px_rgba(36,76,255,0.2)] z-10'
          : isDimmed
          ? 'bg-[var(--bg-card-subtle)] text-[var(--text-muted)] border-[var(--border-color)] opacity-40'
          : 'bg-[var(--bg-card-subtle)] border-[var(--border-color)] text-[var(--text-main)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]'
      }`}
    >
      {skill}
    </span>
  );
}

export function SkillsSection() {
  const { skillsMatrix } = portfolioData;
  const [activeHoveredSkill, setActiveHoveredSkill] = useState<string | null>(null);

  const connectedCount =
    activeHoveredSkill && SKILL_SYNERGIES[activeHoveredSkill]
      ? SKILL_SYNERGIES[activeHoveredSkill].length
      : 0;

  return (
    <section className="w-full py-16 bg-[var(--bg-card-subtle)] border-y border-[var(--border-color)] transition-colors duration-200 scroll-mt-20" id="skills">
      <div className="w-[min(1340px,calc(100%-32px))] sm:w-[min(1340px,calc(100%-48px))] mx-auto">
        
        {/* Section Header with Dynamic Constellation Status Pill */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-[850] tracking-[-0.04em] text-[var(--text-main)] leading-tight">
              Tools of the Trade &amp; Engineering Standards
            </h2>
          </div>

          {/* Interactive Stack Constellation Status Pill */}
          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-[11px] font-bold px-3 py-1.5 rounded border transition-all duration-200 ${
                activeHoveredSkill
                  ? 'bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border-[var(--accent-blue)]/40 shadow-sm'
                  : 'bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-color)]'
              }`}
            >
              {activeHoveredSkill ? (
                <>
                  <span className="text-[var(--accent-blue)] mr-1.5">⚡</span>
                  <span>{activeHoveredSkill.toUpperCase()}: {connectedCount} CONNECTED STACK TOOLS</span>
                </>
              ) : (
                <span>[ ✦ HOVER ANY PILL TO REVEAL CONNECTED STACK ]</span>
              )}
            </span>
          </div>
        </div>

        {/* 6-Category Grid */}
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

              {/* Skill Badges with Magnetic Pull & Stack Highlighting */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <MagneticSkillBadge
                    key={sIdx}
                    skill={skill}
                    activeHoveredSkill={activeHoveredSkill}
                    onHover={(s) => setActiveHoveredSkill(s)}
                    onLeave={() => setActiveHoveredSkill(null)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
