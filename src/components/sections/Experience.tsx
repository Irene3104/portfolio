"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPinIcon, CalendarIcon } from "@/components/icons";
import { experiences } from "@/data/experience";

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function TimelineCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isCurrent = exp.period.includes("Present");

  return (
    <ScrollReveal
      delay={0}
      className={`relative ${index < experiences.length - 1 ? "mb-8 max-md:mb-6" : ""}`}
    >
      {/* Timeline dot */}
      <span
        className={`absolute -left-8 top-6 z-10 h-4 w-4 rounded-full border-[3px] border-accent-1 max-md:-left-6 max-md:h-3.5 max-md:w-3.5 ${
          index === 0
            ? "bg-accent-1 shadow-[0_0_12px_rgba(51,65,85,0.4)]"
            : "bg-bg-primary"
        }`}
      />

      {/* Card */}
      <div className="rounded-2xl border border-accent-1/8 bg-bg-card p-6 transition-all duration-300 hover:border-accent-1/20 hover:shadow-[0_4px_24px_rgba(51,65,85,0.06)] max-md:p-5">
        {/* Top row: date + current badge */}
        <div className="mb-3 flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-widest text-accent-1">
            <CalendarIcon size={13} />
            {exp.period}
          </span>
          {isCurrent && (
            <span className="rounded-full bg-[rgba(34,197,94,0.15)] px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-[#4ade80]">
              Current
            </span>
          )}
        </div>

        {/* Role */}
        <div className="font-heading text-[1.35rem] font-semibold leading-tight max-md:text-[1.1rem]">
          {exp.role}
        </div>

        {/* Company + Location */}
        <div className="mt-1.5 flex items-center gap-1.5 text-[0.92rem] text-text-tertiary">
          <MapPinIcon size={13} />
          {exp.company} · {exp.location.split(",")[0]}
        </div>

        {/* Tech tags (always visible) */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {exp.techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent-1/8 px-2.5 py-1 text-[0.72rem] text-accent-3"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable details */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="mt-4 border-t border-accent-1/8 pt-4">
              {exp.descriptions.map((desc, j) => (
                <li
                  key={j}
                  className="relative mb-2 list-none pl-4 text-[0.92rem] leading-[1.7] text-text-secondary before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-4"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 inline-flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-[0.82rem] text-accent-1 transition-all duration-300 hover:gap-2.5 hover:text-accent-3"
        >
          {expanded ? "Show Less" : "Details"}
          <ChevronIcon expanded={expanded} />
        </button>
      </div>
    </ScrollReveal>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative flex flex-col justify-center px-[var(--page-px)] py-[120px] max-md:py-20"
    >
      <div className="mx-auto w-full max-w-[var(--max-w)]">
        <SectionHeader label="Experience" title="Career Timeline" />

        <div className="relative pl-8 max-md:pl-6">
          {/* Timeline line */}
          <span className="absolute left-[7px] top-2 bottom-2 w-0.5 rounded-sm bg-gradient-to-b from-accent-4 via-accent-2 to-accent-4 opacity-30" />

          {experiences.map((exp, i) => (
            <TimelineCard
              key={`${exp.company}-${exp.period}`}
              exp={exp}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
