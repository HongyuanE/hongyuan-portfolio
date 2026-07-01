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
    slug: "ourcafe-guardrails",
    name: "OurCafe Guardrails",
    status: "live",
    tagline: "An AI barista you can try to jailbreak — and can't.",
    description:
      "A public 'try to break it' demo: a café NPC that stays in character through prompt injection, gaslighting, and off-menu manipulation. The system prompt and model are enforced server-side (a locked, cheap small model) — visitors can't see or change them. Live time-to-first-token and cost readouts make it reliability engineering applied to AI, not prompt-tinkering.",
    tech: ["AWS Lambda", "FastAPI", "SSE streaming", "LLM guardrails", "TypeScript"],
    links: [
      { label: "Try to break it", href: "https://hongyuane.github.io/ourcafe-guardrails/" },
      { label: "Backend", href: "https://github.com/HongyuanE/ourcafe-backend" },
      { label: "Frontend", href: "https://github.com/HongyuanE/ourcafe-guardrails" },
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
