import { DotCluster, WavyUnderlineCream } from "./Illustrations";

export default function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 py-10">
      <div className="relative overflow-hidden rounded-sm">
        <div className="absolute inset-0 -z-10">
          <svg viewBox="0 0 1000 320" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 30 L960 0 L1000 90 L980 280 L40 320 L0 220 Z" fill="#F0C24E" />
          </svg>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center px-6 sm:px-10 py-14">
          <div className="max-w-md">
            <h2 className="font-display text-2xl font-semibold text-ink">
              About me
              <WavyUnderlineCream className="w-24 h-2.5 mt-1" />
            </h2>
            <p className="mt-5 text-[13px] leading-relaxed text-ink/90">
              I&rsquo;m Abdelhakim Rebbouh, a web developer and computer
              science student who likes turning messy problems into clean,
              working interfaces &mdash; one component at a time.
            </p>
            <a
              href="#work"
              className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-wide font-bold text-ink border-b-2 border-ink hover:text-clay hover:border-clay transition-colors"
            >
              More about me <span aria-hidden>&rarr;</span>
            </a>
          </div>

          <div className="relative justify-self-center md:justify-self-end">
            <img
              src="/photos/profile.jpg"
              alt="Polaroid-style portrait of Abdelhakim Rebbouh"
              className="w-48 sm:w-56 rotate-2 drop-shadow-[0_14px_20px_rgba(30,27,20,0.28)]"
            />
            <DotCluster className="w-16 h-16 absolute -bottom-8 -right-6 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
