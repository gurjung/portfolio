'use client';

import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ImpactMetricCard } from './impact/ImpactMetricCard';

export function ImpactLedger() {
  const { executiveMetrics } = portfolioData;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [replayCount, setReplayCount] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasTriggered(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleReplay = () => {
    setHasTriggered(false);
    setTimeout(() => {
      setHasTriggered(true);
      setReplayCount((c) => c + 1);
    }, 40);
  };

  return (
    <section
      ref={sectionRef}
      className="w-[min(1340px,calc(100%-48px))] mx-auto py-14 border-b border-[var(--border-color)] transition-colors duration-200 scroll-mt-20"
      id="impact"
    >
      {/* Section Eyebrow with Replay Button */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 mb-5">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse" />
          <span>PROVEN METRICS // MEASURABLE BUSINESS OUTCOMES</span>
        </div>

        <button
          onClick={handleReplay}
          className="group inline-flex items-center gap-1.5 font-mono text-[10.5px] font-bold px-2.5 py-1 rounded bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--accent-blue)]/60 hover:shadow-sm transition-all duration-150 cursor-pointer"
          title="Re-run animated metrics telemetry"
        >
          <span className="transition-transform duration-300 group-hover:rotate-180">↺</span>
          <span>REPLAY METRICS</span>
        </button>
      </div>

      {/* 5-Card Metrics Grid */}
      <div key={replayCount} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {executiveMetrics.map((item, idx) => (
          <ImpactMetricCard
            key={item.id}
            item={item}
            idx={idx}
            isTriggered={hasTriggered}
          />
        ))}
      </div>
    </section>
  );
}
