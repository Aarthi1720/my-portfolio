import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import TechPills from "./TechPills";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  viewport: { once: true, amount: 0.2 },
};

function toSlug(str = "") {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-5 py-16 scroll-mt-24"
    >
      <motion.h2
        {...fade}
        className="text-3xl sm:text-[40px] text-center font-extrabold leading-tight"
        style={{ color: "var(--ink)" }}
      >
        My Projects
      </motion.h2>

      <div className="mt-8 space-y-8">
        {profile.projects.map((p) => {
          const slug = p.href ? p.href.split("/").pop() : toSlug(p.title);
          const caseStudyUrl = `/project/${slug}`;

          return (
            <motion.article
              key={p.title}
              {...fade}
              className="theme-card relative overflow-hidden"
            >
              {/* Case Study badge — consistent top-right for ALL sizes */}
              <Link
                to={caseStudyUrl}
                className="absolute top-4 right-4 z-10 text-[11px] px-3 py-1 rounded-full font-medium transition-all"
                style={{
                  color: "var(--brand)",
                  border:
                    "1px solid color-mix(in oklab, var(--brand) 35%, transparent)",
                  background:
                    "color-mix(in oklab, var(--brand) 10%, transparent)",
                }}
              >
                Case Study
              </Link>

              {/* Reserve space under the badge on small screens to prevent overlap */}
              <div className="p-5 md:p-6 pt-12 md:pt-6 flex flex-col md:flex-row gap-5 md:gap-6">
                {/* Thumbnail */}
                <Link
                  to={caseStudyUrl}
                  className="block w-full md:w-[320px] shrink-0"
                >
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    className="w-full h-44 md:h-[180px] object-cover rounded-lg border border-slate-300/40 dark:border-slate-700/60"
                    loading="lazy"
                  />
                </Link>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Link
                    to={caseStudyUrl}
                    className="text-[20px] sm:text-[22px] font-semibold hover:opacity-90"
                    style={{ color: "var(--ink)" }}
                  >
                    {p.title}
                  </Link>

                  <div className="mt-2">
                    <TechPills items={p.tech} initial={6} />
                  </div>

                  <p
                    className="mt-3 text-[14px] leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.desc}
                  </p>

                  {/* Actions */}
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {!!p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full px-3 py-[7px] text-[13px]"
                        style={{
                          background: "var(--brand)",
                          color: "#fff",
                          boxShadow: "0 1px 0 rgba(2,6,23,.05)",
                        }}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}

                    {!!p.frontendUrl && (
                      <a
                        href={p.frontendUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full px-3 py-[7px] text-[13px]"
                        style={{
                          border: "1px solid rgba(148,163,184,.35)",
                          background:
                            "color-mix(in oklab, var(--panel) 92%, transparent)",
                          color: "var(--ink)",
                        }}
                      >
                        <Github size={14} />
                        Open Frontend
                      </a>
                    )}

                    {!!p.backendUrl && (
                      <a
                        href={p.backendUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full px-3 py-[7px] text-[13px]"
                        style={{
                          border: "1px solid rgba(148,163,184,.35)",
                          background:
                            "color-mix(in oklab, var(--panel) 92%, transparent)",
                          color: "var(--ink)",
                        }}
                      >
                        <Github size={14} />
                        Open Backend
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
