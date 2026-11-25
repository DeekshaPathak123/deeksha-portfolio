import Reveal from "./Reveal";

export default function SectionHead({ num, eyebrow, line1, line2, sub, className = "" }) {
  return (
    <Reveal className={`section__head ${className}`}>
      <span className="section__numeral mono" aria-hidden="true">
        {num}
      </span>
      <span className="eyebrow mono">{eyebrow}</span>
      <h2 className="section__title">
        {line1}
        <span>{line2}</span>
      </h2>
      {sub && <p className="section__sub">{sub}</p>}
    </Reveal>
  );
}
