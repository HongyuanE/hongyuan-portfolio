# Portfolio repositioning — design spec

**Date:** 2026-06-26
**Repo:** `HongyuanE/hongyuan-portfolio` (cloned at `old-portfolio/`)
**Branch:** `redesign-devops-portfolio`

## Goal

Reposition the personal portfolio site from its current identity — *Independent Game
Developer / Film & Theatre graduate* — to **Cloud / DevOps / SRE engineer**, targeting
AU/NZ graduate recruiters who skim a portfolio in ~20 seconds. The site must read as
*experienced and well-made* on first glance, signal the right technical keywords, and
carry enough genuine human voice that it does not feel templated/AI-generated — while
staying tasteful enough that a conservative HR reader is reassured, not put off.

This is a **reskin + rewrite**, not a re-architecture. Keep the existing stack and
deployment model.

## Constraints / guardrails

- Stack stays: **React + TypeScript + Vite + Tailwind**, **HashRouter**, deployed to
  **GitHub Pages**. Asset references stay relative (`./assets/...`) so Pages serves them.
- Messaging must match the profile README and the AU/NZ market research: lead with
  **AWS, Terraform, Docker, Kubernetes, CI/CD (GitHub Actions/OIDC), Python**.
- **Authenticity over inflation.** One real, live flagship (`ourcafe-backend`) carries the
  site. No invented experience. Game-dev past is reframed as engineering, not hidden, not
  centered.
- Personality lives in **copy and small craft details**, never in loud/neon visuals.

## Locked decisions (from brainstorming)

1. **Creative-past framing:** engineer-first; the film/game background appears as a single
   memorable differentiator line (a code-comment-style aside) plus a curated Game dev page.
   No Film Works section or page.
2. **Visual direction (C — "modern dev-tool"):** deep navy base, off-white text, single
   warm **amber** accent, green "live" indicator. Flat, generous spacing, 0.5px borders.
   Mono font reserved for code/tech tags and asides.
3. **Personality level:** "human but restrained." Headlines have a point of view (e.g.
   *"I make infrastructure boring — in the good way."*); one code-comment aside reveals the
   film background charmingly (`// yes, my degree is in film. long story — ask me about it.`).
   Confident, not quirky. No drama.
4. **Hero:** text-only (no portrait), **asymmetric** — copy on the left, an annotated
   "Currently live" card (ourcafe-backend) on the right. Not dead-centered, not a row of
   identical cards.
5. **Game dev page:** curated to the engineering story — keep **SpaceSmasher** (shipped,
   cross-platform) and **OurCafe** (ties to the live backend), each framed around what was
   *built/engineered*. Drop the weaker projects. Drop Le Ville Du Souvenir et al.
6. **Portrait:** not in hero; may appear on Contact.

## Visual system (tokens)

| Token | Value | Use |
|---|---|---|
| `bg` | `#0b1220` | page background |
| `surface` | `#111a2e` | cards |
| `border` | `#1e293b` | hairline borders |
| `text` | `#f1f5f9` | primary text |
| `text-muted` | `#94a3b8` | secondary text |
| `text-faint` | `#5b6b8a` | code-comment asides |
| `accent` | `#EF9F27` | amber accent (eyebrows, CTAs, rules) |
| `accent-ink` | `#412402` | text on amber fills |
| `live` | `#34d399` | green "live" dot |

- Fonts: a clean sans for UI/body (keep Rajdhani or swap to Inter — implementer's call,
  minor), `var(--font-mono)`/JetBrains-style mono for tech tags and asides.
- Tailwind config gets these as named colors so usage stays semantic.

## Structure (nav locked)

Multi-page, HashRouter. Nav: **Home · Projects · Game dev · Experience · Contact**.

- **Delete** the Film Works page and its route.
- **Rename** Game Works → "Game dev".
- **Add** a Projects page/route.

## Pages

### Home
- Asymmetric hero: eyebrow (`Cloud / DevOps engineer · Melbourne`), headline with a point of
  view, one-line value sub ("Automated, observable, version-controlled. No 2 a.m.
  surprises."), the film code-comment aside, two CTAs (See what I've shipped / GitHub);
  right column = "Currently live" annotated ourcafe-backend card (green dot, one-line
  description, mono stack line).
- Below hero: a compact **tech-stack strip** (AWS · Terraform · Docker · K8s · GitHub
  Actions · Python) and a short "what I do" paragraph (turning fragile manual processes into
  reliable systems).
- Footer contact CTA.

### Projects
- Hero card: **ourcafe-backend** — problem → architecture (API Gateway · Lambda · DynamoDB,
  Terraform, secretless OIDC CI/CD) → live leaderboard link → repo link. Frame the "why"
  (the ADR/seniority signal).
- Second card: **SpaceSmasher** — shipped, cross-platform, end-to-end.
- Layout leaves room to add future flagships (k8s/observability) without redesign.

### Game dev
- One-line framing ("Where I learned to ship.").
- Two curated entries — SpaceSmasher, OurCafe — each framed around engineering (systems,
  C#, build/release), not art.

### Experience
- Timeline rewritten to lead with cloud/DevOps: Monash MIT (graduating 2027) →
  ourcafe-backend (live cloud project) → game dev framed as engineering origin → film degree
  as a one-line root, not a focus.
- Skills list replaced: AWS, Terraform, Docker, Kubernetes, CI/CD (GitHub Actions, OIDC),
  Python, Linux/Bash, observability (Prometheus/Grafana); game dev as "systems & C#";
  creative skills compressed to a single line. No music/scriptwriting/film-production bullets.

### Contact
- Primary: email, GitHub, LinkedIn. Relegate/drop WeChat. Portrait may appear here.

## Components

- `Navigation` (exists) — update links, restyle to dark theme, **fix the mobile menu**
  (currently a dead "Menu" button → working toggle).
- `ProjectCard` — reusable card for Projects/Game dev (title, status pill, description,
  tech tags, links).
- `TechBadge` / stack strip — small mono pills.
- Tailwind theme — the tokens above as named colors.
- Each page stays its own file (matches current layout).

## Out of scope (YAGNI)

No CMS, no animation library, no blog, no light/dark toggle (dark by design), no backend
changes, no new game assets.

## Testing / verification

- `npm run build` completes clean (no TS/lint errors).
- Manual visual pass of all five routes in `npm run dev`.
- Confirm relative `./assets/...` paths still resolve under the Pages base path.
- Deploy to GitHub Pages and spot-check the live URL.

## Success criteria

- A recruiter skimming the homepage in 20s comes away with: "Cloud/DevOps engineer, has a
  real live AWS project, Melbourne, grad 2027."
- The site reads as hand-made and confident, not templated; the film background lands as a
  charming differentiator, not a red flag.
- Zero references to the old "game developer / film graduate" identity in primary copy.
