import { BlobYellow, PlantPot, QuoteMark, SmileyStamp } from "./Illustrations";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Quote card */}
        <div className="relative overflow-hidden rounded-sm min-h-[280px]">
          <div className="absolute inset-0 -z-10">
            <BlobYellow className="w-full h-full" />
          </div>
          <div className="px-8 sm:px-10 pt-10 pb-6 max-w-sm">
            <QuoteMark className="w-10 h-8" />
            <p className="font-display text-xl sm:text-2xl leading-snug text-ink">
              Code is not just what it does. Code is how it{" "}
              <span className="border-b-2 border-clay">feels to use.</span>
            </p>
          </div>
          <PlantPot className="w-28 absolute bottom-0 right-6" />
        </div>

        {/* Contact card */}
        <div className="relative bg-card border border-ink/10 rounded-sm shadow-pin px-8 sm:px-10 py-10">
          <h2 className="font-display text-2xl font-semibold text-clay">Let&rsquo;s connect</h2>

          <ul className="mt-6 space-y-4 text-[13px]">
            <li className="flex items-center gap-3">
              <span aria-hidden>&#9993;</span>
              <a href="mailto:abdelhakim.rebbouh@univ-constantine2.dz" className="hover:text-clay break-all">
                abdelhakim.rebbouh@univ-constantine2.dz
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden>&#128205;</span>
              <span>Touggourt, Algeria</span>
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden>&#128247;</span>
              <a href="https://instagram.com/hakim_rebbouh" target="_blank" rel="noreferrer" className="hover:text-clay">
                @hakim_rebbouh
              </a>
            </li>
          </ul>

          <SmileyStamp className="w-16 h-16 absolute top-8 right-8" />

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="mailto:abdelhakim.rebbouh@univ-constantine2.dz" className="flex-1 flex items-center justify-between bg-ink text-cream text-xs uppercase tracking-wide font-bold px-5 py-4 rounded-sm hover:bg-clay transition-colors">
              Say hello <span aria-hidden>&rarr;</span>
            </a>
            <a href="/resume.pdf" download className="flex-1 flex items-center justify-between border border-ink/25 text-ink text-xs uppercase tracking-wide font-bold px-5 py-4 rounded-sm hover:border-clay hover:text-clay transition-colors">
              Download resume <span aria-hidden>&darr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}