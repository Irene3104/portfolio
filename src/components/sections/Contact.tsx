"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { MailIcon, GithubIcon, LinkedInIcon } from "@/components/icons";

function MagneticContactBtn({
  href,
  variant,
  icon,
  label,
}: {
  href: string;
  variant: "primary" | "secondary";
  icon: React.ReactNode;
  label: string;
}) {
  const ref = useMagnetic<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className={`inline-flex items-center gap-2.5 rounded-full px-6.5 py-3.5 font-heading text-[1.1rem] font-medium no-underline transition-all duration-300 max-md:w-full max-md:max-w-[280px] max-md:justify-center ${
        variant === "primary"
          ? "bg-gradient-to-br from-accent-1 to-accent-2 text-[#0a0a0f] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(192,132,252,0.4)]"
          : "border border-accent-1/30 text-text-primary hover:-translate-y-0.5 hover:border-accent-1 hover:shadow-[0_0_20px_rgba(192,132,252,0.15)]"
      }`}
    >
      {icon} {label}
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center px-[var(--page-px)] py-[120px] text-center max-md:py-20"
    >
      <div className="mx-auto flex w-full max-w-[var(--max-w)] flex-col items-center">
        <ScrollReveal className="text-base uppercase tracking-[3px] text-accent-1 mb-3.5">
          Get in Touch
        </ScrollReveal>

        <ScrollReveal
          delay={100}
          className="font-heading text-[clamp(2.6rem,5vw,4.6rem)] font-bold mb-3.5 max-md:text-[clamp(1.8rem,8vw,2.8rem)]"
        >
          <h2>
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          delay={200}
          className="mb-10 max-w-[520px] text-[1.25rem] leading-[1.7] text-text-secondary max-md:text-[0.9rem] max-md:mb-8"
        >
          <p>
            Based in Sydney, working remotely with teams across the globe. Open
            to mid-level full-stack software roles — let&apos;s connect.
          </p>
        </ScrollReveal>

        <ScrollReveal
          delay={300}
          className="flex flex-wrap justify-center gap-3.5 max-md:flex-col max-md:items-center max-md:gap-3"
        >
          <MagneticContactBtn
            href="mailto:sjyono@gmail.com"
            variant="primary"
            icon={<MailIcon size={18} />}
            label="Send Email"
          />
          <MagneticContactBtn
            href="https://github.com/Irene3104"
            variant="secondary"
            icon={<GithubIcon size={18} />}
            label="GitHub"
          />
          <MagneticContactBtn
            href="https://linkedin.com/in/seoyoon-irenekim"
            variant="secondary"
            icon={<LinkedInIcon size={18} />}
            label="LinkedIn"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
