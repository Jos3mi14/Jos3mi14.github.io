import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function useScrollAnimations() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.querySelectorAll('[data-anim]').forEach((el) => {
        el.classList.add('is-visible')
      })
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = parseInt(el.dataset.animDelay || '0', 10)
            setTimeout(() => el.classList.add('is-visible'), delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('[data-anim]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const handler = () => setVisible(window.pageYOffset > 300)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <button
      className={`scroll-to-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}

export default function Home() {
  useScrollAnimations()

  const handleSmooth = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* ── 01 · Sobre mí ── */}
        <section id="about" className="section">
          <div className="container section-header">
            <p className="eyebrow">01 · Sobre mí</p>
            <h2>Desarrollo móvil con visión de negocio</h2>
            <p className="section-lede">
              Combino ingeniería de software con pensamiento estratégico para construir
              productos móviles que resuelven problemas reales y generan valor sostenible.
            </p>
          </div>
          <div className="container about-grid">
            <div className="about-card" data-anim="slide-up">
              <h3>Cómo trabajo</h3>
              <ul>
                <li>Diseño experiencias móviles centradas en el usuario.</li>
                <li>Valido hipótesis de negocio antes de escribir código.</li>
                <li>Itero rápido con prototipos funcionales y feedback real.</li>
              </ul>
            </div>
            <div className="about-card" data-anim="slide-up" data-anim-delay="120">
              <h3>Intereses</h3>
              <ul>
                <li>Apps móviles con IA integrada y procesamiento de voz.</li>
                <li>Identificación de modelos de negocio y estrategias de monetización.</li>
                <li>Startups, producto digital y validación de mercado.</li>
              </ul>
            </div>
            <div className="about-card" data-anim="slide-up" data-anim-delay="240">
              <h3>Experiencia</h3>
              <ul>
                <li>1 año desarrollando aplicaciones móviles con React Native y Expo.</li>
                <li>Participación en proyectos con enfoque en producto e impacto social.</li>
                <li>Trabajo en equipos ágiles multidisciplinares con entregas iterativas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 02 · Stack ── */}
        <section id="skills" className="section">
          <div className="container section-header">
            <p className="eyebrow">02 · Stack</p>
            <h2>Herramientas con las que construyo producto</h2>
            <p className="section-lede">
              Tecnologías y disciplinas que aplico para llevar ideas móviles desde la
              validación hasta producción.
            </p>
          </div>
          <div className="container skills-grid">
            <div className="skill-card" data-anim="fade-in">
              <div className="card-top">
                <span className="pill">Apps Móviles</span>
                <i className="fas fa-mobile-screen"></i>
              </div>
              <div className="tag-list">
                {['React Native', 'Expo', 'TypeScript', 'JavaScript', 'SQLite'].map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="skill-card" data-anim="fade-in" data-anim-delay="120">
              <div className="card-top">
                <span className="pill">IA &amp; Servicios</span>
                <i className="fas fa-brain"></i>
              </div>
              <div className="tag-list">
                {['Gemini API', 'Assembly AI', 'Eleven Labs', 'Firebase', 'REST APIs'].map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="skill-card" data-anim="fade-in" data-anim-delay="240">
              <div className="card-top">
                <span className="pill">Negocio &amp; Producto</span>
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="tag-list">
                {['Modelos de negocio', 'Lean Startup', 'Design Thinking', 'Validación de mercado', 'Product Roadmap'].map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 · Proyectos ── */}
        <section id="projects" className="section">
          <div className="container section-header">
            <p className="eyebrow">03 · Proyectos</p>
            <h2>Productos que muestran cómo abordo problemas reales</h2>
          </div>
          <div className="container projects-grid">
            <article className="project-card" data-anim="fade-in">
              <div className="project-head">
                <span className="pill">Full Stack · Microservicios</span>
                <span className="project-number">01</span>
              </div>
              <h3>MAKA OWS 2.0 — Online Wedding System</h3>
              <p>
                Migración de un monolito PHP a 5 microservicios NestJS desacoplados, con
                frontend en Next.js 14, SSR y despliegue en AWS EC2. Sistema integral para
                la gestión completa de bodas: eventos, inventario, proveedores y
                notificaciones en tiempo real.
              </p>
              <div className="project-meta">
                {['NestJS', 'Next.js 14', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'].map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <Link to="/maka-ows">Documentación completa →</Link>
              </div>
            </article>

            <article className="project-card" data-anim="fade-in" data-anim-delay="150">
              <div className="project-head">
                <span className="pill">IA · Móvil</span>
                <span className="project-number">02</span>
              </div>
              <h3>Nyma — Asistente para adultos mayores</h3>
              <p>
                Aplicación móvil de acompañamiento que combina IA conversacional, monitoreo
                IoT y detección temprana de enfermedades neurodegenerativas para mejorar la
                calidad de vida y la seguridad en el hogar.
              </p>
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
            </article>
          </div>
          <div className="container more-projects" data-anim="fade-in">
            <a
              href="https://github.com/Jos3mi14"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Ver más en GitHub
            </a>
          </div>
        </section>

        {/* ── 04 · Contacto ── */}
        <section id="contact" className="section">
          <div className="container contact-card" data-anim="slide-up">
            <div>
              <p className="eyebrow">04 · Contacto</p>
              <h2>Cuéntame tu próximo reto</h2>
              <p className="section-lede">
                Disponible para colaboraciones, proyectos freelance y roles de desarrollo
                móvil o producto.
              </p>
              <div className="contact-grid">
                <a href="mailto:jsanchezminon@gmail.com" className="contact-item">
                  <i className="fas fa-envelope"></i>
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
                  <i className="fab fa-github"></i>
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
                  <i className="fab fa-linkedin"></i>
                  <div>
                    <span className="label">LinkedIn</span>
                    <span className="value">José Emilio Sánchez Miñón</span>
                  </div>
                </a>
              </div>
              <div className="contact-actions">
                <a href="mailto:jsanchezminon@gmail.com" className="btn btn-primary">
                  <i className="fas fa-paper-plane"></i> Enviar mensaje
                </a>
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
        </section>
      </main>

      <Footer />
      <ScrollToTopBtn />
    </>
  )
}
