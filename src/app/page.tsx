import { Header } from "@/components/Header";
import { HeroSection } from "@/components/hero/HeroSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-200">
      <Header />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
      </main>
    </div>
  );
}
