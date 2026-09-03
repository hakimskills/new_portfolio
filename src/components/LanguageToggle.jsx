import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle({ className = "" }) {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
      className={`h-9 px-3 rounded-full border border-ink/20 dark:border-cream/20 flex items-center justify-center text-[11px] font-bold uppercase tracking-wide text-ink dark:text-cream hover:border-clay hover:text-clay transition-colors ${className}`}
    >
      {lang === "en" ? "AR" : "EN"}
    </button>
  );
}
