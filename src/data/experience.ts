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
    role: "Senior Software Engineer",
    company: "TEN-X Co., Ltd.",
    location: "Tokyo, Japan (Remote from Sydney)",
    period: "Oct 2024 – Present",
    descriptions: [
      "Built SAIXAN, a departmental P&L accounting system with an AI chat assistant from the ground up — now used by 4 internal departments and adopted by 2 external companies.",
      "Integrated the OpenAI API to support natural-language financial queries in English and Japanese, handling prompt design, context management, and structured output processing.",
      "Built a real-time P&L dashboard with role-based access control, expense approval workflows, budget vs. actuals tracking, and automated Excel exports for payroll-ready reporting.",
      "Owned the full delivery stack as the sole developer: data model, API layer, front-end UI, GCP Cloud Run deployment, and ongoing production support.",
      "Contributed to a Microsoft Dynamics 365 CRM project and co-designed an AI development training course for senior engineers.",
    ],
    techs: ["React", "TypeScript", "Node.js", "Firebase", "GCP", "OpenAI API"],
  },
  {
    role: "Full-Stack Developer (Freelance)",
    company: "JUNCAFE OPERA PTY LTD",
    location: "Sydney, Australia",
    period: "Jan 2025 – Present",
    descriptions: [
      "Designed and built Bee-Time, a QR-based attendance and workforce management app now live across 5 retail stores in Sydney with 124 active users.",
      "Implemented QR check-in with GPS location verification via Google Maps API to confirm staff are physically on site.",
      "Built JWT authentication with Google OAuth, an admin dashboard for employee and location management, and automated Excel exports for payroll.",
      "Continuously maintain the production system through bug fixes, performance tuning, and staged feature rollouts.",
    ],
    techs: ["React", "Node.js", "Firebase", "Google Maps API", "JWT", "OAuth"],
  },
  {
    role: "Software Engineer",
    company: "Genoray Flexlab",
    location: "Seoul, South Korea",
    period: "Jul 2022 – Jul 2023",
    descriptions: [
      "Worked on a medical imaging SDK in C++ and C#, expanding DICOM data converter compatibility from 4 to 10 brands while preserving patient data integrity across PACS integrations.",
      "Improved ETL processing with batch workflows, stronger validation, and better error handling — contributing to a 25% increase in product sales.",
      "Acted as a bridge between the Korean development team and Japanese clients; bilingual coordination reduced communication overhead by roughly 30%.",
    ],
    techs: ["C++", "C#", "DICOM", "PACS", "ETL"],
  },
  {
    role: "Operations / Airline Sales Support",
    company: "Kagoshima Airport Building Co., Ltd.",
    location: "Kagoshima, Japan",
    period: "Apr 2017 – Dec 2021",
    descriptions: [
      "Handled multilingual communication and customer-facing operations in Japanese, Korean, and English across the Airline Sales and Passenger Service departments.",
      "Supported day-to-day operational process flow, issue handling, and event coordination in a high-volume service setting.",
    ],
    techs: ["Japanese", "Korean", "English", "Operations", "Stakeholder Management"],
  },
];
