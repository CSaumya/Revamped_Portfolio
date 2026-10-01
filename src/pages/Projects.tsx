import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

import project1_dark from "../assets/Screenshot 2026-10-01 112635.png";
import project1_light from "../assets/Screenshot 2026-10-01 112617.png";
import project2 from "../assets/Screenshot 2026-10-01 112833.png";
import project3 from "../assets/Screenshot 2026-10-01 112659.png";
import project4_dark from "../assets/Screenshot 2026-10-01 112738.png";
import project4_light from "../assets/Screenshot 2026-10-01 112724.png";
import bg_sunflower from "../assets/Modern_Acrylic_Sunflower_Painting-removebg-preview.png";

type Props = {
  darkMode: boolean;
};

const projects = [
  {
    title: "TeamSync",
    description:
      "A team management dashboard for managing employees and workflows.",
    darkImage: project1_dark,
    lightImage: project1_light,
    tech: ["React", "Axios", "Redux", "Tailwind"],
    status: "In Progress",
    live: "https://team-sync-1i4l.vercel.app/",
    repo: "https://github.com/CSaumya/TeamSync",
  },
  {
    title: "SkyMart",
    description:
      "A modern e-commerce app with products, authentication, and cart management.",
    darkImage: project3,
    lightImage: project3,
    tech: ["React", "Redux", "Tailwind", "Axios"],
    status: "Live",
    live: "https://sky-mart-coral-iota.vercel.app/",
    repo: "https://github.com/CSaumya/SkyMart",
  },
  {
    title: "Bite-Box",
    description:
      "A food ordering platform with search, categories, cart, and checkout.",
    darkImage: project2,
    lightImage: project2,
    tech: ["React", "Redux", "Tailwind"],
    status: "Live",
    live: "https://bite-box-nine.vercel.app/",
    repo: "https://github.com/CSaumya/Bite-Box",
  },
  {
    title: "FocusFlow",
    description:
      "A productivity dashboard combining tasks, habits, and Pomodoro sessions.",
    darkImage: project4_dark,
    lightImage: project4_light,
    tech: ["JavaScript", "HTML", "CSS"],
    status: "Live",
    live: "https://focus-flow-puce-eight.vercel.app/",
    repo: "https://github.com/CSaumya/FocusFlow",
  },
];

const Projects = ({ darkMode }: Props) => {
  return (
    <section className="relative isolate mx-auto mt-20 w-[94%] px-1 sm:mt-24 sm:w-[90%] sm:px-0 lg:mt-28">
      <img
        src={bg_sunflower}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-3 top-10 -z-10 w-16 object-contain opacity-50 sm:-left-8 sm:w-28 sm:opacity-70 md:-left-12 md:w-44 md:opacity-80 lg:-left-16 lg:w-52"
      />

      <img
        src={bg_sunflower}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 bottom-0 -z-10 w-16 rotate-180 object-contain opacity-50 sm:-right-8 sm:w-28 sm:opacity-70 md:-right-12 md:w-44 md:opacity-80 lg:-right-16 lg:w-52"
      />

      <div className="mx-auto mb-8 flex w-full items-end justify-between sm:w-[85%] md:w-[75%] lg:w-[55%]">
        <div>
          <p className="mb-1 text-xs font-medium text-[var(--primary)]">
            Selected work
          </p>

          <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)] md:text-3xl">
            Projects
          </h2>
        </div>

        <span className="hidden text-[11px] text-[var(--muted-foreground)] sm:block">
          {String(projects.length).padStart(2, "0")} projects
        </span>
      </div>

      <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {projects.map((project) => {
          const isInProgress = project.status === "In Progress";

          return (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/40 hover:shadow-xl hover:shadow-[var(--primary)]/5"
            >
              <div className="relative h-44 w-full overflow-hidden bg-[var(--background)] sm:h-46 md:h-48">
                <img
                  src={darkMode ? project.darkImage : project.lightImage}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-80" />


                <div
                  className={`absolute right-3 top-3 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-medium backdrop-blur-md ${
                    isInProgress
                      ? "border-red-400/30 bg-red-500/15 text-red-400"
                      : "border-green-400/30 bg-green-500/15 text-green-400"
                  }`}
                >
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                        isInProgress ? "bg-red-500" : "bg-green-400"
                      }`}
                    />

                    <span
                      className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                        isInProgress ? "bg-red-500" : "bg-green-400"
                      }`}
                    />
                  </span>

                  {project.status}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-lg font-medium tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-3.5 sm:p-4">
                <p className="mb-3 text-[13px] leading-5 text-[var(--muted-foreground)] sm:text-sm">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-[9px] text-[var(--muted-foreground)] transition-all duration-300 group-hover:border-[var(--primary)]/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
{isInProgress ? (
  <span
    aria-disabled="true"
    title="Under construction"
    className="inline-flex cursor-not-allowed items-center justify-center gap-1.5 rounded-lg bg-[var(--accent)] px-3.5 py-2 text-[10px] font-medium text-white/60 opacity-60"
  >
    <ExternalLink size={11} />
    Live
  </span>
) : (
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-1.5 rounded-lg bg-[var(--accent)] px-3.5 py-2 text-[10px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
  >
    <ExternalLink size={11} />
    Live
  </a>
)}


                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] px-3.5 py-2 text-[10px] font-medium text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]"
                  >
                    <SiGithub size={11} />
                    Code
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mb-12 mt-14 flex flex-wrap items-center justify-center gap-3 px-2 text-center sm:mb-15 sm:mt-20">
        <p className="text-sm text-[var(--muted-foreground)] sm:text-base">
          Stay tuned, the best is yet to come
        </p>

        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--primary)]"
              style={{ animationDelay: `${dot * 140}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
