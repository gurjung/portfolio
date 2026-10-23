"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="w-full border-t border-[var(--border-color)] py-10 bg-[var(--bg-page)] text-[var(--text-muted)] text-[12px] transition-colors duration-200">
      <div className="w-[min(1340px,calc(100%-48px))] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        {/* Left Signature */}
        <div>
          <strong className="text-[var(--text-main)] font-[800]">
            {personal.name}
          </strong>{" "}
          · Frontend Engineer · Accessible interfaces. Thoughtful engineering.
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-6 font-semibold flex-wrap justify-center">
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-blue)] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-blue)] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={personal.links.portfolioLive}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-blue)] transition-colors"
          >
            Current Live Site ↗
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="hover:text-[var(--accent-blue)] transition-colors"
          >
            {personal.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
