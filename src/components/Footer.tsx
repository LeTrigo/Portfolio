"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-gray-900 dark:text-gray-100 text-sm">
            <span>© {currentYear}</span>
            {/* <span>{t.footer.madeWith}</span> */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {/* <Heart className="w-4 h-4 text-red-500 fill-red-500" /> */}
            </motion.div>
          </div>

          {/* Rights */}
          <p className="text-gray-900 dark:text-gray-100 text-sm">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
