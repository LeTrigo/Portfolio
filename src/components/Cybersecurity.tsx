"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  FolderOpen,
  ShieldAlert,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cybersecurityPractices } from "@/data/cybersecurityPractices";

const categoryIcons = [ShieldAlert, FileText, BookOpen, FolderOpen] as const;

export default function Cybersecurity() {
  const { t, language } = useLanguage();

  return (
    <section
      id="cybersecurity"
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-200 dark:border-cyan-400/30 bg-cyan-100 dark:bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
            {t.cybersecurity.badge.replace(
              "{count}",
              String(cybersecurityPractices.length),
            )}
          </span>
          <h2 className="mt-4 text-4xl font-bold mb-4 bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {t.cybersecurity.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-slate-600 dark:text-slate-200">
            {t.cybersecurity.subtitle}
          </p>
        </motion.div>

        {/* Banner destacado: Siempre Oscuro para que el texto blanco resalte */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl mb-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.2),transparent_30%)]" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {t.cybersecurity.highlightTitle}
              </h3>
              <div className="mt-4 text-slate-200 leading-relaxed max-w-2xl font-medium">
                {t.cybersecurity.intro}
              </div>
              <div className="mt-4 text-slate-400 leading-relaxed max-w-2xl">
                {t.cybersecurity.highlightDescription}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {cybersecurityPractices.slice(0, 4).map((practice, index) => {
                const Icon = categoryIcons[index % categoryIcons.length];
                return (
                  <div
                    key={practice.id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <div className="mt-3 text-sm font-bold text-white">
                      {practice.category[language]}
                    </div>
                    <div className="mt-2 text-xs leading-relaxed line-clamp-3 font-medium text-slate-300">
                      {practice.title[language]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Grid de tarjetas: Siempre Oscuras para mantener la estética Cyber y legibilidad del texto blanco */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cybersecurityPractices.map((practice, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];

            return (
              <motion.article
                key={practice.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-300 border border-cyan-400/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-300">
                    {practice.category[language]}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {practice.title[language]}
                </h3>
                <div className="mt-3 text-sm leading-6 font-medium line-clamp-3 text-slate-300">
                  {practice.summary[language]}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                    PDF
                  </span>
                  <a
                    href={practice.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200 hover:gap-3 transition-all"
                  >
                    {language === "es" ? "Abrir" : "Open"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
