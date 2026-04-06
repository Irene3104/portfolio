"use client";

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

export default function Navbar() {
  const activeId = useScrollSpy(
    navItems.map((item) => item.id),
    200,
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-1/2 top-6 z-[1000] flex -translate-x-1/2 gap-1 rounded-full border border-accent-1/15 bg-bg-card/75 px-2.5 py-1.5 backdrop-blur-[20px] max-md:top-4 max-md:gap-0.5 max-md:px-2 max-md:py-[5px]">
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
  );
}
