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
