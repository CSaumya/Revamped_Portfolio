
import Logo from '../assets/logo2.0.png'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiFramer
} from "react-icons/si";

type Tech = {
  name: string;
  icon: React.ReactNode;
  darkColor: string;
  lightColor: string;
};

const experienceTechs: Tech[] = [
  { name: "React", icon: <SiReact />, darkColor: "#61DAFB", lightColor: "#087EA4" },
  { name: "TypeScript", icon: <SiTypescript />, darkColor: "#60A5FA", lightColor: "#235A97" },
  { name: "Next.js", icon: <SiNextdotjs />, darkColor: "#FFFFFF", lightColor: "#171717" },
  { name: "Framer Motion", icon: <SiFramer />, darkColor: "#FFFFFF", lightColor: "#171717" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, darkColor: "#22D3EE", lightColor: "#087EA4" },
  { name: "JavaScript", icon: <SiJavascript />, darkColor: "#F7DF1E", lightColor: "#9A7500" },
  { name: "Node.js", icon: <SiNodedotjs />, darkColor: "#4ADE80", lightColor: "#187A32" },
  { name: "MongoDB", icon: <SiMongodb />, darkColor: "#4ADE80", lightColor: "#287A36" },
  { name: "Git", icon: <SiGit />, darkColor: "#FB6A4A", lightColor: "#C63D25" },
  { name: "GitHub", icon: <SiGithub />, darkColor: "#F4F4F5", lightColor: "#24292F" },
  { name: "Postman", icon: <SiPostman />, darkColor: "#F05F00", lightColor: "#D94F00" },
];

const Experience = () => {
  return (
    <div className="mt-10 w-[90%] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <h2 className="text-2xl font-medium tracking-tight">
        Experience
      </h2>

      <div className="group mt-5 cursor-pointer">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">

          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <img
              src={Logo}
              alt="CodeMyFYP"
              className="h-12 w-14 shrink-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-1 sm:h-15 sm:w-20 sm:rounded-3xl"
            />

            <div className="flex min-w-0 flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-base sm:text-lg">CodeMy FYP</p>

                <p className="rounded-lg border border-[var(--border-hover)] bg-[var(--surface)] p-1 font-sans text-xs text-gray-400">
                  Internship
                </p>
              </div>

              <p className="text-sm text-[var(--muted)] sm:text-base">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 pl-1 text-sm text-[var(--muted)] sm:justify-end sm:pl-0 sm:text-base">
            <div className="text-left sm:text-right">
              <p>April, 2026 - June, 2026</p>
              <p className="text-sm">Remote</p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-rows-[1fr] opacity-100 transition-all duration-300">
          <div className="overflow-hidden">
            <div className="mt-5 border-t border-[var(--border)] pb-3 pt-5">
              <ul className="space-y-2 text-base text-[var(--muted)] sm:text-lg">
                <li>
                  • Developed responsive and reusable interfaces using React,
                  Next.js, TypeScript and Tailwind CSS.
                </li>
                <li>
                  • Integrated REST APIs and handled frontend data fetching,
                  forms and state management.
                </li>
                <li>
                  • Worked with MERN-stack technologies and gained practical
                  experience with backend development.
                </li>
                <li>
                  • Debugged, tested and optimized application features
                  throughout the development process.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-medium">
                Tools & Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {experienceTechs.map((tech) => (
                  <div
                    key={tech.name}
                    style={
                      {
                        "--dark-color": tech.darkColor,
                        "--light-color": tech.lightColor,
                      } as React.CSSProperties
                    }
                    className="group/tech flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-sm text-[var(--muted-foreground)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="text-lg transition-all duration-300 group-hover/tech:scale-110 group-hover/tech:text-[var(--dark-color)] [.light_&]:group-hover/tech:text-[var(--light-color)]">
                      {tech.icon}
                    </span>

                    <span className="text-sm text-[var(--muted-foreground)] transition-colors duration-300 group-hover/tech:text-[var(--foreground)]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;