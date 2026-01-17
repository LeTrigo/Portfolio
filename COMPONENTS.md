# Referencia de Componentes

Documentación técnica de cada componente del proyecto.

## 📑 Índice

- [Layout Components](#layout-components)
- [Feature Components](#feature-components)
- [UI Components](#ui-components)
- [Context & Providers](#context--providers)

---

## Layout Components

### RootLayout (`src/app/layout.tsx`)

**Tipo:** Server Component

**Propósito:** Layout raíz de la aplicación con metadata global.

**Características:**

- Define metadata SEO
- Configura favicon
- Envuelve la app con providers (Theme y Language)
- Configura scroll suave

**Metadata:**

```typescript
metadata: {
  title: string;
  description: string;
  icons: {
    icon, shortcut, apple;
  }
}
```

**Estructura:**

```tsx
html (scroll-smooth, suppressHydrationWarning)
└── body (estilos globales)
    └── ThemeProvider
        └── LanguageProvider
            └── children
```

---

### Navbar (`src/components/Navbar.tsx`)

**Tipo:** Client Component

**Propósito:** Navegación principal con menú responsivo.

**Estado:**

- `isOpen`: Control de menú móvil (boolean)

**Características:**

- Sticky header
- Menú hamburguesa en móvil
- Smooth scroll a secciones
- Integra ThemeToggle y LanguageToggle
- Backdrop difuminado

**Navegación:**

```typescript
navItems: Array<{ name: string; href: string }>;
```

**Breakpoints:**

- Mobile: < 768px (menú hamburguesa)
- Desktop: >= 768px (menú horizontal)

---

### Footer (`src/components/Footer.tsx`)

**Tipo:** Server Component

**Propósito:** Pie de página con información de copyright.

**Características:**

- Año dinámico con `new Date().getFullYear()`
- Enlaces a redes sociales
- Diseño minimalista

---

## Feature Components

### Hero (`src/components/Hero.tsx`)

**Tipo:** Client Component

**Propósito:** Sección principal con presentación y CTA.

**Dependencias:**

- `framer-motion`: Animaciones
- `react-simple-typewriter`: Efecto de escritura
- `lucide-react`: Iconos

**Características:**

- Efecto typewriter para roles profesionales
- Animaciones de entrada (fade + slide)
- Indicador de disponibilidad
- Botones de acción (CTA)
- Gradientes animados de fondo

**Animaciones:**

```typescript
// Container
initial: { opacity: 0 }
animate: { opacity: 1 }
transition: { duration: 0.5 }

// Elementos
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, delay: 0.2 }
```

**Typewriter:**

```typescript
words: Array<string>; // Roles profesionales
loop: 0; // Infinito
cursor: true;
cursorStyle: "|";
```

---

### About (`src/components/About.tsx`)

**Tipo:** Client Component

**Propósito:** Sección "Sobre mí" con estadísticas.

**Características:**

- Descripción personal
- Estadísticas en grid (experiencia, proyectos, clientes)
- Animaciones con `whileInView`
- Diseño responsivo

**Grid de Estadísticas:**

```typescript
stats: Array<{
  number: string;
  label: string;
}>;
```

**Layout:**

- Mobile: 1 columna
- Desktop: 3 columnas

---

### Skills (`src/components/Skills.tsx`)

**Tipo:** Client Component

**Propósito:** Muestra habilidades técnicas con iconos.

**Características:**

- Grid responsivo de tecnologías
- Iconos de react-icons
- Animaciones hover
- Categorización (frontend, backend, tools)
- Efecto stagger en animaciones

**Estructura del Grid:**

- Mobile: 2 columnas
- Tablet: 3 columnas
- Desktop: 4 columnas

**Animación por Categoría:**

```typescript
variants: {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
}
```

---

### Projects (`src/components/Projects.tsx`)

**Tipo:** Client Component

**Propósito:** Carrusel de proyectos.

**Dependencias:**

- `react-slick`: Carrusel
- `slick-carousel`: Estilos del carrusel

**Configuración del Carrusel:**

```typescript
settings: {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [...]
}
```

**Estructura de Proyecto:**

```typescript
{
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}
```

**Responsive:**

- Mobile: 1 slide
- Tablet: 2 slides
- Desktop: 3 slides

**Características:**

- Navegación con flechas
- Dots de paginación
- Hover effects
- Enlaces a GitHub y Demo
- Tags de tecnologías

---

### Contact (`src/components/Contact.tsx`)

**Tipo:** Client Component

**Propósito:** Información de contacto y redes sociales.

**Características:**

- Email de contacto
- Enlaces a redes sociales (GitHub, LinkedIn, etc.)
- Ubicación
- Iconos con react-icons
- Animaciones hover

**Estructura:**

```typescript
contactInfo: Array<{
  icon: IconType;
  label: string;
  value: string;
  link?: string;
}>;
```

---

## UI Components

### ThemeToggle (`src/components/ThemeToggle.tsx`)

**Tipo:** Client Component

**Propósito:** Botón para cambiar entre modo claro y oscuro.

**Dependencias:**

- `next-themes`: Hook useTheme

**Estados:**

- `light`: Modo claro (icono de sol)
- `dark`: Modo oscuro (icono de luna)

**Características:**

- Transiciones suaves
- Persistencia en localStorage
- Iconos de lucide-react
- Animación de rotación

**Código:**

```typescript
const { theme, setTheme } = useTheme();
const toggleTheme = () => {
  setTheme(theme === "dark" ? "light" : "dark");
};
```

---

### LanguageToggle (`src/components/LanguageToggle.tsx`)

**Tipo:** Client Component

**Propósito:** Selector de idioma (ES/EN).

**Características:**

- Select dropdown con banderas
- Persistencia en localStorage
- Actualización inmediata del UI

**Código:**

```typescript
const { language, setLanguage } = useLanguage();

<select value={language} onChange={(e) => setLanguage(e.target.value)}>
  <option value="en">🇺🇸 EN</option>
  <option value="es">🇪🇸 ES</option>
</select>;
```

---

### TechIcon (`src/components/TechIcon.tsx`)

**Tipo:** Server Component

**Propósito:** Renderiza iconos de tecnologías.

**Props:**

```typescript
{
  name: string;
  icon: IconType;
}
```

**Características:**

- Hover effect con escala
- Transiciones suaves
- Tamaño consistente de iconos
- Tooltip con nombre

**Estilos:**

```tsx
className="group p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg
           hover:shadow-xl transform hover:scale-105 transition-all duration-300"
```

---

## Context & Providers

### ThemeProvider (`src/components/ThemeProvider.tsx`)

**Tipo:** Client Component

**Propósito:** Proveedor de contexto de temas.

**Dependencias:**

- `next-themes`: ThemeProvider

**Configuración:**

```typescript
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
>
```

**Características:**

- Soporte para tema del sistema
- Clase CSS (`dark`) en documentElement
- Sin flash en carga inicial
- Persistencia automática

---

### LanguageContext (`src/context/LanguageContext.tsx`)

**Tipo:** Context + Provider

**Propósito:** Gestión global de idioma.

**Características:**

- Storage en localStorage
- Hook personalizado `useLanguage()`
- Type-safe con TypeScript
- Sincronización con `useSyncExternalStore`

**API:**

```typescript
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}
```

**Hook personalizado:**

```typescript
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
```

**Storage:**

```typescript
// Guardar
localStorage.setItem("language", lang);

// Leer
localStorage.getItem("language") || "en";
```

**Evitar Hydration Errors:**

```typescript
useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
```

---

## Data Structures

### translations.ts

**Estructura:**

```typescript
export const translations = {
  [language: string]: {
    nav: {
      home: string;
      about: string;
      skills: string;
      projects: string;
      contact: string;
    };
    hero: {
      greeting: string;
      name: string;
      role: string;
      description: string;
      cta: string;
      contact: string;
      available: string;
    };
    about: {
      title: string;
      description: string;
      experience: string;
      projects: string;
      clients: string;
    };
    skills: {
      title: string;
      subtitle: string;
    };
    projects: {
      title: string;
      subtitle: string;
      viewCode: string;
      viewDemo: string;
    };
    contact: {
      title: string;
      subtitle: string;
      email: string;
      phone: string;
      location: string;
    };
    footer: {
      rights: string;
    };
  }
}

export type Language = 'en' | 'es';
export type TranslationKey = typeof translations.en;
```

---

### skills.ts

**Estructura:**

```typescript
interface Skill {
  name: string;
  icon: IconType;
  category: "frontend" | "backend" | "tools";
}

export const skills: Skill[] = [
  {
    name: "React",
    icon: SiReact,
    category: "frontend",
  },
  // ...
];
```

**Categorías:**

- `frontend`: Tecnologías de frontend (React, Vue, CSS, etc.)
- `backend`: Tecnologías de backend (Node.js, Python, etc.)
- `tools`: Herramientas de desarrollo (Git, Docker, etc.)

---

### projects.json

**Estructura:**

```json
{
  "en": [
    {
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["Tech1", "Tech2"],
      "image": "/img/project.png",
      "github": "https://github.com/user/repo",
      "demo": "https://demo.com"
    }
  ],
  "es": [
    {
      "title": "Nombre del Proyecto",
      "description": "Descripción del proyecto",
      "technologies": ["Tech1", "Tech2"],
      "image": "/img/proyecto.png",
      "github": "https://github.com/usuario/repo",
      "demo": "https://demo.com"
    }
  ]
}
```

**Campos:**

- `title`: Nombre del proyecto (requerido)
- `description`: Descripción breve (requerido)
- `technologies`: Array de tecnologías usadas (requerido)
- `image`: Ruta de la imagen (requerido)
- `github`: URL del repositorio (opcional)
- `demo`: URL del demo en vivo (opcional)

---

## Convenciones de Código

### Nomenclatura

- **Componentes**: PascalCase (`ThemeToggle.tsx`)
- **Archivos de datos**: camelCase (`translations.ts`)
- **Hooks personalizados**: camelCase con prefijo `use` (`useLanguage`)
- **Constantes**: camelCase (`navItems`)

### Estructura de Archivos

```
Component.tsx
├── Imports
├── Types/Interfaces
├── Component Function
│   ├── State/Hooks
│   ├── Effects
│   ├── Handlers
│   └── Render
└── Exports
```

### Client vs Server Components

- **Client**: Requiere `"use client"` al inicio
- **Server**: Sin directiva (por defecto)

### Type Safety

- Interfaces para props
- Tipos exportados para reutilización
- No usar `any`

---

## Testing Guidelines (Futuro)

### Componentes a Testear

1. **ThemeToggle**: Cambio de tema
2. **LanguageToggle**: Cambio de idioma
3. **Navbar**: Navegación y menú móvil
4. **Projects**: Renderizado de carrusel
5. **LanguageContext**: Persistencia y cambios

### Ejemplo de Test

```typescript
import { render, screen } from "@testing-library/react";
import ThemeToggle from "@/components/ThemeToggle";

describe("ThemeToggle", () => {
  it("should toggle theme on click", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    // ... assertions
  });
});
```

---

## Performance Tips

1. **Lazy Loading**: Usa `dynamic()` para componentes pesados
2. **Memoization**: Usa `useMemo` y `useCallback` cuando sea necesario
3. **Optimistic Updates**: No esperar respuestas del servidor
4. **Code Splitting**: Automático con App Router
5. **Image Optimization**: Usa `next/image`

---

## Accessibility Checklist

- [ ] Alt text en todas las imágenes
- [ ] Labels en formularios
- [ ] Contraste de colores adecuado
- [ ] Navegación con teclado
- [ ] ARIA labels donde sea necesario
- [ ] Focus visible en elementos interactivos
- [ ] Semantic HTML

---

Esta documentación debe actualizarse cuando se agreguen nuevos componentes o se modifiquen los existentes.
