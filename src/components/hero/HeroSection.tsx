import React from 'react';
import { HeroHeadline } from './HeroHeadline';
import { ContactCenterCard } from './ContactCenterCard';

export function HeroSection() {
  return (
    <section
      className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 scroll-mt-20"
      id="top"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center w-full min-w-0">
        {/* Left Column: Editorial Headline & Actions */}
        <HeroHeadline />

        {/* Right Column: Single Focused Recruiter Copilot AI Terminal */}
        <div className="w-full max-w-[640px] mx-auto lg:max-w-none min-w-0">
          <ContactCenterCard />
        </div>
      </div>
    </section>
  );
}

