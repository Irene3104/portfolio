import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <>
      <ScrollReveal className="text-base uppercase tracking-[3px] text-accent-1 mb-3.5">
        {label}
      </ScrollReveal>
      <ScrollReveal delay={100} className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] font-bold mb-10">
        {title}
      </ScrollReveal>
    </>
  );
}
