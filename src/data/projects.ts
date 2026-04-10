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
  thumbnail?: string;
  thumbnailPosition?: string;
  gallery?: string[];
  note?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "SAIXAN",
    subtitle: "AI-Integrated P&L Management System",
    tags: ["Enterprise", "AI", "Full-Stack"],
    problem:
      "A Japanese company had no way for departments to track their own profit and loss in real time. Budget planning, expense claims, and financial reporting were all handled separately, making it hard for management to spot losses early or compare performance across divisions.",
    action:
      "Built a full departmental P&L system from scratch as the sole developer. Each department enters revenue and cost data by vendor, project, and value type (MP/Plan/Forecast/Actual), and the system generates monthly and yearly breakdowns with operating profit tracking. Also built expense claim workflows for travel and commuting costs with approval logic, and an AI assistant that lets users query financial data, run analysis, and even bulk-insert or delete records through natural conversation in English and Japanese.",
    result:
      "Used by 4 internal departments and 3 external companies, SAIXAN gives management real-time visibility into departmental profit and loss while replacing paper-based expense workflows with structured digital approvals and bilingual AI-assisted querying.",
    techStack: ["React", "TypeScript", "Firebase", "GCP", "OpenAI API", "Zod"],
    status: "live",
    statusLabel: "Live",
    gradient: "from-[#0a1a0e] to-[#1F8033]",
    gallery: [
      "/images/projects/saixan2.webp",
      "/images/projects/saixan1.webp",
      "/images/projects/saixan3.webp",
      "/images/projects/saixan4.webp",
    ],
    note: "Proprietary system. Architecture overview available on request.",
  },
  {
    title: "Bee-Time",
    subtitle: "Workforce Management App",
    tags: ["Production", "Freelance", "Full-Stack"],
    problem:
      "A Sydney cafe group with 50+ staff across 5 stores was tracking attendance with a rented hardware card machine and calculating wages manually in spreadsheets. Frequent human errors in payroll, hardware rental costs, and physical card waste were ongoing issues.",
    action:
      "Replaced the entire system with a mobile-first web app. Staff scan a QR code on their phone to clock in/out with GPS verification. Built role-based access so employees see their own time activity while the admin dashboard gives store owners a full view of all locations, staff, and attendance records with one-click Excel exports. Auth uses JWT + Google OAuth with role separation stored in the database.",
    result:
      "Built from firsthand operational insight, Bee-Time replaced error-prone hardware time cards and manual wage calculation with a mobile-first web app now live across 5 Sydney retail stores with 128 active users. It reduced payroll errors, removed hardware rental and card costs, and gave both staff and management real-time visibility into worked hours.",
    techStack: ["React", "TypeScript", "Express", "Prisma", "MySQL", "Google Maps API"],
    status: "live",
    statusLabel: "Live · 128 Users",
    gradient: "from-[#081408] to-[#2DB844]",
    gallery: [
      "/images/projects/bee-time1.webp",
      "/images/projects/bee-time2.webp",
      "/images/projects/bee-time3.webp",
      "/images/projects/bee-time4.webp",
      "/images/projects/bee-time5.webp",
      "/images/projects/bee-time6.webp",
    ],
  },
  {
    title: "DICOM Image Converter",
    subtitle: "Dental X-ray Data Conversion Tool",
    tags: ["C++", "Medical", "Enterprise"],
    problem:
      "The company's dental X-ray viewer software could only display DICOM images from 3 manufacturers. Each competitor used different databases (SQLite, PostgreSQL, proprietary formats), so their patient data and images were completely incompatible with our viewer.",
    action:
      "Analyzed DICOM data structures from each manufacturer, built ETL pipelines to extract, validate, and convert their image and patient data into our MySQL-based format. Handled everything from obscure proprietary databases to standard SQL. Also worked directly with Japanese clients in their language, removing the need for a separate translator between the dev team and the client.",
    result:
      "Expanded compatibility from 3 to 10+ manufacturers, improving interoperability across dental imaging systems and contributing to a 25% increase in product sales. Direct communication with Japanese clients shortened turnaround time and improved delivery accuracy.",
    techStack: ["C++", "C#", "Qt", "SQLite", "MySQL", "PostgreSQL", "MSSQL"],
    status: "completed",
    statusLabel: "Shipped",
    gradient: "from-[#0c1a0c] to-[#39FF55]",
    gallery: ["/images/projects/genoray.webp"],
  },
  {
    title: "Smart Farm AI",
    subtitle: "Real-time Cattle Monitoring System",
    tags: ["AI/ML", "Team Project", "UTS"],
    problem:
      "A cattle farm needed a way to detect abnormal livestock behaviour — such as prolonged inactivity or heat stress — across multiple video feeds, and alert farmers before conditions escalate.",
    action:
      "Owned the AI prototype: built the YOLOv8-based cattle detection pipeline with OpenCV for video analysis, outputting structured inference results consumed by the ML service and backend. The system follows a modular architecture — AI Prototype → ML Service → Backend API → React Frontend — connected via REST. Used recorded video files with an architecture designed to support real-time CCTV and multimodal inputs (video + audio).",
    result:
      "Delivered a working end-to-end prototype with real-time object detection, a multi-camera React dashboard, automated abnormal behaviour alerts, and video upload analysis. Demonstrated modular ML-backend-frontend integration as a UTS capstone project.",
    techStack: ["Python", "YOLOv8", "OpenCV", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST API"],
    status: "completed",
    statusLabel: "Prototype",
    gradient: "from-[#0a1a0e] to-[#1F8033]",
    githubUrl: "https://github.com/Irene3104/smart-farm-monitoring",
  },
  {
    title: "UTS UniApp",
    subtitle: "University Enrollment System",
    tags: ["Python", "Team Project", "UTS"],
    problem:
      "Needed a student enrollment management system for a university course project, with both command-line and graphical interfaces.",
    action:
      "Built two versions of the app: a CLI tool and a GUI using Tkinter. Implemented student registration, login, subject enrollment (max 4), password management, and an admin panel for managing records and grades.",
    result:
      "Fully functional dual-interface system handling student enrollment, authentication, and admin operations. Completed with 67 commits across the team.",
    techStack: ["Python", "Tkinter", "Colorama", "PIL"],
    status: "completed",
    statusLabel: "Academic",
    gradient: "from-[#081408] to-[#2DB844]",
    githubUrl: "https://github.com/JinLee0811/UTS_TeamProject_CLIUniApp-and-GUIUniApp_by_Python",
  },
  {
    title: "Online Rent Car",
    subtitle: "Car Rental Web Application",
    tags: ["PHP", "AWS", "Full-Stack"],
    problem:
      "Needed a web-based car rental system where users can browse vehicles, make reservations, and manage their bookings online.",
    action:
      "Built a full booking flow with HTML/CSS/JS frontend and PHP backend. Implemented reservation management, order confirmations, and user booking history. Deployed on AWS Elastic Beanstalk.",
    result:
      "Functional car rental platform with end-to-end booking flow, deployed and running on AWS infrastructure.",
    techStack: ["PHP", "JavaScript", "HTML/CSS", "AWS Elastic Beanstalk"],
    status: "completed",
    statusLabel: "Academic",
    gradient: "from-[#0c1a0c] to-[#39FF55]",
    githubUrl: "https://github.com/Irene3104/IP_As1_OnlineRentCar",
  },
];
