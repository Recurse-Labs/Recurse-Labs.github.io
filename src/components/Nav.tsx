import { useState } from "react";
import StarButton from "./StarButton";

const LINKS = [
  { href: "#workspace", label: "Workspace" },
  { href: "#analysis", label: "Analysis" },
  { href: "#memory", label: "Memory" },
  { href: "#engines", label: "Engines" },
  { href: "#deploy", label: "Deploy" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav" id="top">
      <div className="wrap nav-inner">
        <a className="brand" href="#top" aria-label="Recurse Labs, home">
          <span className="brand-mark">RECURSE</span>
          <span className="brand-sub">Labs</span>
        </a>

        <nav className="links" aria-label="Sections">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <StarButton className="only-desktop" />
          <a className="btn primary sm" href="#install">
            Download
          </a>
          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://github.com/Recurse-Labs" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      ) : null}
    </header>
  );
}
