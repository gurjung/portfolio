import { Navbar } from "@/components/layout";
import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas">
      {/* Subtle top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] max-w-full h-[500px] bg-gradient-to-b from-primary/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
