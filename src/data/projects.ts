import type { Project } from "@/types";
import Notes from "../../public/assets/projects/notes-app.png";
import Crypto from "../../public/assets/projects/crypto-app.png";
import Covid19 from "../../public/assets/projects/covid19-tracker.png";

export const PROJECTS_DATA: readonly Project[] = [
  {
    title: "Notes App",
    img: Notes,
    link: "https://notes-sable-pi.vercel.app/",
    techStack: ["React", "CSS", "Vercel"],
  },
  {
    title: "Covid19 Tracker",
    img: Covid19,
    link: "https://covid19-tracker-vert.vercel.app/",
    techStack: ["React", "Chart.js", "Disease.sh API"],
  },
  {
    title: "Cryptocurrency Tracker",
    img: Crypto,
    link: "https://cryptocurrency-tracker-omega.vercel.app/",
    techStack: ["React", "CoinGecko API", "Chart.js"],
  },
] as const;
