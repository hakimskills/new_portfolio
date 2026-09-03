import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const OPTIONS = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

export default function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = OPTIONS.find((o) => o.code === lang);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="h-9 px-3 rounded-full border border-ink/20 dark:border-cream/20 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-ink dark:text-cream hover:border-clay hover:text-clay transition-colors"
      >
        {current.code.toUpperCase()}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M2 3.5 L5 6.5 L8 3.5" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-32 bg-card dark:bg-nightSurface border border-ink/10 dark:border-cream/10 rounded-sm shadow-pin overflow-hidden z-50"
        >
          {OPTIONS.map((o) => {
            const isActive = o.code === lang;
            return (
              <li key={o.code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(o.code);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs uppercase tracking-wide font-bold transition-colors ${
                    isActive
                      ? "bg-clay text-cream"
                      : "text-ink dark:text-cream hover:bg-ink/5 dark:hover:bg-cream/10"
                  }`}
                >
                  {o.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}