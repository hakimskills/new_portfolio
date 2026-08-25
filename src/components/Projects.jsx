import { WavyUnderline, StarBurstOutline } from "./Illustrations";

const PROJECTS = [
  {
    title: "ScholarDesk",
    category: "Web App",
    image: "/projects/project-1.jpg",
    tall: false,
  },
  {
    title: "Soul Fighter",
    category: "Landing Page",
    image: "/projects/project-2.jpg",
    tall: false,
  },
  {
    title: "TaskFlow",
    category: "Mobile App",
    image: "/projects/project-3.jpg",
    tall: false,
  },
  {
    title: "Pulse Dashboard",
    category: "Dashboard",
    image: "/projects/project-4.jpg",
    tall: false,
  },
];

export default function Projects() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between border-b border-ink/15 pb-4 mb-10">
        <h2 className="font-display text-2xl font-semibold text-clay">
          Projects
          <WavyUnderline className="w-28 h-2.5 mt-1" />
        </h2>
        <a
          href="#contact"
          aria-label="Get in touch about a project"
          className="w-10 h-10 rounded-full border border-ink/30 flex items-center justify-center hover:bg-ink hover:text-cream transition-colors"
        >
          <span aria-hidden>&rarr;</span>
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {PROJECTS.map((p) => (
          <article key={p.title} className="group">
            <div className="relative overflow-hidden rounded-sm border border-ink/10 shadow-pin bg-clay p-3">
              <img
                src={p.image}
                alt={`${p.title} — ${p.category} project preview`}
                className="w-full h-56 object-cover object-top rounded-[2px] transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
              <StarBurstOutline className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[11px] uppercase tracking-wide text-inkSoft mt-1">{p.category}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
