import { Navbar } from "@/components/layout";
import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
