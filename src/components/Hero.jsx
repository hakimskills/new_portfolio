import { BlobYellow, SquiggleArrow, CurlyLine } from "./Illustrations";

export default function Hero() {
  return (
    <section id="top" className="relative max-w-6xl mx-auto px-6 pt-6 pb-20 md:pt-10 md:pb-28">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: headline card on yellow blob */}
        <div className="relative order-1">
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
              A full-stack developer with a focus on web and mobile &mdash;
              building clean interfaces, solid backends, and fast, working
              products for people to use.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a href="#contact" className="inline-block bg-clay text-cream text-xs tracking-wide uppercase font-bold px-6 py-3 rounded-sm shadow-pin hover:bg-clayDark transition-colors">
                Let&rsquo;s build something
              </a>
              <SquiggleArrow className="w-16 h-10 hidden sm:block" />
            </div>
          </div>
        </div>

        {/* Right: hero illustration */}
        <div className="relative order-2 flex justify-center md:justify-end">
          <CurlyLine className="w-10 h-10 absolute -top-6 right-4 hidden sm:block" />
          <img
            src="/hero/scene.jpg"
            alt="Illustration of a person at a desk with a coffee mug, a red flag reading a sticky note that says good design tells a story, and a plant in a vase"
            className="w-full max-w-md rounded-sm shadow-pin"
          />
        </div>
      </div>
    </section>
  );
}