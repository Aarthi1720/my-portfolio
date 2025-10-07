import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

function NavItem({ href, label }) {
  return (
    <a
      href={href}
      className={[
        "relative px-0.5 text-sm font-medium transition-colors",
        "text-slate-700 hover:text-indigo-600",
        "dark:text-slate-300 dark:hover:text-indigo-400",
      ].join(" ")}
    >
      {label}
      <span
        className={[
          "pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2",
          "bg-indigo-600 transition-all duration-300 group-hover:w-8",
          "dark:bg-indigo-400",
        ].join(" ")}
      />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    window.addEventListener("scroll", close, { passive: true });
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("scroll", close);
    };
  }, [open]);

  return (
    <nav
      className={[
        "sticky top-0 z-50 w-full transition-[box-shadow,background-color] duration-200",
        // ✅ base on tokens so surface always matches theme (no surprise blacks on mobile)
        "bg-slate-50/95 dark:bg-slate-900/90 supports-[backdrop-filter]:bg-[color:var(--panel)]/70 backdrop-blur",
        "border-b border-slate-200/70 dark:border-slate-700/60",
        elevated
          ? "shadow-[0_6px_20px_rgba(2,6,23,.12)] dark:shadow-[0_6px_28px_rgba(0,0,0,.35)]"
          : "shadow-none",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5 h-14 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400"
        >
          {profile.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="group">
            <NavItem href="#projects" label="Projects" />
          </div>
          <div className="group">
            <NavItem href="#skills" label="Skills" />
          </div>
          <div className="group">
            <NavItem href="#certifications" label="Certifications" />
          </div>
          <div className="group">
            <NavItem href="#contact" label="Contact" />
          </div>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className={[
              "inline-flex items-center rounded-lg px-3 py-2 font-semibold transition-colors",
              "border border-indigo-500/70 text-indigo-600 hover:bg-indigo-50",
              "dark:text-indigo-300 dark:hover:bg-indigo-500/10",
            ].join(" ")}
          >
            Resume
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg border transition-colors border-slate-300/70 hover:bg-slate-50 dark:border-slate-700/60 dark:hover:bg-slate-800"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden">
          <div className="px-4 sm:px-5 py-2 border-t border-slate-200 dark:border-slate-700 bg-[color:var(--panel)]/98">
            <nav className="grid gap-1 text-sm">
              {[
                ["#projects", "Projects"],
                ["#skills", "Skills"],
                ["#certifications", "Certifications"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 rounded-lg transition-colors text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {label}
                </a>
              ))}

              <div className="h-px my-2 bg-slate-200 dark:bg-slate-700" />

              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block text-center px-3 py-3 rounded-lg font-semibold border border-indigo-500/70 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-300 dark:hover:bg-indigo-500/10"
              >
                Resume
              </a>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
