export interface NavItem {
  href: string;
  label: string;
  isRoute?: boolean;
}

export const HOME_NAV_ITEMS: NavItem[] = [
  { href: "#hero", label: "Inicio" },
  { href: "#about", label: "Sobre Mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export const MINIMAL_NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Inicio", isRoute: true },
  { href: "/#contact", label: "Contacto" },
];
