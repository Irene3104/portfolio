export interface Project {
  title: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
  status: "live" | "completed";
  statusLabel: string;
  gradient: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "SAIXAN — AI Accounting Platform",
    role: "Sole Developer · TEN-X Co., Ltd.",
    description:
      "Departmental P&L accounting system with an AI chat assistant that supports bilingual (EN/JP) natural-language financial queries. Used by 4 internal departments and adopted by 2 external companies.",
    highlights: [
      "Real-time P&L dashboard with role-based access control",
      "Expense approval workflows & budget vs. actuals tracking",
      "Automated Excel exports for payroll-ready reporting",
      "OpenAI API integration with structured output processing",
    ],
    tags: ["React", "TypeScript", "Node.js", "Firebase", "GCP", "OpenAI"],
    status: "live",
    statusLabel: "Live",
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    githubUrl: "https://github.com/Irene3104/SAIXAN",
    demoUrl: "#",
  },
  {
    title: "Bee-Time — Workforce Management",
    role: "Full-Stack Developer · Freelance",
    description:
      "QR-based attendance and workforce management app live across 5 retail stores in Sydney. Features GPS-verified check-ins and automated payroll reporting.",
    highlights: [
      "QR check-in with GPS location verification (Google Maps API)",
      "JWT + Google OAuth authentication system",
      "Admin dashboard for employee & location management",
      "Automated Excel exports for payroll processing",
    ],
    tags: ["React", "Node.js", "Firebase", "Google Maps", "JWT"],
    status: "live",
    statusLabel: "Live · 124 Users",
    gradient: "from-[#701a75] to-[#c026d3]",
    githubUrl: "https://github.com/Irene3104/Bee-Time",
    demoUrl: "#",
  },
  {
    title: "Medical Imaging SDK",
    role: "Software Engineer · Genoray Flexlab",
    description:
      "Medical imaging SDK that expanded DICOM data converter compatibility from 4 to 10 brands, preserving patient data integrity across PACS integrations.",
    highlights: [
      "DICOM converter for 10+ device brands",
      "ETL pipeline with batch processing & validation",
      "25% increase in product sales from expanded compatibility",
      "Bilingual (KR/JP) client coordination",
    ],
    tags: ["C++", "C#", "DICOM", "PACS", "ETL"],
    status: "completed",
    statusLabel: "Shipped",
    gradient: "from-[#581c87] to-[#a855f7]",
    githubUrl: "https://github.com/Irene3104",
  },
];
