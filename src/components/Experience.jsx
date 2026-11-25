import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { experience, headlines } from "../data/resume";

export default function Experience() {
  const h = headlines.experience;

  return (
    <section id="experience" className="section">
      <SectionHead num={h.num} eyebrow={h.eyebrow} line1={h.line1} line2={h.line2} />

      <div className="timeline">
        <div className="timeline__spine" aria-hidden="true" />
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1} className="timeline__row">
            <div className="timeline__marker">
              <span className={`timeline__dot ${job.current ? "timeline__dot--live" : ""}`} />
            </div>
            <div className="job-card">
              <div className="job-card__head">
                <h3 className="job-card__company">{job.company}</h3>
                <p className="job-card__role">{job.role}</p>
                <div className="job-card__when">
                  <span className={`badge ${job.current ? "badge--live" : ""} mono`}>
                    {job.start} — {job.end}
                  </span>
                  <span className="job-card__location">{job.location}</span>
                </div>
              </div>

              <div>
                <ul className="job-card__points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                <div className="chip-row">
                  {job.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
