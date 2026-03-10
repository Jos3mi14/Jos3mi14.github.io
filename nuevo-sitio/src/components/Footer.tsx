import Dock from './reactbits/Dock'

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

        <Dock
          items={[
            {
              icon: <i className="fab fa-github" style={{ fontSize: 18 }} />,
              label: 'GitHub',
              onClick: () => window.open('https://github.com/Jos3mi14', '_blank'),
            },
            {
              icon: <i className="fab fa-linkedin" style={{ fontSize: 18 }} />,
              label: 'LinkedIn',
              onClick: () => window.open('https://www.linkedin.com/in/jesanchezminon/', '_blank'),
            },
            {
              icon: <i className="fas fa-envelope" style={{ fontSize: 18 }} />,
              label: 'Email',
              onClick: () => { window.location.href = 'mailto:jesanchezminon@gmail.com' },
            },
          ]}
          magnification={1.4}
          distance={120}
          panelHeight={48}
          baseItemSize={38}
        />
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 José Emilio Sánchez Miñón. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
