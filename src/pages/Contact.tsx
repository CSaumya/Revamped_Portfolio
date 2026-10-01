
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import resume from "../assets/Resume`.pdf";
import bg_sunflower from "../assets/Modern_Acrylic_Sunflower_Painting-removebg-preview.png";

const Contact = () => {
  return (
    <section
      className="
        relative isolate mx-auto
        mt-20 mb-16 w-[92%]
        px-2 sm:mt-24 sm:mb-20 sm:w-[90%] sm:px-0
        md:mt-30 lg:mb-24
      "
    >
      <img
        src={bg_sunflower}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute -z-10
          -right-3 bottom-0 w-16
          rotate-180 object-contain opacity-50
          sm:-right-6 sm:w-24 sm:opacity-60
          md:-right-10 md:w-40 md:opacity-70
          lg:-right-16 lg:w-52 lg:opacity-80
        "
      />

      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm text-[var(--primary)]">
          Get in touch
        </p>

        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-5xl">
          Let’s build something cool.
        </h2>

        <p
          className="
            mx-auto mt-4 max-w-lg
            px-1 text-sm leading-6
            text-[var(--muted-foreground)]
            sm:px-0 sm:text-base
          "
        >
          Have an idea, a project, or just want to say hello?
          Feel free to reach out. I’m always open to interesting
          conversations and opportunities.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:saumyachaudhary051002@gmail.com"
            className="
              group inline-flex items-center justify-center gap-2
              rounded-full bg-[var(--primary)]
              px-4 py-2.5 text-sm text-white
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-[var(--primary)]/20
              sm:px-5
            "
          >
            <Mail size={16} />
            Say hello
            <ArrowUpRight
              size={15}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex items-center justify-center gap-2
              rounded-full border border-[var(--border)]
              px-4 py-2.5 text-sm text-[var(--foreground)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
              sm:px-5
            "
          >
            <FileText size={16} />
            Resume
            <ArrowUpRight
              size={15}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;