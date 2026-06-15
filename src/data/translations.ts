export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      cybersecurity: "Cybersecurity",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Lautaro",
      role: "Full Stack Developer & Cybersecurity Analyst",
      description:
        "I am a Security-Focused Full Stack Developer specializing in the MERN stack and Next.js. My approach goes beyond writing clean, functional code—I build robust digital solutions with security integrated from the very first line.\n\nCurrently pursuing degrees in both Computer Science and Cyberdefense, and certified by Google in Network Security, I bridge the gap between software development and infrastructure protection to deliver fast, scalable, and resilient applications.",
      cta: "View My Work",
      contact: "Contact Me",
      downloadCV: "Download CV",
      cvPath: "/CV-English.pdf",
      available: "Available",
    },
    about: {
      title: "About Me",
      description:
        "I'm a passionate developer with experience in creating modern web applications. I love learning new technologies and solving complex problems.",
      experience: "Years of Experience",
      projects: "Projects Completed",
      clients: "Happy Clients",
    },
    skills: {
      title: "My Skills",
      subtitle: "Technologies I work with",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools",
    },
    cybersecurity: {
      title: "Cybersecurity",
      subtitle: "15 documents practice reports, labs and analysis work",
      badge: "Google Cybersecurity Certificate | {count} practices",
      intro:
        "I focus on documenting practical cybersecurity exercises in a clear, professional format that is easy to review.",
      highlightTitle: "Security-focused work",
      highlightDescription:
        "This section groups my practical reports, lab notes and case studies so they live apart from web development projects.",
      emptyTitle: "Ready to review the full collection",
      emptyDescription:
        "Each card opens the original DOCX stored in the public folder, so the portfolio can show both context and source material.",
      cta: "Talk about a cybersecurity project",
    },
    projects: {
      title: "My Projects",
      subtitle: "Some of my recent work",
      viewProject: "View Project",
      viewCode: "View Code",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's work together",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Your message...",
    },
    footer: {
      rights: "All rights reserved.",
      // madeWith: "Made with",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      cybersecurity: "Ciberseguridad",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Lautaro",
      role: "Desarrollador Full Stack & Analista de Ciberseguridad",
      description:
        "Soy un Desarrollador Full Stack enfocado en la seguridad, especializado en el stack MERN y Next.js. Mi enfoque va más allá de escribir código limpio y funcional: construyo soluciones digitales robustas con la seguridad integrada desde la primera línea.\n\nActualmente cursando las carreras de Informática y Ciberdefensa, y certificado por Google en Seguridad de Redes, cierro la brecha entre el desarrollo de software y la protección de infraestructura para entregar aplicaciones rápidas, escalables y resilientes.",
      cta: "Ver Mi Trabajo",
      contact: "Contáctame",
      downloadCV: "Descargar CV",
      cvPath: "/CV-Spanish.pdf",
      available: "Disponible",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Soy un desarrollador apasionado con experiencia en crear aplicaciones web modernas. Me encanta aprender nuevas tecnologías y resolver problemas complejos.",
      experience: "Años de Experiencia",
      projects: "Proyectos Completados",
      clients: "Clientes Satisfechos",
    },
    skills: {
      title: "Mis Habilidades",
      subtitle: "Tecnologías con las que trabajo",
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de Datos",
      tools: "Herramientas",
    },
    cybersecurity: {
      title: "Ciberseguridad",
      subtitle: "15 informes de práctica, laboratorios y análisis",
      badge: "Certificado de Google Cybersecurity | {count} prácticas",
      intro:
        "Me enfoco en documentar ejercicios prácticos de ciberseguridad con un formato claro y profesional, fácil de revisar.",
      highlightTitle: "Trabajo orientado a seguridad",
      highlightDescription:
        "Esta sección agrupa mis informes prácticos, notas de laboratorio y estudios de caso, separados de los proyectos web.",
      emptyTitle: "Lista para revisar la colección completa",
      emptyDescription:
        "Cada tarjeta abre el DOCX original guardado en la carpeta pública, así el portfolio muestra tanto contexto como el material fuente.",
      cta: "Hablar sobre un proyecto de ciberseguridad",
    },
    projects: {
      title: "Mis Proyectos",
      subtitle: "Algunos de mis trabajos recientes",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
    },
    contact: {
      title: "Ponte en Contacto",
      subtitle: "Trabajemos juntos",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@correo.com",
      messagePlaceholder: "Tu mensaje...",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      // madeWith: "Hecho con",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;
