import { WavyUnderline, CurlyLine } from "./Illustrations";

const EDUCATION = [
  {
    degree: "Bachelor's Degree in Information Technology (LMD System)",
    school: "University of Constantine 2",
    description:
      "Comprehensive foundation in computer science, programming fundamentals, database systems, and software development principles.",
  },
  {
    degree:
      "Master's Degree in Information and Communication Systems and Technologies (STIC)",
    school: "University of Constantine 2",
    description:
      "Advanced studies in information systems, communication technologies, and software engineering. Focused on modern development methodologies and system architecture.",
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between border-b border-ink/15 pb-4 mb-10">
        <h2 className="font-display text-2xl font-semibold text-clay">
          Education
          <WavyUnderline className="w-32 h-2.5 mt-1" />
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {EDUCATION.map((e) => (
          <article
            key={e.degree}
            className="relative bg-card border border-ink/10 rounded-sm shadow-pin px-7 py-8"
          >
            <CurlyLine className="w-8 h-8 absolute top-5 right-5 opacity-70" />
            <h3 className="font-display text-lg font-semibold text-ink leading-snug pr-8">
              {e.degree}
            </h3>
            <p className="mt-2 text-[11px] uppercase tracking-wide font-bold text-clay">
              {e.school}
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-inkSoft">
              {e.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}