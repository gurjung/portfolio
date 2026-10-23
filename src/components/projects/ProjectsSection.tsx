'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const { featuredProjects } = portfolioData;

  return (
    <section className="w-[min(1340px,calc(100%-48px))] mx-auto py-20" id="work">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-[850] tracking-[-0.05em] text-[var(--text-main)] leading-none">
            Real Products.<br />Measurable Impact.
          </h2>
        </div>
        <p className="max-w-[480px] text-[14px] leading-[1.65] text-[var(--text-muted)]">
          From consolidating enterprise logistics tools to building real-time communication platforms and full-stack SaaS architectures, here are the core products I've engineered.
        </p>
      </div>

      {/* Projects 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
