import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { profile } from "../data/profile";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  viewport: { once: true, amount: 0.2 },
};

function slugify(s = "") {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getBySlug(slug) {
  if (!slug) return null;
  return (
    profile.projects.find(
      (p) =>
        (p.href && p.href.split("/").pop() === slug) ||
        slugify(p.title) === slug
    ) || null
  );
}

/** Project-specific Overview blocks */
function Overview({ slug, project }) {
  const tone = { color: "var(--muted)" };
  const head = { color: "var(--ink)" };

  if (slug === "invoice-builder") {
    return (
      <>
        <h2 className="text-xl font-semibold" style={head}>
          Overview
        </h2>
        <p className="mt-3 leading-relaxed" style={tone}>
          The <strong>Invoice Builder</strong> streamlines invoicing for
          freelancers and small teams. Users manage clients, products, and
          company details, while totals update live (subtotal, tax, discounts,
          fees) and invoices export as clean PDFs via <code>jsPDF</code> +{" "}
          <code>html2canvas</code>.
        </p>
        <p className="mt-3 leading-relaxed" style={tone}>
          I first shipped this as a <em>frontend-only</em> React app (Vite +
          Tailwind) using Context API for predictable state. Later, I upgraded
          it to a full MERN setup for persistence (Node/Express + MongoDB).
          Authentication hasn’t been added yet; the codebase is structured so
          JWT auth and user-scoped data can drop in with minimal refactor.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2" style={tone}>
          <li>CRUD for Clients, Products, and Invoices</li>
          <li>Real-time calculations with precise rounding</li>
          <li>PDF export (branding, sections, totals)</li>
          <li>Context API + (later) MongoDB persistence</li>
          <li>Planned: JWT auth & user isolation</li>
        </ul>
      </>
    );
  }

  if (slug === "expense-tracker") {
    return (
      <>
        <h2 className="text-xl font-semibold" style={head}>
          Overview
        </h2>
        <p className="mt-3 leading-relaxed" style={tone}>
          <strong>Smart Expense Tracker</strong> gives a fast, frictionless way
          to record incomes and expenses, filter by date/category, and
          understand spending through dashboards and charts (
          <code>Recharts</code>). The UI is intentionally lightweight for daily
          use.
        </p>
        <p className="mt-3 leading-relaxed" style={tone}>
          It began as a <em>frontend-only</em> project and later evolved into a
          MERN stack app with MongoDB Atlas for storage. I focused on resilient
          forms, helpful empty states, and responsive visualizations.
          Authentication is on the roadmap to support private budgets and
          multi-device sync.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2" style={tone}>
          <li>CRUD for transactions with category & date filters</li>
          <li>Interactive charts & summaries (weekly/monthly)</li>
          <li>MongoDB persistence with clean data models</li>
          <li>Responsive, keyboard-friendly inputs</li>
          <li>Planned: JWT auth & user profiles</li>
        </ul>
      </>
    );
  }

  if (slug === "hotel-booking") {
    return (
      <>
        <h2 className="text-xl font-semibold" style={head}>
          Overview
        </h2>
        <p className="mt-3 leading-relaxed" style={tone}>
          The <strong>Hotel Booking System</strong> is an end-to-end platform
          inspired by travel apps. Guests search with rich filters, view room
          details and availability, and complete bookings with secure Stripe
          checkout.
        </p>
        <p className="mt-3 leading-relaxed" style={tone}>
          I designed REST APIs for availability, bookings, and reviews with
          robust validation & error handling. The UI emphasizes clarity and
          speed, with loyalty coins, promo codes, and verified reviews to mirror
          real-world flows.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2" style={tone}>
          <li>Search, filters, availability calendar, room details</li>
          <li>Stripe payments, promo codes, loyalty coins</li>
          <li>Verified reviews & notifications</li>
          <li>Secure APIs (validation, guards, clean error surfaces)</li>
        </ul>
      </>
    );
  }

  // Default (unknown project)
  return (
    <>
      <h2 className="text-xl font-semibold" style={head}>
        Overview
      </h2>
      <p className="mt-3 leading-relaxed" style={tone}>
        This project demonstrates production-ready patterns across UI, API
        design, and data modeling, with a focus on accessibility, performance,
        and clean developer experience.
      </p>
      <ul className="mt-4 list-disc pl-5 space-y-2" style={tone}>
        <li>Modular React components & Tailwind styling</li>
        <li>Express REST APIs with validation & errors</li>
        <li>Scalable data models and pagination</li>
      </ul>
    </>
  );
}

export default function CaseStudy({ forceSlug }) {
  const params = useParams();
  const slug = forceSlug || params.slug;
  const project = useMemo(() => getBySlug(slug), [slug]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header with adaptive contrast */}
      <header
        className="bg-hero border-b border-slate-200/40 dark:border-slate-700/50"
        style={{ color: "var(--ink)" }}
      >
        <div className="max-w-6xl mx-auto px-5 py-12 sm:py-16">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-3 py-1.5
                       bg-[var(--brand)] text-white hover:opacity-90 transition duration-200"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Title and subheading */}
          <h1
            className="mt-5 text-3xl sm:text-4xl font-extrabold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            {project ? project.title : "Project"}
          </h1>

          <p
            className="mt-3 max-w-3xl text-[15px] leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {project?.desc || "Detailed case study."}
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-10">
        {!project ? (
          <div className="card p-6 text-center">
            <p style={{ color: "var(--muted)" }}>
              Sorry, we couldn’t find that project.
            </p>
            <Link to="/" className="mt-4 inline-block btn btn-outline">
              Go back
            </Link>
          </div>
        ) : (
          <>
            {/* Cover image */}
            <motion.div {...fade} className="card overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} cover`}
                className="w-full max-h-[420px] object-cover rounded-lg"
              />
            </motion.div>

            {/* Required links */}
            <motion.div {...fade} className="mt-6 flex flex-wrap gap-3">
              {!!project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-brand inline-flex items-center gap-2"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
              {!!project.frontendUrl && (
                <a
                  href={project.frontendUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline inline-flex items-center gap-2"
                >
                  Frontend <Github size={16} />
                </a>
              )}
              {!!project.backendUrl && (
                <a
                  href={project.backendUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline inline-flex items-center gap-2"
                >
                  Backend <Github size={16} />
                </a>
              )}
            </motion.div>

            {/* Details */}
            <section className="mt-10 grid md:grid-cols-3 gap-6">
              <motion.div {...fade} className="card p-6 md:col-span-2">
                <Overview slug={slug} project={project} />
              </motion.div>

              <motion.aside {...fade} className="card p-6">
                <h3
                  className="font-semibold text-[15px]"
                  style={{ color: "var(--ink)" }}
                >
                  Tech Stack
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.aside>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
