"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/data/skills";
import TechIcon from "./TechIcon";

export default function Skills() {
  const { t } = useLanguage();

  const categories = [
    { key: "frontend", titleKey: "frontend" as const },
    { key: "backend", titleKey: "backend" as const },
    { key: "database", titleKey: "database" as const },
    { key: "tools", titleKey: "tools" as const },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category.key
            );

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  {t.skills[category.titleKey]}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="flex flex-col items-center gap-2"
                    >
                      <TechIcon name={skill.name} icon={skill.icon} />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
