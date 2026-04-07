"use client";

import { useCallback, useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MonitorIcon, AiLayersIcon, GlobeIcon, HeartPulseIcon } from "@/components/icons";

interface AboutCardData {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

const aboutCards: AboutCardData[] = [
  {
    icon: <MonitorIcon className="stroke-accent-1" />,
    iconBg: "bg-[rgba(51,65,85,0.08)]",
    title: "End-to-End Delivery",
    description:
      "I own full-stack delivery across system design, frontend and backend development, cloud deployment, and post-launch support. At TEN-X, I delivered SAIXAN as the sole engineer, owning the architecture, implementation, deployment, and ongoing operation of a production P&L platform used across internal teams and external clients.",
  },
  {
    icon: <AiLayersIcon className="stroke-accent-1" />,
    iconBg: "bg-[rgba(51,65,85,0.08)]",
    title: "AI-Driven Development",
    description:
      "I use AI where it creates clear value in both product delivery and engineering workflow. That includes integrating LLM capabilities into production systems, designing prompts and output handling for reliability, and using tools like Claude to improve development speed without giving up engineering judgement.",
  },
  {
    icon: <GlobeIcon className="stroke-accent-1" />,
    iconBg: "bg-[rgba(51,65,85,0.08)]",
    title: "Trilingual Communicator",
    description:
      "I work across Korean, Japanese, and English in both technical and business settings. I gather requirements directly, align with clients and internal teams without relying on intermediaries, and help teams move faster by reducing communication gaps early in the delivery process.",
  },
  {
    icon: <HeartPulseIcon className="stroke-accent-1" />,
    iconBg: "bg-[rgba(51,65,85,0.15)]",
    title: "Cross-Industry Experience",
    description:
      "I have built software across enterprise finance, medical imaging, workforce operations, and internal business systems. Working across these environments has taught me how to identify real operational pain points, scope features around actual workflows, and communicate effectively with non-technical stakeholders.",
  },
];

function TiltCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-2px)`;
  }, []);

  const handleLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = "";
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [handleMove, handleLeave]);

  return (
    <ScrollReveal delay={delay} className="h-full">
      <div
        ref={cardRef}
        className="h-full rounded-[20px] border border-slate-200 bg-bg-card p-7 shadow-sm transition-all duration-300 hover:border-accent-1/30 hover:shadow-[0_8px_40px_rgba(51,65,85,0.08)] max-md:p-[22px]"
      >
        {children}
      </div>
    </ScrollReveal>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center px-[var(--page-px)] py-[120px] max-md:py-20"
    >
      <div className="mx-auto w-full max-w-[var(--max-w)]">
        <SectionHeader label="About Me" title="What I Bring to the Table" />

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-4">
          {aboutCards.map((card, i) => (
            <TiltCard key={card.title} delay={0}>
              <div
                className={`mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-[13px] ${card.iconBg}`}
              >
                {card.icon}
              </div>
              <h3 className="mb-2.5 font-heading text-2xl font-semibold">
                {card.title}
              </h3>
              <p className="text-[1.15rem] leading-[1.75] text-text-secondary">
                {card.description}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
