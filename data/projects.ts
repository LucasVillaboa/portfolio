export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tech: string[];
  tags: string[];
  image: string;
  codeUrl?: string;
  demoUrl?: string;
  device: "desktop" | "mobile";
};

export const projects: Project[] = [
  {
    slug: "reservas-multirubro",
    title: "Sistema de Gestión de Reservas Multi-Rubro",
    shortDescription:
      "Plataforma de reservas online adaptable a distintos tipos de negocios.",
    longDescription: `
Desarrollé una plataforma web reutilizable para la gestión de reservas online.

La misma base de código fue adaptada para tres tipos de negocios:

🩺 Consultorio Médico
🚗 Lavadero de Vehículos
⚽ Complejo de Fútbol 5

Incluye:
• Reservas online desde celular o PC
• Bloqueo automático de horarios ocupados
• Panel administrativo para gestionar reservas
• Eliminación de reservas
• Confirmaciones automáticas por correo electrónico
• Diseño responsive
• Base de datos en Supabase
• Sistema reutilizable para distintos rubros mediante configuración

Resultados:
• Una sola base de código
• Tres soluciones comerciales distintas
• Administración desde cualquier dispositivo
`,
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Resend",
      "Tailwind CSS",
    ],
    tags: ["Next.js", "Reservas", "Supabase", "Web App"],
    image: "/projects/reservas/cover.png",
    codeUrl: "https://github.com/LucasVillaboa/med-turnos",
    demoUrl: "https://med-turnos.vercel.app/demo",
    device: "mobile",
  },

  {
    slug: "mapa-merenderos",
    title: "Mapa de Merenderos",
    shortDescription:
      "Aplicación web interactiva para localizar merenderos y consultar información de cada ubicación.",
    longDescription: `
Desarrollé una aplicación web interactiva para visualizar y consultar merenderos mediante un mapa.

El sistema permite localizar los merenderos registrados, consultar información de cada ubicación y utilizar Google Maps para obtener indicaciones sobre cómo llegar.

Incluye:
• Mapa interactivo
• Marcadores de merenderos
• Información de cada ubicación
• Integración con OpenStreetMap
• Navegación mediante Google Maps
• Base de datos en Supabase
• Diseño responsive
• API Routes de Next.js para gestionar los datos
`,
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Leaflet",
      "React-Leaflet",
      "Supabase",
      "Tailwind CSS",
      "OpenStreetMap",
    ],
    tags: ["Next.js", "Mapas", "Supabase", "React"],
    image: "/projects/mapa-merenderos/cover.png",
    codeUrl: "https://github.com/LucasVillaboa/mapa-merenderos",
    demoUrl: "https://mapa-merenderos.vercel.app/",
    device: "desktop",
  },

  {
    slug: "portfolio",
    title: "Portfolio Personal",
    shortDescription:
      "Portfolio profesional desarrollado con Next.js y TypeScript.",
    longDescription: `
Portfolio personal.

Incluye:
• Diseño responsive
• Animaciones con Framer Motion
• Sección de proyectos dinámica
• Optimización de imágenes con Next.js
• Arquitectura basada en componentes

Stack principal:
Next.js y TypeScript.
`,
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
    tags: ["Proyecto personal", "Frontend", "Portfolio"],
    image: "/projects/portfolio/cover.png",
    codeUrl: "https://github.com/LucasVillaboa/portfolio",
    device: "desktop",
  },
];



