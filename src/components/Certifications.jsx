import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { Award, X, ExternalLink } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, amount: 0.2 },
};

export default function Certifications() {
  const [openSrc, setOpenSrc] = useState(null);

  // Close on Esc and lock body scroll when modal is open
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenSrc(null);
    }
    if (openSrc) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openSrc]);

  const list = Array.isArray(profile.certifications)
    ? profile.certifications
    : [];

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-5 py-16 scroll-mt-24">
      <motion.h2
        {...fade}
        className="text-3xl font-extrabold text-center tracking-tight"
        style={{ color: "var(--ink)" }}
      >
        Certifications
      </motion.h2>

      <motion.p
        {...fade}
        className="mt-2 text-center text-[15px]"
        style={{ color: "var(--muted)" }}
      >
        Verified credentials that reflect production-grade engineering skills.
      </motion.p>

      {list.length === 0 ? (
        <motion.div
          {...fade}
          className="mt-8 theme-card p-6 text-center"
          style={{ color: "var(--muted)" }}
        >
          No certifications added yet.
        </motion.div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <motion.div
              key={c.title}
              {...fade}
              className="theme-card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div
                className="mx-auto w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "color-mix(in oklab, var(--brand) 12%, transparent)" }}
                aria-hidden="true"
              >
                <Award size={20} style={{ color: "var(--brand)" }} />
              </div>

              <h3 className="mt-3 font-semibold" style={{ color: "var(--ink)" }}>
                {c.title}
              </h3>

              {c.issuer && (
                <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                  {c.issuer}
                </p>
              )}

              <div className="mt-3 flex items-center justify-center gap-2">
                {c.image && (
                  <button
                    className="btn btn-brand"
                    onClick={() => setOpenSrc(c.image)}
                  >
                    View Certificate
                  </button>
                )}
                {/* Optional: if you add a public verify URL in your data */}
                {c.url && (
                  <a href={c.url} target="_blank" rel="noreferrer" className="btn btn-outline inline-flex items-center gap-2">
                    Verify <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {openSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpenSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate image"
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 p-2"
              aria-label="Close"
              onClick={() => setOpenSrc(null)}
              style={{ color: "#fff" }}
            >
              <X size={28} />
            </button>
            <img
              src={openSrc}
              alt="Certificate preview"
              className="w-full h-auto rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
}
