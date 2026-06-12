export interface HeroData {
  name: string;
  title: string;
  rotatingTexts: string[];
  lede: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  ctaGithub: { label: string; href: string };
}

export interface AboutFeaturedStat {
  value: string;
  label: string;
}

export interface AboutFeaturedText {
  title: string;
  description: string;
}

export interface AboutCard {
  title: string;
  items: string[];
}

export interface AboutData {
  featuredStat: AboutFeaturedStat;
  featuredText: AboutFeaturedText;
  workStyle: AboutCard;
  interests: AboutCard;
}

export interface SkillCategory {
  category: string;
  icon: string;
  technologies: string[];
}

export interface SkillsData {
  eyebrow: string;
  title: string;
  lede: string;
  categories: SkillCategory[];
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ProjectData {
  id: string;
  tag: string;
  title: string;
  description: string;
  stats: ProjectStat[];
  techStack: string[];
  links: ProjectLink[];
  spotlightColor: string;
}

export interface ProjectsData {
  eyebrow: string;
  title: string;
  projects: ProjectData[];
  githubLink: { label: string; href: string };
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

export interface ContactData {
  titleGradientColors: string[];
  titleAnimationSpeed: number;
  lede: string;
  contactItems: Array<{
    label: string;
    value: string;
    href: string;
    icon: string;
    isExternal: boolean;
  }>;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export const HERO_DATA: HeroData = {
  name: "José Emilio",
  title: "Desarrollador Móvil · Modelos de Negocio",
  rotatingTexts: [
    "React Native",
    "TypeScript",
    "Product Strategy",
    "AI & Voice",
  ],
  lede: "Creo aplicaciones móviles con impacto real, combinando desarrollo técnico sólido con identificación de oportunidades de negocio y estrategia de producto.",
  ctaPrimary: { label: "Ver proyectos", href: "#projects" },
  ctaSecondary: { label: "Hablemos", href: "#contact" },
  ctaGithub: { label: "GitHub", href: "https://github.com/Jos3mi14" },
};

export const ABOUT_DATA: AboutData = {
  featuredStat: {
    value: "1",
    label: "Año construyendo",
  },
  featuredText: {
    title: "Experiencia aplicada",
    description:
      "Un año desarrollando apps móviles con React Native, Expo y Kotlin. Participación en equipos ágiles con entregas iterativas, validación de producto y enfoque en impacto social.",
  },
  workStyle: {
    title: "Cómo trabajo",
    items: [
      "Diseño experiencias móviles centradas en el usuario.",
      "Valido hipótesis de negocio antes de escribir código.",
      "Itero rápido con prototipos funcionales y feedback real.",
    ],
  },
  interests: {
    title: "Intereses",
    items: [
      "Apps móviles con IA integrada y procesamiento de voz.",
      "Identificación de modelos de negocio y estrategias de monetización.",
      "Startups, producto digital y validación de mercado.",
    ],
  },
};

export const SKILLS_DATA: SkillsData = {
  eyebrow: "Stack",
  title: "Herramientas con las que construyo producto",
  lede: "Tecnologías y disciplinas que aplico para llevar ideas móviles desde la validación hasta producción.",
  categories: [
    {
      category: "Apps Móviles",
      icon: "fas fa-mobile-screen",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "JavaScript",
        "SQLite",
      ],
    },
    {
      category: "IA & Servicios",
      icon: "fas fa-brain",
      technologies: [
        "Gemini API",
        "Assembly AI",
        "Eleven Labs",
        "Firebase",
        "REST APIs",
      ],
    },
    {
      category: "Negocio & Producto",
      icon: "fas fa-chart-line",
      technologies: [
        "Modelos de negocio",
        "Lean Startup",
        "Design Thinking",
        "Validación de mercado",
        "Product Roadmap",
      ],
    },
  ],
};

export const PROJECTS_DATA: ProjectsData = {
  eyebrow: "Proyectos",
  title: "Proyectos con impacto real",
  projects: [
    {
      id: "maka-ows",
      tag: "Full Stack · Microservicios",
      title: "MAKA OWS 2.0 — Online Wedding System",
      description:
        "Migración de un monolito PHP a 5 microservicios NestJS desacoplados, con frontend en Next.js 14, SSR y despliegue en AWS EC2. Sistema integral para la gestión completa de bodas: eventos, inventario, proveedores y notificaciones en tiempo real.",
      stats: [
        { value: "5", label: "Microservicios" },
        { value: "24", label: "Semanas" },
        { value: "6", label: "Tecnologías" },
      ],
      techStack: [
        "NestJS",
        "Next.js 14",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "AWS",
      ],
      links: [
        {
          label: "Documentación completa →",
          href: "/projects/maka-ows",
          isExternal: false,
        },
        {
          label: "App Android →",
          href: "/projects/maka-mobile",
          isExternal: false,
        },
      ],
      spotlightColor: "rgba(0, 229, 255, 0.12)",
    },
    {
      id: "nyma",
      tag: "IA · Móvil",
      title: "Nyma — Asistente para adultos mayores",
      description:
        "Aplicación móvil de acompañamiento que combina IA conversacional, monitoreo IoT y detección temprana de enfermedades neurodegenerativas para mejorar la calidad de vida y la seguridad en el hogar.",
      stats: [
        { value: "3", label: "APIs IA" },
        { value: "RN", label: "Expo" },
        { value: "IoT", label: "Monitoreo" },
      ],
      techStack: [
        "React Native",
        "Expo",
        "Gemini API",
        "Assembly AI",
        "SQLite",
      ],
      links: [
        {
          label: "Código",
          href: "https://github.com/MemoLuche/Nyma-Project",
          isExternal: true,
        },
      ],
      spotlightColor: "rgba(0, 229, 255, 0.12)",
    },
  ],
  githubLink: {
    label: "Ver más en GitHub",
    href: "https://github.com/Jos3mi14",
  },
};

export const CONTACT_DATA: ContactData = {
  titleGradientColors: ["#00e5ff", "#80ffff", "#ffffff", "#80ffff", "#00e5ff"],
  titleAnimationSpeed: 4,
  lede: "Disponible para colaboraciones, proyectos freelance y roles de desarrollo móvil o producto.",
  contactItems: [
    {
      label: "Email",
      value: "jsanchezminon@gmail.com",
      href: "mailto:jsanchezminon@gmail.com",
      icon: "fas fa-envelope",
      isExternal: false,
    },
    {
      label: "GitHub",
      value: "@Jos3mi14",
      href: "https://github.com/Jos3mi14",
      icon: "fab fa-github",
      isExternal: true,
    },
    {
      label: "LinkedIn",
      value: "José Emilio Sánchez Miñón",
      href: "https://www.linkedin.com/in/jesanchezminon/",
      icon: "fab fa-linkedin",
      isExternal: true,
    },
  ],
  ctaPrimary: {
    label: "Enviar mensaje",
    href: "mailto:jsanchezminon@gmail.com",
  },
  ctaSecondary: {
    label: "Ver trabajo",
    href: "#projects",
  },
};
