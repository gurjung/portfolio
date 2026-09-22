"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { NAVIGATION_LINKS, siteConfig } from "@/config";
import { useScrollShadow } from "@/hooks";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const hasShadow = useScrollShadow(90);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-[100] transition-shadow duration-300 bg-primary ${
        hasShadow ? "shadow-xl" : ""
      }`}
    >
      <div className="flex items-center justify-between w-full h-full max-w-[1240px] mx-auto px-4 2xl:px-16">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-secondary hover:opacity-90 transition-opacity"
        >
          {siteConfig.brandName}
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex">
          <ul className="flex items-center space-x-10">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.url}
                  className="text-sm uppercase tracking-wider text-tertiary hover:text-secondary transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="p-2 text-tertiary hover:text-secondary transition-colors md:hidden focus:outline-none"
          aria-label="Open navigation menu"
          aria-expanded={isDrawerOpen}
        >
          <AiOutlineMenu size={26} />
        </button>
      </div>

      {/* Off-canvas Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </header>
  );
}
