import type { StaticImageData } from "next/image";

export interface Project {
  readonly title: string;
  readonly img: StaticImageData;
  readonly link: string;
  readonly techStack?: readonly string[];
}
