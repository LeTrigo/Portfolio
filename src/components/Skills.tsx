"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/data/skills";
import TechIcon from "./TechIcon";

export default function Skills() {
  const { t } = useLanguage();

  // Unir todas las skills en un solo array para el carrusel
  const filteredSkills = skills.filter(
    (skill) =>
      skill.name !== "TypeScript" &&
      skill.name !== "Python" &&
      skill.name !== "Prisma" &&
      skill.name !== "Docker" &&
      skill.name !== "AWS"
  );

  return (
    <section id="skills" className="py-20 min-h-[80vh] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto py-12">
          {/* Fondo moderno animado y más visible */}
          <div className="absolute inset-0 -z-10 flex justify-center items-center">
            <div className="w-full h-full bg-linear-to-br from-purple-900 via-blue-900 to-pink-700 opacity-60 rounded-3xl blur-md" />
            <div className="absolute left-1/4 top-1/2 w-40 h-40 bg-blue-500/40 rounded-full blur-2xl animate-spin-slow" />
            <div className="absolute right-1/4 top-1/2 w-32 h-32 bg-purple-500/40 rounded-full blur-2xl animate-spin-slow" />
          </div>
          <Slider
            dots={false}
            arrows={false}
            infinite={true}
            speed={3000}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={0}
            cssEase="linear"
            pauseOnHover={false}
            responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1 },
              },
              {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
              },
            ]}
          >
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4"
              >
                <TechIcon name={skill.name} icon={skill.icon} />
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {skill.name}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
