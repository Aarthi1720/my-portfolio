import { motion } from "framer-motion";
import { profile } from "../data/profile";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, amount: 0.2 },
};

export default function Skills() {
  const groups = [
    { title: "Frontend", items: profile.skills.frontend },
    { title: "Backend", items: profile.skills.backend },
    { title: "Database", items: profile.skills.database },
    { title: "Tools", items: profile.skills.tools },
    { title: "Extras", items: profile.skills.extras },
    { title: "AI Tools", items: profile.skills.ai },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 py-10 scroll-mt-24">
      <motion.h2 {...fade} className="text-3xl font-bold text-center">
        Skills
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <motion.div
            key={g.title}
            {...fade}
            className="rounded-2xl bg-white border border-slate-200 shadow p-6"
          >
            <h3 className="font-semibold">{g.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 text-xs rounded-full border border-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
