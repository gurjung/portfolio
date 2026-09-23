"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiCheck, FiCopy, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { siteConfig } from "@/config";
import { SectionHeading, SocialIconLink } from "@/components/common";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
      <SectionHeading
        eyebrow="Contact"
        title="Get In Touch"
        description="Whether you have an open frontend software engineering position or want to discuss a project, my inbox is always open."
      />

      {/* Modern Centered Developer Contact Card */}
      <div className="max-w-2xl mx-auto bg-surface rounded-3xl border border-border-subtle p-8 sm:p-12 text-center shadow-sm relative overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-primary/10 blur-3xl pointer-events-none -z-10" />

        {/* Mail Icon Avatar */}
        <div className="w-16 h-16 rounded-2xl bg-surface-muted border border-border-subtle flex items-center justify-center mx-auto mb-6 shadow-sm">
          <FiMail className="w-7 h-7 text-primary" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          {siteConfig.name}
        </h3>
        <p className="text-base font-semibold text-primary mt-1">
          {siteConfig.role}
        </p>

        <p className="mt-4 text-text-secondary text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          {siteConfig.availability}
        </p>

        {/* Quick Email Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href={`mailto:${siteConfig.email}`}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover active:scale-95 transition-all shadow-md shadow-primary/20 cursor-pointer"
          >
            <FiSend className="w-4 h-4" />
            <span>Send an Email</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-border-default hover:border-text-primary bg-surface hover:bg-surface-elevated text-text-primary font-medium text-sm transition-all active:scale-95 shadow-sm cursor-pointer"
            title="Copy email address"
          >
            {copiedEmail ? (
              <>
                <FiCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <FiCopy className="w-4 h-4 text-text-secondary" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Location & Timezone info */}
        <div className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm text-text-muted">
          <FiMapPin className="w-4 h-4 text-primary shrink-0" />
          <span>India (IST) • Open to Remote & Relocation</span>
        </div>

        {/* Social Links Row */}
        <div className="pt-8 border-t border-border-subtle mt-8 flex flex-col items-center">
          <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-4">
            Connect With Me
          </p>
          <div className="flex items-center justify-center gap-4">
            <SocialIconLink
              href={siteConfig.links.linkedin}
              ariaLabel="LinkedIn Profile"
              icon={<FaLinkedinIn size={18} />}
              isExternal
              size="md"
            />
            <SocialIconLink
              href={siteConfig.links.github}
              ariaLabel="GitHub Profile"
              icon={<FaGithub size={18} />}
              isExternal
              size="md"
            />
            <SocialIconLink
              href={siteConfig.links.resume}
              ariaLabel="View Resume"
              icon={<BsFillPersonLinesFill size={18} />}
              isExternal
              size="md"
            />
          </div>
        </div>
      </div>

      {/* Back to top button & footer note */}
      <div className="flex flex-col items-center justify-center pt-16 pb-8 gap-4 border-t border-border-subtle mt-16">
        <Link
          href="/#home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="p-3 rounded-full border border-border-subtle hover:border-primary/40 bg-surface hover:bg-surface-elevated text-text-secondary hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
        >
          <HiOutlineChevronDoubleUp size={20} />
        </Link>
        <p className="text-xs text-text-muted">
          Designed & Built by {siteConfig.name} • {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
