import type { StaticImageData } from "next/image";

export type SkillCategory =
  | "Core Frontend"
  | "State & Architecture"
  | "Styling & UI"
  | "Visualization & Cloud";

export interface Skill {
  readonly title: string;
  readonly logo: StaticImageData;
  readonly category?: SkillCategory;
}
