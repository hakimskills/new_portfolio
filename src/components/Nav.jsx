import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

export default function Nav() {
  const { t } = useLanguage();
  const LINKS = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["work", "about", "education", "skills", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const headerClass = "sticky top-0 z-50 transition-colors duration-300 " + (scrolled ? "bg-cream/95 dark:bg-night/90 backdrop-blur-sm border-b border-ink/10 dark:border-cream/10" : "bg-transparent");

  return (
    <header className={headerClass}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#top" className="font-display text-2xl font-semibold tracking-tight text-ink dark:text-cream">
          A<span className="text-clay">R.</span>
        </a>

        <ul className="hidden md:flex items-center gap-9 text-sm tracking-wide">
          {LINKS.map((l) => {
            const isActive = activeId === l.href.slice(1);
            const linkClass = "uppercase relative pb-1 hover:text-clay transition-colors " + (isActive ? "text-clay" : "text-ink dark:text-cream");
            return (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                  {isActive && <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-clay rounded-full" />}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button className="w-10 h-10 rounded-full bg-clay text-cream flex items-center justify-center" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 2 L14 14 M14 2 L2 14" />
              </svg>
            ) : (
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 1 H18 M0 6 H18 M0 11 H18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-6 bg-cream dark:bg-night border-b border-ink/10 dark:border-cream/10">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 uppercase text-sm tracking-wide text-ink dark:text-cream hover:text-clay">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
