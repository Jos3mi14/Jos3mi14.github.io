import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTopBtn from '../components/shared/ScrollToTopBtn'
import FadeInView from '../components/shared/FadeInView'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import BlurText from '../components/reactbits/BlurText'
import ShinyText from '../components/reactbits/ShinyText'
import DecryptedText from '../components/reactbits/DecryptedText'
import CountUp from '../components/reactbits/CountUp'
import TiltedCard from '../components/reactbits/TiltedCard'
import './MakaOws.css'

export default function MakaOwsPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <Header minimal />
      <main id="main-content">

        {/* -- PAGE HERO -- */}
        <section className="page-hero">
          <div className="container page-hero-content">
            <Link to="/" className="back-link">
              <i className="fas fa-arrow-left" aria-hidden="true"></i> Volver al portafolio
            </Link>
            <p className="eyebrow">
              <i className="fas fa-diagram-project" aria-hidden="true"></i> Proyecto Académico · 2025–2026
            </p>
            <h1>
              MAKA{' '}
              <DecryptedText
                text="OWS 2.0"
                animateOn="view"
                sequential={true}
                speed={50}
                revealDirection="start"
                className="highlight-text"
              />
            </h1>
            <FadeInView direction="up" distance={20} delay={0.3}>
              <p className="lede" style={{ maxWidth: '640px', margin: '0' }}>
                MAKA OWS es una plataforma digital para la gestión integral de bodas: desde la
                coordinación del evento y los proveedores hasta las notificaciones automáticas
                en tiempo real. Diseñada para ofrecer una experiencia fluida y profesional tanto
                a los organizadores como a los clientes.
              </p>
            </FadeInView>
            <div className="hero-badges">
              <span className="badge badge-success">
                <i className="fas fa-circle" style={{ fontSize: '8px' }} aria-hidden="true"></i> En desarrollo activo
              </span>
              <span className="badge badge-info">
                <i className="fas fa-cubes" aria-hidden="true"></i> <CountUp to={5} duration={1.5} /> Módulos funcionales
              </span>
              <span className="badge badge-neutral">
                <i className="fas fa-calendar" aria-hidden="true"></i> <CountUp to={6} duration={1.5} /> meses · Equipo de <CountUp to={5} duration={1.5} />
              </span>
              <span className="badge badge-neutral">
                <i className="fas fa-file-alt" aria-hidden="true"></i> Documentado: 20 Ene 2026
              </span>
            </div>
          </div>
        </section>

        {/* -- 01 · FICHA TECNICA -- */}
        <section className="section">
          <FadeInView direction="up">
            <div className="container section-header">
              <p className="eyebrow">
                <ShinyText text="01 · Ficha Técnica" speed={3} color="var(--accent)" shineColor="#80ffff" />
              </p>
              <h2>
                <BlurText text="Datos del proyecto" delay={100} animateBy="words" direction="bottom" />
              </h2>
              <p className="section-lede">Referencia rápida con la información institucional y de estado del sistema.</p>
            </div>
          </FadeInView>
          <FadeInView direction="up" delay={0.15}>
            <div className="container">
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
          </FadeInView>
        </section>

        <div className="section-divider" />

        {/* -- 02 · CONTEXTO -- */}
        <section className="section">
          <FadeInView direction="up">
            <div className="container section-header">
              <p className="eyebrow">
                <ShinyText text="02 · Contexto" speed={3} color="var(--accent)" shineColor="#80ffff" />
              </p>
              <h2>
                <BlurText text="¿Cómo evolucionó la plataforma?" delay={100} animateBy="words" direction="bottom" />
              </h2>
              <p className="section-lede">
                La primera versión del sistema presentaba limitaciones que dificultaban su
                crecimiento y mantenimiento. MAKA OWS 2.0 resuelve cada uno de esos puntos
                con una plataforma moderna, modular y preparada para escalar.
              </p>
            </div>
          </FadeInView>
          <FadeInView direction="up" delay={0.15}>
            <div className="container migration-grid">
              <SpotlightCard spotlightColor="rgba(239, 68, 68, 0.15)" className="migration-card v1">
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
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.15)" className="migration-card v2">
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
              </SpotlightCard>
            </div>
          </FadeInView>
        </section>

        <div className="section-divider" />

        {/* -- 03 · MODULOS -- */}
        <section className="section">
          <FadeInView direction="up">
            <div className="container section-header">
              <p className="eyebrow">
                <ShinyText text="03 · Módulos" speed={3} color="var(--accent)" shineColor="#80ffff" />
              </p>
              <h2>
                <BlurText text="5 módulos independientes" delay={100} animateBy="words" direction="bottom" />
              </h2>
              <p className="section-lede">
                La plataforma está dividida en cinco módulos funcionales especializados. Cada
                uno gestiona un área clave del negocio de forma autónoma.
              </p>
            </div>
          </FadeInView>
          <div className="container services-grid">
            {[
              { icon: 'fa-key', name: 'Acceso y Usuarios', desc: 'Gestiona el registro e inicio de sesión de todos los usuarios. Controla los permisos según el rol: administrador, personal del evento o cliente.' },
              { icon: 'fa-heart', name: 'Gestión del Evento', desc: 'Núcleo del sistema. Centraliza toda la información de cada boda: fechas, locaciones, lista de invitados y seguimiento del estado en cada etapa.' },
              { icon: 'fa-boxes-stacked', name: 'Inventario', desc: 'Controla los recursos materiales disponibles: mobiliario, decoración, catering y cualquier elemento asignable. Visualiza y actualiza el stock en tiempo real.' },
              { icon: 'fa-handshake', name: 'Proveedores y Servicios', desc: 'Catálogo de proveedores disponibles: fotografía, música, catering, transporte. Incluye gestión de contrataciones y seguimiento de confirmaciones.' },
              { icon: 'fa-bell', name: 'Notificaciones', desc: 'Sistema de alertas automáticas. Envía notificaciones y correos a los participantes sobre cambios de estado, recordatorios y actualizaciones importantes.' },
            ].map((s, i) => (
              <FadeInView direction="up" delay={i * 0.08} key={s.name}>
                <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.12)" className="service-card">
                  <i className={`fas ${s.icon} service-icon`}></i>
                  <div className="service-name">{s.name}</div>
                  <p className="service-desc">{s.desc}</p>
                </SpotlightCard>
              </FadeInView>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* -- 04 · STACK -- */}
        <section className="section">
          <FadeInView direction="up">
            <div className="container section-header">
              <p className="eyebrow">
                <ShinyText text="04 · Stack Tecnológico" speed={3} color="var(--accent)" shineColor="#80ffff" />
              </p>
              <h2>
                <BlurText text="Tecnologías del core" delay={100} animateBy="words" direction="bottom" />
              </h2>
              <p className="section-lede">
                Selección de herramientas modernas que priorizan el rendimiento, la
                mantenibilidad y la experiencia de desarrollo.
              </p>
            </div>
          </FadeInView>
          <div className="container stack-grid">
            {/* Frontend */}
            <FadeInView direction="up" delay={0}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.12)" className="stack-card">
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
              </SpotlightCard>
            </FadeInView>
            {/* Backend */}
            <FadeInView direction="up" delay={0.12}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.12)" className="stack-card">
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
              </SpotlightCard>
            </FadeInView>
            {/* Infraestructura */}
            <FadeInView direction="up" delay={0.24}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.12)" className="stack-card">
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
              </SpotlightCard>
            </FadeInView>
          </div>
        </section>

        <div className="section-divider" />

        {/* -- 05 · SEGURIDAD -- */}
        <section className="section">
          <FadeInView direction="up">
            <div className="container section-header">
              <p className="eyebrow">
                <ShinyText text="05 · Seguridad" speed={3} color="var(--accent)" shineColor="#80ffff" />
              </p>
              <h2>
                <BlurText text="Seguridad y control de acceso" delay={100} animateBy="words" direction="bottom" />
              </h2>
              <p className="section-lede">
                Modelo de seguridad en capas que protege cada endpoint con autenticación,
                autorización basada en roles y buenas prácticas de configuración.
              </p>
            </div>
          </FadeInView>
          <div className="container security-grid">
            {[
              {
                pill: 'Autenticación', icon: 'fa-shield-halved',
                items: [
                  'Sesiones seguras con tokens de corta duración',
                  'Renovación automática de sesión sin interrupciones',
                  'Contraseñas cifradas con algoritmos estándar del sector',
                  'Clave secreta compartida y gestionada de forma segura entre módulos',
                ],
              },
              {
                pill: 'Autorización', icon: 'fa-user-lock',
                items: [
                  'Control de acceso por roles: Administrador, Personal y Cliente',
                  'Cada acción verifica los permisos del usuario antes de ejecutarse',
                  'Cada módulo gestiona sus propios controles de acceso',
                  'Separación clara de responsabilidades según el rol asignado',
                ],
              },
              {
                pill: 'Buenas Prácticas', icon: 'fa-list-check',
                items: [
                  'Configuración gestionada mediante variables de entorno seguras',
                  'Validación estricta de todos los datos de entrada',
                  'Ningún dato sensible almacenado directamente en el código',
                  'Auditorías periódicas de dependencias y librerías',
                ],
              },
            ].map((card, i) => (
              <FadeInView direction="up" delay={i * 0.12} key={card.pill}>
                <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.12)" className="security-card">
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
                </SpotlightCard>
              </FadeInView>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* -- 06 · CRONOGRAMA -- */}
        <section className="section">
          <FadeInView direction="up">
            <div className="container section-header">
              <p className="eyebrow">
                <ShinyText text="06 · Cronograma" speed={3} color="var(--accent)" shineColor="#80ffff" />
              </p>
              <h2>
                <BlurText text="Hoja de ruta del proyecto" delay={100} animateBy="words" direction="bottom" />
              </h2>
              <p className="section-lede">
                <CountUp to={24} duration={2} /> semanas divididas en tres fases: setup y desarrollo del core, integración
                y testing, y despliegue en producción.
              </p>
            </div>
          </FadeInView>
          <FadeInView direction="up" delay={0.15}>
            <div className="container">
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
          </FadeInView>
        </section>

        <div className="section-divider" />

        {/* -- 07 · EQUIPO -- */}
        <section className="section">
          <FadeInView direction="up">
            <div className="container section-header">
              <p className="eyebrow">
                <ShinyText text="07 · Equipo" speed={3} color="var(--accent)" shineColor="#80ffff" />
              </p>
              <h2>
                <BlurText text="Las personas detrás del proyecto" delay={100} animateBy="words" direction="bottom" />
              </h2>
              <p className="section-lede">
                Equipo multidisciplinar de 5 ingenieros trabajando con metodología ágil,
                sprints semanales y Git Flow con Conventional Commits.
              </p>
            </div>
          </FadeInView>
          <div className="container team-grid">
            {[
              { gh: 'MemoLuche', name: 'Guillermo Gordillo Pizarro', role: 'Project Manager & Backend Dev' },
              { gh: 'Jos3mi14', name: 'José Emilio Sánchez Miñón', role: 'Frontend Dev & QA' },
              { gh: 'TERORandOne', name: 'José Diego Barrios Alcántara', role: 'Backend Developer' },
              { gh: 'andyyquiterio', name: 'Andy Quiterio Ibarra', role: 'UI/UX & Frontend Developer' },
              { gh: 'not-EmilioGS', name: 'Emilio Galarza Salinas', role: 'Frontend Developer' },
            ].map((member, i) => (
              <FadeInView direction="up" delay={i * 0.08} key={member.gh}>
                <div className="team-member">
                  <TiltedCard
                    imageSrc={`https://github.com/${member.gh}.png`}
                    altText={member.name}
                    captionText={member.role}
                    containerHeight="140px"
                    containerWidth="140px"
                    imageHeight="120px"
                    imageWidth="120px"
                    rotateAmplitude={8}
                    scaleOnHover={1.05}
                    showTooltip={true}
                    borderRadius="50%"
                    className="mx-auto"
                  />
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
              </FadeInView>
            ))}
          </div>
        </section>

      </main>
      <Footer minimal />
      <ScrollToTopBtn />
    </>
  )
}
