import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") return false;

  const savedTheme = localStorage.getItem("theme");

  // Light mode is the default
  return savedTheme === "dark";
}

export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((v) => !v)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={`w-9 h-9 rounded-full border border-ink/20 dark:border-cream/20 flex items-center justify-center text-ink dark:text-cream hover:border-clay hover:text-clay transition-colors ${className}`}
    >
      {isDark ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.5 14.2a8.5 8.5 0 0 1-10.7-10.7A9 9 0 1 0 20.5 14.2Z" />
        </svg>
      )}
    </button>
  );
}