import type { Project } from "@/types";
import Notes from "../../public/assets/projects/notes-app.png";
import Crypto from "../../public/assets/projects/crypto-app.png";
import Covid19 from "../../public/assets/projects/covid19-tracker.png";

export const PROJECTS_DATA: readonly Project[] = [
  {
    title: "Notes App",
    img: Notes,
    link: "https://notes-sable-pi.vercel.app/",
    description:
      "A clean, responsive note-taking application featuring intuitive organization, markdown-ready text flows, and seamless state persistence.",
    techStack: ["React", "JavaScript", "CSS3", "Vercel"],
  },
  {
    title: "Covid19 Tracker",
    img: Covid19,
    link: "https://covid19-tracker-vert.vercel.app/",
    description:
      "Global pandemic data tracker visualizing live case numbers, geographical impacts, and timeline curves utilizing Chart.js and public REST APIs.",
    techStack: ["React", "Chart.js", "REST API", "Responsive UI"],
  },
  {
    title: "Cryptocurrency Tracker",
    img: Crypto,
    link: "https://cryptocurrency-tracker-omega.vercel.app/",
    description:
      "Real-time cryptocurrency analytics platform showcasing live coin valuations, market trends, historical price charts, and search filters.",
    techStack: ["React", "CoinGecko API", "Chart.js", "CSS3"],
  },
] as const;
