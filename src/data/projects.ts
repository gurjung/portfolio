import type { Project } from "@/types";
import DevBoard from "../../public/assets/projects/dev-board.png";
import Notes from "../../public/assets/projects/notes-app.png";
import Covid19 from "../../public/assets/projects/covid19-tracker.png";
import Crypto from "../../public/assets/projects/crypto-app.png";

export const PROJECTS_DATA: readonly Project[] = [
  {
    title: "DevBoard",
    img: DevBoard,
    link: "https://devboard-platform-mu.vercel.app/",
    github: "https://github.com/gurjung/devboard-platform",
    status: "Deployed on Vercel",
    description:
      "A project management platform built with Next.js — workspaces, teams, projects, and issue tracking in one place.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Prisma",
      "Supabase",
      "NextAuth",
      "Zod",
    ],
  },
  {
    title: "Notes App",
    img: Notes,
    link: "https://notes-sable-pi.vercel.app/",
    status: "Deployed on Vercel",
    description:
      "A clean, responsive note-taking application featuring intuitive organization, markdown-ready text flows, and seamless state persistence.",
    techStack: ["React", "JavaScript", "CSS3", "Vercel"],
  },
  {
    title: "Covid19 Tracker",
    img: Covid19,
    link: "https://covid19-tracker-vert.vercel.app/",
    status: "Deployed on Vercel",
    description:
      "Global pandemic data tracker visualizing live case numbers, geographical impacts, and timeline curves utilizing Chart.js and public REST APIs.",
    techStack: ["React", "Chart.js", "REST API", "Responsive UI"],
  },
  {
    title: "Cryptocurrency Tracker",
    img: Crypto,
    link: "https://cryptocurrency-tracker-omega.vercel.app/",
    status: "Deployed on Vercel",
    description:
      "Real-time cryptocurrency analytics platform showcasing live coin valuations, market trends, historical price charts, and search filters.",
    techStack: ["React", "CoinGecko API", "Chart.js", "CSS3"],
  },
] as const;
