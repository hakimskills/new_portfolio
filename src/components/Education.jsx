import { WavyUnderline, CurlyLine } from "./Illustrations";
import { useLanguage } from "../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between border-b border-ink/15 dark:border-cream/15 pb-4 mb-10">
        <h2 className="font-display text-2xl font-semibold text-clay">
          {t.education.heading}
          <WavyUnderline className="w-32 h-2.5 mt-1" />
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {t.education.items.map((e) => (
          <article key={e.degree} className="relative bg-card dark:bg-nightSurface border border-ink/10 dark:border-cream/10 rounded-sm shadow-pin px-7 py-8">
            <CurlyLine className="w-8 h-8 absolute top-5 right-5 opacity-70" />
            <h3 className="font-display text-lg font-semibold text-ink dark:text-cream leading-snug pr-8">
              {e.degree}
            </h3>
            <p className="mt-2 text-[11px] uppercase tracking-wide font-bold text-clay">
              {e.school}
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-inkSoft dark:text-nightSoft">
              {e.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
