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
