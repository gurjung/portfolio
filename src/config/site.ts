import type { EmailServiceCredentials } from "@/types";

export const siteConfig = {
  name: "Gurjung Singh",
  brandName: "Gurjung.Singh",
  role: "Front-End Developer",
  headline: "A Front-End Web Developer",
  tagline: "Let's build something legendary together",
  description: "Building beautiful, scalable, and responsive web applications with modern technologies.",
  availability: "I am available for full-time positions. Contact me and let's talk.",
  links: {
    github: "https://github.com/gurjung",
    linkedin: "https://www.linkedin.com/in/gurjung-singh-945731219",
    resume: "https://drive.google.com/file/d/1paDNdVosD42k7_g81Hlh5m-S2wsvuwk0/view?usp=sharing",
  },
  emailService: {
    serviceId: "service_9n079dg",
    templateId: "template_vppwp0s",
    publicKey: "Gfu_INqQ9eCpWU25M",
  } as const satisfies EmailServiceCredentials,
} as const;

export type SiteConfig = typeof siteConfig;
