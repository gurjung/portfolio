"use client";

import React, { useState, useEffect, useRef } from "react";
import { SonarDot } from "../common/SonarDot";
import { promptResponses, AI_CHIPS } from "./aiAssistantData";
import { ChatMessageList } from "./ChatMessageList";
import { useGeminiChatStream } from "@/hooks/useGeminiChatStream";

export function ContactCenterCard() {
  const { messages, isTyping, sendMessage, resetChat } = useGeminiChatStream();
  const [inputValue, setInputValue] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll ONLY the chat box container, preventing the browser window from jumping down
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: isTyping ? "auto" : "smooth",
      });
    }
  }, [messages, isTyping]);

  const handleChipClick = (id: string) => {
    if (isTyping) return;
    const entry = promptResponses[id];
    if (entry) {
      sendMessage(entry.prompt);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isTyping) return;
    const query = inputValue.trim();
    if (!query) return;

    sendMessage(query);
    setInputValue("");
  };

  return (
    <div className="bg-[#151619] text-white rounded-lg border border-[#282A30] shadow-xl p-3.5 sm:p-4 flex flex-col gap-3 transition-colors duration-200 w-full min-w-0">
      {/* Console Top Header */}
      <div className="flex items-center justify-between border-b border-[#2B2D33] pb-2.5">
        <div className="flex items-center gap-2 text-[12px] font-extrabold text-white">
          <span className="bg-[#18261e] border border-[var(--accent-green)]/40 text-[var(--accent-green)] text-[9.5px] font-mono px-2 py-0.5 rounded font-extrabold uppercase flex items-center gap-1.5 shadow-sm">
            <SonarDot size={5} color="var(--accent-green)" />
            LIVE
          </span>
          <span>AI ASSISTANT</span>
        </div>

        {/* Right Controls: Equalizer & Reset Button */}
        <div className="flex items-center gap-3">
          {messages.length > 1 && (
            <button
              type="button"
              onClick={resetChat}
              className="text-[10px] font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Reset conversation"
            >
              ↺ Reset
            </button>
          )}

          {/* Animated Equalizer Waveform */}
          <div className="flex items-end gap-0.5 h-3.5" aria-hidden="true">
            <span className="w-[3px] bg-[var(--accent-lime)] rounded-sm h-1.5 animate-[pulse_1s_ease-in-out_infinite]" />
            <span className="w-[3px] bg-[var(--accent-lime)] rounded-sm h-3 animate-[pulse_0.7s_ease-in-out_infinite]" />
            <span className="w-[3px] bg-[var(--accent-lime)] rounded-sm h-2 animate-[pulse_1.2s_ease-in-out_infinite]" />
            <span className="w-[3px] bg-[var(--accent-lime)] rounded-sm h-3.5 animate-[pulse_0.9s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* Multi-Turn Streaming Chat History Window */}
      <ChatMessageList
        messages={messages}
        isTyping={isTyping}
        containerRef={chatContainerRef}
      />

      {/* Predefined Recruiter Question Chips */}
      <div
        className="flex flex-wrap gap-1.5 py-1"
        role="toolbar"
        aria-label="Quick questions"
      >
        {AI_CHIPS.map((chip) => (
          <button
            key={chip.id}
            type="button"
            disabled={isTyping}
            onClick={() => handleChipClick(chip.id)}
            className="bg-[#252830] border border-[#383B46] text-slate-300 hover:bg-[var(--accent-blue)] hover:text-white hover:border-[var(--accent-blue)] disabled:opacity-50 disabled:cursor-not-allowed px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors duration-150 cursor-pointer"
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
          disabled={isTyping}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={
            isTyping ? "Copilot is typing..." : "Ask anything about Gurjung..."
          }
          className="flex-1 min-w-0 bg-[#21242B] border border-[#353842] rounded px-3 py-1.5 text-white font-sans text-[12px] focus:outline-none focus:border-[var(--accent-blue)] placeholder:text-slate-500 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isTyping || !inputValue.trim()}
          className="bg-[var(--accent-blue)] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed text-white px-3.5 py-1.5 rounded text-[11px] font-mono font-bold uppercase transition-opacity cursor-pointer shrink-0"
        >
          TRANSMIT
        </button>
      </form>
    </div>
  );
}
