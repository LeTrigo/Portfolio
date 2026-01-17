# Guía de Personalización

Esta guía te ayudará a personalizar el portfolio según tus necesidades.

## 🎯 Personalización Básica

### 1. Información Personal

#### Actualizar el Hero

Edita [src/data/translations.ts](src/data/translations.ts):

```typescript
hero: {
  greeting: "Hi, I'm",
  name: "Tu Nombre",
  role: "Tu Título Profesional",
  description: "Tu descripción profesional aquí.",
  cta: "View My Work",
  contact: "Contact Me",
  available: "Available",
}
```

#### Actualizar Metadata

Edita [src/app/layout.tsx](src/app/layout.tsx):

```typescript
export const metadata: Metadata = {
  title: "Tu Nombre | Tu Título",
  description: "Tu descripción personalizada.",
  icons: {
    icon: "/tu-logo.svg",
  },
};
```

### 2. Agregar Proyectos

Edita [src/data/projects.json](src/data/projects.json):

```json
{
  "en": [
    {
      "title": "Nombre del Proyecto",
      "description": "Descripción breve del proyecto",
      "technologies": ["React", "TypeScript", "Node.js"],
      "image": "/img/tu-proyecto.png",
      "github": "https://github.com/tu-usuario/tu-repo",
      "demo": "https://tu-proyecto.com"
    }
  ]
}
```

**Pasos:**

1. Agrega la imagen en `public/img/`
2. Optimiza la imagen (recomendado: PNG o WebP, máx 800x600px)
3. Agrega el proyecto en ambos idiomas (en/es)

### 3. Actualizar Habilidades

Edita [src/data/skills.ts](src/data/skills.ts):

```typescript
import { SiReact, SiNodedotjs } from "react-icons/si";

export const skills: Skill[] = [
  {
    name: "Nueva Tecnología",
    icon: SiReact, // Encuentra iconos en https://react-icons.github.io/react-icons/
    category: "frontend", // frontend, backend, o tools
  },
];
```

**Categorías:**

- `frontend`: React, Vue, Angular, etc.
- `backend`: Node.js, Python, Java, etc.
- `tools`: Git, Docker, VS Code, etc.

### 4. Enlaces de Contacto

Edita [src/components/Contact.tsx](src/components/Contact.tsx):

```typescript
// Actualiza los enlaces sociales
<a href="https://github.com/tu-usuario">
<a href="https://linkedin.com/in/tu-perfil">
<a href="mailto:tu-email@ejemplo.com">
```

### 5. Cambiar Logo/Favicon

1. Reemplaza `public/logo-web.svg` con tu logo
2. Formatos soportados: SVG, PNG, ICO
3. Tamaño recomendado: 512x512px

## 🎨 Personalización Avanzada

### Cambiar Paleta de Colores

Edita [src/app/globals.css](src/app/globals.css):

```css
:root {
  --primary: #3b82f6; /* Azul principal */
  --secondary: #10b981; /* Verde secundario */
  --accent: #f59e0b; /* Amarillo acento */
}

.dark {
  --primary: #60a5fa; /* Ajusta para modo oscuro */
}
```

O usa colores de Tailwind directamente en componentes:

```tsx
className = "bg-blue-600 dark:bg-blue-400";
```

### Personalizar Animaciones

#### Velocidad de Animaciones

En componentes con Framer Motion:

```typescript
// Rápida
transition={{ duration: 0.3 }}

// Normal
transition={{ duration: 0.5 }}

// Lenta
transition={{ duration: 0.8 }}
```

#### Desactivar Animaciones

Comenta o elimina las props de Framer Motion:

```typescript
// Antes
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>

// Después
<div>
```

### Cambiar Tipografía

Edita [tailwind.config.ts](tailwind.config.ts):

```typescript
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
};
```

Luego importa las fuentes en [src/app/layout.tsx](src/app/layout.tsx) usando `next/font/google`.

### Personalizar Navegación

Edita [src/components/Navbar.tsx](src/components/Navbar.tsx):

```typescript
// Agregar nueva sección
const navItems = [
  { name: t.nav.home, href: "#home" },
  { name: t.nav.about, href: "#about" },
  { name: "Blog", href: "#blog" }, // Nueva sección
];
```

No olvides agregar las traducciones en `translations.ts`.

## 📱 Personalización de Componentes

### Hero Section

**Cambiar el efecto de escritura:**

Edita [src/components/Hero.tsx](src/components/Hero.tsx):

```typescript
<Typewriter
  words={["Developer", "Designer", "Freelancer"]}
  loop={5} // Número de loops (0 = infinito)
  cursor
  cursorStyle="_"
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/>
```

**Agregar imagen de perfil:**

```tsx
<div className="flex items-center gap-4">
  <img src="/img/perfil.jpg" alt="Profile" className="w-32 h-32 rounded-full" />
  <div>{/* Contenido del hero */}</div>
</div>
```

### Projects Section

**Cambiar configuración del carrusel:**

Edita [src/components/Projects.tsx](src/components/Projects.tsx):

```typescript
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Número de slides visibles
  slidesToScroll: 1,
  autoplay: true, // Activar autoplay
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};
```

### Skills Section

**Cambiar disposición del grid:**

```tsx
// 3 columnas en desktop
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

// 4 columnas en desktop
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
```

## 🌍 Agregar Más Idiomas

### Paso 1: Agregar traducciones

Edita [src/data/translations.ts](src/data/translations.ts):

```typescript
export const translations = {
  en: {
    /* ... */
  },
  es: {
    /* ... */
  },
  fr: {
    // Nuevo idioma
    nav: {
      home: "Accueil",
      about: "À propos",
      // ...
    },
    // ...
  },
};

export type Language = "en" | "es" | "fr";
```

### Paso 2: Actualizar el selector

Edita [src/components/LanguageToggle.tsx](src/components/LanguageToggle.tsx):

```typescript
<select value={language} onChange={(e) => setLanguage(e.target.value)}>
  <option value="en">🇺🇸 EN</option>
  <option value="es">🇪🇸 ES</option>
  <option value="fr">🇫🇷 FR</option>
</select>
```

## 🔧 Funcionalidades Adicionales

### Agregar Blog

1. Crea `src/app/blog/page.tsx`
2. Crea componente `src/components/BlogList.tsx`
3. Agrega datos en `src/data/blog-posts.json`
4. Actualiza navegación

### Agregar Formulario de Contacto Funcional

```bash
npm install @emailjs/browser
```

Edita [src/components/Contact.tsx](src/components/Contact.tsx):

```typescript
import emailjs from "@emailjs/browser";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formData,
      "YOUR_PUBLIC_KEY"
    );
    alert("Mensaje enviado!");
  } catch (error) {
    alert("Error al enviar");
  }
};
```

### Agregar Analytics

**Google Analytics:**

```bash
npm install @next/third-parties
```

Edita [src/app/layout.tsx](src/app/layout.tsx):

```typescript
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

### Agregar Sistema de Comentarios

Usa servicios como:

- **Disqus**
- **Giscus** (basado en GitHub Discussions)
- **Utterances** (basado en GitHub Issues)

## 📊 Optimización

### Imágenes

1. Usa Next.js Image:

```tsx
import Image from "next/image";

<Image
  src="/img/proyecto.png"
  alt="Proyecto"
  width={800}
  height={600}
  className="rounded-lg"
/>;
```

2. Optimiza antes de subir:

- Usa [TinyPNG](https://tinypng.com)
- Convierte a WebP
- Tamaño máximo: 1920px de ancho

### Performance

1. Lazy load componentes pesados:

```typescript
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <p>Cargando...</p>,
});
```

2. Reduce bundle size:

```bash
npm run build
# Revisa el output para ver tamaños
```

## 🐛 Solución de Problemas Comunes

### Hydration Errors

Si ves errores de hidratación:

```typescript
// Usa suppressHydrationWarning en elementos que cambian
<html suppressHydrationWarning>
```

### Imágenes no se cargan

Verifica:

1. La ruta es correcta (`/img/nombre.png`)
2. El archivo existe en `public/img/`
3. La extensión es correcta (mayúsculas/minúsculas)

### Animaciones lentas

Reduce la cantidad de elementos animados o:

```typescript
// Usa "once" para animar solo una vez
viewport={{ once: true }}
```

### Traducciones no funcionan

Verifica:

1. El idioma está en `translations.ts`
2. Todas las claves existen en ambos idiomas
3. El tipo `Language` incluye el nuevo idioma

## 💡 Tips y Mejores Prácticas

1. **Commits frecuentes**: Guarda cambios pequeños con mensajes descriptivos
2. **Testing local**: Siempre prueba con `npm run dev` antes de deployar
3. **Build antes de deploy**: Ejecuta `npm run build` para detectar errores
4. **Responsive first**: Prueba en móvil, tablet y desktop
5. **Accesibilidad**: Usa alt text en imágenes, labels en formularios
6. **SEO**: Actualiza metadatos para cada página

## 🎓 Recursos Útiles

- [Tailwind CSS Cheatsheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)
- [React Icons Search](https://react-icons.github.io/react-icons/)
- [Color Palette Generator](https://coolors.co/)
- [Google Fonts](https://fonts.google.com/)
