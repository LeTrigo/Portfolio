"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  CheckCircle,
  X,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, FormEvent } from "react";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xlgggdvb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/LeTrigo", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lautaro-ezequiel-trigo-5aa6112a6/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/let_software_development/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61570587145059",
      label: "Facebook",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Modal */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
              onClick={() => setShowSuccess(false)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md mx-4 shadow-2xl border-2 border-blue-500 dark:border-cyan-400"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowSuccess(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Gracias por contactarme. Te responderé pronto.
                  </p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-gray-900 dark:text-gray-100 text-lg">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2"
                >
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-all"
                  placeholder={t.contact.namePlaceholder}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2"
                >
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-all"
                  placeholder={t.contact.emailPlaceholder}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-all resize-none"
                  placeholder={t.contact.messagePlaceholder}
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.send}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.subtitle}
              </h3>

              <div className="flex flex-wrap gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? undefined : "_blank"}
                    rel={
                      social.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-slate-700"
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                  </motion.a>
                ))}
              </div>

              {/* Email Display */}
              <div className="mb-8 p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Email:
                </p>
                <a
                  href="mailto:letsoftwaredevelopment@gmail.com"
                  className="text-blue-600 dark:text-cyan-400 font-medium hover:underline"
                >
                  letsoftwaredevelopment@gmail.com
                </a>
              </div>

              {/* Decorative 3D Element */}
              <motion.div
                className="relative h-32 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden shadow-lg"
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mail className="w-16 h-16 text-white/30" />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-cyan-600/50 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
