"use client";

import React, { useMemo } from "react";

interface FormattedMessageProps {
  content: string;
  className?: string;
}

interface InlineToken {
  type: "text" | "bold" | "bold-email" | "italic" | "code" | "link" | "email" | "url";
  text: string;
  url?: string;
}

type BlockToken =
  | { type: "paragraph"; text: string }
  | { type: "bullet"; items: string[] }
  | { type: "number"; items: string[] }
  | { type: "codeblock"; language?: string; code: string };

/**
 * Normalizes partially streamed markdown syntax so that unclosed formatting tags
 * render smoothly as the assistant types, without raw delimiters flickering.
 */
function normalizeStreamingMarkdown(text: string): string {
  let normalized = text;

  // Unclosed bold (**)
  const boldMatches = normalized.match(/\*\*/g);
  if (boldMatches && boldMatches.length % 2 === 1) {
    if (normalized.endsWith("**")) {
      normalized = normalized.slice(0, -2);
    } else {
      normalized = normalized + "**";
    }
  }

  // Unclosed inline code (`)
  const codeMatches = normalized.match(/`/g);
  if (codeMatches && codeMatches.length % 2 === 1) {
    if (normalized.endsWith("`")) {
      normalized = normalized.slice(0, -1);
    } else {
      normalized = normalized + "`";
    }
  }

  // Unclosed markdown link [text](url during active stream
  const unclosedLinkMatch = normalized.match(/\[([^\]]+)\]\(([^)]*)$/);
  if (unclosedLinkMatch) {
    normalized = normalized + ")";
  }

  return normalized;
}

/**
 * Parses inline formatting: bold, italic, code, markdown links, autolinked emails, and URLs.
 */
function parseInline(rawText: string): InlineToken[] {
  const normalized = normalizeStreamingMarkdown(rawText);

  const tokenRegex =
    /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)|(`([^`]+)`)|(\*([^*]+)\*)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(https?:\/\/[^\s]+)/g;

  const parts: InlineToken[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(normalized)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: "text",
        text: normalized.slice(lastIndex, match.index),
      });
    }

    if (match[1]) {
      // [text](url)
      parts.push({ type: "link", text: match[2], url: match[3] });
    } else if (match[4]) {
      // **text**
      const boldContent = match[5];
      const emailMatch = boldContent.match(
        /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
      );
      if (emailMatch) {
        parts.push({ type: "bold-email", text: emailMatch[1] });
      } else {
        parts.push({ type: "bold", text: boldContent });
      }
    } else if (match[6]) {
      // `code`
      parts.push({ type: "code", text: match[7] });
    } else if (match[8]) {
      // *italic*
      parts.push({ type: "italic", text: match[9] });
    } else if (match[10]) {
      // email
      parts.push({ type: "email", text: match[10] });
    } else if (match[11]) {
      // url
      parts.push({ type: "url", text: match[11] });
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < normalized.length) {
    parts.push({ type: "text", text: normalized.slice(lastIndex) });
  }

  return parts;
}

function renderInline(text: string, keyPrefix: string): React.ReactNode {
  const tokens = parseInline(text);

  return tokens.map((token, index) => {
    const key = `${keyPrefix}-${index}`;
    switch (token.type) {
      case "bold":
        return (
          <strong key={key} className="font-bold text-white tracking-wide">
            {token.text}
          </strong>
        );
      case "bold-email":
        return (
          <strong key={key} className="font-bold text-white">
            <a
              href={`mailto:${token.text}`}
              className="text-[var(--accent-blue)] underline hover:text-[var(--accent-lime)] transition-colors"
              title={`Email ${token.text}`}
            >
              {token.text}
            </a>
          </strong>
        );
      case "email":
        return (
          <a
            key={key}
            href={`mailto:${token.text}`}
            className="text-[var(--accent-blue)] underline hover:text-[var(--accent-lime)] transition-colors font-medium"
            title={`Email ${token.text}`}
          >
            {token.text}
          </a>
        );
      case "link":
        return (
          <a
            key={key}
            href={token.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-blue)] underline hover:text-[var(--accent-lime)] transition-colors"
          >
            {token.text}
          </a>
        );
      case "url":
        return (
          <a
            key={key}
            href={token.text}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-blue)] underline hover:text-white transition-colors break-all"
          >
            {token.text}
          </a>
        );
      case "code":
        return (
          <code
            key={key}
            className="bg-[#12141a] text-[var(--accent-lime)] px-1.5 py-0.5 rounded text-[11px] font-mono border border-[#2b2e38]"
          >
            {token.text}
          </code>
        );
      case "italic":
        return (
          <em key={key} className="italic text-slate-100">
            {token.text}
          </em>
        );
      case "text":
      default:
        return <React.Fragment key={key}>{token.text}</React.Fragment>;
    }
  });
}

function parseBlocks(content: string): BlockToken[] {
  const lines = content.split("\n");
  const blocks: BlockToken[] = [];
  let currentList: { type: "bullet" | "number"; items: string[] } | null = null;
  let codeBlockBuffer: string[] | null = null;
  let codeBlockLang = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle code blocks (```)
    if (line.trim().startsWith("```")) {
      if (codeBlockBuffer === null) {
        // Start of code block
        currentList = null;
        codeBlockLang = line.trim().slice(3).trim();
        codeBlockBuffer = [];
      } else {
        // End of code block
        blocks.push({
          type: "codeblock",
          language: codeBlockLang,
          code: codeBlockBuffer.join("\n"),
        });
        codeBlockBuffer = null;
        codeBlockLang = "";
      }
      continue;
    }

    if (codeBlockBuffer !== null) {
      codeBlockBuffer.push(line);
      continue;
    }

    // Bullet items: "- item" or "* item"
    const bulletMatch = line.match(/^(\*|-)\s+(.+)$/);
    if (bulletMatch) {
      if (!currentList || currentList.type !== "bullet") {
        currentList = { type: "bullet", items: [] };
        blocks.push(currentList);
      }
      currentList.items.push(bulletMatch[2]);
      continue;
    }

    // Numbered items: "1. item"
    const numMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (numMatch) {
      if (!currentList || currentList.type !== "number") {
        currentList = { type: "number", items: [] };
        blocks.push(currentList);
      }
      currentList.items.push(numMatch[2]);
      continue;
    }

    currentList = null;

    if (line.trim() === "") {
      continue;
    }

    blocks.push({ type: "paragraph", text: line });
  }

  // Handle unclosed code block during active stream
  if (codeBlockBuffer !== null) {
    blocks.push({
      type: "codeblock",
      language: codeBlockLang,
      code: codeBlockBuffer.join("\n"),
    });
  }

  return blocks;
}

export function FormattedMessage({
  content,
  className = "",
}: FormattedMessageProps) {
  const blocks = useMemo(() => parseBlocks(content), [content]);

  if (!content) return null;

  return (
    <div className={`space-y-2 min-w-0 break-words ${className}`}>
      {blocks.map((block, bIdx) => {
        if (block.type === "paragraph") {
          return (
            <p key={`p-${bIdx}`} className="leading-relaxed">
              {renderInline(block.text, `p-${bIdx}`)}
            </p>
          );
        }

        if (block.type === "bullet") {
          return (
            <ul key={`ul-${bIdx}`} className="space-y-1.5 my-1 pl-0.5">
              {block.items.map((item, itemIdx) => (
                <li
                  key={`li-${bIdx}-${itemIdx}`}
                  className="flex items-start gap-2"
                >
                  <span className="text-[var(--accent-lime)] text-[10px] mt-0.5 select-none shrink-0">
                    ▹
                  </span>
                  <div className="flex-1 leading-relaxed">
                    {renderInline(item, `bullet-${bIdx}-${itemIdx}`)}
                  </div>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "number") {
          return (
            <ol key={`ol-${bIdx}`} className="space-y-1.5 my-1 pl-0.5">
              {block.items.map((item, itemIdx) => (
                <li
                  key={`num-${bIdx}-${itemIdx}`}
                  className="flex items-start gap-2"
                >
                  <span className="text-[var(--accent-blue)] font-mono text-[10px] font-bold mt-0.5 select-none shrink-0">
                    {itemIdx + 1}.
                  </span>
                  <div className="flex-1 leading-relaxed">
                    {renderInline(item, `num-${bIdx}-${itemIdx}`)}
                  </div>
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "codeblock") {
          return (
            <pre
              key={`code-${bIdx}`}
              className="bg-[#111216] border border-[#272932] p-2.5 rounded text-[11px] font-mono text-[var(--accent-lime)] overflow-x-auto my-1.5"
            >
              <code>{block.code}</code>
            </pre>
          );
        }

        return null;
      })}
    </div>
  );
}
