import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { education } from "../data/resume";

export default function Education() {
  return (
    <div className="credentials">
      <span className="credentials__label mono">Education</span>
      <div className="credentials__list">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.06} className="credential">
            <GraduationCap size={16} className="credential__icon" />
            <span className="credential__degree">{e.degree}</span>
            <span className="credential__school">{e.school}</span>
            <span className="credential__year mono">{e.year}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
