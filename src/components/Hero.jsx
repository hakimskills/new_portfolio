import {
  BlobYellow,
  BlobRed,
  SunBurst,
  CharacterHero,
  CoffeeMug,
  StickyNote,
  TapeStripDark,
  SquiggleArrow,
  CurlyLine,
  PlantVase,
} from "./Illustrations";

export default function Hero() {
  return (
    <section id="top" className="relative max-w-6xl mx-auto px-6 pt-6 pb-20 md:pt-10 md:pb-28">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: headline card on yellow blob */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 opacity-95">
            <BlobYellow className="w-full h-full" />
          </div>
          <div className="pt-14 pb-10 px-4 md:px-6">
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] font-semibold text-ink">
              I build
              <br />
              <span className="text-clay">experiences</span>
              <br />
              that work.
            </h1>
            <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-inkSoft">
              A web developer crafting clean interfaces, small details and
              fast, working products for people to use.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#contact"
                className="inline-block bg-clay text-cream text-xs tracking-wide uppercase font-bold px-6 py-3 rounded-sm shadow-pin hover:bg-clayDark transition-colors"
              >
                Let&rsquo;s build something
              </a>
              <SquiggleArrow className="w-16 h-10 hidden sm:block" />
            </div>
            <CurlyLine className="w-10 h-10 absolute top-10 right-4 hidden sm:block" />
          </div>
        </div>

        {/* Right: character illustration with flag + sticky note */}
        <div className="relative flex justify-center md:justify-end">
          <div className="absolute -top-4 right-6 w-40 sm:w-48">
            <div className="relative">
              <BlobRed className="w-full drop-shadow-sm" />
              <SunBurst className="w-14 h-14 absolute top-6 left-8" />
            </div>
          </div>
          <div className="absolute top-10 right-0 w-28 sm:w-32 rotate-3">
            <div className="relative bg-card border border-ink/10 shadow-pin px-3 py-3 text-[10px] leading-snug font-bold text-ink">
              good design
              <br /> tells a<br />
              <span className="inline-block border-b-2 border-clay">story.</span>
              <TapeStripDark className="w-8 h-6 absolute -top-3 left-1/2 -translate-x-1/2" />
            </div>
          </div>

          <CharacterHero className="w-[280px] sm:w-[340px] relative z-10 mt-16" />

          <CoffeeMug className="w-16 absolute bottom-6 left-6 sm:left-2 z-20" />
          <PlantVase className="w-24 hidden lg:block absolute -right-6 top-24 z-0 opacity-95" />
        </div>
      </div>
    </section>
  );
}
