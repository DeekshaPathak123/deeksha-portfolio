import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { skills, headlines } from "../data/resume";

export default function Skills() {
  const h = headlines.skills;

  return (
    <section id="skills" className="section">
      <SectionHead num={h.num} eyebrow={h.eyebrow} line1={h.line1} line2={h.line2} />

      <div className="skills-list">
        {skills.map((cat, i) => (
          <Reveal key={cat.category} delay={i * 0.08} className="skill-row">
            <span className="skill-row__num mono">0{i + 1}</span>
            <h3 className="skill-row__title">{cat.category}</h3>
            <div className="chip-row skill-row__chips">
              {cat.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
