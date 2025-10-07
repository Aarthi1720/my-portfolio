import { profile } from "../data/profile";
import { Code2, Server, Database, Wrench, Sparkles } from "lucide-react";

export default function Skills() {
  const groups = [
    {
      title: "Frontend",
      icon: Code2,
      items: profile.skills?.frontend ?? [
        "React",
        "JS (ES6+)",
        "HTML",
        "CSS",
        "TailwindCSS",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      items: profile.skills?.backend ?? ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      icon: Database,
      items: profile.skills?.database ?? ["MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      icon: Wrench,
      items: profile.skills?.tools ?? ["Git", "GitHub", "Postman", "Vercel"],
    },
    {
      title: "Extras",
      icon: Sparkles,
      items: profile.skills?.extras ?? ["Stripe", "JWT", "Cloudinary"],
    },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 py-16 scroll-mt-24">
      <h2
        className="text-3xl font-extrabold text-center tracking-tight"
        style={{ color: "var(--ink)" }}
      >
        Skills
      </h2>

      <p
        className="mt-2 text-center text-[15px]"
        style={{ color: "var(--muted)" }}
      >
        A focused set of technologies I use to ship production-ready apps.
      </p>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map(({ title, items, icon: Icon }) => (
          <div
            key={title}
            className="theme-card p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="h-9 w-9 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      "color-mix(in oklab, var(--brand) 12%, transparent)",
                  }}
                >
                  <Icon size={18} style={{ color: "var(--brand)" }} />
                </div>
                <h3 className="font-semibold" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
              </div>

              {/* count badge */}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
