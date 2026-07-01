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
