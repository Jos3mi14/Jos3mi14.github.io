export interface NavItem {
  href: string
  label: string
  icon: string
  isRoute?: boolean
}

export const HOME_NAV_ITEMS: NavItem[] = [
  { href: '#hero', label: 'Inicio', icon: 'fa-home' },
  { href: '#about', label: 'Sobre Mí', icon: 'fa-user' },
  { href: '#skills', label: 'Habilidades', icon: 'fa-code' },
  { href: '#projects', label: 'Proyectos', icon: 'fa-laptop-code' },
  { href: '#contact', label: 'Contacto', icon: 'fa-envelope' },
]

export const MINIMAL_NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Inicio', icon: 'fa-home', isRoute: true },
  { href: '/#contact', label: 'Contacto', icon: 'fa-envelope' },
]
