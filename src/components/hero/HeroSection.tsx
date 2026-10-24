import React from 'react';
import { HeroHeadline } from './HeroHeadline';
import { ContactCenterCard } from './ContactCenterCard';

export function HeroSection() {
  return (
    <section className="w-[min(1340px,calc(100%-48px))] mx-auto py-16 sm:py-20 scroll-mt-20" id="top">
      <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_1fr] gap-10 lg:gap-12 xl:gap-14 items-center">
        {/* Left Column: Editorial Headline & Actions */}
        <HeroHeadline />

        {/* Right Column: Single Focused Recruiter Copilot AI Terminal */}
        <div className="w-full max-w-[620px] mx-auto lg:max-w-none">
          <ContactCenterCard />
        </div>
      </div>
    </section>
  );
}
