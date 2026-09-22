"use client";

import { useState } from "react";
import Image from "next/image";
import { SKILLS_DATA } from "@/data";
import { SectionHeading } from "@/components/common";
import type { SkillCategory } from "@/types";

const CATEGORIES: readonly (SkillCategory | "All")[] = [
  "All",
  "Core Frontend",
  "State & Architecture",
  "Styling & UI",
  "Visualization & Cloud",
] as const;

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "All">("All");

  const filteredSkills =
    selectedCategory === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Skills & Technologies"
        description="Core technical capabilities developed through 3+ years of building production-grade frontend applications."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-primary text-white shadow-sm shadow-primary/30"
                  : "bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-default"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.title}
            className="group relative p-6 bg-surface rounded-2xl border border-border-subtle hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            {/* Subtle glow highlight on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-center p-2 rounded-xl bg-surface-muted/60 group-hover:bg-surface-muted group-hover:scale-105 transition-all duration-300">
              <Image
                src={skill.logo}
                alt={`${skill.title} logo`}
                width={56}
                height={56}
                className="object-contain max-h-12 w-auto group-hover:drop-shadow-sm transition-all duration-300"
              />
            </div>

            <h3 className="text-sm sm:text-base font-semibold text-text-primary tracking-tight">
              {skill.title}
            </h3>

            {skill.category && (
              <span className="text-[11px] font-medium text-text-muted mt-1">
                {skill.category}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
