"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useMagnetic } from "@/hooks/useMagnetic";
import { GithubIcon, LinkedInIcon, MailIcon, DownloadIcon, BoxIcon } from "@/components/icons";

interface StatProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function CountUpStat({ target, prefix = "", suffix = "", label }: StatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let cur = 0;
          const stepTime = Math.max(Math.floor(800 / target), 10);
          const step = () => {
            if (cur < target) {
              cur++;
              el.textContent = String(cur);
              setTimeout(step, stepTime);
            }
          };
          step();
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item">
      <div className="font-heading text-[3.8rem] font-bold gradient-text max-lg:text-[2.8rem] max-md:text-[2.4rem] max-[400px]:text-[2rem]" style={{ fontVariantNumeric: "tabular-nums" }}>
        {prefix}
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div
        className="mt-1.5 text-[0.88rem] uppercase tracking-[1.5px] text-text-secondary max-md:text-[0.72rem]"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}

function CtaCard({
  href,
  variant,
  icon,
  text,
  arrowContent,
  download,
}: {
  href: string;
  variant: "purple" | "pink";
  icon: React.ReactNode;
  text: string;
  arrowContent: React.ReactNode;
  download?: boolean;
}) {
  const magneticRef = useMagnetic<HTMLAnchorElement>();

  return (
    <a
      ref={magneticRef}
      href={href}
      download={download || undefined}
      className={`group relative flex-1 overflow-hidden rounded-[18px] p-6 text-text-primary no-underline transition-transform duration-300 hover:-translate-y-1 cursor-pointer min-h-[120px] max-md:min-h-0 max-md:p-5 ${
        variant === "purple"
          ? "bg-[linear-gradient(135deg,#7B7B22_90%,#B0B842_100%)] text-[#0c0d08]"
          : "bg-[linear-gradient(135deg,#B0B842_90%,#D0D072_100%)] text-[#0c0d08]"
      }`}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-[18px]"
        style={{
          opacity: variant === "purple" ? 0.12 : 0.15,
          background:
            variant === "purple"
              ? "repeating-linear-gradient(135deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 32px), radial-gradient(ellipse at 30% 100%, rgba(255,255,255,0.15), transparent 60%)"
              : "repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(255,255,255,0.08) 18px, rgba(255,255,255,0.08) 20px), radial-gradient(ellipse at 70% 90%, rgba(255,255,255,0.2), transparent 50%)",
        }}
      />
      <span className="mb-3.5 block text-2xl">{icon}</span>
      <span
        className="font-heading text-[1.05rem] font-semibold uppercase tracking-[1.5px] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <span className="absolute bottom-3.5 right-3.5 flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-current text-[13px] opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
        {arrowContent}
      </span>
    </a>
  );
}

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCardMove = useCallback((e: MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
  }, []);

  const handleCardLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = "";
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    el.addEventListener("mousemove", handleCardMove);
    el.addEventListener("mouseleave", handleCardLeave);
    return () => {
      el.removeEventListener("mousemove", handleCardMove);
      el.removeEventListener("mouseleave", handleCardLeave);
    };
  }, [handleCardMove, handleCardLeave]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center px-[var(--page-px)] py-[120px] max-md:min-h-screen max-md:pt-[90px]"
    >
      <div className="mx-auto flex w-full max-w-[var(--max-w)] items-center justify-center gap-[72px] max-lg:gap-12 max-md:flex-col max-md:gap-8 max-md:text-center min-[1400px]:gap-[90px]">
        {/* Profile Card */}
        <div className="shrink-0 max-md:flex max-md:w-full max-md:justify-center">
          <div
            ref={cardRef}
            className="relative w-[360px] overflow-hidden rounded-3xl border border-accent-1/12 bg-bg-card p-8 px-7 text-center transition-transform duration-300 hover:-translate-y-1 max-lg:w-[320px] max-lg:p-7 max-lg:px-[22px] max-md:w-full max-md:max-w-[360px] max-[400px]:px-4 max-[400px]:py-6 min-[1400px]:w-[400px]"
          >
            <span className="pointer-events-none absolute inset-[-1px] -z-10 rounded-3xl bg-gradient-to-br from-accent-1/20 via-transparent to-accent-2/20" />

            <div className="relative mx-auto mb-7 h-[260px] w-[260px] max-lg:h-[220px] max-lg:w-[220px] max-md:h-[200px] max-md:w-[200px] max-[400px]:h-[160px] max-[400px]:w-[160px] min-[1400px]:h-[280px] min-[1400px]:w-[280px]">
              <span className="absolute inset-[-8px] animate-spin-slow rounded-full border-2 border-dashed border-accent-1 opacity-50" />
              <Image
                src="/images/profile.webp"
                alt="Seoyoon Kim"
                fill
                className="rounded-full border-[3px] border-accent-1/20 object-cover object-[center_20%]"
                priority
              />
            </div>

            <div className="font-heading text-2xl font-semibold">
              Seoyoon Kim{" "}
              <span className="ml-1.5 inline-block h-2.5 w-2.5 animate-pulse-badge rounded-full bg-accent-2 shadow-[0_0_8px_var(--accent-2)]" />
            </div>

            <p className="mx-2 my-3.5 text-[1.1rem] leading-[1.7] text-text-secondary">
              I design, build, and deploy full-stack systems end to end.
              Currently shipping AI-powered enterprise software and workforce tools used in production.
            </p>

            <div className="mb-4.5 flex flex-wrap justify-center gap-2">
              {["Korean (Native)", "Japanese (Business)", "English (Professional)"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full bg-accent-1/8 px-3.5 py-1.5 text-[0.8rem] font-medium tracking-[0.5px] text-accent-3"
                >
                  {lang}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-3">
              {[
                { href: "https://github.com/Irene3104", icon: <GithubIcon />, title: "GitHub" },
                { href: "https://linkedin.com/in/seoyoon-irenekim", icon: <LinkedInIcon />, title: "LinkedIn" },
                { href: "mailto:sjyono@gmail.com", icon: <MailIcon size={16} />, title: "Email" },
              ].map((social) => (
                <a
                  key={social.title}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  title={social.title}
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-accent-1/20 text-text-secondary no-underline transition-all duration-300 hover:border-accent-1 hover:text-accent-1 hover:shadow-[var(--neon-glow)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Right */}
        <div className="max-w-[560px] flex-1 max-md:max-w-full max-md:text-center">
          <h1 className="font-heading text-[clamp(3.2rem,6vw,6rem)] font-bold leading-[1.05] mb-5 max-lg:text-[clamp(2.6rem,5vw,4rem)] max-md:text-[clamp(2.4rem,10vw,3.4rem)] max-md:mb-4 max-[400px]:text-[2.2rem]">
            <span className="block">SOFTWARE</span>
            <span className="block gradient-text">ENGINEER</span>
          </h1>

          <p className="mb-9 max-w-[520px] text-[1.25rem] leading-[1.8] text-text-secondary max-md:mx-auto max-md:max-w-full max-md:text-[1.05rem] max-md:mb-7 max-md:text-center">
            I build and ship full-stack software from system design to production support.
            Right now I'm delivering an AI-integrated P&L platform used in enterprise
            operations and maintaining a workforce product live across 5 retail stores in Sydney.
          </p>

          <div className="mb-9 flex gap-10 max-lg:gap-8 max-md:justify-center max-md:gap-6 max-md:mb-7 max-[400px]:gap-4">
            <CountUpStat target={3} prefix="+" label="Years of<br>Experience" />
            <CountUpStat target={128} prefix="+" label="Active<br>Product Users" />
            <CountUpStat target={2} label="Production Systems<br>Owned End-to-End" />
          </div>

          <div className="flex gap-3.5 max-md:flex-col max-md:gap-3">
            <CtaCard
              href="/resume.pdf"
              variant="purple"
              download
              icon={<DownloadIcon />}
              text="Download<br>Resume"
              arrowContent={<DownloadIcon size={14} strokeWidth={2.5} />}
            />
            <CtaCard
              href="#projects"
              variant="pink"
              icon={<BoxIcon />}
              text="View Projects<br>and Case Studies"
              arrowContent={<span>&rarr;</span>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
