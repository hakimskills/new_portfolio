import { WavyUnderlineCream, TapeStripDark } from "./Illustrations";

const SKILLS = [
  { name: "HTML & CSS", level: 92 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 82 },
  { name: "UI / UX Design", level: 74 },
  { name: "Git & Deployment", level: 78 },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-6">
      <div className="relative bg-clay text-cream px-8 sm:px-12 py-12 rounded-sm shadow-pin overflow-hidden">
        <TapeStripDark className="w-14 h-16 absolute top-6 right-8 opacity-90 hidden sm:block" />

        <h2 className="font-display text-2xl font-semibold">
          Skills
          <WavyUnderlineCream className="w-24 h-2.5 mt-1" />
        </h2>

        <ul className="mt-8 space-y-6 max-w-xl">
          {SKILLS.map((s) => (
            <li key={s.name}>
              <div className="flex items-center justify-between text-xs uppercase tracking-wide font-bold">
                <span>{s.name}</span>
              </div>
              <div className="mt-2 h-[2px] w-full bg-cream/30 relative">
                <div
                  className="h-[2px] bg-cream absolute left-0 top-0"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
