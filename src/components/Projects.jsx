import { WavyUnderline, StarBurstOutline } from "./Illustrations";

const PROJECTS = [
  {
    title: "HealthLink",
    category: "Mobile App",
    image: "/projects/project-1.jpg",
    github: "https://github.com/hakimskills/health_link",
    tall: false,
  },
  {
    title: "Soul Fighter",
    category: "Landing Page",
    image: "/projects/project-2.jpg",
    github: "https://github.com/hakimskills/riot_website_clone",
    tall: false,
  },
  {
    title: "ScholarDesk",
    category: "Desktop App",
    image: "/projects/project-3.jpg",
    github: "https://github.com/hakimskills/ScholarDesk",
    tall: false,
  },
  {
    title: "Rantlhub",
    category: "Mobile App",
    image: "/projects/project-4.jpg",
    github: "https://github.com/hakimskills/rentalhub",
    tall: false,
  },
];

function GithubIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0.5C5.65 0.5 0.5 5.66 0.5 12.03c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.55-3.87-1.55-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.73-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between border-b border-ink/15 pb-4 mb-10">
        <h2 className="font-display text-2xl font-semibold text-clay">
          Projects
          <WavyUnderline className="w-28 h-2.5 mt-1" />
        </h2>
        <a href="#contact" aria-label="Get in touch about a project" className="w-10 h-10 rounded-full border border-ink/30 flex items-center justify-center hover:bg-ink hover:text-cream transition-colors">
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

              <a href={p.github} target="_blank" rel="noreferrer" aria-label={`View ${p.title} source on GitHub`} className="absolute inset-3 rounded-[2px] bg-ink/0 group-hover:bg-ink/70 flex items-center justify-center gap-2 text-cream opacity-0 group-hover:opacity-100 transition-all duration-300">
                <GithubIcon className="w-6 h-6" />
                <span className="text-xs uppercase tracking-wide font-bold">View on GitHub</span>
              </a>
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