export interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
}

export const promptResponses: Record<string, { prompt: string; response: string }> = {
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

export const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    role: "assistant",
    content:
      "Hi! I'm Gurjung's AI Assistant. Ask anything about his frontend architecture, real-time event interfaces, production metrics, or background.",
  },
];

export const AI_CHIPS = [
  { id: "stack", label: "⚡ Core Tech Stack" },
  { id: "ai", label: "🤖 AI & LLM Systems" },
  { id: "bjs", label: "🏗️ Enterprise Scale" },
  { id: "ccaas", label: "🔄 Real-Time WebSockets" },
  { id: "devboard", label: "💼 DevBoard SaaS" },
  { id: "hire", label: "⭐ Why Gurjung?" },
];

export function resolveQueryResponse(query: string): string {
  const lowerQuery = query.toLowerCase();

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
    return promptResponses.ai.response;
  }
  if (lowerQuery.includes("stack") || lowerQuery.includes("skill")) {
    return promptResponses.stack.response;
  }
  if (
    lowerQuery.includes("bjs") ||
    lowerQuery.includes("enterprise") ||
    lowerQuery.includes("scale") ||
    lowerQuery.includes("tool")
  ) {
    return promptResponses.bjs.response;
  }
  if (
    lowerQuery.includes("ccaas") ||
    lowerQuery.includes("contact") ||
    lowerQuery.includes("twilio") ||
    lowerQuery.includes("websocket") ||
    lowerQuery.includes("telephony")
  ) {
    return promptResponses.ccaas.response;
  }
  if (
    lowerQuery.includes("devboard") ||
    lowerQuery.includes("project") ||
    lowerQuery.includes("saas")
  ) {
    return promptResponses.devboard.response;
  }
  if (
    lowerQuery.includes("why") ||
    lowerQuery.includes("hire") ||
    lowerQuery.includes("reason")
  ) {
    return promptResponses.hire.response;
  }

  return `Recorded inquiry: "${query}". Gurjung specializes in sub-100ms React/Next.js architectures, real-time event interfaces, and scalable enterprise platforms. Reach him directly at gurjung997@gmail.com for deeper technical discussion.`;
}
