<div align="center">

# ⚡ Gurjung Singh — Frontend Portfolio

**A high-performance, accessible, and responsive personal portfolio engineered with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.**

Designed with a product-first mindset — blending clean typography, custom semantic design tokens, zero-FOUC dark/light mode, and subtle micro-interactions.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br />

[Overview](#-overview) • [Design System & UX](#-design-system--uiux-decisions) • [Key Features](#-key-features) • [Featured Projects](#-featured-projects) • [Tech Stack](#-tech-stack) • [Architecture](#-architecture--directory-structure) • [Getting Started](#-getting-started) • [Contact](#-connect--contact)

</div>

---

## 📌 Overview

This repository hosts the source code for my personal portfolio. Rather than treating a portfolio as a static digital resume, this application was built with the standards, architectural rigor, and polish expected of a **production-grade enterprise frontend**:

- **Modern Stack**: Built upon the latest Next.js 16 App Router and React 19 primitives with strict TypeScript typing throughout.
- **Engineered for Speed**: Zero heavy UI component library overhead, leveraging native Tailwind CSS v4 and CSS custom properties for near-instant rendering.
- **Aesthetic Precision**: Crafted with a balanced dark/light color palette, glassmorphism app bar, fluid typography, and responsive touch gestures.
- **Accessibility by Default**: Semantic HTML5 landmarks, full keyboard navigability, contrast-safe tokens, and ARIA attributes.

---

## 🎨 Design System & UI/UX Decisions

As both an engineer and product-minded developer, visual harmony and usability are prioritized hand-in-hand with code quality:

### 1. Zero-FOUC Theme Engine (Light & Dark Mode)
- **Problem**: Client-side theme switching often suffers from a flash of unstyled content (FOUC) or incorrect theme hydration flashes when users prefer dark mode.
- **Solution**: Implemented an inline, blocking vanilla script in the document `<head>` that executes prior to DOM paint, parsing both `localStorage` and `prefers-color-scheme` media queries. Paired with a custom React hook (`useTheme`) for reactive toggle states without layout thrashing.

### 2. Semantic CSS Variable Design Tokens
All core surfaces, text treatments, borders, and accents are abstracted into custom CSS tokens (`src/app/globals.css`):
- `--canvas`: Base app background (`#f8fafc` light / `#090d16` dark)
- `--surface` & `--surface-elevated`: Layered card and modal surfaces
- `--text-primary` & `--text-secondary`: High-contrast, WCAG-compliant readability
- `--border-subtle` & `--border-default`: Refined structural dividers
- `--primary` & `--primary-hover`: Electric Indigo/Cyan accent palette

### 3. Glassmorphism & Ambient Depth
- Frosted-glass sticky navigation with `backdrop-blur-md` and adaptive border contrast on scroll.
- Subtle SVG/radial gradient ambient glows placed behind the hero and contact sections for an elevated modern tech aesthetic without impacting Core Web Vitals (LCP/CLS).

### 4. Accessible Drawer & Mobile UX
- Responsive drawer menu for viewports under `768px` featuring:
  - Background scroll locking (`overflow: hidden` on body when active)
  - Keyboard listener supporting `Escape` key dismissal
  - Outside tap handling with an animated translucent overlay
  - Dedicated theme switcher button built right into the mobile drawer

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **Hero & Value Proposition** | High-impact headline, live role badge, resume quick-link, and direct navigation CTAs. |
| **Interactive Tech Stack Explorer** | Tabbed categorization allowing recruiters and engineers to filter skills by *Core Frontend*, *State & Data*, *Styling & UI*, *Testing*, *Backend & Database*, and *Cloud & Platforms*. |
| **Curated Project Showcase** | Featured case-study style cards displaying production links, source code repositories, live deployment status badges, and tech stack tags. |
| **Frictionless Contact Card** | 1-click clipboard email copy with visual success feedback (`Copied!`) and a direct `mailto:` fallback. |
| **Responsive Typography** | Powered by Next.js font optimization using `Inter` with variable font weights and `display: swap`. |

---

## 💼 Featured Projects

A curated set of applications demonstrated across the portfolio:

### 🚀 [DevBoard](https://devboard-platform-mu.vercel.app/) *(Featured)*
*A modern full-stack project management platform designed for engineering teams.*
- **Tech**: Next.js, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Prisma, Supabase, NextAuth, Zod
- **Highlights**: Workspaces, role-based project boards, issue trackers, optimistic UI mutations, and relational data modeling.
- **Links**: [Live Demo](https://devboard-platform-mu.vercel.app/) • [Source Code](https://github.com/gurjung/devboard-platform)

### 📝 [Notes App](https://notes-sable-pi.vercel.app/)
*A clean, responsive note-taking application featuring distraction-free writing.*
- **Tech**: React, JavaScript, CSS3, Vercel
- **Highlights**: Fluid responsive layout, markdown-ready flows, and state persistence.
- **Links**: [Live Demo](https://notes-sable-pi.vercel.app/)

### 🦠 [Covid-19 Tracker](https://covid19-tracker-vert.vercel.app/)
*Global pandemic data tracker providing interactive data visualizations.*
- **Tech**: React, Chart.js, REST API, Responsive UI
- **Highlights**: Live case numbers, geographical impacts, and timeline curves.
- **Links**: [Live Demo](https://covid19-tracker-vert.vercel.app/)

### 🪙 [Cryptocurrency Tracker](https://cryptocurrency-tracker-omega.vercel.app/)
*Real-time cryptocurrency analytics platform.*
- **Tech**: React, CoinGecko API, Chart.js, CSS3
- **Highlights**: Live coin valuations, market trends, historical price charts, and search filters.
- **Links**: [Live Demo](https://cryptocurrency-tracker-omega.vercel.app/)

---

## 🛠️ Tech Stack

```
Core Frontend:       React 19 • Next.js 16 (App Router) • TypeScript 5.7 • JavaScript (ESNext)
Styling & UI:        Tailwind CSS v4 • Vanilla CSS Variables • React Icons • React Toastify
State & Data:        TanStack Query • Redux • Jotai • REST APIs
Backend & Data:      Node.js • Express • PostgreSQL • MongoDB • Prisma • Supabase • Firebase
Testing & Tooling:   Jest • React Testing Library • ESLint 9 • PostCSS • Git
Platforms:           Twilio Flex • Zoom Contact Center • Vercel
```

---

## 📂 Architecture & Directory Structure

Clean domain-driven modular structure separating layout, reusable UI primitives, domain sections, and configuration data:

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── projects/          # Optimized project previews (WebP/PNG)
│   │   └── skills/            # Technology logos & icons
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind v4 directives & custom theme tokens
│   │   ├── layout.tsx         # Root layout, metadata, font loading, zero-FOUC script
│   │   └── page.tsx           # Page assembler composing sections
│   ├── components/
│   │   ├── common/            # Reusable UI primitives (SectionHeading, ThemeToggle, etc.)
│   │   ├── layout/            # Shell components (Navbar, MobileDrawer)
│   │   └── sections/          # Page sections (HeroSection, SkillsSection, ProjectsSection, ContactSection)
│   ├── config/
│   │   └── site.ts            # Centralized site metadata, links, contact info
│   ├── data/
│   │   ├── projects.ts        # Typed project records and tech metadata
│   │   └── skills.tsx         # Skill taxonomy and category definitions
│   ├── hooks/
│   │   └── useTheme.ts        # Reactive dark/light mode state hook
│   └── types/                 # Shared TypeScript interfaces (Project, Skill, NavItem)
├── next.config.js             # Next.js bundler settings
├── tsconfig.json              # Strict TypeScript compiler options
└── package.json               # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher
- **Package Manager**: `npm` or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gurjung/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application with hot module replacement.

### Build & Production

```bash
# Build the production application
npm run build

# Start the production server
npm run start

# Run code linting
npm run lint
```

---

## ⚡ Performance, Accessibility & Best Practices

- **Core Web Vitals Optimization**: Static assets optimized with `next/image` to prevent Cumulative Layout Shift (CLS) and ensure fast Largest Contentful Paint (LCP).
- **SEO & Social Sharing**: Complete OpenGraph meta tags, canonical keywords, responsive viewport definitions, and semantic document outline.
- **Strict Typing**: Pure TypeScript codebase with typed props, immutable data collections (`as const`), and zero loose `any` declarations.
- **Hydration Safe**: Styled using SSR-compatible CSS properties and guarded client hooks to prevent React hydration mismatch warnings.

---

## 📬 Connect & Contact

- **Author**: Gurjung Singh
- **Role**: Frontend Software Engineer
- **Email**: [gurjung997@gmail.com](mailto:gurjung997@gmail.com)
- **LinkedIn**: [linkedin.com/in/gurjung-singh-945731219](https://www.linkedin.com/in/gurjung-singh-945731219)
- **GitHub**: [@gurjung](https://github.com/gurjung)
- **Resume**: [View Resume](https://drive.google.com/file/d/1ZBGzOB-B_eXxwlv6qDZXv4byc--lyd5T/view?usp=sharing)

---

<div align="center">
  <sub>Designed & engineered with precision by Gurjung Singh.</sub>
</div>
