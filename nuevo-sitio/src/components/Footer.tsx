interface FooterProps {
  minimal?: boolean
}

export default function Footer({ minimal = false }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">JE</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p>Diseñado y desarrollado con <i className="fas fa-heart"></i> por José Emilio</p>
        </div>

        <div className="footer-links">
          {minimal ? (
            <>
              <a href="/">Portafolio</a>
              <a href="/#projects">Proyectos</a>
              <a href="/maka-ows">MAKA OWS</a>
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

        <div className="footer-social">
          <a
            href="https://github.com/Jos3mi14"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jesanchezminon/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:jesanchezminon@gmail.com" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 José Emilio Sánchez Miñón. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
