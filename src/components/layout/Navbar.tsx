"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { NAVIGATION_LINKS, siteConfig } from "@/config";
import { useScrollShadow } from "@/hooks";
import { ThemeToggle } from "@/components/common";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const hasShadow = useScrollShadow(40);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["contact", "projects", "skills", "home"];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-16 sm:h-20 z-40 transition-all duration-300 bg-canvas/80 backdrop-blur-md border-b border-border-subtle/80 ${
          hasShadow ? "shadow-sm shadow-slate-900/5 dark:shadow-black/20" : ""
        }`}
      >
        <div className="flex items-center justify-between w-full h-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 text-base sm:text-lg font-bold tracking-tight text-text-primary hover:text-primary transition-colors"
          >
            <span className="font-mono text-primary text-sm sm:text-base">&lt;</span>
            <span>{siteConfig.name}</span>
            <span className="font-mono text-primary text-sm sm:text-base">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAVIGATION_LINKS.map((link) => {
              const isExternal = link.url.startsWith("http");
              const targetSection = link.url.replace("/#", "").replace("/", "") || "home";
              const isActive = !isExternal && activeSection === targetSection;

              return (
                <Link
                  key={link.title}
                  href={link.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 capitalize flex items-center gap-1 ${
                    isActive
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
                  }`}
                >
                  <span>{link.title}</span>
                  {isExternal && <FiArrowUpRight className="w-3.5 h-3.5 opacity-60" />}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 rounded-xl border border-border-subtle hover:border-border-default bg-surface hover:bg-surface-elevated text-text-primary md:hidden transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
            >
              <AiOutlineMenu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Off-canvas Drawer rendered outside header to avoid stacking/height constraints */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
