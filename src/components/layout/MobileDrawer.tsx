"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { NAVIGATION_LINKS, siteConfig } from "@/config";
import { SocialIconLink, ThemeToggle } from "@/components/common";

interface MobileDrawerProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Close drawer on Escape key and prevent body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[999] md:hidden transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto bg-black/60 backdrop-blur-sm"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div
        className={`fixed left-0 top-0 w-[85%] max-w-[340px] h-screen bg-surface border-r border-border-subtle p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-border-subtle">
            <Link
              href="/"
              onClick={onClose}
              className="font-bold tracking-tight text-text-primary text-base flex items-center gap-1"
            >
              <span className="font-mono text-primary">&lt;</span>
              <span>{siteConfig.name}</span>
              <span className="font-mono text-primary">/&gt;</span>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-2 rounded-xl border border-border-subtle hover:border-border-default bg-surface text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
              >
                <AiOutlineClose size={18} />
              </button>
            </div>
          </div>

          <p className="pt-4 pb-2 text-xs font-medium text-text-secondary leading-relaxed">
            {siteConfig.description}
          </p>

          {/* Navigation Links */}
          <nav aria-label="Mobile Navigation" className="py-4">
            <ul className="flex flex-col space-y-1">
              {NAVIGATION_LINKS.map((link) => {
                const isExternal = link.url.startsWith("http");

                return (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      onClick={onClose}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-text-primary hover:text-primary hover:bg-surface-muted transition-colors capitalize"
                    >
                      <span>{link.title}</span>
                      {isExternal && <FiArrowUpRight className="w-4 h-4 text-text-muted" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Footer / Socials */}
        <div className="pt-6 border-t border-border-subtle mt-auto">
          <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-4">
            Connect With Me
          </p>
          <div className="flex items-center justify-between">
            <SocialIconLink
              href={siteConfig.links.linkedin}
              ariaLabel="LinkedIn Profile"
              icon={<FaLinkedinIn size={16} />}
              isExternal
              size="sm"
            />
            <SocialIconLink
              href={siteConfig.links.github}
              ariaLabel="GitHub Profile"
              icon={<FaGithub size={16} />}
              isExternal
              size="sm"
            />
            <SocialIconLink
              href="/#contact"
              ariaLabel="Contact Section"
              icon={<AiOutlineMail size={16} />}
              size="sm"
              onClick={onClose}
            />
            <SocialIconLink
              href={siteConfig.links.resume}
              ariaLabel="View Resume"
              icon={<BsFillPersonLinesFill size={16} />}
              isExternal
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
