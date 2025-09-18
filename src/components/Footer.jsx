import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-5 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React, TailwindCSS & Framer Motion.
      </div>
    </footer>
  );
}
