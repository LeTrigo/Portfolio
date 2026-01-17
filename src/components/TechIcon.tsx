"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { IconType } from "react-icons";

interface TechIconProps {
  name: string;
  icon: string;
  size?: "sm" | "md" | "lg";
}

// SVG personalizado para Vite con degradado
const ViteIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 410 404" className={className} fill="none">
    <defs>
      <linearGradient id="vite-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#41D1FF", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#BD34FE", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="vite-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FFEA83", stopOpacity: 1 }} />
        <stop offset="8.3%" style={{ stopColor: "#FFDD35", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FFA800", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
      fill="url(#vite-gradient-1)"
    />
    <path
      d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8622L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
      fill="url(#vite-gradient-2)"
    />
  </svg>
);

// SVG personalizado para VS Code
const VSCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 256 256" className={className} fill="none">
    <defs>
      <linearGradient id="vscode-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#0098FF", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#007ACC", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M180.828 252.605L97.656 234.135C96.6893 233.929 95.784 233.485 95.0138 232.838L2.23046 155.258C-0.530723 152.977 -0.789613 148.903 1.49168 146.142C1.70177 145.891 1.92966 145.654 2.17374 145.434L23.7352 127.757C24.9193 126.772 26.3696 126.167 27.898 126.029L82.7961 120.914C83.5549 120.84 84.322 120.939 85.0393 121.202C85.7567 121.465 86.4073 121.887 86.9453 122.436L192.688 228.354C195.423 231.105 195.419 235.567 192.668 238.302C192.547 238.422 192.421 238.537 192.292 238.647L182.928 246.991C181.847 247.935 180.531 248.567 179.123 248.821L180.828 252.605Z"
      fill="url(#vscode-gradient)"
    />
    <path
      d="M192.688 27.6461L86.9453 133.564C86.4073 134.113 85.7567 134.535 85.0393 134.798C84.322 135.061 83.5549 135.16 82.7961 135.086L27.898 129.971C26.3696 129.833 24.9193 129.228 23.7352 128.243L2.17374 110.566C-0.788765 108.186 -0.72812 103.849 2.23046 101.742L95.0138 24.1619C95.784 23.5154 96.6893 23.0711 97.656 22.8652L180.828 4.39502C183.455 3.88764 186.132 5.36372 186.64 7.99057C186.752 8.56253 186.772 9.14885 186.699 9.72652L184.094 31.3441C183.88 32.875 183.271 34.3251 182.328 35.5392L192.688 27.6461Z"
      fill="#0098FF"
    />
    <path
      d="M191.171 27.1094C189.389 24.3676 185.702 23.6108 183.026 25.4766L87.1953 90.3797C85.788 91.3094 84.6797 92.6328 84.0078 94.1836L192.292 238.647C192.421 238.537 192.547 238.422 192.668 238.302C195.419 235.567 195.423 231.105 192.688 228.354L191.171 27.1094Z"
      fill="#007ACC"
      opacity="0.8"
    />
  </svg>
);

const iconMap: Record<string, IconType | typeof ViteIcon | typeof VSCodeIcon> =
  {
    react: SiReact,
    nextjs: SiNextdotjs,
    nodejs: SiNodedotjs,
    css: SiCss3,
    html: SiHtml5,
    tailwind: SiTailwindcss,
    express: SiExpress,
    mongodb: SiMongodb,
    vite: ViteIcon as any,
    javascript: SiJavascript,
    typescript: SiTypescript,
    git: SiGit,
    github: SiGithub,
    docker: SiDocker,
    bootstrap: SiBootstrap,
    postgresql: SiPostgresql,
    mysql: SiMysql,
    vscode: VSCodeIcon as any,
  };

const iconColors: Record<string, string> = {
  react: "#61DAFB",
  nextjs: "#000000",
  nodejs: "#339933",
  css: "#1572B6",
  html: "#E34F26",
  tailwind: "#06B6D4",
  express: "#000000",
  mongodb: "#47A248",
  vite: "none", // Vite usa SVG con degradado
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  git: "#F05032",
  github: "#181717",
  docker: "#2496ED",
  bootstrap: "#7952B3",
  postgresql: "#4169E1",
  mysql: "#4479A1",
  vscode: "none", // VS Code usa SVG con degradado
};

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-16 h-16",
  lg: "w-20 h-20",
};

const iconSizeClasses = {
  sm: "w-7 h-7",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

export default function TechIcon({ name, icon, size = "md" }: TechIconProps) {
  const Icon = iconMap[icon];
  const color = iconColors[icon] || "#6B7280";

  return (
    <motion.div
      className={`${sizeClasses[size]} rounded-xl bg-white dark:bg-gray-800 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow flex items-center justify-center`}
      whileHover={{ scale: 1.1, rotateY: 15 }}
      title={name}
      style={{ transformStyle: "preserve-3d" }}
    >
      {Icon ? (
        icon === "vite" ? (
          <ViteIcon className={iconSizeClasses[size]} />
        ) : icon === "vscode" ? (
          <VSCodeIcon className={iconSizeClasses[size]} />
        ) : (
          <Icon
            className={iconSizeClasses[size]}
            style={{ color: color !== "none" ? color : undefined }}
          />
        )
      ) : (
        <span className="text-xs text-gray-400 font-bold">?</span>
      )}
    </motion.div>
  );
}
