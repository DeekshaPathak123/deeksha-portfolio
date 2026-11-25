import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Moon, Sun } from "lucide-react";
import { profile } from "../data/resume";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function useTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    let saved = "dark";
    try {
      saved = localStorage.getItem("dp_theme") || "dark";
    } catch {
      /* storage unavailable; keep default */
    }
    document.documentElement.setAttribute("data-theme", saved);
    setTheme(saved);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
    try {
      localStorage.setItem("dp_theme", next);
    } catch {
      /* storage unavailable; theme still applies for this session */
    }
  };

  return [theme, toggle];
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <button className="nav__brand" onClick={() => go("top")}>
          <span className="nav__mark">DP</span>
        </button>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <button key={l.id} className="nav__link" onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <button className="nav__icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <a className="nav__icon-btn" href="/Deeksha_P2026_resume.pdf" download aria-label="Download resume">
          <Download size={16} />
        </a>

        <a className="nav__cta" href={`mailto:${profile.email}`}>
          Say hello
          <span className="nav__cta-arrow">
            <ArrowUpRight size={14} />
          </span>
        </a>

        <button
          className="nav__burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <motion.div
          className="nav__mobile"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {LINKS.map((l) => (
            <button key={l.id} className="nav__mobile-link" onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
          <a className="nav__mobile-link" href="/Deeksha_P2026_resume.pdf" download>
            Download resume
          </a>
        </motion.div>
      )}
    </header>
  );
}
