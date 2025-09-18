import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, amount: 0.2 },
};

const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent("Hiring opportunity")}&body=${encodeURIComponent(
  "Hi Aarthi,"
)}`;

export default function Hero() {
  return (
    <header className="text-center py-16 px-5">
      <motion.h1
        {...fade}
        className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-800"
      >
        Full Stack MERN Developer
      </motion.h1>

      <motion.p
        {...fade}
        className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto"
      >
        Building scalable apps with secure flows and modern UI/UX.
      </motion.p>

      {/* Buttons: stack on mobile, row on sm+ */}
      <motion.div
        {...fade}
        className="mt-6 flex flex-col sm:flex-row justify-center gap-3"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 text-center"
        >
          View Projects
        </a>

        {/* Open Gmail compose (no Outlook) */}
        <a
          href={gmailCompose}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-lg border border-slate-300 hover:bg-slate-100 text-center"
        >
          Hire Me
        </a>

        {/* View résumé in a new tab */}
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-center"
        >
          View Resume
        </a>
      </motion.div>

      {/* Socials */}
      <motion.div
        {...fade}
        className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm flex-wrap"
      >
        <a
          className="hover:text-indigo-600 inline-flex items-center gap-1"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          className="hover:text-indigo-600 inline-flex items-center gap-1"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a
          className="hover:text-indigo-600 inline-flex items-center gap-1 break-all"
          href={gmailCompose}
          target="_blank"
          rel="noreferrer"
        >
          <Mail size={16} /> {profile.email}
        </a>
      </motion.div>

      {/* Stats: stack on mobile, row on sm+ */}
      <motion.div
        {...fade}
        className="mt-8 inline-flex flex-col sm:flex-row gap-6 sm:gap-8 px-6 py-4 rounded-2xl bg-white shadow border border-slate-200"
      >
        {profile.stats.map((s) => (
          <div key={s.label} className="text-left">
            <p className="text-2xl sm:text-3xl font-extrabold">{s.value}</p>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>
    </header>
  );
}
