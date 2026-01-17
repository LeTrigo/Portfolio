"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300 flex items-center gap-1 border border-gray-200 dark:border-slate-600"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-200">
        {language}
      </span>
    </button>
  );
}
