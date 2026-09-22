"use client";

import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { NAVIGATION_LINKS, siteConfig } from "@/config";
import { SocialIconLink } from "@/components/common";

interface MobileDrawerProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-[110] md:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto bg-black/70" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div
        className={`fixed left-0 top-0 w-[75%] sm:w-[60%] h-full bg-primary p-8 sm:p-10 ease-in-out duration-500 flex flex-col justify-between overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between w-full pb-4 border-b border-gray-300">
            <Link href="/" onClick={onClose} className="text-xl font-bold text-secondary">
              {siteConfig.brandName}
            </Link>
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400 text-tertiary hover:text-secondary duration-200"
            >
              <AiOutlineClose size={18} />
            </button>
          </div>

          <p className="py-4 text-sm text-gray-600">
            {siteConfig.tagline}
          </p>

          {/* Navigation Links */}
          <nav aria-label="Mobile Navigation" className="py-4">
            <ul className="flex flex-col space-y-4 uppercase text-sm font-semibold">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.url}
                    onClick={onClose}
                    className="block py-2 text-tertiary hover:text-secondary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer / Socials */}
        <div className="pt-8 border-t border-gray-300">
          <p className="uppercase tracking-widest text-secondary text-sm font-semibold mb-4">
            Let&apos;s Connect
          </p>
          <div className="flex items-center justify-between w-full max-w-[280px]">
            <SocialIconLink
              href={siteConfig.links.linkedin}
              ariaLabel="LinkedIn Profile"
              icon={<FaLinkedinIn size={18} />}
              isExternal
              size="sm"
            />
            <SocialIconLink
              href={siteConfig.links.github}
              ariaLabel="GitHub Profile"
              icon={<FaGithub size={18} />}
              isExternal
              size="sm"
            />
            <SocialIconLink
              href="/#contact"
              ariaLabel="Contact Section"
              icon={<AiOutlineMail size={18} />}
              size="sm"
              onClick={onClose}
            />
            <SocialIconLink
              href={siteConfig.links.resume}
              ariaLabel="View Resume"
              icon={<BsFillPersonLinesFill size={18} />}
              isExternal
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
