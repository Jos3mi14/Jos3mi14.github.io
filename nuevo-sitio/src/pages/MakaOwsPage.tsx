import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './MakaOws.css'

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

function useScrollAnimations() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.querySelectorAll('[data-anim]').forEach((el) => el.classList.add('is-visible'))
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

export default function MakaOwsPage() {
  useScrollAnimations()

  return (
    <>
      <Header minimal />
      <main>

        {/* ── PAGE HERO ── */}
        <section className="page-hero">
          <div className="container page-hero-content">
            <Link to="/" className="back-link">
              <i className="fas fa-arrow-left"></i> Volver al portafolio
            </Link>
            <p className="eyebrow">
              <i className="fas fa-diagram-project"></i> Proyecto Académico · 2025–2026
            </p>
            <h1>MAKA <span className="highlight-text">OWS 2.0</span></h1>
            <p className="lede" style={{ maxWidth: '640px', margin: '0' }}>
              MAKA OWS es una plataforma digital para la gestión integral de bodas: desde la
              coordinación del evento y los proveedores hasta las notificaciones automáticas
              en tiempo real. Diseñada para ofrecer una experiencia fluida y profesional tanto
              a los organizadores como a los clientes.
            </p>
            <div className="hero-badges">
              <span className="badge badge-success">
                <i className="fas fa-circle" style={{ fontSize: '8px' }}></i> En desarrollo activo
              </span>
              <span className="badge badge-info">
                <i className="fas fa-cubes"></i> 5 Módulos funcionales
              </span>
              <span className="badge badge-neutral">
                <i className="fas fa-calendar"></i> 6 meses · Equipo de 5
              </span>
              <span className="badge badge-neutral">
                <i className="fas fa-file-alt"></i> Documentado: 20 Ene 2026
              </span>
            </div>
          </div>
        </section>

        {/* ── 01 · FICHA TÉCNICA ── */}
        <section className="section">
          <div className="container section-header" data-anim="fade-in">
            <p className="eyebrow">01 · Ficha Técnica</p>
            <h2>Datos del proyecto</h2>
            <p className="section-lede">Referencia rápida con la información institucional y de estado del sistema.</p>
          </div>
          <div className="container" data-anim="slide-up">
            <div className="ficha-grid">
              {[
                { label: 'Nombre Oficial', value: 'MAKA Online Wedding System', sub: 'MAKA OWS' },
                { label: 'Versión Actual', value: '2.0', sub: 'Migración a Microservicios' },
                { label: 'Propósito', value: 'Gestión integral de bodas', sub: 'Planificación, inventario, servicios y notificaciones' },
                { label: 'Estado', value: 'En desarrollo activo', sub: 'Proyecto académico · 6 meses', accent: true },
                { label: 'Equipo', value: '5 integrantes', sub: 'Presupuesto cero · Free tier cloud' },
                { label: 'Documentación', value: '20 de enero de 2026', sub: 'Revisión continua con cada sprint' },
              ].map((item) => (
                <div className="ficha-item" key={item.label}>
                  <span className="fi-label">{item.label}</span>
                  <span className="fi-value" style={item.accent ? { color: 'var(--success)' } : {}}>{item.value}</span>
                  <span className="fi-sub">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── 02 · CONTEXTO ── */}
        <section className="section">
          <div className="container section-header" data-anim="fade-in">
            <p className="eyebrow">02 · Contexto</p>
            <h2>¿Cómo evolucionó la plataforma?</h2>
            <p className="section-lede">
              La primera versión del sistema presentaba limitaciones que dificultaban su
              crecimiento y mantenimiento. MAKA OWS 2.0 resuelve cada uno de esos puntos
              con una plataforma moderna, modular y preparada para escalar.
            </p>
          </div>
          <div className="container migration-grid" data-anim="slide-up">
            <div className="migration-card v1">
              <div className="mc-header">
                <i className="fas fa-exclamation-triangle" style={{ color: '#ef4444', fontSize: '20px' }}></i>
                <span className="mc-title">Versión 1.0 — PHP Monolito</span>
              </div>
              <ul className="mc-list">
                <li>Cualquier cambio podía romper otras partes del sistema sin previo aviso</li>
                <li>Añadir nuevas funcionalidades obligaba a redesplegar toda la aplicación</li>
                <li>El mantenimiento se volvía más costoso y arriesgado con cada mejora</li>
                <li>Los módulos de negocio estaban mezclados y eran difíciles de gestionar</li>
                <li>Tecnología desactualizada con limitaciones para integraciones modernas</li>
              </ul>
            </div>
            <div className="migration-card v2">
              <div className="mc-header">
                <i className="fas fa-rocket" style={{ color: 'var(--accent)', fontSize: '20px' }}></i>
                <span className="mc-title">Versión 2.0 — Microservicios</span>
              </div>
              <ul className="mc-list">
                <li>Cada módulo es independiente: se puede actualizar o escalar sin afectar al resto</li>
                <li>Tecnología moderna en frontend, backend e infraestructura en la nube</li>
                <li>Mejor rendimiento y experiencia de usuario gracias a caché y renderizado optimizado</li>
                <li>Seguridad por capas con autenticación y control de acceso por roles</li>
                <li>Entorno preparado para producción con despliegue automático en la nube</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── 03 · MÓDULOS ── */}
        <section className="section">
          <div className="container section-header" data-anim="fade-in">
            <p className="eyebrow">03 · Módulos</p>
            <h2>5 módulos independientes</h2>
            <p className="section-lede">
              La plataforma está dividida en cinco módulos funcionales especializados. Cada
              uno gestiona un área clave del negocio de forma autónoma.
            </p>
          </div>
          <div className="container services-grid">
            {[
              { icon: 'fa-key', name: 'Acceso y Usuarios', desc: 'Gestiona el registro e inicio de sesión de todos los usuarios. Controla los permisos según el rol: administrador, personal del evento o cliente.', delay: 0 },
              { icon: 'fa-heart', name: 'Gestión del Evento', desc: 'Núcleo del sistema. Centraliza toda la información de cada boda: fechas, locaciones, lista de invitados y seguimiento del estado en cada etapa.', delay: 80 },
              { icon: 'fa-boxes-stacked', name: 'Inventario', desc: 'Controla los recursos materiales disponibles: mobiliario, decoración, catering y cualquier elemento asignable. Visualiza y actualiza el stock en tiempo real.', delay: 160 },
              { icon: 'fa-handshake', name: 'Proveedores y Servicios', desc: 'Catálogo de proveedores disponibles: fotografía, música, catering, transporte. Incluye gestión de contrataciones y seguimiento de confirmaciones.', delay: 240 },
              { icon: 'fa-bell', name: 'Notificaciones', desc: 'Sistema de alertas automáticas. Envía notificaciones y correos a los participantes sobre cambios de estado, recordatorios y actualizaciones importantes.', delay: 320 },
            ].map((s) => (
              <div className="service-card" data-anim="fade-in" data-anim-delay={s.delay} key={s.name}>
                <i className={`fas ${s.icon} service-icon`}></i>
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── 04 · STACK ── */}
        <section className="section">
          <div className="container section-header" data-anim="fade-in">
            <p className="eyebrow">04 · Stack Tecnológico</p>
            <h2>Tecnologías del core</h2>
            <p className="section-lede">
              Selección de herramientas modernas que priorizan el rendimiento, la
              mantenibilidad y la experiencia de desarrollo.
            </p>
          </div>
          <div className="container stack-grid">
            {/* Frontend */}
            <div className="stack-card" data-anim="fade-in">
              <div className="stack-top">
                <span className="stack-category">Frontend</span>
                <i className="fas fa-display" style={{ color: 'var(--accent)' }}></i>
              </div>
              <div className="stack-items">
                {[
                  { icon: 'fab fa-react', name: 'Next.js 14', desc: 'App Router, SSR, Server & Client Components' },
                  { icon: 'fas fa-wind', name: 'Tailwind CSS', desc: 'Diseño responsivo utility-first' },
                  { icon: 'fas fa-database', name: 'TanStack Query', desc: 'Data fetching, caché y sincronización' },
                  { icon: 'fas fa-atom', name: 'Zustand', desc: 'Estado global ligero y escalable' },
                ].map((item) => (
                  <div className="stack-item" key={item.name}>
                    <i className={`${item.icon} stack-item-icon`}></i>
                    <div>
                      <div className="stack-item-name">{item.name}</div>
                      <div className="stack-item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Backend */}
            <div className="stack-card" data-anim="fade-in" data-anim-delay="120">
              <div className="stack-top">
                <span className="stack-category">Backend</span>
                <i className="fas fa-server" style={{ color: 'var(--accent)' }}></i>
              </div>
              <div className="stack-items">
                {[
                  { icon: 'fab fa-node-js', name: 'NestJS + TypeScript', desc: 'Framework para APIs robustas y bien estructuradas' },
                  { icon: 'fas fa-code-branch', name: 'Prisma 7', desc: 'ORM, migraciones y tipado seguro' },
                  { icon: 'fas fa-circle-nodes', name: 'PostgreSQL 17', desc: 'Base de datos relacional con esquemas separados por módulo' },
                ].map((item) => (
                  <div className="stack-item" key={item.name}>
                    <i className={`${item.icon} stack-item-icon`}></i>
                    <div>
                      <div className="stack-item-name">{item.name}</div>
                      <div className="stack-item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Infraestructura */}
            <div className="stack-card" data-anim="fade-in" data-anim-delay="240">
              <div className="stack-top">
                <span className="stack-category">Infraestructura</span>
                <i className="fas fa-cloud" style={{ color: 'var(--accent)' }}></i>
              </div>
              <div className="stack-items">
                {[
                  { icon: 'fab fa-docker', name: 'Docker & Compose', desc: 'Entornos reproducibles, orquestación de servicios' },
                  { icon: 'fab fa-aws', name: 'AWS EC2 + RDS', desc: 'Backend en EC2, base de datos en RDS' },
                  { icon: 'fas fa-triangle', name: 'Vercel + GitLab CI/CD', desc: 'Despliegue continuo del frontend' },
                ].map((item) => (
                  <div className="stack-item" key={item.name}>
                    <i className={`${item.icon} stack-item-icon`}></i>
                    <div>
                      <div className="stack-item-name">{item.name}</div>
                      <div className="stack-item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── 05 · SEGURIDAD ── */}
        <section className="section">
          <div className="container section-header" data-anim="fade-in">
            <p className="eyebrow">05 · Seguridad</p>
            <h2>Seguridad y control de acceso</h2>
            <p className="section-lede">
              Modelo de seguridad en capas que protege cada endpoint con autenticación,
              autorización basada en roles y buenas prácticas de configuración.
            </p>
          </div>
          <div className="container security-grid">
            {[
              {
                pill: 'Autenticación', icon: 'fa-shield-halved', delay: 0,
                items: [
                  'Sesiones seguras con tokens de corta duración',
                  'Renovación automática de sesión sin interrupciones',
                  'Contraseñas cifradas con algoritmos estándar del sector',
                  'Clave secreta compartida y gestionada de forma segura entre módulos',
                ],
              },
              {
                pill: 'Autorización', icon: 'fa-user-lock', delay: 120,
                items: [
                  'Control de acceso por roles: Administrador, Personal y Cliente',
                  'Cada acción verifica los permisos del usuario antes de ejecutarse',
                  'Cada módulo gestiona sus propios controles de acceso',
                  'Separación clara de responsabilidades según el rol asignado',
                ],
              },
              {
                pill: 'Buenas Prácticas', icon: 'fa-list-check', delay: 240,
                items: [
                  'Configuración gestionada mediante variables de entorno seguras',
                  'Validación estricta de todos los datos de entrada',
                  'Ningún dato sensible almacenado directamente en el código',
                  'Auditorías periódicas de dependencias y librerías',
                ],
              },
            ].map((card) => (
              <div className="security-card" data-anim="fade-in" data-anim-delay={card.delay} key={card.pill}>
                <div className="card-top">
                  <span className="pill">{card.pill}</span>
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <ul className="security-list">
                  {card.items.map((item) => (
                    <li key={item}>
                      <i className="fas fa-check-circle"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── 06 · CRONOGRAMA ── */}
        <section className="section">
          <div className="container section-header" data-anim="fade-in">
            <p className="eyebrow">06 · Cronograma</p>
            <h2>Hoja de ruta del proyecto</h2>
            <p className="section-lede">
              24 semanas divididas en tres fases: setup y desarrollo del core, integración
              y testing, y despliegue en producción.
            </p>
          </div>
          <div className="container" data-anim="slide-up">
            <div className="timeline">
              <div className="timeline-item active">
                <div className="timeline-weeks">Semanas 1 – 8</div>
                <div className="timeline-title">Setup del entorno y desarrollo core</div>
                <ul className="timeline-details">
                  <li>Configuración de Docker Compose con todos los servicios y PostgreSQL</li>
                  <li>Scaffolding de los 5 microservicios NestJS con módulos base</li>
                  <li>Modelos de datos con Prisma y primeras migraciones</li>
                  <li>Implementación del Auth Service con JWT completo</li>
                  <li>Desarrollo del Evento Service como núcleo del negocio</li>
                  <li>Setup de Next.js 14 con App Router, Zustand y TanStack Query</li>
                </ul>
              </div>
              <div className="timeline-item">
                <div className="timeline-weeks">Semanas 9 – 16</div>
                <div className="timeline-title">Testing, integración y pulido de UI/UX</div>
                <ul className="timeline-details">
                  <li>Desarrollo de Inventario, Servicio y Notification Services</li>
                  <li>Testing unitario con Jest/NestJS en todos los servicios backend</li>
                  <li>Testing de componentes frontend con Testing Library</li>
                  <li>Integración end-to-end de todos los microservicios</li>
                  <li>Refinamiento de UI/UX y diseño responsivo con Tailwind</li>
                  <li>Code reviews obligatorias y revisión de seguridad</li>
                </ul>
              </div>
              <div className="timeline-item">
                <div className="timeline-weeks">Semanas 17 – 24</div>
                <div className="timeline-title">Despliegue en producción y entrega final</div>
                <ul className="timeline-details">
                  <li>Configuración de AWS EC2 para los microservicios backend</li>
                  <li>Provisioning de AWS RDS para PostgreSQL en producción</li>
                  <li>Setup de CI/CD en GitLab para despliegue automático en Vercel</li>
                  <li>Pruebas de carga y corrección de errores en entorno real</li>
                  <li>Documentación final del sistema y presentación académica</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── 07 · EQUIPO ── */}
        <section className="section">
          <div className="container section-header" data-anim="fade-in">
            <p className="eyebrow">07 · Equipo</p>
            <h2>Las personas detrás del proyecto</h2>
            <p className="section-lede">
              Equipo multidisciplinar de 5 ingenieros trabajando con metodología ágil,
              sprints semanales y Git Flow con Conventional Commits.
            </p>
          </div>
          <div className="container team-grid">
            {[
              { gh: 'MemoLuche', name: 'Guillermo Gordillo Pizarro', role: 'Project Manager & Backend Dev', delay: 0 },
              { gh: 'Jos3mi14', name: 'José Emilio Sánchez Miñón', role: 'Frontend Dev & QA', delay: 80 },
              { gh: 'TERORandOne', name: 'José Diego Barrios Alcántara', role: 'Backend Developer', delay: 160 },
              { gh: 'andyyquiterio', name: 'Andy Quiterio Ibarra', role: 'UI/UX & Frontend Developer', delay: 240 },
              { gh: 'not-EmilioGS', name: 'Emilio Galarza Salinas', role: 'Frontend Developer', delay: 320 },
            ].map((member) => (
              <div className="team-member" data-anim="fade-in" data-anim-delay={member.delay} key={member.gh}>
                <div className="team-avatar">
                  <img
                    src={`https://github.com/${member.gh}.png`}
                    alt={member.name}
                    loading="lazy"
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <a
                  href={`https://github.com/${member.gh}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-github"
                >
                  <i className="fab fa-github"></i> @{member.gh}
                </a>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer minimal />
      <ScrollToTopBtn />
    </>
  )
}
