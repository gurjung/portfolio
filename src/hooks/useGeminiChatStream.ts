"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Message,
  INITIAL_MESSAGES,
  resolveQueryResponse,
} from "@/components/hero/aiAssistantData";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
const IS_MOCK_MODE = process.env.NEXT_PUBLIC_MOCK_AI === "true";

export function useGeminiChatStream() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const abortControllerRef = useRef<AbortController | null>(null);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const targetTextRef = useRef<string>("");
  const displayedTextRef = useRef<string>("");
  const isStreamDoneRef = useRef<boolean>(true);
  const activeAiMsgIdRef = useRef<string | null>(null);

  const stopTypewriter = useCallback(() => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopTypewriter();
      abortControllerRef.current?.abort();
    };
  }, [stopTypewriter]);

  const startTypewriter = useCallback(
    (aiMessageId: string) => {
      stopTypewriter();
      activeAiMsgIdRef.current = aiMessageId;
      displayedTextRef.current = "";

      // Typewriter tick interval ~20ms (~50 ticks/second)
      typingTimerRef.current = setInterval(() => {
        const target = targetTextRef.current;
        const current = displayedTextRef.current;

        if (current.length < target.length) {
          const diff = target.length - current.length;

          // Adaptive typing pace: feels authentically typed while keeping pace with LLM
          let step = 1;
          if (diff > 120) {
            step = 5;
          } else if (diff > 55) {
            step = 3;
          } else if (diff > 18) {
            step = 2;
          }

          let nextLen = current.length + step;

          // Prevent splitting surrogate pairs (emojis / unicode)
          if (nextLen < target.length) {
            const charCode = target.charCodeAt(nextLen - 1);
            if (charCode >= 0xd800 && charCode <= 0xdbff) {
              nextLen += 1;
            }
          }

          const nextSlice = target.slice(0, nextLen);
          displayedTextRef.current = nextSlice;

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMessageId ? { ...msg, content: nextSlice } : msg
            )
          );
        } else if (isStreamDoneRef.current) {
          stopTypewriter();
          setIsTyping(false);
        }
      }, 20);
    },
    [stopTypewriter]
  );

  const streamMockFallback = useCallback(
    (promptText: string, aiMessageId: string) => {
      const fullResponse = resolveQueryResponse(promptText);
      targetTextRef.current = fullResponse;
      isStreamDoneRef.current = true;
      startTypewriter(aiMessageId);
    },
    [startTypewriter]
  );

  const sendMessage = useCallback(
    async (promptText: string) => {
      if (isTyping) return;
      const text = promptText.trim();
      if (!text) return;

      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        content: text,
      };

      const aiMessageId = `ai-${Date.now()}`;
      const placeholderAiMessage: Message = {
        id: aiMessageId,
        role: "assistant",
        content: "",
      };

      setMessages((prev) => [...prev, userMessage, placeholderAiMessage]);
      setIsTyping(true);

      targetTextRef.current = "";
      displayedTextRef.current = "";
      isStreamDoneRef.current = false;
      startTypewriter(aiMessageId);

      if (IS_MOCK_MODE) {
        streamMockFallback(text, aiMessageId);
        return;
      }

      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        content: m.content,
      }));

      try {
        const response = await fetch(`${BACKEND_URL}/api/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text,
            history: historyPayload,
          }),
          signal: abortControllerRef.current.signal,
        });

        if (!response.ok || !response.body) {
          console.warn("Backend chat stream unavailable, falling back to mock engine.");
          streamMockFallback(text, aiMessageId);
          return;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            isStreamDoneRef.current = true;
            break;
          }

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith(":")) continue;

            if (trimmed === "data: [DONE]") {
              isStreamDoneRef.current = true;
              return;
            }

            if (trimmed.startsWith("data: ")) {
              try {
                const parsed = JSON.parse(trimmed.slice(6));
                if (parsed.text) {
                  targetTextRef.current += parsed.text;
                }
              } catch {
                // Ignore partial JSON parse chunks
              }
            }
          }
        }
      } catch (err: any) {
        if (err.name === "AbortError") return;
        console.warn("Network error during stream, falling back:", err);
        streamMockFallback(text, aiMessageId);
      } finally {
        isStreamDoneRef.current = true;
        // If nothing was ever written (e.g. fatal failure before mock fallback)
        if (!targetTextRef.current) {
          stopTypewriter();
          setIsTyping(false);
        }
      }
    },
    [isTyping, messages, startTypewriter, stopTypewriter, streamMockFallback]
  );

  const resetChat = useCallback(() => {
    stopTypewriter();
    abortControllerRef.current?.abort();
    targetTextRef.current = "";
    displayedTextRef.current = "";
    isStreamDoneRef.current = true;
    setIsTyping(false);
    setMessages(INITIAL_MESSAGES);
  }, [stopTypewriter]);

  return {
    messages,
    isTyping,
    sendMessage,
    resetChat,
  };
}

