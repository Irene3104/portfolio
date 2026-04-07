export interface Education {
  degree: string;
  school: string;
  period: string;
  detail: string;
  badge: string;
}

export const educations: Education[] = [
  {
    degree: "Master of Information Technology",
    school: "University of Technology Sydney (UTS)",
    period: "Feb 2024 – Feb 2026",
    detail:
      "Enterprise Software Development specialisation. Faculty of Engineering and Information Technology.",
    badge: "Dean's List 2025",
  },
  {
    degree: "BA Japanese Language & Literature / BA International Trade",
    school: "Jeonbuk National University",
    period: "Mar 2012 – Feb 2017",
    detail:
      "Double major combining language expertise with international business.",
    badge: "Dual Degree",
  },
];
