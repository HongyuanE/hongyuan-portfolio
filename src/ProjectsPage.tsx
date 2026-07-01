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
