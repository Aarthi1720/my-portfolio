import { profile } from "../data/profile";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}&su=${encodeURIComponent("Hiring Opportunity")}`;

  return (
    <section className="relative isolate overflow-hidden bg-hero text-center px-5 py-24 sm:py-32">
      {/* soft overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, color-mix(in oklab, var(--panel) 6%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Headline */}
        <h1
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
          style={{ color: "var(--ink)" }}
        >
          Full-Stack <span style={{ color: "var(--brand)" }}>MERN</span> Developer
        </h1>

        {/* Subheadline */}
        <p
          className="mt-6 text-lg sm:text-xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          I design and ship <strong>production-ready web apps</strong> with clean,
          accessible interfaces, <strong>secure APIs</strong>, and scalable data flows.
          Focused on authentication, payments, file handling, and dashboards that feel
          fast, modern, and trustworthy.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          {/* Primary button */}
          <a
            href="#projects"
            className="btn btn-brand inline-flex items-center justify-center gap-2"
          >
            View Projects <ArrowRight size={18} />
          </a>

          {/* Matching Download button — styled like secondary brand variant */}
          <a
            href={profile.resume}
            download="AarthiR-Resume.pdf"
            className="btn btn-outline inline-flex items-center justify-center gap-2 border-[1.5px]
                       border-[color-mix(in oklab,var(--brand) 55%,transparent)]
                       text-[color-mix(in oklab,var(--brand) 85%,var(--ink))]
                       hover:bg-[color-mix(in oklab,var(--brand) 12%,transparent)]
                       hover:text-[var(--brand)]
                       transition-all duration-200"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Socials */}
        <div
          className="mt-8 flex items-center justify-center flex-wrap gap-6 text-sm"
          style={{ color: "var(--muted)" }}
        >
          <a
            aria-label="GitHub Profile"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-90"
            style={{ color: "var(--brand)" }}
          >
            <Github size={16} /> GitHub
          </a>

          <a
            aria-label="LinkedIn Profile"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-90"
            style={{ color: "var(--brand)" }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>

          <a
            aria-label="Send Email"
            href={gmail}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-90"
            style={{ color: "var(--brand)" }}
          >
            <Mail size={16} /> {profile.email}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {profile.stats.map((s) => (
            <div key={s.label} className="glass p-4 shadow-md rounded-2xl">
              <p className="text-3xl font-extrabold" style={{ color: "var(--ink)" }}>
                {s.value}
              </p>
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--muted)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
