import type { Skill } from "@/types";
import { BiLogoZoom } from "react-icons/bi";
import {
  SiTypescript,
  SiReactquery,
  SiShadcnui,
  SiAntdesign,
  SiStyledcomponents,
  SiPrisma,
  SiSupabase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import Html from "../../public/assets/skills/html.png";
import Css from "../../public/assets/skills/css.png";
import Javascript from "../../public/assets/skills/javascript.png";
import ReactJS from "../../public/assets/skills/react.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import Redux from "../../public/assets/skills/redux.png";
import Jotai from "../../public/assets/skills/jotai.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import MUI from "../../public/assets/skills/mui.png";
import ChartJS from "../../public/assets/skills/chartjs.png";
import Firebase from "../../public/assets/skills/firebase.png";

export const SKILLS_DATA: readonly Skill[] = [
  // Core Frontend (Primary Focus)
  {
    title: "React",
    logo: ReactJS,
    category: "Core Frontend",
  },
  {
    title: "Next.js",
    logo: NextJS,
    category: "Core Frontend",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="w-10 h-10 text-[#3178C6]" />,
    category: "Core Frontend",
  },
  {
    title: "JavaScript",
    logo: Javascript,
    category: "Core Frontend",
  },
  {
    title: "HTML5",
    logo: Html,
    category: "Core Frontend",
  },
  {
    title: "CSS3",
    logo: Css,
    category: "Core Frontend",
  },
  {
    title: "Chart.js",
    logo: ChartJS,
    category: "Core Frontend",
  },

  // State & Data Fetching
  {
    title: "TanStack Query",
    icon: <SiReactquery className="w-10 h-10 text-[#FF4154]" />,
    category: "State & Data",
  },
  {
    title: "Redux",
    logo: Redux,
    category: "State & Data",
  },
  {
    title: "Jotai",
    logo: Jotai,
    category: "State & Data",
  },

  // Styling & UI Systems
  {
    title: "Tailwind CSS",
    logo: Tailwind,
    category: "Styling & UI",
  },
  {
    title: "shadcn/ui",
    icon: <SiShadcnui className="w-10 h-10 text-text-primary" />,
    category: "Styling & UI",
  },
  {
    title: "Styled Components",
    icon: <SiStyledcomponents className="w-10 h-10 text-[#DB7093]" />,
    category: "Styling & UI",
  },
  {
    title: "Ant Design",
    icon: <SiAntdesign className="w-10 h-10 text-[#1677FF]" />,
    category: "Styling & UI",
  },
  {
    title: "Material UI",
    logo: MUI,
    category: "Styling & UI",
  },

  // Backend & Database
  {
    title: "Node.js",
    icon: <SiNodedotjs className="w-10 h-10 text-[#5FA04E]" />,
    category: "Backend & Database",
  },
  {
    title: "Express",
    icon: <SiExpress className="w-10 h-10 text-text-primary" />,
    category: "Backend & Database",
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql className="w-10 h-10 text-[#4169E1]" />,
    category: "Backend & Database",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="w-10 h-10 text-[#47A248]" />,
    category: "Backend & Database",
  },
  {
    title: "Prisma",
    icon: <SiPrisma className="w-10 h-10 text-text-primary" />,
    category: "Backend & Database",
  },
  {
    title: "Supabase",
    icon: <SiSupabase className="w-10 h-10 text-[#3ECF8E]" />,
    category: "Backend & Database",
  },
  {
    title: "Firebase",
    logo: Firebase,
    category: "Backend & Database",
  },

  // Cloud & Platforms
  {
    title: "Twilio Flex",
    icon: (
      <svg
        viewBox="0 4 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        <path
          fill="#F22F46"
          d="M15 32.8462C17.1242 32.8462 18.8461 31.1242 18.8461 29C18.8461 26.8758 17.1242 25.1539 15 25.1539C12.8758 25.1539 11.1538 26.8758 11.1538 29C11.1538 31.1242 12.8758 32.8462 15 32.8462ZM15 22.8462C17.1242 22.8462 18.8461 21.1242 18.8461 19C18.8461 16.8758 17.1242 15.1538 15 15.1538C12.8758 15.1538 11.1538 16.8758 11.1538 19C11.1538 21.1242 12.8758 22.8462 15 22.8462ZM25 32.8462C27.1242 32.8462 28.8462 31.1242 28.8462 29C28.8462 26.8758 27.1242 25.1539 25 25.1539C22.8758 25.1539 21.1538 26.8758 21.1538 29C21.1538 31.1242 22.8758 32.8462 25 32.8462ZM25 22.8462C27.1242 22.8462 28.8462 21.1242 28.8462 19C28.8462 16.8758 27.1242 15.1538 25 15.1538C22.8758 15.1538 21.1538 16.8758 21.1538 19C21.1538 21.1242 22.8758 22.8462 25 22.8462ZM20 4C30.8333 4 40 13.1667 40 24C40 34.8333 30.8333 44 20 44C9.16668 44 0 34.8333 0 24C0 13.1668 9.16673 4 20 4ZM20 9.38461C11.9512 9.38461 5.38462 15.7238 5.38462 23.7315C5.38462 31.7392 11.9512 38.6154 20 38.6154C28.0488 38.6154 34.6154 31.7392 34.6154 23.7315C34.6154 15.7238 28.0488 9.38461 20 9.38461Z"
        />
      </svg>
    ),
    category: "Cloud & Platforms",
  },
  {
    title: "Zoom Contact Center",
    icon: <BiLogoZoom className="w-10 h-10 text-[#0B5CFF]" />,
    category: "Cloud & Platforms",
  },
] as const;
