import { useState } from "react";
import { Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import LinkedinIcon from "./icons/LinkedinIcon";
import { profile, headlines } from "../data/resume";

function CopyRow({ icon, label, value, href, copyValue, external }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue ?? value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable; ignore */
    }
  };

  return (
    <div className="contact-row">
      <a
        className="contact-row__main"
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        <span className="contact-row__icon">{icon}</span>
        <span>
          <span className="contact-row__label mono">{label}</span>
          <span className="contact-row__value">{value}</span>
        </span>
      </a>
      <button className="contact-row__copy" onClick={copy} aria-label={`Copy ${label}`}>
        {copied ? <Check size={15} /> : <Copy size={15} />}
      </button>
    </div>
  );
}

export default function Contact() {
  const h = headlines.contact;

  return (
    <section id="contact" className="section">
      <SectionHead num={h.num} eyebrow={h.eyebrow} line1={h.line1} line2={h.line2} sub={h.sub} />

      <Reveal delay={0.1} className="contact-card">
        <CopyRow
          icon={<Mail size={18} />}
          label="Email"
          value={profile.email}
          href={`mailto:${profile.email}`}
        />
        <CopyRow
          icon={<Phone size={18} />}
          label="Phone"
          value={profile.phone}
          href={`tel:${profile.phone}`}
        />
        <CopyRow
          icon={<LinkedinIcon size={18} />}
          label="LinkedIn"
          value="deeksha-pathak-webdeveloper"
          copyValue={profile.linkedin}
          href={profile.linkedin}
          external
        />
        <div className="contact-row">
          <span className="contact-row__main">
            <span className="contact-row__icon">
              <MapPin size={18} />
            </span>
            <span>
              <span className="contact-row__label mono">Location</span>
              <span className="contact-row__value">{profile.location}</span>
            </span>
          </span>
        </div>
      </Reveal>
    </section>
  );
}
