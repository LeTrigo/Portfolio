# Arquitectura del Proyecto

Este documento describe la arquitectura técnica y decisiones de diseño del portfolio.

## 🏗️ Arquitectura General

El proyecto sigue el patrón de **App Router** de Next.js 16, utilizando Server Components y Client Components de manera estratégica.

### Diagrama de Flujo

```
Usuario
  ↓
Navegador (Next.js App)
  ↓
├── ThemeProvider (Client)
│   └── Theme Toggle
├── LanguageProvider (Client)
│   └── Language Toggle
└── Componentes de Página
    ├── Hero
    ├── About
    ├── Skills
    ├── Projects
    └── Contact
```

## 📦 Gestión de Estado

### 1. Temas (Dark/Light Mode)

- **Librería**: `next-themes`
- **Almacenamiento**: localStorage
- **Provider**: `ThemeProvider` en el layout raíz
- **Hook**: `useTheme()` de next-themes

```typescript
// Uso en componentes
const { theme, setTheme } = useTheme();
```

### 2. Idiomas (ES/EN)

- **Implementación**: Context API personalizado
- **Almacenamiento**: localStorage
- **Hook**: `useLanguage()` personalizado
- **Sincronización**: `useSyncExternalStore` para evitar hydration errors

```typescript
// Uso en componentes
const { language, setLanguage, t } = useLanguage();
const text = t.hero.greeting; // Acceso type-safe a traducciones
```

### Ventajas de useSyncExternalStore

- Evita errores de hidratación en SSR
- Sincroniza automáticamente el estado entre cliente y servidor
- Compatible con Concurrent Features de React 19

## 🎨 Sistema de Estilos

### Tailwind CSS 4

- **Configuración**: `tailwind.config.ts`
- **Clases personalizadas**: Variables CSS en `globals.css`
- **Modo oscuro**: Clase `dark:` con estrategia de clase

### Variables CSS Personalizadas

```css
:root {
  --primary: #color;
  --background: #color;
  /* ... */
}

.dark {
  --primary: #color;
  --background: #color;
  /* ... */
}
```

### Utilidades Personalizadas

- Scroll suave: `scroll-smooth` en el `<html>`
- Transiciones: `transition-colors duration-300`
- Gradientes: Gradientes personalizados para fondos

## 🔄 Flujo de Datos

### Componentes Server vs Client

#### Server Components (por defecto)

- No requieren "use client"
- Renderizados en el servidor
- No tienen acceso a hooks del navegador
- Mejoran el rendimiento inicial

#### Client Components

Requieren `"use client"` cuando:

- Usan hooks de React (`useState`, `useEffect`, etc.)
- Manejan eventos del navegador
- Acceden a APIs del navegador
- Usan Context API

**Componentes Client en el proyecto:**

- `ThemeProvider.tsx`
- `ThemeToggle.tsx`
- `LanguageToggle.tsx`
- `LanguageContext.tsx`
- `Navbar.tsx`
- Todos los componentes con animaciones de Framer Motion

## 📂 Estructura de Datos

### Projects (projects.json)

```typescript
interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}
```

### Skills (skills.ts)

```typescript
interface Skill {
  name: string;
  icon: IconType;
  category: "frontend" | "backend" | "tools";
}
```

### Translations (translations.ts)

```typescript
interface Translations {
  [language: string]: {
    nav: { ... };
    hero: { ... };
    about: { ... };
    skills: { ... };
    projects: { ... };
    contact: { ... };
    footer: { ... };
  }
}
```

## 🎭 Animaciones

### Framer Motion

Usado para transiciones suaves y animaciones de entrada.

**Patrones comunes:**

```typescript
// Fade in desde abajo
{
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

// Stagger de elementos
{
  variants: containerVariants,
  initial: "hidden",
  whileInView: "visible"
}
```

### React Simple Typewriter

Efecto de máquina de escribir en el Hero:

```typescript
<Typewriter
  words={["Full Stack Developer", "Web Developer"]}
  loop={0}
  cursor
  cursorStyle="|"
/>
```

## 🔒 TypeScript

### Tipos Principales

#### Traducciones Type-Safe

```typescript
type Language = "en" | "es";
type TranslationKey = typeof translations.en;
```

Esto permite:

- Autocompletado en editores
- Detección de errores en tiempo de compilación
- Refactoring seguro

#### Metadata de Next.js

```typescript
export const metadata: Metadata = {
  title: string;
  description: string;
  icons: { ... };
}
```

## 🚀 Optimizaciones

### Imágenes

- Uso de `next/image` para optimización automática
- Lazy loading por defecto
- Formatos modernos (WebP)

### Fuentes

- Carga optimizada de fuentes del sistema
- `font-sans` de Tailwind con fallbacks

### Code Splitting

- Automático por Next.js App Router
- Componentes cargados según ruta

### SEO

- Metadata en `layout.tsx`
- Favicon configurado
- Descripciones personalizadas

## 🧪 Testing (Futuro)

### Herramientas Recomendadas

- **Jest**: Testing unitario
- **React Testing Library**: Testing de componentes
- **Playwright**: Testing E2E
- **Vitest**: Alternativa moderna a Jest

### Áreas a Testear

1. Cambio de idiomas
2. Cambio de temas
3. Navegación
4. Formulario de contacto
5. Renderizado de proyectos

## 📱 Responsividad

### Breakpoints de Tailwind

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Estrategia Mobile-First

```typescript
// Móvil por defecto
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 🔐 Seguridad

### Mejores Prácticas Implementadas

- No hay claves API expuestas en el frontend
- Variables de entorno para datos sensibles
- Sanitización de inputs (si se implementa backend)

## 🚀 Rendimiento

### Métricas Objetivo

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Estrategias

- Server Components para reducir bundle de JS
- Lazy loading de imágenes
- Prefetch automático de rutas
- Minimización de re-renders

## 🔄 Ciclo de Desarrollo

### Workflow Recomendado

1. Desarrollo local: `npm run dev`
2. Linting: `npm run lint`
3. Build local: `npm run build`
4. Preview: `npm start`
5. Deploy a Vercel

### Variables de Entorno

Crear `.env.local` para variables sensibles:

```
NEXT_PUBLIC_API_URL=tu_api
# Nunca commitear este archivo
```

## 📖 Recursos de Aprendizaje

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
