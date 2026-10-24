"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { featuredProjects } = portfolioData;

  return (
    <section
      className="w-[min(1340px,calc(100%-48px))] mx-auto py-20 scroll-mt-20"
      id="work"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-2 mb-10">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
          <span>FEATURED PROJECTS</span>
        </div>
        <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[850] tracking-[-0.04em] text-[var(--text-main)] leading-tight">
          Real Products. Measurable Impact.
        </h2>
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
