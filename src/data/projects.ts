export interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  problem: string;
  action: string;
  result: string;
  techStack: string[];
  status: "live" | "completed";
  statusLabel: string;
  gradient: string;
  note?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "SAIXAN",
    subtitle: "AI-Integrated P&L Platform",
    tags: ["Enterprise", "AI", "Full-Stack"],
    problem:
      "A Japanese DX company needed a departmental P&L system where non-technical finance staff could query accounting data in natural language.",
    action:
      "Designed and built the entire platform solo. React + TypeScript frontend, Firebase + Express backend, Firestore database, deployed on GCP Cloud Run. Integrated OpenAI API with custom prompt engineering for bilingual (EN/JP) financial queries.",
    result:
      "Now used by 4 internal departments and adopted by 2 external companies. Finance staff run natural-language queries instead of manual spreadsheet lookups.",
    techStack: ["React", "TypeScript", "Firebase", "GCP", "OpenAI API", "Zod"],
    status: "live",
    statusLabel: "Live",
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    note: "Proprietary system. Architecture overview available on request.",
    githubUrl: "https://github.com/Irene3104/SAIXAN",
  },
  {
    title: "Bee-Time",
    subtitle: "Workforce Management App",
    tags: ["Production", "Freelance", "Full-Stack"],
    problem:
      "A Sydney cafe group managing 50+ staff across 5 stores needed a reliable attendance system with location-based fraud prevention.",
    action:
      "Built QR-based check-in with GPS verification via Google Maps API. Added JWT + Google OAuth auth, an admin dashboard for multi-store management, and automated Excel payroll exports.",
    result:
      "Live across 5 retail stores in Sydney. 124 active users. Store owners reported improved wage accuracy and reduced manual payroll work.",
    techStack: ["React", "TypeScript", "Express", "Prisma", "MySQL", "Google Maps API"],
    status: "live",
    statusLabel: "Live · 124 Users",
    gradient: "from-[#701a75] to-[#c026d3]",
    githubUrl: "https://github.com/Irene3104/Bee-Time",
  },
  {
    title: "DICOM Image Converter",
    subtitle: "Medical X-ray Data Tool",
    tags: ["C++", "Medical", "Enterprise"],
    problem:
      "The company's X-ray viewer only supported DICOM images from 4 manufacturers, limiting market reach in the hospital sector.",
    action:
      "Extended converter compatibility to 10 brands while keeping patient data integrity across hospital PACS systems. Improved ETL pipeline with batch processing, validation, and error handling.",
    result:
      "25% increase in product sales from expanded device support. Reduced KR-JP client coordination overhead by 30% through bilingual technical communication.",
    techStack: ["C++", "C#", "SQLite", "MySQL", "PostgreSQL"],
    status: "completed",
    statusLabel: "Shipped",
    gradient: "from-[#581c87] to-[#a855f7]",
  },
];
