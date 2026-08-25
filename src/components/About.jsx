import AboutIllustration from "./AboutIllustration";

export default function About() {
  return (
    <section id="about" className="px-6 py-32 md:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

        <div>
          <span className="font-mono text-sm text-clay">
            01 / ABOUT ME
          </span>

          <h2 className="mt-4 font-serif text-6xl leading-none md:text-8xl">
            About
            <br />
            <span className="text-clay">me.</span>
          </h2>

          <p className="mt-8 max-w-lg font-mono text-sm leading-8">
            I'm Abdelhakim, a creative designer who loves turning
            ideas into visual stories. I care about typography,
            composition and the small details that make a design
            feel alive.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block border-b-2 border-ink pb-2 font-mono text-sm"
          >
            LET'S CONNECT →
          </a>
        </div>

        <div className="mx-auto w-full max-w-md">
          <AboutIllustration />
        </div>

      </div>
    </section>
  );
}