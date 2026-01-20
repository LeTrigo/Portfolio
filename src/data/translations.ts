export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Lautaro",
      role: "Full Stack Developer",
      description:
        "I build modern web applications with clean code and great user experiences.",
      cta: "View My Work",
      contact: "Contact Me",
      downloadCV: "Download CV",
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
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Lautaro",
      role: "Desarrollador Full Stack",
      description:
        "Construyo aplicaciones web modernas con código limpio y excelentes experiencias de usuario.",
      cta: "Ver Mi Trabajo",
      contact: "Contáctame",
      downloadCV: "Descargar CV",
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
