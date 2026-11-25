import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="mono">{profile.name} · built with React</span>
      <span className="mono">© {new Date().getFullYear()}</span>
    </footer>
  );
}
