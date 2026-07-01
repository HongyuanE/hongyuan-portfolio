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
