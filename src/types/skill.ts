import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type SkillCategory =
  | "Core Frontend"
  | "State & Data"
  | "Styling & UI"
  | "Testing"
  | "Backend & Database"
  | "Cloud & Platforms";

export interface Skill {
  readonly title: string;
  readonly logo?: StaticImageData;
  readonly icon?: ReactNode;
  readonly category?: SkillCategory;
}
