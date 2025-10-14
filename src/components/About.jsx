import { motion } from "framer-motion";
import { ShieldCheck, Rocket, PlugZap } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, amount: 0.2 },
};

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 py-16 scroll-mt-24">
      <motion.h2
        {...fade}
        className="text-3xl sm:text-[32px] font-extrabold text-center leading-tight"
        style={{ color: "var(--ink)" }}
      >
        About Me
      </motion.h2>

      <motion.p
        {...fade}
        className="mt-4 max-w-3xl mx-auto text-center text-[15px] leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        I’m a <strong>Full-Stack MERN</strong> developer who ships
        production-ready web apps end-to-end: clean UI,{" "}
        <strong>secure APIs</strong>, and scalable data flows. Recent work
        includes a<em> Hotel Booking System</em>, <em>Invoice Builder</em>, and{" "}
        <em>Smart Expense Tracker</em> with real-world integrations—Stripe
        (payments), Nodemailer (email), Cloudinary (uploads), JWT (auth),
        charts, and PDFs. Certified by GUVI (IIT-M Pravartak) with a{" "}
        <strong>10/10 Capstone</strong>.
      </motion.p>

      {/* Highlights */}
      <motion.div
        {...fade}
        className="mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto"
      >
        {/* End-to-end MERN */}
        <div className="theme-card flex items-center gap-3 p-4">
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center"
            style={{
              background: "color-mix(in oklab, var(--brand) 12%, transparent)",
            }}
            aria-hidden="true"
          >
            <Rocket size={18} style={{ color: "var(--brand)" }} />
          </div>
          <div>
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--ink)" }}
            >
              End-to-End MERN
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              UX flows, API design, DB models, deployments
            </p>
          </div>
        </div>

        {/* Security & Reliability */}
        <div className="theme-card flex items-center gap-3 p-4">
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center"
            style={{
              background: "color-mix(in oklab, var(--brand) 12%, transparent)",
            }}
            aria-hidden="true"
          >
            <ShieldCheck size={18} style={{ color: "var(--brand)" }} />
          </div>
          <div>
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--ink)" }}
            >
              Security & Reliability
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              Auth, validation, error handling, performance
            </p>
          </div>
        </div>

        {/* Real-world Integrations */}
        <div className="theme-card flex items-center gap-3 p-4">
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center"
            style={{
              background: "color-mix(in oklab, var(--brand) 12%, transparent)",
            }}
            aria-hidden="true"
          >
            <PlugZap size={18} style={{ color: "var(--brand)" }} />
          </div>
          <div>
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--ink)" }}
            >
              Real-World Integrations
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              Stripe, Cloudinary, Nodemailer, charts & PDFs
            </p>
          </div>
        </div>
      </motion.div>

      {/* Single CTA (no duplicate “View Projects” since it’s in Hero) */}
      <motion.div {...fade} className="mt-8 flex items-center justify-center">
        <a href="#contact" className="btn btn-brand">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
