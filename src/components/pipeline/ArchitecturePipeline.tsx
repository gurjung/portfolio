'use client';

import React, { useState } from 'react';
import { portfolioData, PipelineStage } from '@/data/portfolioData';

export function ArchitecturePipeline() {
  const { interactivePipeline } = portfolioData;
  const [activeStageId, setActiveStageId] = useState<number>(1);

  const activeStage: PipelineStage =
    interactivePipeline.find((s) => s.id === activeStageId) || interactivePipeline[0];

  return (
    <section className="w-full py-16 bg-[var(--bg-card-subtle)] border-y border-[var(--border-color)] transition-colors duration-200 scroll-mt-20" id="pipeline">
      <div className="w-[min(1340px,calc(100%-48px))] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left gap-3 mb-6">
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
              <span>ARCHITECTURE IN ACTION</span>
            </div>
            <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-[850] tracking-[-0.04em] text-[var(--text-main)] leading-tight">
              From Schema Ingestion to Production Delivery
            </h2>
          </div>
          <span className="font-mono text-[11px] font-bold text-[var(--text-muted)]">
            [CLICK ANY WAYPOINT TO TEST FLOW]
          </span>
        </div>

        {/* Highway Track with Moving Speed Pulse */}
        <div className="bg-[#1E293B] h-10 rounded-full relative my-7 flex items-center border-2 border-[#0F172A] overflow-visible">
          <div className="absolute left-4 right-4 h-0 border-t-2 border-dashed border-[var(--accent-lime)]" />
          <div
            className="absolute -top-3 text-[30px] cursor-pointer drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] transition-[left] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] -translate-x-1/2 select-none"
            style={{ left: activeStage.truckPosition }}
            aria-hidden="true"
          >
            ⚡
          </div>
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
