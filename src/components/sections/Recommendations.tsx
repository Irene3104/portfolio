"use client";

import { useCallback, useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { recommendations } from "@/data/recommendations";

function RecCard({
  rec,
  delay,
}: {
  rec: (typeof recommendations)[0];
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
    <ScrollReveal delay={delay}>
      <div
        ref={cardRef}
        className="relative rounded-[20px] border border-accent-1/8 bg-bg-card p-7 transition-all duration-300 hover:border-accent-1/20 hover:-translate-y-0.5"
      >
        {/* Decorative quote mark */}
        <span className="absolute right-6 top-4 font-[Georgia,serif] text-[4rem] leading-none text-accent-1/8">
          &ldquo;
        </span>

        <p className="relative mb-5 text-[1.15rem] italic leading-[1.75] text-text-secondary">
          &ldquo;{rec.quote}&rdquo;
        </p>

        <div className="flex items-center gap-3">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-accent-1 to-accent-2 font-heading text-[0.9rem] font-bold text-[#0a0a0f]">
            {rec.initials}
          </div>
          <div>
            <div className="font-heading text-[1.15rem] font-semibold">
              {rec.name}
            </div>
            <div className="mt-0.5 text-base text-text-tertiary">
              {rec.role}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Recommendations() {
  return (
    <section
      id="recommendations"
      className="relative flex flex-col justify-center px-[var(--page-px)] py-[120px] max-md:py-20"
    >
      <div className="mx-auto w-full max-w-[var(--max-w)]">
        <SectionHeader label="Recommendations" title="What People Say" />

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-lg:max-w-[600px] max-md:gap-4">
          {recommendations.map((rec, i) => (
            <RecCard key={rec.name} rec={rec} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
