import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { Menu, X } from "lucide-react";

function NavItem({ href, label, active }) {
  return (
    <div className="relative group">
      <a
        href={href}
        className={`px-0.5 transition-colors hover:text-indigo-600 ${
          active ? "text-indigo-600 font-semibold" : ""
        }`}
      >
        {label}
      </a>
      {/* sliding underline (desktop only) */}
      <span
        className={`hidden sm:block pointer-events-none absolute -bottom-1 h-0.5 bg-indigo-600 transition-all duration-300 ${
          active
            ? "left-0 w-full"
            : "left-1/2 -translate-x-1/2 w-0 group-hover:w-8"
        }`}
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // IntersectionObserver scrollspy
    const ids = ["projects", "skills", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (els.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
        },
        { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0.01 }
      );
      els.forEach((el) => io.observe(el));
      return () => {
        window.removeEventListener("scroll", onScroll);
        els.forEach((el) => io.unobserve(el));
        io.disconnect();
      };
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu when navigating
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 backdrop-blur border-b border-slate-200 transition-all ${
        scrolled ? "bg-white/90 shadow-md" : "bg-white/70"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          {profile.name}
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <NavItem href="#projects" label="Projects" active={active === "projects"} />
          <NavItem href="#skills" label="Skills" active={active === "skills"} />
          <NavItem href="#contact" label="Contact" active={active === "contact"} />
          <a
            href={profile.resume}
            download
            className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-slate-100"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col gap-2 text-sm">
            <a
              href="#projects"
              className={`py-2 ${active === "projects" ? "text-indigo-600 font-semibold" : ""}`}
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className={`py-2 ${active === "skills" ? "text-indigo-600 font-semibold" : ""}`}
              onClick={() => setOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className={`py-2 ${active === "contact" ? "text-indigo-600 font-semibold" : ""}`}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
            <a
              href={profile.resume}
              download
              className="mt-1 inline-block px-3 py-2 rounded-lg bg-indigo-600 text-white text-center"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
