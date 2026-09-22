import type { NavLink } from "@/types";
import { siteConfig } from "./site";

export const NAVIGATION_LINKS: readonly NavLink[] = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "skills",
    url: "/#skills",
  },
  {
    title: "projects",
    url: "/#projects",
  },
  {
    title: "resume",
    url: siteConfig.links.resume,
  },
  {
    title: "contact",
    url: "/#contact",
  },
] as const;
