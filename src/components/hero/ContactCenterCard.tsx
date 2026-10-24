"use client";

import React, { useState, useEffect, useRef } from "react";
import { SonarDot } from "../common/SonarDot";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
}

const promptResponses: Record<string, { prompt: string; response: string }> = {
  stack: {
    prompt: "What is Gurjung's core tech stack?",
    response:
      "Gurjung's core stack centers on React 19, Next.js (App Router), TypeScript, Tailwind CSS, Redux Toolkit, TanStack Query, and Node.js/Express. In AI & LLM engineering, he builds with LLMs, Gemini, Claude, ChatGPT, Antigravity, RAG pipelines, Vector DBs, and LangGraph.",
  },
  ai: {
    prompt: "Tell me about your AI & LLM engineering experience.",
    response:
      "For this portfolio, Gurjung engineered an interactive AI Assistant interface powered by LLM APIs. His broader AI engineering toolkit encompasses RAG architecture, Vector DBs, and LangGraph agent orchestration.",
  },
  bjs: {
    prompt: "What scale and enterprise platforms have you built?",
    response:
      "At BJS Home Delivery, Gurjung consolidated 5 disparate internal tools into a unified React platform for 2,000+ users, cutting tool-switching by 30%, automating daily operational debriefing, and shrinking JS bundle footprints by 60–75%.",
  },
  ccaas: {
    prompt: "How do you handle real-time WebSockets and CCaaS?",
    response:
      "Gurjung engineered agent-facing interfaces on Twilio Flex and Zoom Contact Center, centralizing Calls, SMS, and WhatsApp into low-latency event streams. This directly drove a 50% reduction in customer response latency.",
  },
  devboard: {
    prompt: "Tell me about DevBoard SaaS architecture.",
    response:
      "DevBoard is Gurjung's multi-tenant project management platform featuring Next.js App Router, Prisma ORM, PostgreSQL, defense-in-depth RBAC, tokenized invitations, and drag-and-drop Kanban task views.",
  },
  hire: {
    prompt: "Why work with Gurjung?",
    response:
      "Gurjung brings 3+ years of battle-tested frontend systems engineering with proven business metrics (-50% latency, 2K+ daily users), rigorous TypeScript discipline, and deep expertise in scalable dashboards and design systems.",
  },
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    role: "assistant",
    content:
      "Hi! I'm Gurjung's AI Assistant. Ask anything about his frontend architecture, real-time event interfaces, production metrics, or background.",
  },
];

export function ContactCenterCard() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const chips = [
    { id: "stack", label: "⚡ Core Tech Stack" },
    { id: "ai", label: "🤖 AI & LLM Systems" },
    { id: "bjs", label: "🏗️ Enterprise Scale" },
    { id: "ccaas", label: "🔄 Real-Time WebSockets" },
    { id: "devboard", label: "💼 DevBoard SaaS" },
    { id: "hire", label: "⭐ Why Gurjung?" },
  ];

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

    let current = "";
    let index = 0;
    typingTimerRef.current = setInterval(() => {
      if (index < fullResponse.length) {
        current += fullResponse.charAt(index);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId ? { ...msg, content: current } : msg
          )
        );
        index++;
      } else {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        setIsTyping(false);
      }
    }, 12);
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

    const lowerQuery = query.toLowerCase();
    let responseText = "";

    if (
      lowerQuery.includes("ai") ||
      lowerQuery.includes("llm") ||
      lowerQuery.includes("rag") ||
      lowerQuery.includes("vector") ||
      lowerQuery.includes("langgraph") ||
      lowerQuery.includes("gemini") ||
      lowerQuery.includes("claude") ||
      lowerQuery.includes("chatgpt") ||
      lowerQuery.includes("antigravity")
    ) {
      responseText = promptResponses.ai.response;
    } else if (lowerQuery.includes("stack") || lowerQuery.includes("skill")) {
      responseText = promptResponses.stack.response;
    } else if (
      lowerQuery.includes("bjs") ||
      lowerQuery.includes("enterprise") ||
      lowerQuery.includes("scale") ||
      lowerQuery.includes("tool")
    ) {
      responseText = promptResponses.bjs.response;
    } else if (
      lowerQuery.includes("ccaas") ||
      lowerQuery.includes("contact") ||
      lowerQuery.includes("twilio") ||
      lowerQuery.includes("websocket") ||
      lowerQuery.includes("telephony")
    ) {
      responseText = promptResponses.ccaas.response;
    } else if (
      lowerQuery.includes("devboard") ||
      lowerQuery.includes("project") ||
      lowerQuery.includes("saas")
    ) {
      responseText = promptResponses.devboard.response;
    } else if (
      lowerQuery.includes("hire") ||
      lowerQuery.includes("why") ||
      lowerQuery.includes("experience")
    ) {
      responseText = promptResponses.hire.response;
    } else {
      responseText = `Recorded inquiry: "${query}". Gurjung specializes in sub-100ms React/Next.js architectures, real-time event interfaces, and scalable enterprise platforms. Reach him directly at gurjung997@gmail.com for deeper technical discussion.`;
    }

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
      <div
        ref={chatContainerRef}
        className="bg-[#181A20] border border-[#2B2E36] rounded-md p-3 h-[250px] sm:h-[280px] overflow-y-auto flex flex-col gap-3 text-[12px] leading-[1.6]"
      >
        {messages.map((msg) =>
          msg.role === "user" ? (
            /* User Message Bubble */
            <div key={msg.id} className="flex justify-end">
              <div className="bg-[#2B313E] border border-[#3C4455] text-white text-[12px] leading-relaxed rounded-lg rounded-tr-none px-3.5 py-2 max-w-[85%] shadow-sm">
                <span className="block text-[9px] font-mono text-slate-400 mb-0.5 text-right font-semibold">
                  YOU
                </span>
                <span>{msg.content}</span>
              </div>
            </div>
          ) : (
            /* AI / Assistant Message Bubble */
            <div key={msg.id} className="flex gap-2.5 items-start">
              <div className="w-6 h-6 rounded bg-[var(--accent-blue)] flex items-center justify-center font-extrabold text-[10px] text-white shrink-0 mt-0.5 shadow-sm">
                AI
              </div>
              <div className="bg-[#1C1E24] border border-[#2B2E36] rounded-lg rounded-tl-none p-3 text-slate-200 flex-1 max-w-[90%]">
                <strong className="block text-[9.5px] font-mono text-slate-400 mb-1">
                  AI ASSISTANT // READY
                </strong>
                <span className="whitespace-pre-line">{msg.content}</span>
                {isTyping && msg.id === messages[messages.length - 1]?.id && (
                  <span className="inline-block w-1.5 h-3 bg-[var(--accent-lime)] align-middle ml-1 animate-pulse" />
                )}
              </div>
            </div>
          )
        )}
      </div>

      {/* Predefined Recruiter Question Chips */}
      <div
        className="flex flex-wrap gap-1.5 py-1"
        role="toolbar"
        aria-label="Quick questions"
      >
        {chips.map((chip) => (
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
