# Portfolio DevOps Repositioning — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reskin and rewrite the personal portfolio site from "game developer / film graduate" to "Cloud / DevOps engineer," using the modern dev-tool visual direction (navy + amber) and a human-but-restrained voice.

**Architecture:** A presentational React + TS + Vite + Tailwind SPA (HashRouter, GitHub Pages). A Tailwind theme defines the palette; a single `src/data/projects.ts` is the source of truth for project content (DRY across Home, Projects, Game dev); shared `Navigation`, `ProjectCard`, `TechBadges` components render it. Each route is one page file.

**Tech Stack:** React 18, TypeScript, Vite 6, Tailwind 3, react-router-dom 6 (HashRouter), lucide-react (icons), Inter + JetBrains Mono (Google Fonts).

**Verification model (deliberate deviation from unit-TDD):** This is a static presentational site with no business logic and no test runner installed. Adding one is out of scope (YAGNI). Each task is verified by: `npm run build` (runs `tsc` — the real type/JSX gate), `npm run lint` (eslint, `--max-warnings 0`), and a visual check in `npm run dev`. Every task ends in a commit.

**Design spec:** `docs/superpowers/specs/2026-06-26-portfolio-devops-repositioning-design.md`

---

## File structure

Created:
- `src/data/projects.ts` — project + tech-stack data (single source of truth)
- `src/components/Navigation.tsx` — top nav with working mobile toggle (replaces `src/navigation.tsx`)
- `src/components/ProjectCard.tsx` — reusable project card
- `src/components/TechBadges.tsx` — mono tech-tag pill strip
- `src/ProjectsPage.tsx` — new Projects route
- `src/GameDevPage.tsx` — curated game-dev route (replaces `src/GameWorksPage.tsx`)

Modified:
- `tailwind.config.js` — theme colors + font families
- `index.html` — Google Fonts, page title/meta
- `src/index.css` — dark base background + body font
- `src/HomePage.tsx` — full rebuild
- `src/ExperiencePage.tsx` — full rewrite
- `src/ContactPage.tsx` — full rewrite
- `src/App.tsx` — routes (remove Film, add Projects, wire GameDev), use `components/Navigation`

Deleted:
- `src/FilmWorksPage.tsx`
- `src/GameWorksPage.tsx` (replaced by `GameDevPage.tsx`)
- `src/navigation.tsx` (replaced by `components/Navigation.tsx`)

Untouched (film/game images may be reused on Game dev/Contact; unused ones are left in place — not worth deleting).

---

## Task 1: Theme foundation

**Files:**
- Modify: `tailwind.config.js`
- Modify: `index.html`
- Modify: `src/index.css`

- [ ] **Step 1: Add theme colors and fonts to Tailwind**

Replace `theme.extend` in `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0b1220",
        surface: "#111a2e",
        hair: "#1e293b",
        ink: "#f1f5f9",
        "ink-muted": "#94a3b8",
        "ink-faint": "#5b6b8a",
        accent: "#EF9F27",
        "accent-ink": "#412402",
        live: "#34d399",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Load fonts and fix page metadata in `index.html`**

Replace the `<head>` contents:

```html
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Hongyuan E — Cloud / DevOps engineer based in Melbourne. Master of IT @ Monash, graduating 2027." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
    <title>Hongyuan E — Cloud / DevOps Engineer</title>
  </head>
```

- [ ] **Step 3: Set the dark base in `src/index.css`**

Replace the entire file with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  margin: 0;
  min-height: 100%;
}

body {
  background-color: #0b1220;
  color: #f1f5f9;
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 4: Verify build + lint**

Run: `npm run build`
Expected: completes, no TS errors, `dist/` written.
Run: `npm run lint`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.js index.html src/index.css
git commit -m "feat: dark navy/amber theme foundation + fonts"
```

---

## Task 2: Project data module (single source of truth)

**Files:**
- Create: `src/data/projects.ts`

- [ ] **Step 1: Create the data module**

```ts
export type ProjectStatus = "live" | "shipped" | "wip";
export type ProjectCategory = "cloud" | "game";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  tagline: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  category: ProjectCategory;
}

export const stack: string[] = [
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Python",
];

export const projects: Project[] = [
  {
    slug: "ourcafe-backend",
    name: "ourcafe-backend",
    status: "live",
    tagline: "Serverless leaderboard for my own Unity game.",
    description:
      "A cloud backend for OurCafe: API Gateway to Lambda to DynamoDB, defined end-to-end in Terraform and shipped by a secretless GitHub OIDC CI/CD pipeline. Every push to main auto-deploys. I wrote an ADR for the key calls so the 'why' is on the record, not just the 'what'.",
    tech: ["AWS", "Terraform", "Lambda", "DynamoDB", "GitHub Actions", "Python"],
    links: [
      { label: "Live leaderboard", href: "https://v5o7z543fh.execute-api.ap-southeast-2.amazonaws.com/leaderboard" },
      { label: "Repo", href: "https://github.com/HongyuanE/ourcafe-backend" },
    ],
    category: "cloud",
  },
  {
    slug: "spacesmasher",
    name: "SpaceSmasher",
    status: "shipped",
    tagline: "A complete, cross-platform game, built and released end-to-end.",
    description:
      "Designed, built and shipped a cross-platform arcade game in Unity and C# — from core mechanics through packaging and release. My first proof that I finish things and ship them.",
    tech: ["Unity", "C#"],
    links: [{ label: "Repo", href: "https://github.com/HongyuanE/SpaceSmasher" }],
    category: "game",
  },
  {
    slug: "ourcafe-game",
    name: "OurCafe",
    status: "wip",
    tagline: "The Unity game the live backend was built for.",
    description:
      "A cozy cafe game in Unity. It is the reason ourcafe-backend exists — real client, real players, real reason to make the infrastructure reliable instead of a toy.",
    tech: ["Unity", "C#"],
    links: [{ label: "Backend project", href: "https://github.com/HongyuanE/ourcafe-backend" }],
    category: "game",
  },
];

export const cloudProjects = projects.filter((p) => p.category === "cloud");
export const gameProjects = projects.filter((p) => p.category === "game");
export const featuredProject = projects.find((p) => p.slug === "ourcafe-backend")!;
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: no TS errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/projects.ts
git commit -m "feat: project data as single source of truth"
```

---

## Task 3: Shared components (Navigation, ProjectCard, TechBadges)

**Files:**
- Create: `src/components/TechBadges.tsx`
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/Navigation.tsx`
- Modify: `src/App.tsx`
- Delete: `src/navigation.tsx`

- [ ] **Step 1: Create `TechBadges`**

```tsx
interface TechBadgesProps {
  items: string[];
}

const TechBadges = ({ items }: TechBadgesProps) => (
  <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
    {items.map((t) => (
      <li
        key={t}
        className="font-mono text-xs text-ink-muted border border-hair rounded px-2 py-1"
      >
        {t}
      </li>
    ))}
  </ul>
);

export default TechBadges;
```

- [ ] **Step 2: Create `ProjectCard`**

```tsx
import { ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import TechBadges from "./TechBadges";

const statusLabel: Record<Project["status"], string> = {
  live: "live",
  shipped: "shipped",
  wip: "in progress",
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => (
  <article
    className={`bg-surface rounded-xl p-6 border ${
      featured ? "border-accent/40" : "border-hair"
    }`}
  >
    <div className="flex items-center gap-2 mb-2">
      {project.status === "live" && (
        <span className="w-2 h-2 rounded-full bg-live inline-block" aria-hidden="true" />
      )}
      <h3 className="text-xl font-medium text-ink m-0">{project.name}</h3>
      <span className="font-mono text-xs text-accent ml-1">{statusLabel[project.status]}</span>
    </div>
    <p className="text-ink-muted text-sm mb-4">{project.tagline}</p>
    <p className="text-ink-muted text-sm leading-relaxed mb-4">{project.description}</p>
    <div className="mb-4">
      <TechBadges items={project.tech} />
    </div>
    <div className="flex flex-wrap gap-4">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
        >
          {link.label}
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      ))}
    </div>
  </article>
);

export default ProjectCard;
```

- [ ] **Step 3: Create `Navigation` with a working mobile toggle**

```tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/game-dev", label: "Game dev" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-base/90 backdrop-blur border-b border-hair">
      <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="font-medium text-ink" onClick={() => setOpen(false)}>
          Hongyuan E
        </Link>
        <div className="hidden md:flex gap-6 text-sm text-ink-muted">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-hair px-6 py-3 flex flex-col gap-3 text-sm text-ink-muted">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-ink" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
```

- [ ] **Step 4: Point `App.tsx` at the new Navigation**

In `src/App.tsx`, change the import line `import Navigation from './Navigation';` to:

```tsx
import Navigation from './components/Navigation';
```

(Leave the routes as they are for now — later tasks update them. Build must stay green: the old page imports still resolve.)

- [ ] **Step 5: Delete the old nav file**

```bash
git rm src/navigation.tsx
```

- [ ] **Step 6: Verify build + lint**

Run: `npm run build`
Expected: no errors.
Run: `npm run lint`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/ src/App.tsx
git commit -m "feat: shared Navigation (mobile toggle), ProjectCard, TechBadges"
```

---

## Task 4: Home page rebuild

**Files:**
- Modify: `src/HomePage.tsx`
- Modify: `src/App.tsx` (only if the route element differs — it stays `<HomePage />`)

- [ ] **Step 1: Replace `src/HomePage.tsx`**

```tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useScrollToTop from "./useScrollToTop";
import { stack, featuredProject } from "./data/projects";
import TechBadges from "./components/TechBadges";

const HomePage = () => {
  useScrollToTop();

  return (
    <main className="max-w-5xl mx-auto px-6">
      <section className="pt-16 pb-12 grid md:grid-cols-[1.6fr_1fr] gap-10 items-start">
        <div>
          <p className="font-mono text-sm text-accent mb-4">Cloud / DevOps engineer · Melbourne</p>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-4">
            I make infrastructure boring — in the good way.
          </h1>
          <p className="text-ink-muted text-lg mb-3">
            Automated, observable, version-controlled. No 2&nbsp;a.m. surprises.
          </p>
          <p className="font-mono text-sm text-ink-faint border-l-2 border-accent pl-3 mb-8">
            // yes, my degree is in film. long story — ask me about it.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-accent text-accent-ink font-medium text-sm px-5 py-2.5 rounded-md hover:opacity-90"
            >
              See what I&apos;ve shipped
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href="https://github.com/HongyuanE"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-hair text-ink text-sm px-5 py-2.5 rounded-md hover:border-ink-muted"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="bg-surface border border-hair rounded-xl p-5">
          <p className="text-xs uppercase tracking-wide text-ink-faint mb-3">Currently live</p>
          <p className="flex items-center gap-2 text-ink font-medium mb-1">
            <span className="w-2 h-2 rounded-full bg-live inline-block" aria-hidden="true" />
            {featuredProject.name}
          </p>
          <p className="text-ink-muted text-sm mb-4 leading-relaxed">{featuredProject.tagline}</p>
          <p className="font-mono text-xs text-ink-faint mb-4">
            {featuredProject.tech.slice(0, 4).map((t) => t.toLowerCase()).join(" · ")}
          </p>
          <a
            href={featuredProject.links[0].href}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-accent hover:underline"
          >
            {featuredProject.links[0].label} →
          </a>
        </aside>
      </section>

      <section className="py-10 border-t border-hair">
        <p className="text-xs uppercase tracking-wide text-ink-faint mb-4">What I work with</p>
        <TechBadges items={stack} />
      </section>

      <section className="py-10 border-t border-hair">
        <h2 className="text-2xl font-medium mb-4">What I do</h2>
        <p className="text-ink-muted leading-relaxed max-w-2xl">
          I&apos;m a Master of IT student going deep on cloud infrastructure, DevOps and site
          reliability. I like turning manual, fragile processes into automated, observable,
          version-controlled systems — and proving it with projects that actually run, not
          buzzwords on a slide.
        </p>
      </section>

      <section className="py-12 border-t border-hair text-center">
        <h2 className="text-2xl font-medium mb-3">Let&apos;s talk</h2>
        <p className="text-ink-muted mb-6">Grad roles, internships, or just infrastructure nerdery.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-ink font-medium text-sm px-5 py-2.5 rounded-md hover:opacity-90"
        >
          Get in touch
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
```

- [ ] **Step 2: Verify build + lint, then visual check**

Run: `npm run build` → no errors.
Run: `npm run lint` → no errors.
Run: `npm run dev`, open the local URL, confirm the home route renders: asymmetric hero, amber accents, live card, stack strip, no light/white theme remnants.

- [ ] **Step 3: Commit**

```bash
git add src/HomePage.tsx
git commit -m "feat: rebuild home page (asymmetric hero, live card, dark theme)"
```

---

## Task 5: Projects page

**Files:**
- Create: `src/ProjectsPage.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `src/ProjectsPage.tsx`**

```tsx
import useScrollToTop from "./useScrollToTop";
import { cloudProjects, featuredProject } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

const ProjectsPage = () => {
  useScrollToTop();
  const others = cloudProjects.filter((p) => p.slug !== featuredProject.slug);

  return (
    <main className="max-w-5xl mx-auto px-6 pt-16 pb-16">
      <h1 className="text-4xl font-medium mb-2">Projects</h1>
      <p className="text-ink-muted mb-10 max-w-2xl">
        Real, running infrastructure — not toy repos. Each one is something I built end-to-end and
        can walk you through.
      </p>

      <div className="mb-6">
        <ProjectCard project={featuredProject} featured />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {others.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <p className="text-ink-faint text-sm mt-10 font-mono">
        // more landing as I build them — k8s + observability next.
      </p>
    </main>
  );
};

export default ProjectsPage;
```

Note: with current data, `cloudProjects` is just ourcafe-backend, so `others` is empty and only the featured card shows — correct. The grid is ready for future cloud projects.

- [ ] **Step 2: Wire the route in `src/App.tsx`**

Add the import near the other page imports:

```tsx
import ProjectsPage from './ProjectsPage';
```

Add the route inside `<Routes>` (after the home route):

```tsx
<Route path="/projects" element={<ProjectsPage />} />
```

- [ ] **Step 3: Verify build + lint + visual**

Run: `npm run build` → no errors.
Run: `npm run lint` → no errors.
Run: `npm run dev`, visit `/#/projects`, confirm the featured ourcafe-backend card with live link renders.

- [ ] **Step 4: Commit**

```bash
git add src/ProjectsPage.tsx src/App.tsx
git commit -m "feat: projects page featuring live ourcafe-backend"
```

---

## Task 6: Game dev page (curated)

**Files:**
- Create: `src/GameDevPage.tsx`
- Modify: `src/App.tsx`
- Delete: `src/GameWorksPage.tsx`

- [ ] **Step 1: Create `src/GameDevPage.tsx`**

```tsx
import useScrollToTop from "./useScrollToTop";
import { gameProjects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

const GameDevPage = () => {
  useScrollToTop();

  return (
    <main className="max-w-5xl mx-auto px-6 pt-16 pb-16">
      <h1 className="text-4xl font-medium mb-2">Game dev</h1>
      <p className="text-ink-muted mb-2 max-w-2xl">Where I learned to ship.</p>
      <p className="text-ink-muted mb-10 max-w-2xl leading-relaxed">
        Before the cloud stuff, I built and released games in Unity and C#. It&apos;s where I got
        used to owning something from an empty project to a thing real people run — the same
        instinct I now point at infrastructure.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {gameProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
};

export default GameDevPage;
```

- [ ] **Step 2: Swap the route in `src/App.tsx`**

Remove:

```tsx
import GameWorksPage from './GameWorksPage';
```

Add:

```tsx
import GameDevPage from './GameDevPage';
```

Replace the route `<Route path="/game-works" element={<GameWorksPage />} />` with:

```tsx
<Route path="/game-dev" element={<GameDevPage />} />
```

- [ ] **Step 3: Delete the old page**

```bash
git rm src/GameWorksPage.tsx
```

- [ ] **Step 4: Verify build + lint + visual**

Run: `npm run build` → no errors.
Run: `npm run lint` → no errors.
Run: `npm run dev`, visit `/#/game-dev`, confirm SpaceSmasher + OurCafe cards render and the nav "Game dev" link works.

- [ ] **Step 5: Commit**

```bash
git add src/GameDevPage.tsx src/App.tsx
git commit -m "feat: curated game-dev page (framed as engineering origin)"
```

---

## Task 7: Experience page rewrite

**Files:**
- Modify: `src/ExperiencePage.tsx`

- [ ] **Step 1: Replace `src/ExperiencePage.tsx`**

```tsx
import useScrollToTop from "./useScrollToTop";

interface TimelineItem {
  period: string;
  title: string;
  detail: string;
}

const timeline: TimelineItem[] = [
  {
    period: "2025 – 2027",
    title: "Master of IT — Monash University",
    detail: "Focused on cloud infrastructure, DevOps and site reliability. Graduating 2027.",
  },
  {
    period: "2025 – now",
    title: "Cloud project — ourcafe-backend (live)",
    detail:
      "Designed and shipped a live serverless backend on AWS: API Gateway, Lambda, DynamoDB, all in Terraform, deployed by a secretless GitHub OIDC pipeline.",
  },
  {
    period: "2023 – 2025",
    title: "Game developer — Unity / C#",
    detail:
      "Built and released cross-platform games end-to-end. Learned to own systems from empty project to shipped release — the engineering habit I now apply to infrastructure.",
  },
  {
    period: "2019 – 2023",
    title: "BA, Theatre & Film Studies — McMaster University",
    detail: "Where the storytelling and user-empathy come from. The one-line origin, not the focus.",
  },
];

const skills: string[] = [
  "AWS (Lambda, API Gateway, DynamoDB)",
  "Terraform (IaC)",
  "Docker",
  "Kubernetes",
  "CI/CD — GitHub Actions, OIDC",
  "Python",
  "Linux / Bash",
  "Observability — Prometheus, Grafana",
  "Systems & C# (game dev)",
];

const ExperiencePage = () => {
  useScrollToTop();

  return (
    <main className="max-w-5xl mx-auto px-6 pt-16 pb-16">
      <h1 className="text-4xl font-medium mb-10">Experience &amp; skills</h1>

      <div className="grid md:grid-cols-[2fr_1fr] gap-12">
        <div>
          <h2 className="text-2xl font-medium mb-8">Timeline</h2>
          <ol className="list-none p-0 m-0 space-y-8">
            {timeline.map((item) => (
              <li key={item.title} className="border-l-2 border-hair pl-5">
                <p className="font-mono text-xs text-accent mb-1">{item.period}</p>
                <h3 className="text-lg font-medium text-ink mb-1">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-8">Skills</h2>
          <ul className="list-none p-0 m-0 space-y-3">
            {skills.map((s) => (
              <li key={s} className="text-ink-muted text-sm border-b border-hair pb-2">
                {s}
              </li>
            ))}
          </ul>
          <p className="text-ink-faint text-xs mt-6 font-mono">
            // certs in progress: AWS CCP → SAA.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ExperiencePage;
```

- [ ] **Step 2: Verify build + lint + visual**

Run: `npm run build` → no errors.
Run: `npm run lint` → no errors.
Run: `npm run dev`, visit `/#/experience`, confirm the cloud-first timeline and skills; no music/scriptwriting/film-production bullets remain.

- [ ] **Step 3: Commit**

```bash
git add src/ExperiencePage.tsx
git commit -m "feat: rewrite experience page cloud/DevOps-first"
```

---

## Task 8: Contact page + remove Film Works + final route cleanup

**Files:**
- Modify: `src/ContactPage.tsx`
- Modify: `src/App.tsx`
- Delete: `src/FilmWorksPage.tsx`

- [ ] **Step 1: Replace `src/ContactPage.tsx`**

```tsx
import { Mail, Github, Linkedin } from "lucide-react";
import useScrollToTop from "./useScrollToTop";

interface Channel {
  label: string;
  value: string;
  href: string;
  icon: typeof Mail;
}

const channels: Channel[] = [
  { label: "Email", value: "hongyuane@gmail.com", href: "mailto:hongyuane@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/HongyuanE", href: "https://github.com/HongyuanE", icon: Github },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/", icon: Linkedin },
];

const ContactPage = () => {
  useScrollToTop();

  return (
    <main className="max-w-5xl mx-auto px-6 pt-16 pb-16">
      <h1 className="text-4xl font-medium mb-2">Contact</h1>
      <p className="text-ink-muted mb-10 max-w-2xl">
        Open to Cloud / DevOps / SRE internships and 2027 graduate roles across Australia and New
        Zealand. The fastest way to reach me is email.
      </p>

      <ul className="list-none p-0 m-0 grid sm:grid-cols-2 gap-4 max-w-2xl">
        {channels.map((c) => {
          const Icon = c.icon;
          return (
            <li key={c.label}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-surface border border-hair rounded-xl p-4 hover:border-ink-muted"
              >
                <Icon size={20} className="text-accent" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-ink-faint">{c.label}</span>
                  <span className="block text-sm text-ink">{c.value}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ContactPage;
```

Note: the LinkedIn URL is a placeholder root; if the real profile URL is known at build time, substitute it. This is intentional — it matches the profile README's own open LinkedIn placeholder.

- [ ] **Step 2: Remove Film Works from `src/App.tsx`**

Remove the import:

```tsx
import FilmWorksPage from './FilmWorksPage';
```

Remove the route:

```tsx
<Route path="/film-works" element={<FilmWorksPage />} />
```

The final `src/App.tsx` routes block must be exactly:

```tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/projects" element={<ProjectsPage />} />
  <Route path="/game-dev" element={<GameDevPage />} />
  <Route path="/experience" element={<ExperiencePage />} />
  <Route path="/contact" element={<ContactPage />} />
</Routes>
```

- [ ] **Step 3: Delete the Film Works page**

```bash
git rm src/FilmWorksPage.tsx
```

- [ ] **Step 4: Verify build + lint + visual**

Run: `npm run build` → no errors.
Run: `npm run lint` → no errors.
Run: `npm run dev`, click every nav link (Home, Projects, Game dev, Experience, Contact) and the mobile menu toggle; confirm no dead routes and no film/game-developer identity in primary copy.

- [ ] **Step 5: Commit**

```bash
git add src/ContactPage.tsx src/App.tsx
git commit -m "feat: rewrite contact page; remove Film Works route"
```

---

## Task 9: Final verification + deploy

**Files:** none (build + deploy only)

- [ ] **Step 1: Clean full build**

Run: `npm run build`
Expected: `tsc` passes, `vite build` writes `dist/`, no errors or warnings that fail the run.

- [ ] **Step 2: Lint clean**

Run: `npm run lint`
Expected: no errors (`--max-warnings 0`).

- [ ] **Step 3: Preview the production build**

Run: `npm run preview`
Open the preview URL. Confirm all five routes render correctly from the built bundle and that relative `./assets/...` references (if any image is used on Game dev/Contact) resolve under the `/hongyuan-portfolio/` base path.

- [ ] **Step 4: Deploy to GitHub Pages**

Verify `gh-pages` is available (it is referenced by the `deploy` script but not in devDependencies):

Run: `npx gh-pages --version`
If it errors, run: `npm install --save-dev gh-pages` and commit the `package.json`/lockfile change with message `chore: add gh-pages dev dependency`.

Then deploy:

Run: `npm run deploy`
Expected: publishes `dist/` to the `gh-pages` branch.

- [ ] **Step 5: Verify the live site**

Open `https://hongyuane.github.io/hongyuan-portfolio` and confirm the repositioned site is live: dark navy theme, DevOps hero, live ourcafe-backend link works. (Allow a minute for Pages to propagate.)

- [ ] **Step 6: Final commit / branch state**

Ensure the working tree is clean:

Run: `git status`
Expected: clean. The feature branch `redesign-devops-portfolio` now holds the full redesign, ready to merge to `main`.

---

## Self-review notes

- **Spec coverage:** visual system → Task 1; single-source data → Task 2; Navigation mobile-toggle fix + reusable card → Task 3; asymmetric hero + voice + live card + stack strip → Task 4; Projects (ourcafe-backend hero, room for k8s) → Task 5; curated Game dev → Task 6; cloud-first Experience + new skills → Task 7; Contact (email/GitHub/LinkedIn, WeChat dropped) + Film Works deletion + nav locked → Task 8; build/verify/deploy → Task 9. All spec sections mapped.
- **Placeholders:** the two intentional, spec-noted placeholders are the LinkedIn URL (mirrors the profile README's open placeholder) and the empty future-projects grid on Projects (deliberate, ready for k8s work). No unresolved TODOs in code.
- **Type consistency:** `Project`/`ProjectStatus`/`ProjectCategory` defined in Task 2 are used consistently in `ProjectCard` (Task 3) and the pages; `featuredProject`, `cloudProjects`, `gameProjects`, `stack` names match across tasks; route paths (`/projects`, `/game-dev`) match nav links in Task 3.
