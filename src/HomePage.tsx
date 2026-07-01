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
