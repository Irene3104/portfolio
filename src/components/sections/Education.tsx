import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { educations } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="relative flex flex-col justify-center px-[var(--page-px)] py-[120px] max-md:py-20"
    >
      <div className="mx-auto w-full max-w-[var(--max-w)]">
        <SectionHeader label="Education" title="Academic Background" />

        <div className="grid grid-cols-2 gap-6 max-lg:gap-5 max-md:grid-cols-1 max-md:gap-4">
          {educations.map((edu, i) => (
            <ScrollReveal
              key={edu.school}
              delay={i * 150}
              className="relative overflow-hidden rounded-[20px] border border-accent-1/8 bg-bg-card p-7 transition-all duration-300 hover:border-accent-1/20 hover:-translate-y-0.5"
            >
              <span className="max-md:static max-md:mb-2.5 max-md:inline-block absolute right-4 top-4 rounded-full bg-accent-1/12 px-3 py-1 text-[0.68rem] font-semibold text-accent-1">
                {edu.badge}
              </span>
              <div className="pr-20 font-heading text-[1.45rem] font-semibold mb-2 max-md:pr-0">
                {edu.degree}
              </div>
              <div className="text-[1.15rem] text-accent-3 mb-1">
                {edu.school}
              </div>
              <div className="text-[1.05rem] text-text-tertiary">
                {edu.period}
              </div>
              <div className="mt-3 text-[1.1rem] leading-[1.7] text-text-secondary">
                {edu.detail}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
