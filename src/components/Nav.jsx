import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-sm border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#top" className="font-display text-2xl font-semibold tracking-tight text-ink">
          A<span className="text-clay">R.</span>
        </a>

        <ul className="hidden md:flex items-center gap-9 text-sm tracking-wide">
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`uppercase relative pb-1 hover:text-clay transition-colors ${
                  i === 0 ? "text-clay" : "text-ink"
                }`}
              >
                {l.label}
                {i === 0 && (
                  <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-clay rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden w-10 h-10 rounded-full bg-clay text-cream flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
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
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-6 bg-cream border-b border-ink/10">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 uppercase text-sm tracking-wide text-ink hover:text-clay"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
