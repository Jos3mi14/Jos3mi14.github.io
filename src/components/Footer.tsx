import Icon from "./shared/Icon";

interface FooterProps {
  minimal?: boolean;
}

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Jos3mi14",
    icon: "github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jesanchezminon/",
    icon: "linkedin" as const,
  },
  {
    label: "Email",
    href: "mailto:jsanchezminon@gmail.com",
    icon: "mail" as const,
  },
];

export default function Footer({ minimal = false }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-monogram" aria-hidden="true">
              JE
            </span>
            <span>José Emilio Sánchez Miñón</span>
          </div>
          <p>
            Desarrollador de apps móviles con visión de producto. Disponible
            para freelance y roles de desarrollo o producto.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Enlaces del pie de página">
          <div className="footer-nav-group">
            <span className="label">Navegación</span>
            {minimal ? (
              <>
                <a href="/">Portafolio</a>
                <a href="/#projects">Proyectos</a>
                <a href="/#contact">Contacto</a>
              </>
            ) : (
              <>
                <a href="#hero">Inicio</a>
                <a href="#about">Sobre Mí</a>
                <a href="#skills">Habilidades</a>
                <a href="#projects">Proyectos</a>
                <a href="#contact">Contacto</a>
              </>
            )}
          </div>

          <div className="footer-nav-group">
            <span className="label">Social</span>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <Icon name={link.icon} size={14} /> {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© 2026 José Emilio Sánchez Miñón</span>
          <span>React · TypeScript · Vite</span>
        </div>
      </div>
    </footer>
  );
}
