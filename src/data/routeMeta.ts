export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

export const SITE_URL = "https://jos3mi14.github.io";

export const SITE_NAME = "José Emilio Sánchez Miñón";

export const ROUTE_META: RouteMeta[] = [
  {
    path: "/",
    title:
      "José Emilio Sánchez Miñón | Desarrollador de apps móviles y producto",
    description:
      "Desarrollador de aplicaciones móviles con React Native, Expo y TypeScript. Especializado en IA conversacional, IoT y estrategia de producto. Proyectos reales y forma de contacto.",
  },
];

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "José Emilio Sánchez Miñón",
  jobTitle: "Desarrollador de Aplicaciones Móviles",
  description:
    "Desarrollador de apps móviles con React Native, Expo y TypeScript, con enfoque en IA conversacional, IoT y estrategia de producto.",
  url: `${SITE_URL}/`,
  email: "mailto:jsanchezminon@gmail.com",
  sameAs: [
    "https://github.com/Jos3mi14",
    "https://www.linkedin.com/in/jesanchezminon/",
  ],
  knowsAbout: [
    "React Native",
    "Expo",
    "TypeScript",
    "Kotlin",
    "Jetpack Compose",
    "Inteligencia Artificial",
    "Internet of Things",
    "Modelos de Negocio",
    "Product Strategy",
  ],
  worksFor: {
    "@type": "Organization",
    name: "MAKA OWS",
  },
};
