import { profile } from "../data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-5 py-10 grid gap-6 sm:grid-cols-3">
        {/* Brand */}
        <div>
          <div
            className="text-lg font-extrabold"
            style={{
              background:
                "linear-gradient(90deg, var(--brand), color-mix(in oklab, var(--brand) 45%, #a855f7))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.name}
          </div>
          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            Full-Stack MERN Developer — building reliable, secure, and beautiful
            web apps.
          </p>
        </div>

        {/* Quick links */}
        <nav className="text-sm">
          <div className="font-semibold mb-2" style={{ color: "var(--ink)" }}>
            Explore
          </div>
          <ul className="space-y-1">
            {[
              ["#projects", "Projects"],
              ["#skills", "Skills"],
              ["#certifications", "Certifications"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  className="hover:underline"
                  href={href}
                  style={{ color: "var(--muted)" }}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="hover:underline"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--muted)" }}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Socials */}
        <div className="text-sm">
          <div className="font-semibold mb-2" style={{ color: "var(--ink)" }}>
            Connect
          </div>
          <ul className="space-y-2">
            <li>
              <a
                className="inline-flex items-center gap-2 hover:opacity-90"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--muted)" }}
              >
                <Github size={16} /> GitHub
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 hover:opacity-90"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--muted)" }}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 hover:opacity-90"
                href={`mailto:${profile.email}`}
                style={{ color: "var(--muted)" }}
              >
                <Mail size={16} /> {profile.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800">
        <div
          className="max-w-6xl mx-auto px-5 py-6 text-center text-xs"
          style={{ color: "var(--muted)" }}
        >
          © {new Date().getFullYear()} {profile.name}. Built with React,
          TailwindCSS & Framer Motion.
        </div>
      </div>
    </footer>
  );
}
