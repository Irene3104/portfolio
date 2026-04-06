"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { GithubIcon, MonitorIcon, UsersIcon, HeartPulseIcon, CpuIcon, BookIcon, BoxIcon } from "@/components/icons";
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

function CodeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
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
  <CpuIcon key="cpu" size={48} strokeWidth={1.5} className="stroke-white/60" />,
  <BookIcon key="book" size={48} strokeWidth={1.5} className="stroke-white/60" />,
  <BoxIcon key="box" size={48} strokeWidth={1.5} className="stroke-white/60" />,
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
      className="h-full"
    >
      <div
        ref={cardRef}
        className="flex h-full flex-col overflow-hidden rounded-[20px] border border-accent-1/8 bg-bg-card transition-all duration-400 hover:border-accent-1/25 hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]"
      >
        {/* Thumbnail */}
        <div className="relative h-[160px] w-full shrink-0 overflow-hidden">
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
        <div className="flex flex-1 flex-col p-[22px]">
          {/* Header */}
          <h3 className="font-heading text-[1.4rem] font-semibold leading-tight">
            {project.title}
          </h3>
          <div className="mt-1 text-[0.95rem] text-text-tertiary">
            {project.subtitle}
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-accent-1/20 px-2.5 py-0.5 text-[0.7rem] font-medium uppercase tracking-wider text-accent-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Result (always visible as the hook) */}
          <div className="mt-4 rounded-xl bg-accent-4/8 px-4 py-3">
            <div className="mb-1 text-[0.7rem] font-semibold uppercase tracking-widest text-accent-1">
              Result
            </div>
            <p className="text-[0.9rem] leading-[1.6] text-text-secondary">
              {project.result}
            </p>
          </div>

          {/* Expandable PAR details */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="pt-4 space-y-3">
                <div>
                  <div className="mb-1 text-[0.7rem] font-semibold uppercase tracking-widest text-accent-2">
                    Problem
                  </div>
                  <p className="text-[0.9rem] leading-[1.6] text-text-secondary">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <div className="mb-1 text-[0.7rem] font-semibold uppercase tracking-widest text-accent-3">
                    What I Built
                  </div>
                  <p className="text-[0.9rem] leading-[1.6] text-text-secondary">
                    {project.action}
                  </p>
                </div>
              </div>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-1/8 px-2.5 py-1 text-[0.72rem] text-accent-3"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Note */}
              {project.note && (
                <p className="mt-3 text-[0.78rem] italic text-text-tertiary">
                  {project.note}
                </p>
              )}
            </div>
          </div>

          {/* Spacer to push bottom content down */}
          <div className="flex-1" />

          {/* Toggle + Links */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-[0.82rem] text-accent-1 transition-all duration-300 hover:gap-2.5 hover:text-accent-3"
            >
              {expanded ? "Show Less" : "Case Study"}
              <ChevronIcon expanded={expanded} />
            </button>

            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-accent-1/25 px-3.5 py-1.5 text-[0.78rem] font-medium text-text-secondary no-underline transition-all duration-300 hover:border-accent-1 hover:text-accent-1"
                  title="View Code"
                >
                  <CodeIcon /> Code
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-4 to-accent-1 px-3.5 py-1.5 text-[0.78rem] font-medium text-[#0a0a0f] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]"
                  title="View Demo"
                >
                  <ExternalLinkIcon /> Demo
                </a>
              )}
            </div>
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

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-lg:gap-5 max-md:grid-cols-1 max-md:gap-4 items-start">
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
