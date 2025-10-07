import { useState } from "react";
import { Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  // Gmail compose URL
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}&su=${encodeURIComponent("Hiring / Project inquiry")}`;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const form = e.currentTarget;
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setError(
          data?.errors?.[0]?.message || "Something went wrong. Try again."
        );
      }
    } catch {
      setStatus("error");
      setError("Network error. Try again.");
    }
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto px-5 py-16 scroll-mt-24">
      <h2 className="text-3xl font-bold text-center">Contact</h2>

      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xrbawwne"
        method="POST"
        className="card p-6 mt-6"
      >
        {status === "success" && (
          <div className="mb-4 rounded-lg border border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 p-3">
            Message sent! I’ll get back to you shortly.
          </div>
        )}
        {status === "error" && (
          <div className="mb-4 rounded-lg border border-red-300 bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 p-3">
            {error}
          </div>
        )}

        {/* honeypot */}
        <input
          type="text"
          name="_gotcha"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="grid gap-4">
          {/* Name */}
          <div className="grid gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              className="h-11 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900"
            />
          </div>

          {/* Email */}
          <div className="grid gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="_replyto"
              type="email"
              required
              placeholder="you@example.com"
              className="h-11 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900"
            />
          </div>

          {/* Message */}
          <div className="grid gap-1.5">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900"
            />
          </div>

          {/* Buttons (mobile-first) */}
          <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-brand w-full sm:w-auto h-11 text-sm sm:text-base"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>

            {/* Gmail compose with graceful fallback */}
            <a
              href={gmailCompose}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline w-full sm:w-auto h-11 text-sm sm:text-base inline-flex items-center justify-center gap-2"
              onAuxClick={(e) => {
                if (e.button === 1)
                  window.location.href = `mailto:${profile.email}`;
              }}
            >
              <Mail className="h-4 w-4 hidden xs:inline" />
              <span>Write via Gmail</span>
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}
