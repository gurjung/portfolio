'use client';

import React, { useState, useEffect, useRef } from 'react';

const promptResponses: Record<string, string> = {
  stack:
    "Gurjung's core production stack centers on React 19, Next.js (App Router), TypeScript, Tailwind CSS, Redux Toolkit, and TanStack Query. On the backend, he works with Node.js, Express, PostgreSQL, and Prisma.",
  bjs:
    "At BJS Home Delivery, Gurjung consolidated 5 disparate internal tools into a unified React platform for 2,000+ users, cutting tool-switching by 30%, automating daily operational debriefing, and shrinking JS bundle footprints by 60–75%.",
  ccaas:
    "Gurjung engineered agent-facing interfaces on Twilio Flex and Zoom Contact Center, centralizing Calls, SMS, and WhatsApp into low-latency event streams. This directly drove a 50% reduction in customer response latency.",
  devboard:
    "DevBoard is Gurjung's multi-tenant project management platform featuring Next.js App Router, Prisma ORM, PostgreSQL, defense-in-depth RBAC, tokenized invitations, and drag-and-drop Kanban task views.",
  hire:
    "Gurjung brings 3+ years of battle-tested frontend systems engineering with proven business metrics (-50% latency, 2K+ daily users), rigorous TypeScript discipline, and deep expertise in scalable dashboards and design systems.",
};

export function ContactCenterCard() {
  const [displayText, setDisplayText] = useState<string>(
    "Hi! I'm Gurjung — AI Assistant. Ask anything about frontend architecture, state management, performance engineering, or project achievements."
  );
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const chips = [
    { id: 'stack', label: '⚡ Core Tech Stack' },
    { id: 'bjs', label: '🏗️ Enterprise Scale Impact' },
    { id: 'ccaas', label: '🔄 Real-Time WebSockets & Telephony' },
    { id: 'devboard', label: '💼 DevBoard SaaS Architecture' },
    { id: 'hire', label: '⭐ Why hire Gurjung?' },
  ];

  const streamText = (fullText: string) => {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    setIsTyping(true);
    setDisplayText('');

    let current = '';
    let index = 0;
    typingTimerRef.current = setInterval(() => {
      if (index < fullText.length) {
        current += fullText.charAt(index);
        setDisplayText(current);
        index++;
      } else {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        setIsTyping(false);
      }
    }, 12);
  };

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, []);

  const handleChipClick = (id: string) => {
    const text = promptResponses[id];
    if (text) streamText(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputValue.trim().toLowerCase();
    if (!query) return;

    if (query.includes('stack') || query.includes('skill')) {
      streamText(promptResponses.stack);
    } else if (query.includes('bjs') || query.includes('enterprise') || query.includes('scale') || query.includes('tool')) {
      streamText(promptResponses.bjs);
    } else if (query.includes('ccaas') || query.includes('contact') || query.includes('twilio') || query.includes('websocket') || query.includes('telephony')) {
      streamText(promptResponses.ccaas);
    } else if (query.includes('devboard') || query.includes('project') || query.includes('saas')) {
      streamText(promptResponses.devboard);
    } else if (query.includes('hire') || query.includes('why') || query.includes('experience')) {
      streamText(promptResponses.hire);
    } else {
      streamText(
        `Recorded inquiry: "${inputValue}". Gurjung specializes in sub-100ms React/Next.js architectures, real-time event interfaces, and scalable enterprise platforms. Reach him directly at gurjung997@gmail.com for deeper technical discussion.`
      );
    }
    setInputValue('');
  };

  return (
    <div className="bg-[#151619] text-white rounded-lg border border-[#282A30] shadow-xl p-4 flex flex-col gap-3 transition-colors duration-200">
      
      {/* Console Top Header */}
      <div className="flex items-center justify-between border-b border-[#2B2D33] pb-2.5">
        <div className="flex items-center gap-2 text-[12px] font-extrabold text-white">
          <span className="bg-[var(--accent-green)] text-black text-[9px] font-mono px-1.5 py-0.5 rounded font-extrabold uppercase">
            LIVE
          </span>
          <span>RECRUITER COPILOT // AI TERMINAL</span>
        </div>

        {/* Animated Equalizer Waveform */}
        <div className="flex items-end gap-0.5 h-3.5" aria-hidden="true">
          <span className="w-[3px] bg-[var(--accent-lime)] rounded-sm h-1.5 animate-[pulse_1s_ease-in-out_infinite]" />
          <span className="w-[3px] bg-[var(--accent-lime)] rounded-sm h-3 animate-[pulse_0.7s_ease-in-out_infinite]" />
          <span className="w-[3px] bg-[var(--accent-lime)] rounded-sm h-2 animate-[pulse_1.2s_ease-in-out_infinite]" />
          <span className="w-[3px] bg-[var(--accent-lime)] rounded-sm h-3.5 animate-[pulse_0.9s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Streaming Chat Output Window */}
      <div className="bg-[#1C1E23] border border-[#2B2E36] rounded-md p-3 min-h-[105px] max-h-[155px] overflow-y-auto text-[12px] leading-[1.55] text-slate-200">
        <div className="flex gap-2.5 items-start">
          <div className="w-6 h-6 rounded bg-[var(--accent-blue)] flex items-center justify-center font-extrabold text-[10px] text-white shrink-0 mt-0.5">
            AI
          </div>
          <div>
            <strong className="block text-[10px] font-mono text-slate-400 mb-1">
              ENGINEERING COPILOT // READY
            </strong>
            <span>{displayText}</span>
            {isTyping && (
              <span className="inline-block w-1.5 h-3 bg-[var(--accent-lime)] align-middle ml-1 animate-pulse" />
            )}
          </div>
        </div>
      </div>

      {/* Predefined Recruiter Question Chips (Clean multi-row wrap for full mobile visibility) */}
      <div className="flex flex-wrap gap-1.5 py-1" role="toolbar" aria-label="Quick questions">
        {chips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            onClick={() => handleChipClick(chip.id)}
            className="bg-[#252830] border border-[#383B46] text-slate-300 hover:bg-[var(--accent-blue)] hover:text-white hover:border-[var(--accent-blue)] px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors duration-150 cursor-pointer"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Transmission Input Row */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask anything about Gurjung..."
          className="flex-1 min-w-0 bg-[#21242B] border border-[#353842] rounded px-3 py-1.5 text-white font-sans text-[12px] focus:outline-none focus:border-[var(--accent-blue)] placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="bg-[var(--accent-blue)] hover:opacity-90 text-white px-3.5 py-1.5 rounded text-[11px] font-mono font-bold uppercase transition-opacity cursor-pointer shrink-0"
        >
          TRANSMIT
        </button>
      </form>
    </div>
  );
}
