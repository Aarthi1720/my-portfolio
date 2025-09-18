import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { profile } from "../data/profile";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-5 py-14 bg-white scroll-mt-24"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          Selected full-stack work (MERN) with real-world integrations.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {profile.projects.map((p) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl bg-white border border-slate-200 shadow-sm 
                       hover:shadow-lg transition-all overflow-hidden"
          >
            {/* cover */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-44 object-cover"
              loading="lazy"
              decoding="async"
              width="640"
              height="176"
            />

            {/* body */}
            <div className="p-5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                {p.href && (
                  <a
                    href={p.href}
                    className="shrink-0 text-[11px] px-3 py-1 rounded-full 
                               ring-1 ring-indigo-200 text-indigo-700 
                               hover:bg-indigo-50 transition-colors"
                  >
                    Case Study
                  </a>
                )}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.desc}
              </p>

              {/* tech pills */}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-3 py-1 rounded-full bg-slate-50 
                               text-slate-700 ring-1 ring-slate-200 
                               hover:bg-indigo-50 hover:text-indigo-700 hover:ring-indigo-200 
                               transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* links */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-indigo-600 hover:underline inline-flex items-center gap-1"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-slate-700 hover:underline inline-flex items-center gap-1"
                  >
                    GitHub <Github size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
