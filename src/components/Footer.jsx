import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-wide text-inkSoft dark:text-nightSoft border-t border-ink/10 dark:border-cream/10">
      <span>&copy; {new Date().getFullYear()} Abdelhakim Rebbouh</span>
      <span>{t.footer.built}</span>
    </footer>
  );
}
