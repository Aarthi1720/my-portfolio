import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, amount: 0.2 },
};

const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent("Project / Hiring inquiry")}`;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(profile.formspree, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setError(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again or use the Gmail button."
        );
      }
    } catch (err) {
      setStatus("error");
      setError("Network error. Please try again or use the Gmail button.");
    }
  }

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-5 py-12 scroll-mt-24"
    >
      <motion.div {...fade} className="text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-600">Let’s build something.</p>
      </motion.div>

      {/* Card */}
      <motion.div
        {...fade}
        className="mt-8 max-w-xl mx-auto bg-white/90 backdrop-blur rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8"
      >
        {/* Success */}
        {status === "success" && (
          <div className="mb-5 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-emerald-800">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="font-medium">Message sent!</p>
              <p className="text-sm">
                Thanks for reaching out — I’ll reply soon.
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-red-800">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="font-medium">Couldn’t send your message</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          {/* Optional subject for your inbox */}
          <input type="hidden" name="_subject" value="Message from portfolio" />

          <div className="grid gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="h-11 rounded-lg border border-slate-300 px-3 outline-none
                         focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              name="_replyto"
              type="email"
              required
              placeholder="you@example.com"
              className="h-11 rounded-lg border border-slate-300 px-3 outline-none
                         focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="write a message..."
              className="rounded-lg border border-slate-300 px-3 py-2 outline-none
                         focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-lg
                         bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700
                         disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </button>

            <a
              href={gmailCompose}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg
                         border border-slate-300 px-5 py-3 hover:bg-slate-100"
            >
              <Mail className="h-4 w-4" />
              Write via Gmail
            </a>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
