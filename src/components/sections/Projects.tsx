"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { GithubIcon, MonitorIcon, UsersIcon, HeartPulseIcon, CpuIcon, BookIcon, BoxIcon } from "@/components/icons";
import { projects, type Project } from "@/data/projects";

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

function CloseIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polyline points="9 6 15 12 9 18" />
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

/* ── Gallery ── */
function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-bg-primary">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          fill
          className="object-contain"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-none bg-bg-card/80 text-text-primary backdrop-blur-sm transition-all hover:bg-bg-card"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={() => setCurrent((p) => (p + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-none bg-bg-card/80 text-text-primary backdrop-blur-sm transition-all hover:bg-bg-card"
          >
            <ChevronRightIcon />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 cursor-pointer rounded-full border-none transition-all ${
                  i === current ? "w-6 bg-accent-1" : "w-1.5 bg-text-tertiary/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ── Modal ── */
function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 max-md:p-2"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        className="relative z-10 max-h-[90vh] w-full max-w-[720px] overflow-y-auto rounded-2xl border border-accent-1/15 bg-bg-card shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-none bg-bg-primary/80 text-text-secondary backdrop-blur-sm transition-all hover:bg-bg-primary hover:text-text-primary"
        >
          <CloseIcon />
        </button>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="p-4 pb-0">
            <ImageGallery images={project.gallery} title={project.title} />
          </div>
        )}

        {/* Content */}
        <div className="p-6 max-md:p-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-heading text-[1.6rem] font-bold">{project.title}</h3>
              <div className="mt-1 text-[0.95rem] text-text-tertiary">{project.subtitle}</div>
            </div>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider ${
                project.status === "live"
                  ? "bg-[rgba(34,197,94,0.2)] text-[#4ade80]"
                  : "bg-accent-1/20 text-accent-3"
              }`}
            >
              {project.statusLabel}
            </span>
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

          {/* PAR sections */}
          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-1.5 text-[0.72rem] font-semibold uppercase tracking-widest text-accent-2">
                Problem
              </div>
              <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                {project.problem}
              </p>
            </div>
            <div>
              <div className="mb-1.5 text-[0.72rem] font-semibold uppercase tracking-widest text-accent-3">
                What I Built
              </div>
              <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                {project.action}
              </p>
            </div>
            <div className="rounded-xl bg-accent-4/8 px-4 py-3">
              <div className="mb-1.5 text-[0.72rem] font-semibold uppercase tracking-widest text-accent-1">
                Result
              </div>
              <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                {project.result}
              </p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-accent-1/8 px-3 py-1 text-[0.78rem] text-accent-3"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Note */}
          {project.note && (
            <p className="mt-4 text-[0.8rem] italic text-text-tertiary">
              {project.note}
            </p>
          )}

          {/* Links */}
          <div className="mt-5 flex gap-3 border-t border-accent-1/8 pt-5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent-1/25 px-5 py-2 text-[0.85rem] font-medium text-text-secondary no-underline transition-all duration-300 hover:border-accent-1 hover:text-accent-1"
              >
                <CodeIcon /> Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-4 to-accent-1 px-5 py-2 text-[0.85rem] font-medium text-[#0a0a0f] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]"
              >
                <ExternalLinkIcon /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Project Card ── */
function ProjectCard({
  project,
  index,
  onOpenModal,
}: {
  project: Project;
  index: number;
  onOpenModal: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

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
    <ScrollReveal delay={0} className="h-full">
      <div
        ref={cardRef}
        className="flex h-full flex-col overflow-hidden rounded-[20px] border border-accent-1/8 bg-bg-card transition-all duration-400 hover:border-accent-1/25 hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]"
      >
        {/* Thumbnail */}
        <div className="relative h-[160px] w-full shrink-0 overflow-hidden">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              style={{ objectPosition: project.thumbnailPosition || "top" }}
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient}`}
            >
              {thumbIcons[index]}
            </div>
          )}
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

          {/* Result highlight */}
          <div className="mt-4 rounded-xl bg-accent-4/8 px-4 py-3">
            <div className="mb-1 text-[0.7rem] font-semibold uppercase tracking-widest text-accent-1">
              Result
            </div>
            <p className="text-[0.88rem] leading-[1.6] text-text-secondary">
              {project.result}
            </p>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Bottom row */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={onOpenModal}
              className="inline-flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-[0.82rem] text-accent-1 transition-all duration-300 hover:gap-2.5 hover:text-accent-3"
            >
              Case Study
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </button>

            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-accent-1/25 px-3.5 py-1.5 text-[0.78rem] font-medium text-text-secondary no-underline transition-all duration-300 hover:border-accent-1 hover:text-accent-1"
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

/* ── Main Section ── */
export default function Projects() {
  const viewMoreRef = useMagnetic<HTMLAnchorElement>();
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center px-[var(--page-px)] py-[120px] max-md:py-20"
    >
      <div className="mx-auto w-full max-w-[var(--max-w)]">
        <SectionHeader label="Selected Work" title="Projects & Case Studies" />

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-lg:gap-5 max-md:grid-cols-1 max-md:gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpenModal={() => setModalProject(project)}
            />
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

      {/* Case Study Modal */}
      {modalProject && (
        <CaseStudyModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
}
