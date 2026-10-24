'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { portfolioData } from '@/data/portfolioData';

// Helper to calculate interpolated value based on progress (0 to 1)
function getInterpolatedValue(id: string, progress: number, target: string): string {
  if (progress <= 0) {
    if (id === 'tools') return '5 → 5';
    if (id === 'response-time') return '0%';
    if (id === 'deliveries') return '0';
    if (id === 'bundle-size') return '0%';
    if (id === 'users') return '0';
    return target;
  }
  if (progress >= 1) return target;

  if (id === 'tools') {
    // 5 -> 5, 4, 3, 2, 1
    const current = Math.max(1, Math.round(5 - progress * 4));
    return `5 → ${current}`;
  }

  if (id === 'response-time') {
    // 0% -> -50%
    const current = Math.round(progress * 50);
    return `−${current}%`;
  }

  if (id === 'deliveries') {
    // 0 -> 6K+
    const val = (progress * 6).toFixed(1);
    return progress > 0.95 ? '6K+' : `${val.endsWith('.0') ? val.slice(0, -2) : val}K+`;
  }

  if (id === 'bundle-size') {
    // 0% -> -75%
    const current = Math.round(progress * 75);
    return `−${current}%`;
  }

  if (id === 'users') {
    // 0 -> 2,000+
    const current = Math.round(progress * 2000);
    return `${current.toLocaleString()}+`;
  }

  return target;
}

function ImpactMetricCard({
  item,
  idx,
  isTriggered,
  onHoverRestart,
}: {
  item: (typeof portfolioData.executiveMetrics)[0];
  idx: number;
  isTriggered: boolean;
  onHoverRestart?: () => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [displayValue, setDisplayValue] = useState<string>(() => item.number);
  const [sparkProgress, setSparkProgress] = useState<number>(0);
  const animFrameRef = useRef<number | null>(null);

  const startAnimation = useCallback(() => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    const duration = 1200; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(1, Math.max(0, elapsed / duration));
      // Ease out cubic
      const eased = 1 - Math.pow(1 - rawProgress, 3);
      
      setDisplayValue(getInterpolatedValue(item.id, eased, item.number));
      setSparkProgress(eased * 100);

      if (rawProgress < 1) {
        animFrameRef.current = requestAnimationFrame(update);
      } else {
        setDisplayValue(item.number);
        setSparkProgress(100);
      }
    };

    animFrameRef.current = requestAnimationFrame(update);
  }, [item.id, item.number]);

  useEffect(() => {
    if (!isTriggered) return;
    // Stagger start by 90ms per card index
    const timer = setTimeout(() => {
      startAnimation();
    }, idx * 90);

    return () => {
      clearTimeout(timer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isTriggered, idx, startAnimation]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const handleMouseEnter = () => {
    startAnimation();
    if (onHoverRestart) onHoverRestart();
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      className={`group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-5 shadow-[var(--card-shadow)] hover:border-[var(--accent-blue)]/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-default ${
        idx === 4 ? 'col-span-2 sm:col-span-1' : ''
      }`}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(280px circle at var(--mouse-x, -50px) var(--mouse-y, -50px), var(--card-spotlight), transparent 75%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div
          className="text-[34px] sm:text-[38px] font-[850] tracking-[-0.05em] leading-none mb-2 font-mono tabular-nums transition-transform duration-150 group-hover:scale-[1.02]"
          style={{ color: item.color }}
        >
          {displayValue}
        </div>
        <div className="text-[12px] font-bold text-[var(--text-main)] mb-1">
          {item.label}
        </div>
      </div>
      <p className="relative z-10 text-[11px] text-[var(--text-muted)] leading-[1.45] mb-2">
        {item.desc}
      </p>

      {/* Animated Telemetry Spark Line */}
      <div className="relative z-10 w-full h-[2px] bg-[var(--border-color)]/40 rounded-full overflow-hidden mt-1">
        <div
          className="h-full rounded-full transition-all duration-75"
          style={{
            width: `${sparkProgress}%`,
            backgroundColor: item.color,
            boxShadow: `0 0 6px ${item.color}`,
          }}
        />
      </div>
    </div>
  );
}

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
