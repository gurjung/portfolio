export const siteConfig = {
  name: "Gurjung Singh",
  brandName: "Gurjung.Singh",
  role: "Frontend Software Engineer",
  headline: "Frontend Software Engineer",
  tagline: "Let's build something legendary together",
  description:
    "Building high-performance, accessible, and scalable web applications with React.js, TypeScript, Next.js, and modern frontend architecture.",
  availability:
    "I am available for full-time frontend software engineering positions. Feel free to connect and discuss opportunities.",
  email: "gurjung997@gmail.com",
  links: {
    github: "https://github.com/gurjung",
    linkedin: "https://www.linkedin.com/in/gurjung-singh-945731219",
    // resume: "https://drive.google.com/file/d/1paDNdVosD42k7_g81Hlh5m-S2wsvuwk0/view?usp=sharing",
    resume:
      "https://drive.google.com/file/d/1ZBGzOB-B_eXxwlv6qDZXv4byc--lyd5T/view?usp=sharing",
  },
} as const;

export type SiteConfig = typeof siteConfig;
