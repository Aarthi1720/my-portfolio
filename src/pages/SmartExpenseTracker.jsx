import { motion } from "framer-motion";
import { profile } from "../data/profile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, amount: 0.2 },
};

export default function ExpenseTracker() {
  const project = profile.projects.find(
    (p) => p.title === "Smart Expense Tracker"
  );

  return (
    <div className="min-h-screen bg-misty-gradient text-slate-900">
      <Navbar />

      <div className="max-w-5xl mx-auto px-5 mt-6">
        <a
          href="/"
          className="inline-block px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50"
        >
          ← Back to Home
        </a>
      </div>
      
      <section className="max-w-5xl mx-auto px-5 py-12">
        <motion.h1 {...fade} className="text-4xl font-bold">
          {project.title}
        </motion.h1>
        <motion.p {...fade} className="mt-4 text-slate-600">
          {project.desc}
        </motion.p>
        <motion.img
          {...fade}
          src={project.image}
          alt={project.title}
          className="mt-6 rounded-lg shadow"
        />

        <motion.h2 {...fade} className="mt-10 text-2xl font-semibold">
          🔹 Features
        </motion.h2>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-700">
          <li>✏ Add & edit incomes and expenses</li>
          <li>🧪 Filters: date, amount, category</li>
          <li>📈 Charts (Recharts) & summary cards</li>
          <li>📃 All transactions view</li>
          <li>🌍 MongoDB Atlas persistent storage</li>
          <li>🔔 Notifications with react-toastify</li>
          <li>📆 Datepicker for inputs</li>
          <li>🎨 Clean responsive dashboard</li>
        </ul>

        <motion.h2 {...fade} className="mt-10 text-2xl font-semibold">
          ⚙️ Tech Stack
        </motion.h2>
        <p className="mt-3 text-slate-700">
          <strong>Frontend:</strong> React, TailwindCSS, Context API, Recharts,
          Lottie, react-toastify <br />
          <strong>Backend:</strong> Node.js, Express.js, MongoDB Atlas, Mongoose{" "}
          <br />
          <strong>Tools:</strong> Morgan, dotenv, CORS
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Live Demo
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg border hover:bg-slate-100"
          >
            GitHub
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
