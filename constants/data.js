import { TEXTS } from "../constants";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactJS from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Redux from "../public/assets/skills/redux.png";
import MUI from "../public/assets/skills/mui.png";
import ChartJS from "../public/assets/skills/chartjs.png";
import Notes from "../public/assets/projects/notes-app.png";
import Crypto from "../public/assets/projects/crypto-app.png";
import Covid19 from "../public/assets/projects/covid19-tracker.png";

export const TECH_STACK = [
  {
    title: TEXTS.TECH.HTML,
    logo: Html,
  },
  {
    title: TEXTS.TECH.CSS,
    logo: Css,
  },
  {
    title: TEXTS.TECH.JS,
    logo: Javascript,
  },
  {
    title: TEXTS.TECH.REACT,
    logo: ReactJS,
  },
  {
    title: TEXTS.TECH.REDUX,
    logo: Redux,
  },
  {
    title: TEXTS.TECH.MUI,
    logo: MUI,
  },
  {
    title: TEXTS.TECH.TAILWIND_CSS,
    logo: Tailwind,
  },
  {
    title: TEXTS.TECH.CHART_JS,
    logo: ChartJS,
  },
  {
    title: TEXTS.TECH.NEXT,
    logo: NextJS,
  },
  {
    title: TEXTS.TECH.FIREBASE,
    logo: Firebase,
  },
];

export const PROJECTS_DATA = [
  {
    title: TEXTS.PROJECTS.NOTES_APP,
    img: Notes,
    link: "https://notes-sable-pi.vercel.app/",
  },
  {
    title: TEXTS.PROJECTS.COVID_APP,
    img: Covid19,
    link: "https://covid19-tracker-vert.vercel.app/",
  },
  {
    title: TEXTS.PROJECTS.CRYPTO_APP,
    img: Crypto,
    link: "http://cryptocurrency-tracker-omega.vercel.app/",
  },
];

export const NAVIGATION_DATA = [
  {
    title: TEXTS.NAVBAR.HOME,
    url: "/"
  },
  {
    title: TEXTS.NAVBAR.SKILLS,
    url: "/skills"
  },
  {
    title: TEXTS.NAVBAR.PROJECTS,
    url: "/projects"
  },
  {
    title: TEXTS.NAVBAR.RESUME,
    url: "/resume"
  },{
    title: TEXTS.NAVBAR.CONTACT,
    url: "/contact"
  }
]
