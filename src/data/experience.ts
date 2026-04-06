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
      "Leading DX projects for enterprise clients, including CRM development and a departmental P&L management platform.",
      "Built SAIXAN, a P&L system where departments enter revenue/cost data by vendor, project, and value type. The system tracks monthly and yearly operating profit so management can spot losses early across all divisions.",
      "Built expense claim workflows for travel and commuting costs with multi-step approval logic, replacing paper-based processes.",
      "Integrated an AI assistant (OpenAI API) that lets users query, analyze, and bulk-manage financial records through bilingual (EN/JP) natural conversation.",
      "Adopted Claude for code generation with reusable prompt templates and prompt caching to reduce API costs and improve output quality.",
      "Own the full stack as sole developer: data model, API, frontend, GCP Cloud Run deployment, and ongoing production support. Used by 4 departments and 3 external companies.",
    ],
    techs: ["React", "TypeScript", "Node.js", "Firebase", "GCP", "OpenAI API", "Claude", "Dynamics 365"],
  },
  {
    role: "Full-Stack Developer (Freelance)",
    company: "JUNCAFE OPERA PTY LTD",
    location: "Sydney, Australia",
    period: "Jan 2025 – Present",
    descriptions: [
      "Built Bee-Time, a mobile-first workforce management app that replaced a hardware card machine and manual wage calculations. Now live across 5 retail stores in Sydney with 128 active users.",
      "Staff scan a QR code on their phone to clock in/out with GPS verification. Role-based access separates employee and admin views, with the admin dashboard covering all stores, staff, and attendance records.",
      "Automated payroll reporting with one-click Excel exports, eliminating manual spreadsheet calculations and reducing wage errors for the store owner.",
      "Continuously maintaining and improving the production system. Roster management feature currently in development based on client feedback.",
    ],
    techs: ["React", "Node.js", "Firebase", "Google Maps API", "JWT", "OAuth"],
  },
  {
    role: "Software Engineer",
    company: "Genoray Flexlab",
    location: "Seoul, South Korea",
    period: "Jul 2022 – Jul 2023",
    descriptions: [
      "Built a DICOM image converter that lets the company's dental X-ray viewer display images from competitors' devices. Analyzed and reverse-engineered data formats from each manufacturer to make their patient data and images compatible with our system.",
      "Handled ETL across multiple database types (SQLite, PostgreSQL, proprietary formats) into the company's MySQL-based system, expanding supported manufacturers from 3 to 10+.",
      "Improved ETL pipelines with batch processing, validation, and error handling, contributing to a 25% increase in product sales.",
      "Communicated directly with Japanese clients in their language, replacing the previous workflow where a non-technical translator relayed messages between the dev team and the client. Cut development turnaround time and raised client satisfaction.",
    ],
    techs: ["C++", "C#", "Qt", "DICOM", "Data Conversion", "ETL"],
  },
  {
    role: "Operations & Business Development Associate",
    company: "Kagoshima Airport Building Co., Ltd.",
    location: "Kagoshima, Japan",
    period: "Apr 2017 – Dec 2021",
    descriptions: [
      "Ran air route sales initiatives and airport promotional campaigns targeting airline partners, helping bring new routes to Kagoshima Airport.",
      "Handled tenant billing for airlines and cargo terminals, calculating and invoicing monthly rent, water, electricity, and facility usage fees.",
      "Designed and launched the official web page for a newly opened Business Jet terminal, covering page layout, content, and coordination with stakeholders.",
      "Worked as a trilingual liaison (Japanese, Korean, English) across Airline Sales, Passenger Services, and Business Development in a 24/7 environment.",
      "Coordinated event planning, issue resolution, and daily operational workflows across multiple airport departments.",
    ],
    techs: ["Web Design", "Billing & Invoicing", "Air Route Sales", "Trilingual Ops", "Stakeholder Management"],
  },
];
