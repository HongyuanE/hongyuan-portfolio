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
