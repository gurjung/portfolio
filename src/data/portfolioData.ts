export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  highlights: string[];
  stackBadge: string;
  metrics: Array<{ label: string; value: string }>;
  link?: string;
  github?: string;
}

export interface PipelineStage {
  id: number;
  stageNumber: string;
  title: string;
  subtitle: string;
  truckPosition: string;
  description: string;
  telemetryTag: string;
}

export const portfolioData = {
  personal: {
    name: "Gurjung Singh",
    logoText: "gurjung",
    role: "Frontend Engineer",
    roleTag: "FRONTEND ENGINEER // REACT // NEXT.JS // TYPESCRIPT",
    eyebrow: "SCALABLE WEB ARCHITECTURE · REAL-TIME SYSTEMS · ACCESSIBLE DESIGN SYSTEMS",
    headlineLine1: "Engineered",
    headlineLine2: "for scale,",
    headlineAccent: "crafted for speed.",
    intro:
      "I'm Gurjung Singh, a Frontend Engineer passionate about building deterministic, high-performance web applications, real-time event interfaces, and accessible design systems that scale to thousands of daily users.",
    statusBadge: "AVAILABLE FOR SDE-2 ROLES",
    location: "India (IST) · Remote / Hybrid",
    email: "gurjung997@gmail.com",
    phone: "+91-9779917710",
    links: {
      github: "https://github.com/gurjung",
      linkedin: "https://www.linkedin.com/in/gurjung-singh-945731219",
      portfolioLive: "https://gurjung.netlify.app/",
      resumePdf: "/resume/gurjung_frontend_engineer.pdf",
    },
  },

  executiveMetrics: [
    {
      id: "tools",
      number: "5 → 1",
      label: "Tools Consolidated",
      desc: "Merged five disconnected logistics tools into a unified React platform.",
      color: "var(--accent-blue)",
    },
    {
      id: "response-time",
      number: "−50%",
      label: "Response Time",
      desc: "Cut customer resolution latency via multi-channel SMS, Voice, and WhatsApp.",
      color: "var(--accent-orange)",
    },
    {
      id: "deliveries",
      number: "6K+",
      label: "Deliveries / Day",
      desc: "Supported peak holiday fulfillment operations with zero dropped dispatch events.",
      color: "var(--text-main)",
    },
    {
      id: "bundle-size",
      number: "−75%",
      label: "Bundle Footprint",
      desc: "Optimized initial JS payloads via dependency audit, code splitting & lazy loading.",
      color: "var(--accent-green)",
    },
    {
      id: "users",
      number: "2,000+",
      label: "Active Users",
      desc: "Internal operational teams navigating daily transport routing workflows.",
      color: "var(--text-main)",
    },
  ],

  tickerTechnologies: [
    "React 19",
    "Next.js App Router",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma ORM",
    "Redux Toolkit",
    "TanStack Query",
    "Tailwind CSS",
    "Twilio Flex SDK",
    "Playwright",
    "Jest & RTL",
  ],

  featuredProjects: [
    {
      id: "bjs-logistics",
      title: "Delivery & Transport Management Platform",
      category: "ENTERPRISE CORE // LOGISTICS",
      client: "BJS HOME DELIVERY",
      description:
        "Architected a modular NPM-package-based frontend that consolidated 5 disparate internal logistics tools into a unified operating cockpit. Streamlined automated invoicing and daily debriefing for 2,000+ users.",
      highlights: [
        "Automated invoicing debrief pipeline: ACTIVE",
        "Shared accessible component library: +30% dev velocity",
        "Bundle footprint: Sub-85kb entry budget achieved",
      ],
      stackBadge: "React 19 / TypeScript / Modular NPM / REST",
      metrics: [
        { label: "Tools Merged", value: "5 → 1" },
        { label: "Tool Switching", value: "−30%" },
        { label: "Daily Peak", value: "6K+" },
      ],
    },
    {
      id: "ccaas-flex",
      title: "Omnichannel Contact Center Workflows",
      category: "CCaaS // REAL-TIME TELEPHONY",
      client: "TWILIO FLEX & ZOOM",
      description:
        "Engineered high-concurrency agent-facing interfaces on Twilio-Flex and Zoom Contact Center, centralizing live calls, SMS, and WhatsApp customer communication into an ultra-low latency response hub.",
      highlights: [
        "Agent presence queue telemetry: SYNCHRONIZED",
        "Customer response latency: −50% improvement",
        "Multi-channel concurrency: 8–10 simultaneous chats/agent",
      ],
      stackBadge: "Twilio Flex UI / WebSockets / React / Redux",
      metrics: [
        { label: "Response Time", value: "−50%" },
        { label: "Chats / Agent", value: "8–10" },
        { label: "Uptime", value: "100%" },
      ],
    },
    {
      id: "devboard-saas",
      title: "DevBoard Multi-Tenant Platform",
      category: "FULL STACK SAAS // PRODUCTIVITY",
      client: "PERSONAL PRODUCT",
      description:
        "Architected a multi-tenant project management platform with Next.js App Router, PostgreSQL, and Prisma. Implemented RBAC defense-in-depth authorization, cursor-based pagination, and unified Kanban/Table task views.",
      highlights: [
        "Drag-and-drop state machines: TanStack Query cache",
        "Token-based tenant invites & defense-in-depth RBAC",
        "Test coverage: RTL & Jest for critical workflows",
      ],
      stackBadge: "Next.js App Router / TypeScript / Prisma / PostgreSQL",
      metrics: [
        { label: "Type Safety", value: "100%" },
        { label: "Layout Shift", value: "0 CLS" },
        { label: "Architecture", value: "RBAC" },
      ],
    },
    {
      id: "enterprise-ui",
      title: "Enterprise UI Component Engine",
      category: "DESIGN SYSTEM // INFRASTRUCTURE",
      client: "ENTERPRISE SYSTEM",
      description:
        "Built a standardized NPM component system with built-in accessibility (WCAG AA compliance, semantic HTML, keyboard focus management) adopted across frontend squads to eliminate redundant code.",
      highlights: [
        "Accessible primitives: Dialogs, tables, drawers, forms",
        "Frontend engineering sprint effort: −30% reduction",
        "Zero runtime stylesheet collisions",
      ],
      stackBadge: "React / TypeScript / Tailwind CSS / Radix Primitives",
      metrics: [
        { label: "Dev Effort", value: "−30%" },
        { label: "A11y Compliant", value: "100%" },
        { label: "Adoption", value: "Cross-Team" },
      ],
    },
  ],

  interactivePipeline: [
    {
      id: 1,
      stageNumber: "01 // INTAKE",
      title: "Order Ingestion",
      subtitle: "Zod + Strict TypeScript",
      truckPosition: "12%",
      description:
        "Enforces runtime JSON schema contracts with Zod and TypeScript. Prevents data corruption before events hit the dispatch queue across 6,000+ daily deliveries.",
      telemetryTag: "STATUS: 100% TYPE-SAFE",
    },
    {
      id: 2,
      stageNumber: "02 // STREAMING",
      title: "Streaming Highway",
      subtitle: "WebSockets + React Query",
      truckPosition: "38%",
      description:
        "Real-time WebSocket event ingestion and TanStack Query state hydration. Keeps route updates synchronized at 60 frames per second.",
      telemetryTag: "LATENCY: <50MS",
    },
    {
      id: 3,
      stageNumber: "03 // CCaaS TELEPHONY",
      title: "Contact Center Hub",
      subtitle: "Twilio Flex + Queue Logic",
      truckPosition: "64%",
      description:
        "Live telephony queues, agent presence matrices, and automated ticket prioritization. Reduced customer response time by 50% across Voice, SMS, and WhatsApp.",
      telemetryTag: "CHANNELS: VOICE + SMS + WA",
    },
    {
      id: 4,
      stageNumber: "04 // CLIENT DOORSTEP",
      title: "60fps Delivery",
      subtitle: "Virtualization + 0.000 CLS",
      truckPosition: "88%",
      description:
        "Optimized DOM virtualization, bundle reduction of 60–75%, and sub-100ms Total Blocking Time (TBT). Zero Cumulative Layout Shift at final delivery.",
      telemetryTag: "PERFORMANCE: 99+ CWV",
    },
  ],

  careerExperience: [
    {
      role: "Frontend Engineer",
      company: "BJS Home Delivery",
      period: "Oct 2022 — April 2026 (3+ Years)",
      location: "Chandigarh, India",
      bullets: [
        "Architected a modular NPM-package-based frontend for the Delivery & Transport Management System, enabling independently deployable and reusable feature modules that simplified long-term maintenance.",
        "Engineered reusable React and TypeScript components with built-in accessibility (semantic HTML, keyboard navigation, WCAG AA compliance), reducing frontend development effort by 30% across squads.",
        "Consolidated 5 legacy internal tools into a single platform for 2,000+ users, decreasing tool-switching time by 30% and automating manual invoicing/debriefing for 6,000+ deliveries/day.",
        "Engineered agent-facing UI on Twilio-Flex and developed integration logic across Twilio-Flex and Zoom Contact Center, reducing customer response latency by 50%.",
        "Reduced JavaScript bundle size by 60 – 75% by auditing dependencies, tree-shaking, CSS/JS minification, code splitting, and lazy loading.",
      ],
    },
  ],

  education: {
    institution: "Guru Nanak Dev Engineering College, Ludhiana",
    degree: "B.Tech in Electronics & Communication Engineering (ECE)",
    score: "CGPA: 9.0 / 10",
    period: "Aug 2016 — June 2019",
  },

  skillsMatrix: [
    {
      category: "⚡ Languages & Core",
      skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      category: "⚛️ Frameworks & State",
      skills: [
        "React.js",
        "Next.js App Router",
        "Redux Toolkit",
        "React Query",
        "Jotai",
        "Tailwind CSS",
      ],
    },
    {
      category: "🚀 Performance & Web Vitals",
      skills: [
        "Lighthouse 95+",
        "Zero CLS",
        "Bundle Splitting",
        "Lazy Loading",
        "DOM Virtualization",
      ],
    },
    {
      category: "🛡️ Quality, APIs & AI",
      skills: [
        "Jest",
        "React Testing Library",
        "REST APIs",
        "WCAG 2.1 AA",
        "Gemini & Antigravity",
      ],
    },
  ],

  recruiterHub: {
    targetRoles: "Senior Frontend Engineer / SDE-2",
    primaryLocation: "India (IST) · Remote / Hybrid",
    coreSpecialization: "Logistics Systems & CCaaS Platforms",
    experienceLevel: "3+ Years Production Scale",
    resumeFileName: "gurjung_frontend_engineer.pdf",
  },
};
