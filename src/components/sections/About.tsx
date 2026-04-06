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
    icon: <MonitorIcon className="stroke-accent-4" />,
    iconBg: "bg-[rgba(124,58,237,0.15)]",
    title: "End-to-End Delivery",
    description:
      "I design the architecture, build the frontend and backend, deploy to cloud (GCP, Firebase), and handle production support. SAIXAN was delivered solo from system design to live deployment across every layer of the stack.",
  },
  {
    icon: <AiLayersIcon className="stroke-accent-2" />,
    iconBg: "bg-[rgba(232,121,249,0.15)]",
    title: "AI-Driven Development",
    description:
      "I use AI as a core part of how I build and ship. From integrating OpenAI into production features to adopting Claude for code generation with prompt caching and template design, I bring AI into both the product and the development workflow.",
  },
  {
    icon: <GlobeIcon className="stroke-accent-3" />,
    iconBg: "bg-[rgba(240,171,252,0.15)]",
    title: "Trilingual Communicator",
    description:
      "Native Korean, business Japanese, professional English. I talk directly to clients, gather requirements without a middleman, and build products that work across language barriers from day one. In a global team, that means fewer misunderstandings and faster delivery.",
  },
  {
    icon: <HeartPulseIcon className="stroke-accent-1" />,
    iconBg: "bg-[rgba(192,132,252,0.15)]",
    title: "Cross-Industry Experience",
    description:
      "Aviation operations, dental X-ray data systems, enterprise accounting, and retail workforce management. Each industry taught me to learn domain logic fast and build software that solves real operational problems, not just technical ones.",
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
        className="h-full rounded-[20px] border border-accent-1/8 bg-bg-card p-7 transition-all duration-300 hover:border-accent-1/20 hover:shadow-[0_8px_40px_rgba(192,132,252,0.08)] max-md:p-[22px]"
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
