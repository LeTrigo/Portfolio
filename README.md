# Portfolio Personal - Lautaro Trigo

Portfolio web moderno y responsivo construido con Next.js 16, mostrando proyectos, habilidades y experiencia profesional como desarrollador Full Stack.

## 🌟 Características

- **Diseño Responsivo**: Adaptado para todos los dispositivos (móvil, tablet, escritorio)
- **Modo Oscuro/Claro**: Sistema de temas con persistencia de preferencias
- **Multiidioma**: Soporte para Español e Inglés con cambio dinámico
- **Animaciones Suaves**: Transiciones y efectos con Framer Motion
- **Optimización SEO**: Metadatos configurados para mejor posicionamiento
- **Tipografía Dinámica**: Efectos de escritura animados en el hero
- **Carrusel de Proyectos**: Presentación interactiva de proyectos con Slick Carousel

## 🛠️ Tecnologías Utilizadas

### Framework y Core

- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework de estilos utility-first

### Librerías y Herramientas

- **Framer Motion** - Animaciones y transiciones
- **next-themes** - Sistema de temas (dark/light)
- **React Icons** - Iconos de tecnologías
- **Lucide React** - Iconos de interfaz
- **React Simple Typewriter** - Efectos de texto animado
- **React Slick** - Carrusel de proyectos

## 📁 Estructura del Proyecto

```
Portfolio/
├── public/              # Archivos estáticos
│   ├── img/            # Imágenes de proyectos
│   └── logo-web.svg    # Logo/Favicon
├── src/
│   ├── app/            # App Router de Next.js
│   │   ├── globals.css
│   │   ├── layout.tsx  # Layout principal
│   │   ├── page.tsx    # Página de inicio
│   │   └── private-code/
│   ├── components/     # Componentes React
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── TechIcon.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   ├── context/        # Contextos de React
│   │   └── LanguageContext.tsx
│   └── data/           # Datos estáticos
│       ├── projects.json
│       ├── skills.ts
│       └── translations.ts
└── package.json
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 20 o superior
- npm, yarn, pnpm o bun

### Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd Portfolio
```

2. Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter de código

## 📝 Configuración

### Personalizar Contenido

#### Proyectos

Edita [src/data/projects.json](src/data/projects.json) para agregar o modificar proyectos:

```json
{
  "title": "Nombre del Proyecto",
  "description": "Descripción del proyecto",
  "technologies": ["React", "Node.js"],
  "image": "/img/proyecto.png",
  "github": "url-github",
  "demo": "url-demo"
}
```

#### Habilidades

Modifica [src/data/skills.ts](src/data/skills.ts) para actualizar tecnologías:

```typescript
export const skills: Skill[] = [
  {
    name: "Nombre Tecnología",
    icon: NombreIcono,
    category: "frontend" | "backend" | "tools",
  },
];
```

#### Traducciones

Actualiza [src/data/translations.ts](src/data/translations.ts) para modificar textos en español e inglés.

### Personalizar Estilos

- **Colores**: Edita [src/app/globals.css](src/app/globals.css) para cambiar la paleta de colores
- **Fuentes**: Modifica [tailwind.config.ts](tailwind.config.ts) para personalizar tipografías
- **Animaciones**: Ajusta las configuraciones en componentes que usan Framer Motion

## 🎨 Componentes Principales

### ThemeProvider

Proveedor de temas que permite cambiar entre modo claro y oscuro con persistencia en localStorage.

### LanguageContext

Contexto global para gestión de idiomas (ES/EN) con hook personalizado `useLanguage()`.

### Navbar

Navegación responsiva con menú hamburguesa en móviles y enlaces de scroll suave.

### Hero

Sección principal con efecto de máquina de escribir y botones de acción.

### Projects

Carrusel de proyectos con información detallada y enlaces a GitHub/Demo.

### Skills

Grid responsivo de tecnologías con iconos animados y categorización.

### Contact

Formulario de contacto con enlaces a redes sociales y ubicación.

## 🌐 Despliegue

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js y configurará el build

### Otros Servicios

Compatible con cualquier plataforma que soporte Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**Lautaro Trigo**

- Portfolio: [tu-dominio.com]
- GitHub: [@tu-usuario]
- LinkedIn: [tu-perfil]

---

Desarrollado con ❤️ usando Next.js y TypeScript
