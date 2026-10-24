"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { SonarDot } from "./common/SonarDot";
import { MobileSidebar } from "./MobileSidebar";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = portfolioData;

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Impact", href: "#impact" },
    { label: "Pipeline", href: "#pipeline" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#recruiter-hub" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--bg-page)]/90 border-b border-[var(--border-color)] transition-colors duration-200">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo & Live Status */}
          <div className="flex items-center gap-4">
            <Link
              href="#top"
              className="text-[22px] font-[850] tracking-[-0.05em] text-[var(--text-main)] flex items-center hover:opacity-90 transition-opacity"
            >
              {personal.logoText}
              <span className="text-[var(--accent-blue)] text-[24px] ml-0.5">
                •
              </span>
            </Link>

            <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[rgba(34,197,94,0.12)] text-[var(--accent-green)] border border-[rgba(34,197,94,0.3)] shadow-sm">
              <SonarDot size={7} color="var(--accent-green)" />
              <span>{personal.statusBadge}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-[var(--text-main)]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Section: Theme Switcher + Role Metadata + Contact Link */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* 3-Way Theme Switcher */}
            <ThemeSwitcher />

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 text-[var(--text-main)] rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent-blue)] transition-colors cursor-pointer"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Dedicated Left-Sliding Off-Canvas Drawer */}
      <MobileSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
