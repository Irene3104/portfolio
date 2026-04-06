"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { GithubIcon, MonitorIcon, UsersIcon, HeartPulseIcon } from "@/components/icons";
import { projects } from "@/data/projects";

function ExternalLinkIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

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

const thumbIcons = [
  <MonitorIcon key="monitor" size={48} strokeWidth={1.5} className="stroke-white/60" />,
  <UsersIcon key="users" size={48} strokeWidth={1.5} className="stroke-white/60" />,
  <HeartPulseIcon key="pulse" size={48} strokeWidth={1.5} className="stroke-white/60" />,
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const handleMove = useCallback((e: MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-6px)`;
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
    <ScrollReveal
      delay={0}
      className={
        index === 2
          ? "max-lg:col-span-full max-lg:max-w-[500px] max-lg:justify-self-center max-md:col-auto max-md:max-w-none"
          : ""
      }
    >
      <div
        ref={cardRef}
        className="overflow-hidden rounded-[20px] border border-accent-1/8 bg-bg-card transition-all duration-400 hover:border-accent-1/25 hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]"
      >
        {/* Thumbnail */}
        <div className="relative h-[180px] w-full overflow-hidden max-md:h-[160px]">
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient} transition-transform duration-500`}
          >
            {thumbIcons[index]}
          </div>
          <span
            className={`absolute right-3.5 top-3.5 rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider ${
              project.status === "live"
                ? "bg-[rgba(34,197,94,0.2)] text-[#4ade80]"
                : "bg-accent-1/20 text-accent-3"
            }`}
          >
            {project.statusLabel}
          </span>
        </div>

        {/* Body */}
        <div className="p-[22px]">
          <h3 className="mb-2 font-heading text-[1.55rem] font-semibold">
            {project.title}
          </h3>
          <div className="mb-3 text-[1.05rem] text-accent-1">
            {project.role}
          </div>
          <p className="mb-3 text-[1.1rem] leading-[1.7] text-text-secondary">
            {project.description}
          </p>

          {/* Tags - always visible */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent-1/8 px-2.5 py-1 text-[0.72rem] text-accent-3"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Expandable highlights */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <ul className="mb-3.5 pt-1">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="relative mb-1.5 list-none pl-3.5 text-[0.92rem] leading-[1.65] text-text-secondary before:absolute before:left-0 before:top-2 before:h-[5px] before:w-[5px] before:rounded-full before:bg-accent-4"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* View More Details toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mb-4 inline-flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-[0.85rem] text-accent-1 transition-all duration-300 hover:gap-2.5 hover:text-accent-3"
          >
            {expanded ? "Show Less" : "View More Details"}
            <ChevronIcon expanded={expanded} />
          </button>

          {/* GitHub & Demo Links */}
          <div className="flex gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent-1/25 px-4 py-2 text-[0.82rem] font-medium text-text-secondary no-underline transition-all duration-300 hover:border-accent-1 hover:text-accent-1 hover:shadow-[0_0_12px_rgba(192,132,252,0.15)]"
              >
                <GithubIcon size={14} /> GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-4 to-accent-1 px-4 py-2 text-[0.82rem] font-medium text-[#0a0a0f] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]"
              >
                <ExternalLinkIcon /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Projects() {
  const viewMoreRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center px-[var(--page-px)] py-[120px] max-md:py-20"
    >
      <div className="mx-auto w-full max-w-[var(--max-w)]">
        <SectionHeader label="Selected Work" title="Projects & Case Studies" />

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-lg:gap-5 max-md:grid-cols-1 max-md:gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <a
            ref={viewMoreRef}
            href="https://github.com/Irene3104"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-accent-1/30 bg-transparent px-9 py-3.5 font-heading text-[0.9rem] font-medium text-text-primary no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-1 hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]"
          >
            <GithubIcon size={18} />
            View More Projects on GitHub <span>&rarr;</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
