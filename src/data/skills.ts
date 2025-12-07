export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "database";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  // { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "JavaScript", icon: "javascript", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend" },
  { name: "HTML5", icon: "html", category: "frontend" },
  { name: "CSS3", icon: "css", category: "frontend" },
  { name: "Vite", icon: "vite", category: "tools" },
  { name: "Bootstrap", icon: "bootstrap", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "nodejs", category: "backend" },
  // { name: "Python", icon: "python", category: "backend" },
  { name: "Express", icon: "express", category: "backend" },

  // Database
  { name: "MongoDB", icon: "mongodb", category: "database" },
  { name: "PostgreSQL", icon: "postgresql", category: "database" },
  { name: "MySQL", icon: "mysql", category: "database" },
  // { name: "Prisma", icon: "prisma", category: "database" },

  // Tools
  { name: "Git", icon: "git", category: "tools" },
  // { name: "Docker", icon: "docker", category: "tools" },
  // { name: "AWS", icon: "aws", category: "tools" },
  { name: "VS Code", icon: "vscode", category: "tools" },
];
