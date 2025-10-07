import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitial() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return "dark";
    if (saved === "light") return "light";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitial);
  const isDark = theme === "dark";

  useEffect(() => {
    const root = document.documentElement;
    // enable transition class briefly
    root.classList.add("theme-fade");
    setTimeout(() => root.classList.remove("theme-fade"), 300);

    root.setAttribute("data-theme", theme);
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={[
        // size & layout
        "relative inline-flex h-9 w-9 items-center justify-center rounded-lg",
        // smooth bg/border/text/transform transitions
        "transition-[background-color,border-color,color,transform] duration-300",
        // light surface
        "bg-white text-slate-700 border border-slate-300/70 hover:bg-slate-50",
        // dark surface
        "dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700/60 dark:hover:bg-slate-700",
        // subtle press
        "active:scale-[0.97]",
        // focus ring uses your token
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
      ].join(" ")}
      title={isDark ? "Switch to light" : "Switch to dark"}
    >
      {/* SUN (shows when dark to indicate 'go light') */}
      <Sun
        className={[
          "pointer-events-none absolute h-4 w-4 text-amber-400",
          "transition-all duration-300 ease-out",
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0",
        ].join(" ")}
      />
      {/* MOON (shows when light to indicate 'go dark') */}
      <Moon
        className={[
          "pointer-events-none absolute h-4 w-4",
          // white moon on dark, slate on light
          "text-slate-900",
          "transition-all duration-300 ease-out",
          isDark
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100",
          // ensure it appears white when theme becomes dark during the transition
          isDark ? "text-white" : "text-slate-900",
        ].join(" ")}
      />
    </button>
  );
}
