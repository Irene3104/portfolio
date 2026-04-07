export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  descriptions: string[];
  techs: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "TEN-X Co., Ltd.",
    location: "Tokyo, Japan (Remote from Sydney)",
    period: "Oct 2024 – Present",
    descriptions: [
      "Built SAIXAN, an AI-integrated departmental P&L platform now used by 4 internal departments and 3 external companies, giving management real-time visibility into profit and loss across teams.",
      "Owned the full delivery lifecycle as the sole engineer, including system design, data modelling, API development, React frontend implementation, deployment on GCP / Firebase, and ongoing production support.",
      "Developed structured workflows for expense claims, approvals, budget vs actual tracking, and reporting, replacing paper-based finance processes.",
      "Integrated bilingual OpenAI-powered financial querying in English and Japanese, including prompt design, context handling, and structured output processing for production use.",
      "Adopted Claude for development workflow improvements with reusable prompt templates and prompt caching to reduce API costs and improve output quality.",
    ],
    techs: ["React", "TypeScript", "Node.js", "Firebase", "GCP", "OpenAI API", "Claude", "Dynamics 365"],
  },
  {
    role: "Full-Stack Developer (Freelance)",
    company: "JUNCAFE OPERA PTY LTD",
    location: "Sydney, Australia",
    period: "Jan 2025 – Present",
    descriptions: [
      "Identified recurring payroll and attendance errors in a cafe operation, traced them to hardware-based time cards and manual wage calculation, and proposed a web-based solution suited to the owner's workflow.",
      "Designed, built, and deployed Bee-Time as a mobile-first workforce management web app, owning product design, frontend, backend, data modelling, and production rollout.",
      "Replaced physical cards and rental hardware with QR-based attendance tracking, enabling staff to record work and breaks on mobile and view actual worked hours in real time.",
      "Improved wage accuracy and admin efficiency across 5 stores by giving the owner store-level and employee-level attendance visibility, while reducing hardware and card-related operating costs.",
    ],
    techs: ["React", "TypeScript", "Express", "Prisma", "MySQL", "Google Maps API", "JWT", "OAuth"],
  },
  {
    role: "Software Engineer",
    company: "Genoray Flexlab",
    location: "Seoul, South Korea",
    period: "Jul 2022 – Jul 2023",
    descriptions: [
      "Built and enhanced a dental X-ray imaging SDK in C++ and Qt, expanding DICOM converter compatibility from 3 to 10+ manufacturers while preserving patient data integrity across PACS integrations.",
      "Improved ETL reliability through batch workflows, stronger validation, and better error handling, contributing to a 25% increase in product sales.",
      "Communicated directly with Japanese clients in technical discussions, reducing feedback overhead and improving delivery accuracy without relying on a non-technical intermediary.",
    ],
    techs: ["C++", "C#", "Qt", "DICOM", "Data Conversion", "ETL"],
  },
  {
    role: "Operations & Business Development Associate",
    company: "Kagoshima Airport Building Co., Ltd.",
    location: "Kagoshima, Japan",
    period: "Apr 2017 – Dec 2021",
    descriptions: [
      "Worked across airline sales, tenant billing, and operational coordination in a high-volume airport environment with complex day-to-day workflows.",
      "Managed multilingual communication in Japanese, Korean, and English across internal teams and external partners.",
      "Coordinated the launch of a web page for a newly opened business jet terminal, which sparked an early interest in user-facing digital systems.",
    ],
    techs: ["Web Design", "Billing & Invoicing", "Air Route Sales", "Trilingual Ops", "Stakeholder Management"],
  },
];
