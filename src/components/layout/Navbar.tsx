"use client";

import { useState, useEffect } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { navItems } from "@/data/navigation";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  BarChartIcon,
  LayersIcon,
  MessageIcon,
  MailIcon,
} from "@/components/icons";

const navIcons: Record<string, React.ReactNode> = {
  hero: <HomeIcon />,
  about: <UserIcon />,
  experience: <BriefcaseIcon />,
  skills: <BarChartIcon />,
  projects: <LayersIcon />,
  recommendations: <MessageIcon />,
  contact: <MailIcon />,
};

function ArrowUpIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

export default function Navbar() {
  const activeId = useScrollSpy(
    navItems.map((item) => item.id),
    200,
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ── Horizontal Nav (top center, visible when not scrolled) ── */}
      <nav
        className={`fixed left-1/2 top-6 z-[1000] flex -translate-x-1/2 gap-1 rounded-full border border-accent-1/15 bg-bg-card/75 px-2.5 py-1.5 backdrop-blur-[20px] transition-all duration-500 max-md:top-4 max-md:gap-0.5 max-md:px-2 max-md:py-[5px] ${
          scrolled
            ? "pointer-events-none translate-x-[100vw] opacity-0"
            : "pointer-events-auto opacity-100"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            title={item.label}
            onClick={(e) => handleClick(e, item.href)}
            className={`flex h-[38px] w-[38px] items-center justify-center rounded-full text-text-secondary no-underline transition-all duration-300 max-md:h-[34px] max-md:w-[34px] [&_svg]:max-md:h-[15px] [&_svg]:max-md:w-[15px] ${
              activeId === item.id
                ? "bg-accent-1/10 text-accent-1"
                : "hover:bg-accent-1/10 hover:text-accent-1"
            }`}
          >
            {navIcons[item.id]}
          </a>
        ))}
      </nav>

      {/* ── Vertical Nav (right side, slides in when scrolled) ── */}
      <nav
        className={`fixed right-4 top-1/2 z-[1000] flex -translate-y-1/2 flex-col gap-1.5 rounded-full border border-accent-1/15 bg-bg-card/75 px-1.5 py-2.5 backdrop-blur-[20px] transition-all duration-500 max-md:right-2 max-md:gap-1 max-md:px-1 max-md:py-2 ${
          scrolled
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-20 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            title={item.label}
            onClick={(e) => handleClick(e, item.href)}
            className={`flex h-[36px] w-[36px] items-center justify-center rounded-full text-text-secondary no-underline transition-all duration-300 max-md:h-[30px] max-md:w-[30px] [&_svg]:max-md:h-[14px] [&_svg]:max-md:w-[14px] ${
              activeId === item.id
                ? "bg-accent-1/10 text-accent-1"
                : "hover:bg-accent-1/10 hover:text-accent-1"
            }`}
          >
            {navIcons[item.id]}
          </a>
        ))}

        {/* Divider */}
        <span className="mx-auto my-1 h-px w-5 bg-accent-1/15" />

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          title="Back to top"
          className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full border-none bg-accent-1/10 text-accent-1 transition-all duration-300 hover:bg-accent-1/20 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] max-md:h-[30px] max-md:w-[30px]"
        >
          <ArrowUpIcon />
        </button>
      </nav>
    </>
  );
}
