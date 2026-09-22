import type { ReactNode } from "react";

export interface NavLink {
  readonly title: string;
  readonly url: string;
}

export interface SocialLink {
  readonly name: string;
  readonly url: string;
  readonly icon: ReactNode;
  readonly isExternal?: boolean;
}
