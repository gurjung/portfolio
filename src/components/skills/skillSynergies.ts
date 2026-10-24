// Connected workflow synergy networks across categories
export const SKILL_SYNERGIES: Record<string, string[]> = {
  // Core Frontend
  React: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Redux', 'shadcn/ui', 'Jest', 'React Testing Library'],
  'Next.js': ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Prisma', 'PostgreSQL', 'Zod', 'Zero CLS', 'Core Web Vitals'],
  TypeScript: ['React', 'Next.js', 'Zod', 'TanStack Query', 'Node.js', 'Express.js', 'Prisma'],
  JavaScript: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3'],
  HTML5: ['CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
  CSS3: ['HTML5', 'Tailwind CSS', 'Styled Components', 'React'],
  'Chart.js': ['React', 'TypeScript', 'TanStack Query', 'REST APIs'],

  // State & Data
  'TanStack Query': ['React', 'Next.js', 'REST APIs', 'TypeScript', 'Zod'],
  Redux: ['React', 'TypeScript', 'REST APIs'],
  Jotai: ['React', 'Next.js', 'TypeScript'],
  WebSockets: ['React', 'Twilio Flex', 'Zoom Contact Center', 'Node.js', 'Express.js'],
  Zod: ['TypeScript', 'Next.js', 'React', 'REST APIs', 'TanStack Query'],
  'REST APIs': ['React', 'Next.js', 'Node.js', 'Express.js', 'TanStack Query'],

  // Styling
  'Tailwind CSS': ['Next.js', 'React', 'shadcn/ui', 'CSS3'],
  'shadcn/ui': ['Tailwind CSS', 'React', 'Next.js', 'TypeScript'],
  'Material UI': ['React', 'TypeScript'],
  'Ant Design': ['React', 'TypeScript'],
  'Styled Components': ['React', 'CSS3', 'TypeScript'],

  // Backend & DB
  'Node.js': ['Express.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Prisma', 'REST APIs'],
  'Express.js': ['Node.js', 'TypeScript', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  PostgreSQL: ['Prisma', 'Next.js', 'Node.js', 'Supabase'],
  MongoDB: ['Node.js', 'Express.js', 'REST APIs'],
  Prisma: ['PostgreSQL', 'Next.js', 'Node.js', 'TypeScript'],
  Supabase: ['PostgreSQL', 'Next.js', 'React'],
  Firebase: ['React', 'Next.js', 'TypeScript'],

  // Platforms, Testing & Perf
  'Twilio Flex': ['Zoom Contact Center', 'WebSockets', 'React', 'REST APIs'],
  'Zoom Contact Center': ['Twilio Flex', 'WebSockets', 'React', 'REST APIs'],
  Jest: ['React Testing Library', 'React', 'TypeScript'],
  'React Testing Library': ['Jest', 'React', 'TypeScript'],
  'Zero CLS': ['Core Web Vitals', 'Next.js', 'React'],
  'Core Web Vitals': ['Zero CLS', 'Next.js', 'React', 'Tailwind CSS'],

  // AI & LLM Engineering
  'LLMs & AI Assistant': ['RAG', 'Vector DB', 'LangGraph', 'Gemini', 'Claude', 'ChatGPT', 'Antigravity', 'Prompt Engineering', 'TypeScript', 'Next.js'],
  ChatGPT: ['LLMs & AI Assistant', 'Claude', 'Gemini', 'Antigravity', 'Prompt Engineering'],
  Claude: ['LLMs & AI Assistant', 'Gemini', 'ChatGPT', 'Antigravity', 'RAG'],
  Antigravity: ['LLMs & AI Assistant', 'Gemini', 'Claude', 'RAG', 'Vector DB', 'LangGraph'],
  Gemini: ['LLMs & AI Assistant', 'Claude', 'ChatGPT', 'Antigravity', 'RAG'],
  RAG: ['LLMs & AI Assistant', 'Vector DB', 'LangGraph', 'Antigravity', 'Gemini', 'Claude', 'Next.js'],
  'Vector DB': ['RAG', 'LangGraph', 'LLMs & AI Assistant', 'Antigravity', 'Supabase'],
  LangGraph: ['RAG', 'Vector DB', 'LLMs & AI Assistant', 'Gemini', 'Claude', 'ChatGPT', 'Antigravity'],
  'Prompt Engineering': ['LLMs & AI Assistant', 'ChatGPT', 'Claude', 'Gemini'],
};
