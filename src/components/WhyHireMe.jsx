import { motion } from "framer-motion";
import { CheckCircle, Code2, Layers, Users } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, amount: 0.2 },
};

export default function WhyHireMe() {
  const bullets = [
    { text: "Real-world features: payments, uploads, OTP, notifications.", icon: CheckCircle },
    { text: "Structured code, clean UI/UX patterns, reusable components.", icon: Code2 },
    { text: "Hands-on across frontend, backend, and database layers (MERN).", icon: Layers },
    { text: "Collaborative, fast iterations, and clear communication.", icon: Users },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 py-16">
      <motion.h2 {...fade} className="text-3xl font-bold text-center text-slate-800 tracking-tight">
        Why Hire Me
      </motion.h2>

      <motion.ul
        {...fade}
        className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-sm text-slate-700"
      >
        {bullets.map(({ text, icon: Icon }) => (
          <li
            key={text}
            className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 shadow p-5 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex-shrink-0">
              <Icon className="w-4 h-4" />
            </div>
            <span>{text}</span>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
