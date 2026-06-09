import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ScrollToTopBtn from '../components/shared/ScrollToTopBtn'
import FadeInView from '../components/shared/FadeInView'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import GradientText from '../components/reactbits/GradientText'
import StarBorder from '../components/reactbits/StarBorder'

export default function Home() {
  const handleSmooth = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#contacto' || hash === '#contact') {
      const target = document.getElementById('contacto') ?? document.getElementById('contact')
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    }
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <Header />
      <main id="main-content">
        <Hero />

        {/* -- Sobre mi -- */}
        <section id="about" className="section">
          <div className="container section-header">
            <h2>
              Desarrollo móvil con visión de negocio
            </h2>
            <p className="section-lede">
              Combino ingeniería de software con pensamiento estratégico para construir
              productos móviles que resuelven problemas reales y generan valor sostenible.
            </p>
          </div>
          <div className="container about-grid">
            <FadeInView direction="up" delay={0}>
              <div className="about-featured">
                <div className="about-featured-stat">
                  <span className="value">1</span>
                  <span className="label">Año construyendo</span>
                </div>
                <div className="about-featured-text">
                  <h3>Experiencia aplicada</h3>
                  <p>
                    Un año desarrollando apps móviles con React Native, Expo y Kotlin.
                    Participación en equipos ágiles con entregas iterativas, validación
                    de producto y enfoque en impacto social.
                  </p>
                </div>
              </div>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <div className="about-card">
                <h3>Cómo trabajo</h3>
                <ul>
                  <li>Diseño experiencias móviles centradas en el usuario.</li>
                  <li>Valido hipótesis de negocio antes de escribir código.</li>
                  <li>Itero rápido con prototipos funcionales y feedback real.</li>
                </ul>
              </div>
            </FadeInView>
            <FadeInView direction="up" delay={0.2}>
              <div className="about-card">
                <h3>Intereses</h3>
                <ul>
                  <li>Apps móviles con IA integrada y procesamiento de voz.</li>
                  <li>Identificación de modelos de negocio y estrategias de monetización.</li>
                  <li>Startups, producto digital y validación de mercado.</li>
                </ul>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* -- Stack -- */}
        <section id="skills" className="section">
          <div className="container section-header">
            <p className="eyebrow">Stack</p>
            <h2>Herramientas con las que construyo producto</h2>
            <p className="section-lede">
              Tecnologías y disciplinas que aplico para llevar ideas móviles desde la
              validación hasta producción.
            </p>
          </div>
          <div className="container skills-grid">
            <FadeInView direction="up" delay={0}>
              <div className="skill-card">
                <div className="card-top">
                  <span className="pill">Apps Móviles</span>
                  <i className="fas fa-mobile-screen" aria-hidden="true"></i>
                </div>
                <div className="tag-list">
                  {['React Native', 'Expo', 'TypeScript', 'JavaScript', 'SQLite'].map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeInView>
            <FadeInView direction="up" delay={0.12}>
              <div className="skill-card">
                <div className="card-top">
                  <span className="pill">IA &amp; Servicios</span>
                  <i className="fas fa-brain" aria-hidden="true"></i>
                </div>
                <div className="tag-list">
                  {['Gemini API', 'Assembly AI', 'Eleven Labs', 'Firebase', 'REST APIs'].map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeInView>
            <FadeInView direction="up" delay={0.24}>
              <div className="skill-card">
                <div className="card-top">
                  <span className="pill">Negocio &amp; Producto</span>
                  <i className="fas fa-chart-line" aria-hidden="true"></i>
                </div>
                <div className="tag-list">
                  {['Modelos de negocio', 'Lean Startup', 'Design Thinking', 'Validación de mercado', 'Product Roadmap'].map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* -- Proyectos -- */}
        <section id="projects" className="section">
          <div className="container section-header">
            <p className="eyebrow">Proyectos</p>
            <h2>Proyectos con impacto real</h2>
          </div>
          <div className="container projects-grid">
            <FadeInView direction="up" delay={0}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.12)" className="project-card">
                <div className="project-head">
                  <span className="pill">Full Stack · Microservicios</span>
                </div>
                <h3>MAKA OWS 2.0 — Online Wedding System</h3>
                <p>
                  Migración de un monolito PHP a 5 microservicios NestJS desacoplados, con
                  frontend en Next.js 14, SSR y despliegue en AWS EC2. Sistema integral para
                  la gestión completa de bodas: eventos, inventario, proveedores y
                  notificaciones en tiempo real.
                </p>
                <div className="project-stats">
                  <div className="project-stat">
                    <span className="project-stat-value">5</span>
                    <span className="project-stat-label">Microservicios</span>
                  </div>
                  <div className="project-stat">
                    <span className="project-stat-value">24</span>
                    <span className="project-stat-label">Semanas</span>
                  </div>
                  <div className="project-stat">
                    <span className="project-stat-value">6</span>
                    <span className="project-stat-label">Tecnologías</span>
                  </div>
                </div>
                <div className="project-meta">
                  {['NestJS', 'Next.js 14', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'].map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <Link to="/projects/maka-ows">Documentación completa →</Link>
                  <Link to="/projects/maka-mobile">App Android →</Link>
                </div>
              </SpotlightCard>
            </FadeInView>

            <FadeInView direction="up" delay={0.15}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.12)" className="project-card">
                <div className="project-head">
                  <span className="pill">IA · Móvil</span>
                </div>
                <h3>Nyma — Asistente para adultos mayores</h3>
                <p>
                  Aplicación móvil de acompañamiento que combina IA conversacional, monitoreo
                  IoT y detección temprana de enfermedades neurodegenerativas para mejorar la
                  calidad de vida y la seguridad en el hogar.
                </p>
                <div className="project-stats">
                  <div className="project-stat">
                    <span className="project-stat-value">3</span>
                    <span className="project-stat-label">APIs IA</span>
                  </div>
                  <div className="project-stat">
                    <span className="project-stat-value">RN</span>
                    <span className="project-stat-label">Expo</span>
                  </div>
                  <div className="project-stat">
                    <span className="project-stat-value">IoT</span>
                    <span className="project-stat-label">Monitoreo</span>
                  </div>
                </div>
                <div className="project-meta">
                  {['React Native', 'Expo', 'Gemini API', 'Assembly AI', 'SQLite'].map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/MemoLuche/Nyma-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Código
                  </a>
                </div>
              </SpotlightCard>
            </FadeInView>
          </div>
          <FadeInView direction="up" delay={0.2}>
            <div className="container more-projects">
              <StarBorder
                as="a"
                color="var(--accent)"
                speed="5s"
                href="https://github.com/Jos3mi14"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver más en GitHub
              </StarBorder>
            </div>
          </FadeInView>
        </section>

        {/* -- Contacto -- */}
        <section id="contact" className="section">
          <div id="contacto" aria-hidden="true" />
          <FadeInView direction="up">
            <div className="container contact-card">
              <div>
                <h2>
                  <GradientText
                    colors={['#00e5ff', '#80ffff', '#ffffff', '#80ffff', '#00e5ff']}
                    animationSpeed={4}
                  >
                    Cuéntame tu próximo reto
                  </GradientText>
                </h2>
                <p className="section-lede">
                  Disponible para colaboraciones, proyectos freelance y roles de desarrollo
                  móvil o producto.
                </p>
                <div className="contact-grid">
                  <a href="mailto:jsanchezminon@gmail.com" className="contact-item">
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                    <div>
                      <span className="label">Email</span>
                      <span className="value">jsanchezminon@gmail.com</span>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Jos3mi14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <i className="fab fa-github" aria-hidden="true"></i>
                    <div>
                      <span className="label">GitHub</span>
                      <span className="value">@Jos3mi14</span>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jesanchezminon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                    <div>
                      <span className="label">LinkedIn</span>
                      <span className="value">José Emilio Sánchez Miñón</span>
                    </div>
                  </a>
                </div>
                <div className="contact-actions">
                  <StarBorder
                    as="a"
                    color="var(--accent)"
                    speed="4s"
                    href="mailto:jsanchezminon@gmail.com"
                  >
                    <i className="fas fa-paper-plane" aria-hidden="true"></i> Enviar mensaje
                  </StarBorder>
                  <a
                    href="#projects"
                    className="btn btn-ghost"
                    onClick={(e) => handleSmooth(e, 'projects')}
                  >
                    Ver trabajo
                  </a>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>
      </main>

      <Footer />
      <ScrollToTopBtn />
    </>
  )
}
