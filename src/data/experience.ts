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
      "Leading DX (Digital Transformation) projects for enterprise clients, including CRM system development and P&L management platform builds.",
      "Built SAIXAN, a departmental P&L accounting system with an AI chat assistant from scratch. Now used by 4 internal departments and adopted by 2 external companies.",
      "Integrated the OpenAI API for bilingual (EN/JP) natural-language financial queries, covering prompt design, context management, and structured output processing.",
      "Adopted Claude for code generation with reusable prompt templates, applied prompt caching to reduce API costs and response time, and separated system/developer prompts to improve output quality.",
      "Delivered a real-time P&L dashboard with role-based access, expense approval workflows, budget vs. actuals tracking, and automated Excel exports.",
      "Own the entire delivery stack as the sole developer: data model, API layer, front-end UI, GCP Cloud Run deployment, and ongoing production support.",
    ],
    techs: ["React", "TypeScript", "Node.js", "Firebase", "GCP", "OpenAI API", "Claude", "Dynamics 365"],
  },
  {
    role: "Full-Stack Developer (Freelance)",
    company: "JUNCAFE OPERA PTY LTD",
    location: "Sydney, Australia",
    period: "Jan 2025 – Present",
    descriptions: [
      "Designed and built Bee-Time, a QR-based attendance and workforce management app. Currently live across 5 retail stores in Sydney with 124 active users.",
      "Implemented QR check-in with GPS verification via Google Maps API so staff location is confirmed before clock-in is accepted.",
      "Set up JWT authentication with Google OAuth, an admin dashboard for employee and location management, and automated Excel exports for payroll.",
      "Maintain the production system day-to-day through bug fixes, performance tuning, and staged feature rollouts.",
    ],
    techs: ["React", "Node.js", "Firebase", "Google Maps API", "JWT", "OAuth"],
  },
  {
    role: "Software Engineer",
    company: "Genoray Flexlab",
    location: "Seoul, South Korea",
    period: "Jul 2022 – Jul 2023",
    descriptions: [
      "Built a DICOM image converter at a medical X-ray manufacturer, enabling the company's viewer software to display X-ray images from 10 third-party device brands (up from 4).",
      "Developed data transformation pipelines in C++ and C# to parse, validate, and convert proprietary DICOM formats into a unified structure for the in-house viewer.",
      "Improved ETL processing with batch workflows, stronger validation, and better error handling, contributing to a 25% increase in product sales.",
      "Served as a bilingual bridge between the Korean dev team and Japanese clients, reducing communication overhead by roughly 30%.",
    ],
    techs: ["C++", "C#", "DICOM", "Data Conversion", "ETL"],
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
