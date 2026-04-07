export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "Python", "C#", "C++"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express", "Firebase Cloud Functions", "Prisma ORM", "REST APIs"] },
  { title: "AI / LLM", items: ["OpenAI API", "LLM Integration", "Prompt Design", "Structured Output Handling"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Firestore", "SQLite", "MSSQL"] },
  { title: "Cloud & DevOps", items: ["GCP (Cloud Run, Cloud Functions)", "Firebase", "AWS", "Vercel", "Docker", "GitHub Actions", "CI/CD"] },
  { title: "Auth & Security", items: ["JWT", "Google OAuth 2.0", "Firebase Auth", "RBAC"] },
  { title: "Tools", items: ["Git", "GitHub", "Figma", "Postman", "VS Code"] },
];

export const marqueeItems: string[] = [
  "React", "TypeScript", "Node.js", "Firebase", "GCP",
  "OpenAI", "PostgreSQL", "Docker", "Next.js", "Python",
];
