'use client';

import React from 'react';
import { Message } from './aiAssistantData';
import { FormattedMessage } from './FormattedMessage';

interface ChatMessageListProps {
  messages: Message[];
  isTyping: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function ChatMessageList({
  messages,
  isTyping,
  containerRef,
}: ChatMessageListProps) {
  return (
    <div
      ref={containerRef}
      className="bg-[#181A20] border border-[#2B2E36] rounded-md p-3 h-[250px] sm:h-[280px] overflow-y-auto flex flex-col gap-3 text-[12px] leading-[1.6]"
    >
      {messages.map((msg) =>
        msg.role === 'user' ? (
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
            <div className="bg-[#1C1E24] border border-[#2B2E36] rounded-lg rounded-tl-none p-3 text-slate-200 flex-1 max-w-[90%] shadow-sm">
              <div className="flex items-center justify-between mb-1.5 border-b border-[#262830] pb-1">
                <strong className="block text-[9.5px] font-mono text-slate-400">
                  AI ASSISTANT // READY
                </strong>
                {isTyping && msg.id === messages[messages.length - 1]?.id && (
                  <span className="text-[9px] font-mono text-[var(--accent-lime)] animate-pulse flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-lime)]" />
                    TYPING
                  </span>
                )}
              </div>
              <div className="text-[12px] leading-relaxed text-slate-200">
                <FormattedMessage content={msg.content} />
                {isTyping && msg.id === messages[messages.length - 1]?.id && (
                  <span className="inline-block w-1.5 h-3.5 bg-[var(--accent-lime)] align-middle ml-1 animate-pulse" />
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

