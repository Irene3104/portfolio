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
    title: "SAIXAN",
    role: "Sole Developer · TEN-X Co., Ltd.",
    description:
      "AI-powered P&L accounting system with a bilingual (EN/JP) chat assistant for natural-language financial queries. Used by 4 internal departments and adopted by 2 external companies.",
    highlights: [
      "Real-time P&L dashboard with role-based access control",
      "Expense approval workflows and budget vs. actuals tracking",
      "Automated Excel exports for payroll-ready reporting",
      "OpenAI API integration with structured output processing",
    ],
    tags: ["React", "TypeScript", "Node.js", "Firebase", "GCP", "OpenAI"],
    status: "live",
    statusLabel: "Live",
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    githubUrl: "https://github.com/Irene3104/SAIXAN",
  },
  {
    title: "Bee-Time",
    role: "Full-Stack Developer · Freelance",
    description:
      "QR-based attendance and workforce management app live across 5 retail stores in Sydney. Staff check in with GPS-verified QR codes and payroll reports are generated automatically.",
    highlights: [
      "QR check-in with GPS location verification (Google Maps API)",
      "JWT + Google OAuth authentication system",
      "Admin dashboard for employee and location management",
      "Automated Excel exports for payroll processing",
    ],
    tags: ["React", "Node.js", "Firebase", "Google Maps", "JWT"],
    status: "live",
    statusLabel: "Live · 124 Users",
    gradient: "from-[#701a75] to-[#c026d3]",
    githubUrl: "https://github.com/Irene3104/Bee-Time",
  },
  {
    title: "DICOM Image Converter",
    role: "Software Engineer · Genoray (X-ray Manufacturer)",
    description:
      "Data conversion tool that transforms third-party DICOM X-ray images into a format compatible with the company's viewer software. Expanded supported device brands from 4 to 10.",
    highlights: [
      "Converter supporting 10+ third-party X-ray device brands",
      "Data transformation pipeline with format parsing and validation",
      "25% increase in product sales from expanded compatibility",
      "Bilingual (KR/JP) coordination across dev and sales teams",
    ],
    tags: ["C++", "C#", "DICOM", "Data Conversion", "ETL"],
    status: "completed",
    statusLabel: "Shipped",
    gradient: "from-[#581c87] to-[#a855f7]",
  },
];
