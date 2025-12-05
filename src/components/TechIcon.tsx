"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TechIconProps {
  name: string;
  icon: string;
  size?: "sm" | "md" | "lg";
}

const iconColors: Record<string, string> = {
  react: "#61DAFB",
  nextjs: "#000000",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  tailwind: "#06B6D4",
  html: "#E34F26",
  css: "#1572B6",
  nodejs: "#339933",
  python: "#3776AB",
  express: "#000000",
  mongodb: "#47A248",
  postgresql: "#4169E1",
  mysql: "#4479A1",
  prisma: "#2D3748",
  git: "#F05032",
  docker: "#2496ED",
  aws: "#FF9900",
  vscode: "#007ACC",
};

const iconPaths: Record<string, ReactNode> = {
  react: (
    <g>
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(120 12 12)"
      />
    </g>
  ),
  nextjs: (
    <path
      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      fill="currentColor"
    />
  ),
  typescript: (
    <g>
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
      <path
        d="M12.5 15.5v-5h2M12.5 10.5h-3v5M9.5 13h2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  ),
  javascript: (
    <g>
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
      <path
        d="M12 18c-1.5 0-2.5-1-2.5-2.5M15 10v5c0 1.5 1 2.5 2.5 2.5"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  ),
  tailwind: (
    <path
      d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35-.98-1-2.11-2.15-4.59-2.15z"
      fill="currentColor"
    />
  ),
  html: (
    <g>
      <path
        d="M4 2l1.5 17L12 22l6.5-3L20 2H4zm13.5 5H8l.25 3h9l-.5 6-4.75 1.5L7.25 16l-.25-3h2.5l.125 1.5 2.375.75 2.375-.75.25-3H7l-.5-6h11l-.25 3z"
        fill="currentColor"
      />
    </g>
  ),
  css: (
    <g>
      <path
        d="M4 2l1.5 17L12 22l6.5-3L20 2H4zm13.5 5H8l.25 3h9l-.5 6-4.75 1.5L7.25 16l-.25-3h2.5l.125 1.5 2.375.75 2.375-.75.25-3H7l-.5-6h11l-.25 3z"
        fill="currentColor"
      />
    </g>
  ),
  nodejs: (
    <path
      d="M12 2l9 5.25v9.5L12 22l-9-5.25v-9.5L12 2zm0 2.5L5.5 8v8l6.5 3.75L18.5 16V8L12 4.5z"
      fill="currentColor"
    />
  ),
  python: (
    <g>
      <path
        d="M12 2c-2.5 0-4.5.5-4.5 2v2c0 1.5 2 2.5 4.5 2.5s4.5-1 4.5-2.5V4c0-1.5-2-2-4.5-2zm0 1c.83 0 1.5.22 1.5.5s-.67.5-1.5.5-1.5-.22-1.5-.5.67-.5 1.5-.5z"
        fill="currentColor"
      />
      <path
        d="M7.5 7v3c0 1.5 2 2.5 4.5 2.5V14c-2.5 0-4.5 1-4.5 2.5v3.5c0 1 2 2 4.5 2s4.5-.5 4.5-2v-2c0-1.5-2-2.5-4.5-2.5v-1.5c2.5 0 4.5-1 4.5-2.5V7"
        fill="currentColor"
      />
      <circle cx="12" cy="20" r=".75" fill="white" />
    </g>
  ),
  express: (
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-4H7v-2h4v6zm6-4h-4v2h3v2h-4v-6h5v2z"
      fill="currentColor"
    />
  ),
  mongodb: (
    <path
      d="M12 2C9 2 8 5 8 8c0 2 .5 4 1.5 6l1 3.5c.2.8.8 1.5 1.5 1.5s1.3-.7 1.5-1.5l1-3.5c1-2 1.5-4 1.5-6 0-3-1-6-4-6zm0 2c.5 0 1 .5 1 1v5c0 .5-.5 1-1 1s-1-.5-1-1V5c0-.5.5-1 1-1z"
      fill="currentColor"
    />
  ),
  postgresql: (
    <g>
      <ellipse cx="12" cy="7" rx="7" ry="4" fill="currentColor" />
      <path
        d="M5 7v10c0 2.2 3.1 4 7 4s7-1.8 7-4V7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M5 12c0 2.2 3.1 4 7 4s7-1.8 7-4" fill="none" stroke="currentColor" strokeWidth="2" />
    </g>
  ),
  mysql: (
    <g>
      <ellipse cx="12" cy="6" rx="8" ry="4" fill="currentColor" />
      <path
        d="M4 6v12c0 2.2 3.6 4 8 4s8-1.8 8-4V6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </g>
  ),
  prisma: (
    <path
      d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3l6 3.5v7L12 19l-6-3.5v-7L12 5z"
      fill="currentColor"
    />
  ),
  git: (
    <path
      d="M21.62 11.11l-8.73-8.73a1.3 1.3 0 00-1.78 0L9.2 4.29l2.25 2.25a1.55 1.55 0 011.96 1.97l2.17 2.17a1.55 1.55 0 11-.93.87l-2.02-2.02v5.32a1.55 1.55 0 11-1.28-.02V9.36a1.55 1.55 0 01-.84-2.04L8.26 5.07l-5.88 5.88a1.3 1.3 0 000 1.78l8.73 8.73a1.3 1.3 0 001.78 0l8.73-8.73a1.3 1.3 0 000-1.78z"
      fill="currentColor"
    />
  ),
  docker: (
    <g>
      <path
        d="M3 11h3v3H3zm4 0h3v3H7zm4 0h3v3h-3zm4 0h3v3h-3zM7 7h3v3H7zm4 0h3v3h-3zm4 0h3v3h-3zm-4-4h3v3h-3z"
        fill="currentColor"
      />
      <path
        d="M22 11.5c-.5-.3-1.5-.5-2.3-.4-.2-1.2-1-2.2-2-2.9l-.4-.3-.3.4c-.4.6-.6 1.3-.5 2 0 .5.2 1 .5 1.4-.5.2-1 .4-1.5.5-.7.2-1.4.2-2.1.2H2.2l-.1.6c-.1 1.2.1 2.4.5 3.5.5 1.2 1.2 2.1 2.2 2.7 1.1.7 2.9 1.1 4.9 1.1 1 0 2-.1 2.9-.3 1.2-.3 2.4-.7 3.4-1.4 1-.6 1.8-1.4 2.5-2.3.9-1.3 1.5-2.7 1.8-4.2.5 0 1 0 1.5-.2.4-.2.8-.5 1-.9l.2-.4-.7-.4z"
        fill="currentColor"
      />
    </g>
  ),
  aws: (
    <g>
      <path
        d="M6.5 14.5l-.8 2.5h-.9l-.8-2.5h.7l.5 1.8.5-1.8zm4.3.9c0 .5-.2.8-.5 1.1-.3.2-.7.3-1.2.3h-1v-2.5h1.1c.5 0 .8.1 1.1.3.3.3.5.5.5.8zm-.7 0c0-.2-.1-.4-.2-.5-.2-.1-.4-.2-.7-.2h-.4v1.3h.3c.3 0 .6 0 .7-.2.2-.1.3-.3.3-.4zm2.9.7c0 .3-.1.5-.3.7-.2.2-.5.2-.9.2-.3 0-.6 0-.8-.1v-.6c.3.1.5.2.8.2.3 0 .5-.1.5-.3 0-.1 0-.2-.1-.2-.1-.1-.2-.1-.4-.2-.3-.1-.5-.2-.6-.4-.1-.1-.2-.3-.2-.5 0-.3.1-.5.3-.6.2-.2.5-.2.8-.2.3 0 .5 0 .8.1l-.1.5c-.2-.1-.4-.1-.6-.1-.3 0-.4.1-.4.2 0 .1 0 .2.1.2l.4.2c.2.1.4.2.5.4.1.1.2.3.2.5z"
        fill="currentColor"
      />
      <path
        d="M17.5 19l-5.5 3-5.5-3V5l5.5-3 5.5 3v14zm-5.5-16L7 6v10l5 2.5 5-2.5V6l-5-2.5z"
        fill="currentColor"
      />
    </g>
  ),
  vscode: (
    <path
      d="M17 3l4 3v12l-4 3-8-6-4 3-3-2V7l3-2 4 3 8-5zm-1 4l-5 4 5 4V7zm-8 1L4 12l4 4v-8z"
      fill="currentColor"
    />
  ),
};

export default function TechIcon({ name, icon, size = "md" }: TechIconProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const color = iconColors[icon] || "#6B7280";
  const iconPath = iconPaths[icon];

  return (
    <motion.div
      className={`${sizeClasses[size]} p-2 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center`}
      whileHover={{ scale: 1.1, rotateY: 15 }}
      title={name}
      style={{ transformStyle: "preserve-3d" }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full"
        style={{ color }}
      >
        {iconPath || (
          <circle cx="12" cy="12" r="10" fill="currentColor" />
        )}
      </svg>
    </motion.div>
  );
}
