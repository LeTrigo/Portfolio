"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import projectsData from "@/data/projects.json";
import TechIcon from "./TechIcon";
import { useState } from "react";

interface Project {
  id: number;
  title: { en: string; es: string };
  description: { en: string; es: string };
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function Projects() {
  const { t, language } = useLanguage();
  const projects = projectsData as Project[];
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <p className="text-gray-900 dark:text-gray-100 text-lg">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isPrivateCode = project.githubUrl === "/private-code";
            const githubLinkProps = isPrivateCode
              ? { target: "_self" }
              : { target: "_blank", rel: "noopener noreferrer" };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="bg-gray-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-200 dark:border-slate-700"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-cyan-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.id}
                    </div>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="object-cover w-full h-full absolute inset-0"
                    style={{ zIndex: 0, opacity: 0.7 }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title[language]}
                  </h3>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedId === project.id ? "auto" : "4.5rem",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mb-4"
                  >
                    <p
                      className={`project-description text-gray-100 dark:text-gray-100 ${
                        expandedId === project.id ? "" : "line-clamp-3"
                      }`}
                    >
                      {project.description[language]}
                    </p>
                  </motion.div>

                  {project.description[language].length > 100 && (
                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId === project.id ? null : project.id
                        )
                      }
                      className="text-sm text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors mb-4 font-medium"
                      aria-expanded={expandedId === project.id}
                    >
                      {expandedId === project.id ? "Ver menos" : "Ver más"}
                    </button>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <TechIcon
                        key={`${project.id}-${tech}-${idx}`}
                        name={tech}
                        icon={tech}
                        size="sm"
                      />
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.viewProject}
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      {...githubLinkProps}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="w-4 h-4" />
                      {t.projects.viewCode}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
