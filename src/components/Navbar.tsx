"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </motion.a>
            ))}
          </div>

          {/* Theme & Language Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-all border border-gray-200 dark:border-slate-600"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 dark:text-gray-200 hover:text-cyan-400 font-medium transition-colors"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
