import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPinIcon, CalendarIcon } from "@/components/icons";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative flex flex-col justify-center px-[var(--page-px)] py-[120px] max-md:py-20"
    >
      <div className="mx-auto w-full max-w-[var(--max-w)]">
        <SectionHeader label="Career Path" title="Work Experience" />

        <div className="relative pl-8 max-md:pl-6">
          {/* Timeline line */}
          <span className="absolute left-[7px] top-2 bottom-2 w-0.5 rounded-sm bg-gradient-to-b from-accent-4 via-accent-2 to-accent-4 opacity-30" />

          {experiences.map((exp, i) => (
            <ScrollReveal
              key={`${exp.company}-${exp.period}`}
              delay={0}
              className={`relative ${i < experiences.length - 1 ? "mb-12 max-md:mb-9" : ""}`}
            >
              {/* Timeline dot */}
              <span
                className={`absolute -left-8 top-1.5 z-10 h-4 w-4 rounded-full border-[3px] border-accent-1 max-md:-left-6 max-md:h-3.5 max-md:w-3.5 ${
                  i === 0
                    ? "bg-accent-1 shadow-[0_0_12px_rgba(192,132,252,0.4)]"
                    : "bg-bg-primary"
                }`}
              />

              <div className="mb-3.5">
                <div className="font-heading text-[1.6rem] font-semibold max-md:text-[1.05rem]">
                  {exp.role}
                </div>
                <div className="mt-0.5 text-[1.15rem] text-accent-3">
                  {exp.company}
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1 text-[0.88rem] text-text-tertiary">
                    <MapPinIcon /> {exp.location}
                  </span>
                  <span className="flex items-center gap-1 text-[0.88rem] text-text-tertiary">
                    <CalendarIcon /> {exp.period}
                  </span>
                </div>
              </div>

              <ul className="mt-3.5">
                {exp.descriptions.map((desc, j) => (
                  <li
                    key={j}
                    className="relative mb-2.5 list-none pl-[18px] text-[1.15rem] leading-[1.75] text-text-secondary before:absolute before:left-0 before:top-[10px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-4"
                  >
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {exp.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-1/8 px-3 py-1.5 text-[0.8rem] text-accent-3"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
