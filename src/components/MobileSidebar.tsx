'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';
import { SonarDot } from './common/SonarDot';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string }>;
}

export function MobileSidebar({ isOpen, onClose, navLinks }: MobileSidebarProps) {
  const { personal } = portfolioData;

  // Lock body scroll and listen for Escape key when open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden overflow-hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Dimmed Blurred Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Left Off-Canvas Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-0 bottom-0 left-0 w-[min(320px,84vw)] bg-[var(--bg-card)] border-r border-[var(--border-color)] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-[var(--border-color)]">
            <Link
              href="#top"
              onClick={onClose}
              className="text-[20px] font-[850] tracking-[-0.05em] text-[var(--text-main)] flex items-center hover:opacity-90"
            >
              {personal.logoText}
              <span className="text-[var(--accent-blue)] text-[22px] ml-0.5">•</span>
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-8 h-8 rounded-md border border-[var(--border-color)] bg-[var(--bg-card-subtle)] text-[var(--text-main)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] flex items-center justify-center transition-colors cursor-pointer text-sm font-bold"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Mobile navigation links" className="flex flex-col gap-1.5 pt-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between px-3.5 py-3 rounded-lg text-[14.5px] font-semibold text-[var(--text-main)] hover:bg-[var(--accent-blue)]/10 hover:text-[var(--accent-blue)] transition-all duration-150"
              >
                <span>{link.label}</span>
                <span className="text-[12px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[var(--accent-blue)] transition-all duration-150">
                  →
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Drawer Footer */}
        <div className="pt-5 border-t border-[var(--border-color)] flex flex-col gap-3.5">
          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            {personal.links.github && (
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-subtle)] text-[var(--text-main)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] text-[12px] font-semibold transition-colors"
              >
                <FaGithub className="w-4 h-4 shrink-0" />
                <span>GitHub ↗</span>
              </a>
            )}
            {personal.links.linkedin && (
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-subtle)] text-[var(--text-main)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] text-[12px] font-semibold transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4 shrink-0" />
                <span>LinkedIn ↗</span>
              </a>
            )}
          </div>

          <div className="flex flex-col gap-2 font-mono text-[11px]">
            <div className="flex items-center gap-2 text-[var(--accent-green)]">
              <SonarDot size={7} color="var(--accent-green)" />
              <span className="font-bold tracking-tight">{personal.statusBadge}</span>
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="text-[var(--accent-blue)] font-bold hover:underline tracking-tight break-all"
            >
              {personal.email} ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
