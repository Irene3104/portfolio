import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { skillCategories, marqueeItems } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex flex-col justify-center px-[var(--page-px)] py-[120px] max-md:py-20"
    >
      <div className="mx-auto w-full max-w-[var(--max-w)]">
        <SectionHeader label="Technical Skills" title="Technologies & Tools" />

        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 max-md:grid-cols-1 max-md:gap-3.5">
          {skillCategories.map((cat, i) => (
            <ScrollReveal
              key={cat.title}
              delay={0}
              className="rounded-[18px] border border-accent-1/8 bg-bg-card p-6 transition-all duration-300 hover:border-accent-1/20 hover:shadow-[0_4px_30px_rgba(192,132,252,0.06)]"
            >
              <div className="mb-3.5 font-heading text-[1.1rem] font-semibold uppercase tracking-[1.5px] text-accent-1">
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-full border border-accent-1/12 px-4 py-[7px] text-[1.05rem] text-text-secondary transition-all duration-300 hover:border-accent-1 hover:text-accent-1 hover:shadow-[0_0_12px_rgba(192,132,252,0.1)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Marquee */}
        <ScrollReveal className="overflow-hidden pt-[50px]">
          <div className="flex w-max animate-marquee gap-[60px]">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="whitespace-nowrap font-heading text-[1.1rem] font-semibold uppercase tracking-[4px] text-accent-1/10"
              >
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
