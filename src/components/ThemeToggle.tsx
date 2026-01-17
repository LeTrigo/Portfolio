"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-20 h-10 rounded-full bg-gray-200 dark:bg-slate-700 border-2 border-gray-300 dark:border-slate-600">
        <div className="absolute top-1 left-1 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center">
          <Sun className="w-4 h-4 text-yellow-500" />
        </div>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-20 h-10 rounded-full bg-gray-200 dark:bg-slate-700 border-2 border-gray-300 dark:border-slate-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Slider Circle */}
      <div
        className={`absolute top-1 ${
          isDark ? "right-1" : "left-1"
        } w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ease-in-out`}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-slate-800" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
}
