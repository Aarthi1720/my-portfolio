import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, amount: 0.2 },
};

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 py-10">
      <motion.h2 {...fade} className="text-3xl font-bold text-center">
        About Me
      </motion.h2>
      <motion.p
        {...fade}
        className="mt-4 text-center text-slate-600 max-w-3xl mx-auto"
      >
        Certified Full Stack Developer (MERN) with AI Tools (GUVI — IIT-M
        Pravartak). Completed 12 course tasks, 2 mini projects later enhanced to
        full-stack, and 1 final capstone. Skilled in React, Node, Express,
        MongoDB with secure integrations (Stripe, Cloudinary, JWT, Nodemailer)
        and clean UI/UX.
      </motion.p>
    </section>
  );
}
