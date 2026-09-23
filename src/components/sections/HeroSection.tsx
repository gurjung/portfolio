import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { siteConfig } from "@/config";
import { SocialIconLink } from "@/components/common";

const TECH_BADGES = [
  "React.js",
  "TypeScript",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "Web Performance & A11y",
] as const;

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[88vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      <div className="max-w-[960px] w-full mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary mb-4 leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-cyan-500">
            {siteConfig.name}
          </span>
        </h1>

        {/* Professional Subheading */}
        <h2 className="text-xl sm:text-3xl text-text-secondary font-medium tracking-tight mb-6">
          {siteConfig.headline}
        </h2>

        {/* Professional Summary */}
        <p className="text-base sm:text-lg text-text-secondary max-w-[680px] mx-auto leading-relaxed mb-10">
          Building fast, scalable, and accessible web applications with React,
          TypeScript, and Next.js — with a focus on performance and frontend
          architecture.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm sm:text-base hover:bg-primary-hover active:scale-95 transition-all shadow-md shadow-primary/20 cursor-pointer"
          >
            <span>Explore Projects</span>
            <FiArrowDown className="w-4 h-4" />
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-default hover:border-text-primary bg-surface hover:bg-surface-elevated text-text-primary font-semibold text-sm sm:text-base active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            <span>Contact Me</span>
          </Link>

          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-border-subtle hover:border-border-default text-text-secondary hover:text-text-primary font-medium text-sm sm:text-base transition-colors"
          >
            <span>Resume</span>
            <FiArrowUpRight className="w-4 h-4 opacity-70" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 py-4 mb-12">
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
            href="/#contact"
            ariaLabel="Contact Me"
            icon={<AiOutlineMail size={18} />}
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

        {/* Core Stack Badges Strip */}
        <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <span className="text-xs uppercase tracking-widest text-text-muted font-semibold mr-2">
            Core Stack:
          </span>
          {TECH_BADGES.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-lg text-xs font-medium bg-surface border border-border-subtle text-text-secondary"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
