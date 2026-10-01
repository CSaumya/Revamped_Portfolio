
import { useRef, useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
  SiAxios,
  SiVercel,
  SiNextdotjs,
} from "react-icons/si";
import { FaJava, FaFigma } from "react-icons/fa";
import popSoundFile from "../assets/universfield-bubble-pop-04-323580.mp3";

type Category = "Frontend" | "Backend" | "Design" | "Tools";

type Tech = {
  name: string;
  category: Category;
  icon: React.ReactNode;
  darkColor: string;
  lightColor: string;
};

const technologies: Tech[] = [
  {
    name: "React",
    category: "Frontend",
    icon: <SiReact />,
    darkColor: "#61DAFB",
    lightColor: "#087EA4",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: <SiTypescript />,
    darkColor: "#60A5FA",
    lightColor: "#235A97",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <SiJavascript />,
    darkColor: "#F7DF1E",
    lightColor: "#9A7500",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss />,
    darkColor: "#22D3EE",
    lightColor: "#087EA4",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: <SiNextdotjs />,
    darkColor: "#FFFFFF",
    lightColor: "#171717",
  },
  {
    name: "Redux",
    category: "Frontend",
    icon: <SiRedux />,
    darkColor: "#A78BFA",
    lightColor: "#6842A5",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <SiNodedotjs />,
    darkColor: "#4ADE80",
    lightColor: "#187A32",
  },
  {
    name: "Express",
    category: "Backend",
    icon: <SiExpress />,
    darkColor: "#F4F4F5",
    lightColor: "#252525",
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: <SiMongodb />,
    darkColor: "#4ADE80",
    lightColor: "#287A36",
  },
  {
    name: "Postman",
    category: "Backend",
    icon: <SiPostman />,
    darkColor: "#F05F00",
    lightColor: "#D94F00",
  },
  {
    name: "Java",
    category: "Backend",
    icon: <FaJava />,
    darkColor: "#305CDE",
    lightColor: "#2D68C4",
  },
  {
    name: "Git",
    category: "Tools",
    icon: <SiGit />,
    darkColor: "#FB6A4A",
    lightColor: "#C63D25",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: <SiGithub />,
    darkColor: "#F4F4F5",
    lightColor: "#24292F",
  },
  {
    name: "Axios",
    category: "Tools",
    icon: <SiAxios />,
    darkColor: "#A78BFA",
    lightColor: "#6842A5",
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: <SiVercel />,
    darkColor: "#FFFFFF",
    lightColor: "#000000",
  },
  {
    name: "Figma",
    category: "Design",
    icon: <FaFigma />,
    darkColor: "#FF7F7F",
    lightColor: "#FF0000",
  },
];

const categories = ["All", "Frontend", "Backend", "Design", "Tools"];

const TechStack = () => {
  const soundRef = useRef<HTMLAudioElement | null>(null);
  const lastPlayed = useRef(0);

  const [activeCategory, setActiveCategory] = useState("All");

  const handleHover = () => {
    const now = Date.now();

    if (now - lastPlayed.current < 300) return;

    lastPlayed.current = now;

    if (!soundRef.current) {
      soundRef.current = new Audio(popSoundFile);
      soundRef.current.volume = 0.12;
    }

    soundRef.current.currentTime = 0;
    soundRef.current.play().catch(() => {});
  };

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter(
          (tech) => tech.category === activeCategory
        );

  return (
    <section className="w-full md:px-10 lg:px-10 xl:px-40 mx-auto sm:mt-24 sm:w-[90%] sm:px-0">
      <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h2 className="text-2xl font-medium tracking-tight">
            Tech Stack
          </h2>

          <p className="text-[12px] font-serif tracking-wide text-gray-500">
            (Pop on hover)
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-2 sm:justify-center lg:justify-end">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer rounded-xl border px-3 py-1 text-sm transition-all duration-300 sm:px-4 ${
                activeCategory === category
                  ? "border-[var(--primary)] bg-[var(--border-hover)] text-[var(--primary)]"
                  : "border-[var(--primary)] text-[var(--muted-foreground)] hover:border-[var(--border)] hover:bg-[var(--surface)] hover:text-[var(--primary)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredTechnologies.map((tech) => (
          <div
            key={tech.name}
            onMouseEnter={handleHover}
            className="group flex min-w-0 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_0_25px_rgba(245,197,24,0.15)] sm:gap-2.5 sm:p-3"
          >
            <div
              style={
                {
                  "--dark-color": tech.darkColor,
                  "--light-color": tech.lightColor,
                } as React.CSSProperties
              }
              className="shrink-0 text-lg text-[var(--muted-foreground)] transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--dark-color)] [.light_&]:group-hover:text-[var(--light-color)] sm:text-xl"
            >
              {tech.icon}
            </div>

            <span className="min-w-0 break-words text-xs text-[var(--muted-foreground)] transition-colors duration-300 group-hover:text-[var(--foreground)] sm:text-sm">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;