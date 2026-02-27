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
    //codeUrl: "https://github.com/LucasVillaboa/nachec.sistema",
    device: "mobile",
  },

  {
    slug: "restaurante",
    title: "Sistema de Restaurante",
    shortDescription: "Sistema de gestión para restaurante.",
    longDescription: `
Sistema web para la gestión integral de un restaurante.

Incluye:
• Gestión de pedidos
• Control de mesas
• Administración de menú
• Reportes diarios
`,
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    tags: ["Web App", "Restaurante"],
    image: "/projects/restaurante/cover.png",
    codeUrl: "https://github.com/LucasVillaboa/restaurante",
    device: "mobile",
  },
];



