"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const stored = localStorage.getItem("theme");
    const initial = stored ? stored === "dark" : mql.matches;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="ml-4 rounded p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
