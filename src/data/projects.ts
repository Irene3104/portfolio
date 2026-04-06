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
      "Now used by 4 internal departments and adopted by 2 external companies. Management can monitor quarterly operating profit across all divisions in real time and catch potential losses before they happen. Expense workflows replaced manual paper-based claims.",
    techStack: ["React", "TypeScript", "Firebase", "GCP", "OpenAI API", "Zod"],
    status: "live",
    statusLabel: "Live",
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    thumbnail: "/images/projects/saixan1.webp",
    gallery: [
      "/images/projects/saixan2.webp",
      "/images/projects/saixan1.webp",
      "/images/projects/saixan3.webp",
      "/images/projects/saixan4.webp",
    ],
    note: "Proprietary system. Architecture overview available on request.",
    githubUrl: "https://github.com/Irene3104/SAIXAN",
    demoUrl: "https://saixan.com",
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
      "Live across 5 retail stores (Baskin Robbins, Sushi Roll, Sorrel Cafe) in Sydney with 128 active users. Eliminated hardware rental costs and physical card waste. Reduced payroll calculation errors and cut admin workload significantly. Roster management feature currently in development.",
    techStack: ["React", "TypeScript", "Express", "Prisma", "MySQL", "Google Maps API"],
    status: "live",
    statusLabel: "Live · 124 Users",
    gradient: "from-[#701a75] to-[#c026d3]",
    thumbnail: "/images/projects/bee-time1.webp",
    thumbnailPosition: "center",
    gallery: [
      "/images/projects/bee-time1.webp",
      "/images/projects/bee-time2.webp",
      "/images/projects/bee-time3.webp",
      "/images/projects/bee-time4.webp",
      "/images/projects/bee-time5.webp",
      "/images/projects/bee-time6.webp",
    ],
    githubUrl: "https://github.com/Irene3104/Bee-Time",
    demoUrl: "https://project-bee-time-sandy.vercel.app",
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
    thumbnail: "/images/projects/genoray.webp",
    thumbnailPosition: "center",
    gallery: ["/images/projects/genoray.webp"],
  },
  {
    title: "Smart Farm AI",
    subtitle: "Real-time Cattle Monitoring System",
    tags: ["AI/ML", "Team Project", "UTS"],
    problem:
      "A cattle farm needed a way to monitor livestock in real time across multiple CCTV feeds and get automated alerts when animals show abnormal behavior.",
    action:
      "Built the AI detection module using YOLOv8 for real-time cattle recognition from live camera feeds. The team built a React dashboard for multi-camera monitoring and a backend API to connect everything.",
    result:
      "Working prototype with real-time object detection, multi-camera dashboard, alert system, and video analysis upload. Presented as a capstone project at UTS.",
    techStack: ["Python", "YOLOv8", "React", "Tailwind CSS", "Node.js", "REST API"],
    status: "completed",
    statusLabel: "Prototype",
    gradient: "from-[#065f46] to-[#10b981]",
    githubUrl: "https://github.com/Irene3104/AI_Cattle_Monitoring",
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
    gradient: "from-[#1e3a5f] to-[#3b82f6]",
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
    gradient: "from-[#7c2d12] to-[#ea580c]",
    githubUrl: "https://github.com/Irene3104/IP_As1_OnlineRentCar",
  },
];
