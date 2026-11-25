import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import LinkedinIcon from "./icons/LinkedinIcon";
import { profile, headlines } from "../data/resume";

const HeroScene = lazy(() => import("./HeroScene"));

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export default function Hero() {
  const h = headlines.hero;
  const reducedMotion = useReducedMotion();

  return (
    <section id="top" className="hero">
      {!reducedMotion && (
        <div className="hero__scene" aria-hidden="true">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner">
        <motion.span
          className="hero__eyebrow mono"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero__eyebrow-dot" /> {h.eyebrow} · open to work
        </motion.span>

        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {h.line1}
          <br />
          <span className="line2">{h.line2}</span>
        </motion.h1>

        <motion.div
          className="hero__name-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <span className="hero__name">{profile.name}</span>
          <span className="hero__title">{profile.title}</span>
        </motion.div>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {h.sub}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Book a chat
            <span className="btn__arrow">
              <ArrowUpRight size={16} />
            </span>
          </a>
          <a className="btn btn--ghost" href="/Deeksha_P2026_resume.pdf" download>
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        <motion.div
          className="hero__meta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a className="hero__meta-item" href={`mailto:${profile.email}`}>
            <Mail size={14} /> {profile.email}
          </a>
          <a className="hero__meta-item" href={`tel:${profile.phone}`}>
            <Phone size={14} /> {profile.phone}
          </a>
          <a className="hero__meta-item" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon size={14} /> LinkedIn
          </a>
          <span className="hero__meta-item">
            <MapPin size={14} /> {profile.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
