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
    title: "HTML5",
    logo: Html,
  },
  {
    title: "CSS3",
    logo: Css,
  },
  {
    title: "JavaScript",
    logo: Javascript,
  },
  {
    title: "React",
    logo: ReactJS,
  },
  {
    title: "Redux",
    logo: Redux,
  },
  {
    title: "Material UI",
    logo: MUI,
  },
  {
    title: "Tailwind CSS",
    logo: Tailwind,
  },
  {
    title: "Chart.js",
    logo: ChartJS,
  },
  {
    title: "Next.js",
    logo: NextJS,
  },
  {
    title: "Firebase",
    logo: Firebase,
  },
] as const;
