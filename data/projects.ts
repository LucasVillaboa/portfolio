export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tech: string[];
  tags: string[];
  image: string;
  codeUrl?: string;
  device: "desktop" | "mobile";
};

export const projects: Project[] = [
  {
    slug: "spa-sentirse-bien",
    title: "Spa “Sentirse Bien”",
    shortDescription: "Sistema web con turnos, pagos online y roles diferenciados.",
    longDescription: `
Desarrollé una plataforma web completa para un spa real.

Incluye:
• Sistema de turnos con selección de servicios y profesionales  
• Panel de clientes, profesionales y administrador  
• Pagos online con descuentos automáticos  
• Historial clínico de clientes  
• Reportes por servicio y profesional  
`,
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Spatie Roles"],
    tags: ["Proyecto académico", "Web App", "Laravel"],
    image: "/projects/spa.png",
    codeUrl: "https://github.com/LucasVillaboa/spaweb",
    device: "desktop",
  },

  {
    slug: "nachec",
    title: "Sistema ÑACHEC",
    shortDescription: "Sistema interno del Ministerio de Desarrollo Humano.",
    longDescription: `
Sistema web desarrollado para el Programa Beneficiario ÑACHEC.

Incluye:
• Registro de beneficiarios  
• Gestión de entregas  
• Filtros por fecha y persona  
• Roles de usuario  
• Historial completo de movimientos  
`,
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    tags: ["Sistema gubernamental", "Web App", "Laravel"],
    image: "/projects/nachec/cover.png",
    device: "mobile",
  },

  {
    slug: "restaurante",
    title: "Sistema de Restaurante",
    shortDescription: "Sistema de gestión para restaurante.",
    longDescription: `
Sistema web para la gestión integral de un restaurante.

Incluye:
• Control de stock
• Pérdidas y ganancias
• Gestión de turnos del personal
• Reportes diarios
`,
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    tags: ["Web App", "Restaurante"],
    image: "/projects/restaurante/cover.png",
    codeUrl: "https://github.com/LucasVillaboa/restaurante",
    device: "mobile",
  },

  {
  slug: "portfolio",
  title: "Portfolio Personal",
  shortDescription: "Portfolio profesional desarrollado con Next.js y TypeScript.",
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
  tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  tags: ["Proyecto personal", "Frontend", "Portfolio"],
  image: "/projects/portfolio/cover.png", 
  codeUrl: "https://github.com/LucasVillaboa/portfolio",
  device: "desktop",
},
];



