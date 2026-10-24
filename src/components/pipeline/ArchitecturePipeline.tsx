'use client';

import React, { useState } from 'react';
import { portfolioData, PipelineStage } from '@/data/portfolioData';
import { LogisticsRouteMap } from '../hero/LogisticsRouteMap';

export function ArchitecturePipeline() {
  const { interactivePipeline } = portfolioData;
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const activeStage: PipelineStage =
    interactivePipeline.find((s) => s.id === activeStageId) || interactivePipeline[0];

  // Optional auto-run simulation
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStageId((prev) => (prev % 4) + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="w-full py-16 bg-[var(--bg-card-subtle)] border-y border-[var(--border-color)] transition-colors duration-200 scroll-mt-20" id="pipeline">
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left gap-3 mb-6">
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
              <span>ARCHITECTURE IN ACTION</span>
            </div>
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[850] tracking-[-0.04em] text-[var(--text-main)] leading-tight">
              From Schema Ingestion to Production Delivery
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono font-bold transition-all cursor-pointer ${
                isAutoPlaying
                  ? 'bg-[var(--accent-lime)] text-black shadow-[0_0_12px_rgba(217,255,57,0.5)]'
                  : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:border-[var(--accent-blue)]'
              }`}
            >
              <span>{isAutoPlaying ? '⏸ PAUSE SIMULATION' : '▶ AUTO-RUN FLOW'}</span>
            </button>
            <span className="hidden sm:inline font-mono text-[11px] font-bold text-[var(--text-muted)]">
              [CLICK ANY WAYPOINT]
            </span>
          </div>
        </div>

        {/* Dynamic Architecture Data Flow Canvas */}
        <div className="mb-6">
          <LogisticsRouteMap />
        </div>

        {/* Highway Track with Moving Speed Pulse & Laser Trail */}
        <div className="bg-[#111827] h-10 rounded-full relative my-7 flex items-center border-2 border-[#1E293B] shadow-inner overflow-visible">
          {/* Base dashed track */}
          <div className="absolute left-4 right-4 h-0 border-t-2 border-dashed border-slate-700/80" />

          {/* Helper positions */}
          {(() => {
            const currentPosition =
              activeStage.id === 4
                ? 'calc(100% - 20px)'
                : activeStage.id === 3
                ? '64%'
                : activeStage.id === 2
                ? '38%'
                : '12%';

            return (
              <>
                {/* Glowing Laser Stream Trail behind the pulse - terminates exactly at the orb */}
                <div
                  className="absolute left-2 h-2 rounded-full bg-gradient-to-r from-[var(--accent-blue)] via-cyan-400 to-[var(--accent-lime)] transition-all duration-600 ease-[cubic-bezier(0.34,1.1,0.64,1)] shadow-[0_0_8px_rgba(56,189,248,0.3)]"
                  style={{ width: currentPosition }}
                />

                {/* Embedded Waypoint Track Pips */}
                {interactivePipeline.map((s) => {
                  const isPassed = s.id <= activeStageId;
                  const isCurrent = s.id === activeStageId;
                  const pipPosition =
                    s.id === 4
                      ? 'calc(100% - 20px)'
                      : s.id === 3
                      ? '64%'
                      : s.id === 2
                      ? '38%'
                      : '12%';

                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setActiveStageId(s.id);
                      }}
                      className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full transition-all duration-300 cursor-pointer z-10 ${
                        isCurrent
                          ? 'opacity-0 pointer-events-none'
                          : isPassed
                          ? 'w-3 h-3 bg-[var(--accent-blue)] border border-white/80 shadow-[0_0_4px_rgba(56,189,248,0.3)]'
                          : 'w-2.5 h-2.5 bg-[#1E293B] border border-slate-600 hover:border-slate-400'
                      }`}
                      style={{ left: pipPosition }}
                      aria-label={`Jump to stage ${s.id}`}
                    />
                  );
                })}

                {/* Precision Energy Lightning Orb - smooth glide with a tactile 10% spring overshoot */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B0F19] border border-[var(--accent-lime)] text-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.6),0_0_8px_rgba(217,255,57,0.3)] flex items-center justify-center transition-all duration-600 ease-[cubic-bezier(0.34,1.1,0.64,1)] select-none z-20 cursor-pointer"
                  style={{ left: currentPosition }}
                  aria-hidden="true"
                >
                  ⚡
                </div>
              </>
            );
          })()}
        </div>

        {/* 4 Clickable Stage Waypoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
          {interactivePipeline.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={`bg-[var(--bg-card)] border rounded-lg p-4 text-left transition-all duration-200 cursor-pointer shadow-[var(--card-shadow)] ${
                  isActive
                    ? 'border-[var(--accent-blue)] ring-2 ring-[var(--accent-blue)]/20 -translate-y-1'
                    : 'border-[var(--border-color)] hover:border-[var(--accent-blue)] hover:-translate-y-0.5'
                }`}
              >
                <div className="font-mono text-[10px] font-extrabold text-[var(--accent-blue)] mb-1">
                  {stage.stageNumber}
                </div>
                <div className="text-[14px] font-extrabold text-[var(--text-main)] mb-1">
                  {stage.title}
                </div>
                <div className="text-[11px] font-mono text-[var(--text-muted)] font-medium">
                  {stage.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Telemetry Display Box */}
        <div className="bg-[var(--bg-card)] border border-[var(--accent-blue)] rounded-lg p-4 sm:p-5 sm:px-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-[15px] font-[850] text-[var(--text-main)] mb-1 uppercase tracking-tight">
              {activeStage.stageNumber}: {activeStage.title} ENGINE
            </h4>
            <p className="text-[13px] text-[var(--text-muted)] leading-[1.6] max-w-[800px]">
              {activeStage.description}
            </p>
          </div>
          <div className="bg-[var(--accent-blue)] text-white font-mono text-[11px] font-extrabold px-3 py-1.5 rounded uppercase tracking-wider shrink-0 self-start md:self-auto shadow-sm">
            {activeStage.telemetryTag}
          </div>
        </div>

      </div>
    </section>
  );
}
