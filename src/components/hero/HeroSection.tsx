'use client';

import React from 'react';
import { HeroHeadline } from './HeroHeadline';
import { LogisticsRouteMap } from './LogisticsRouteMap';
import { ContactCenterCard } from './ContactCenterCard';

export function HeroSection() {
  return (
    <section className="w-[min(1340px,calc(100%-48px))] mx-auto py-16 sm:py-20" id="top">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] gap-12 lg:gap-14 items-start">
        {/* Left Column: Editorial Headline & Actions */}
        <HeroHeadline />

        {/* Right Column: Physical Logistics Route Map + Contact Center [Live] AI Console */}
        <div className="flex flex-col gap-4 w-full">
          <LogisticsRouteMap />
          <ContactCenterCard />
        </div>
      </div>
    </section>
  );
}
