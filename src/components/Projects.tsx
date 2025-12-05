"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import projectsData from "@/data/projects.json";
import TechIcon from "./TechIcon";

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

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.id}
                  </div>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={project.image}
                  alt={project.title[language]}
                  fill
                  className="object-cover"
                /> */}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description[language]}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <TechIcon key={tech} name={tech} icon={tech} size="sm" />
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.projects.viewProject}
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-4 h-4" />
                    {t.projects.viewCode}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
