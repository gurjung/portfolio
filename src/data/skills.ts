import type { Skill } from "@/types";
import Html from "../../public/assets/skills/html.png";
import Css from "../../public/assets/skills/css.png";
import Javascript from "../../public/assets/skills/javascript.png";
import ReactJS from "../../public/assets/skills/react.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import Firebase from "../../public/assets/skills/firebase.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import Redux from "../../public/assets/skills/redux.png";
import MUI from "../../public/assets/skills/mui.png";
import ChartJS from "../../public/assets/skills/chartjs.png";

export const SKILLS_DATA: readonly Skill[] = [
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
    title: "Redux",
    logo: Redux,
    category: "State & Architecture",
  },
  {
    title: "Tailwind CSS",
    logo: Tailwind,
    category: "Styling & UI",
  },
  {
    title: "Material UI",
    logo: MUI,
    category: "Styling & UI",
  },
  {
    title: "Chart.js",
    logo: ChartJS,
    category: "Visualization & Cloud",
  },
  {
    title: "Firebase",
    logo: Firebase,
    category: "Visualization & Cloud",
  },
] as const;
