import type { StaticImageData } from "next/image";

export interface Project {
  readonly title: string;
  readonly img: StaticImageData;
  readonly link: string;
  readonly description?: string;
  readonly github?: string;
  readonly techStack?: readonly string[];
}
