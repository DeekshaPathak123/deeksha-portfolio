import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Education from "./Education";
import { about, headlines } from "../data/resume";

export default function About() {
  const h = headlines.about;

  return (
    <section id="about" className="section">
      <SectionHead num={h.num} eyebrow={h.eyebrow} line1={h.line1} line2={h.line2} />

      <div className="about-grid">
        <Reveal delay={0.1} className="about-copy">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="about-stats">
          {about.stats.map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-card__value mono">{s.value}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>

      <Education />
    </section>
  );
}
