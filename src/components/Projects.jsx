import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import CodeMockup from "./CodeMockup";
import { projects, headlines } from "../data/resume";

export default function Projects() {
  const h = headlines.projects;

  return (
    <section id="projects" className="section">
      <SectionHead num={h.num} eyebrow={h.eyebrow} line1={h.line1} line2={h.line2} />

      {projects.map((p) => (
        <Reveal key={p.name} delay={0.1}>
          <div className="project-showcase">
            <div className="project-showcase__copy">
              <span className="project-showcase__tag mono">Featured build</span>
              <h3 className="project-showcase__name">{p.name}</h3>
              <p className="project-showcase__desc">{p.description}</p>
              <ul className="project-showcase__points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="chip-row">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-showcase__visual">
              <CodeMockup />
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
