"use client";

import React, { useState, useEffect, useRef } from "react";
import { SonarDot } from "../common/SonarDot";
import {
  Message,
  promptResponses,
  INITIAL_MESSAGES,
  AI_CHIPS,
  resolveQueryResponse,
} from "./aiAssistantData";
import { ChatMessageList } from "./ChatMessageList";

export function ContactCenterCard() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll ONLY the chat box container, preventing the browser window from jumping down
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, []);

  const streamResponse = (userPrompt: string, fullResponse: string) => {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: userPrompt,
    };

    const aiMessageId = `ai-${Date.now()}`;
    const initialAiMessage: Message = {
      id: aiMessageId,
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, userMessage, initialAiMessage]);
    setIsTyping(true);

    let charIndex = 0;
    typingTimerRef.current = setInterval(() => {
      charIndex += 2;
      const currentSlice = fullResponse.slice(0, charIndex);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageId ? { ...msg, content: currentSlice } : msg
        )
      );

      if (charIndex >= fullResponse.length) {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        setIsTyping(false);
      }
    }, 18);
  };

  const handleChipClick = (id: string) => {
    if (isTyping) return;
    const entry = promptResponses[id];
    if (entry) {
      streamResponse(entry.prompt, entry.response);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isTyping) return;
    const query = inputValue.trim();
    if (!query) return;

    const responseText = resolveQueryResponse(query);
    streamResponse(query, responseText);
    setInputValue("");
  };

  const handleReset = () => {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    setIsTyping(false);
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <div className="bg-[#151619] text-white rounded-lg border border-[#282A30] shadow-xl p-4 flex flex-col gap-3 transition-colors duration-200">
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
              onClick={handleReset}
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
