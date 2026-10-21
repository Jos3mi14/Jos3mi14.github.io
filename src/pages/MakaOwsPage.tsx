import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/shared/ScrollToTopBtn";
import Reveal from "../components/shared/Reveal";
import Icon from "../components/shared/Icon";
import "./MakaOws.css";

export default function MakaOwsPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Header minimal />
      <main id="main-content">
        {/* -- PAGE HERO -- */}
        <section className="page-hero">
          <div className="container page-hero-content">
            <Link to="/" className="back-link">
              <Icon name="arrow-left" size={16} /> Volver al portafolio
            </Link>
            <p className="eyebrow">
              <Icon name="diagram" size={14} /> Proyecto Académico · 2025–2026
            </p>
            <h1>
              MAKA <span className="highlight-text">OWS 2.0</span>
            </h1>
            <Reveal delay={0.3}>
              <p className="lede" style={{ maxWidth: "640px", margin: "0" }}>
                MAKA OWS es una plataforma digital para la gestión integral de
                bodas: desde la coordinación del evento y los proveedores hasta
                las notificaciones automáticas en tiempo real. Diseñada para
                ofrecer una experiencia fluida y profesional tanto a los
                organizadores como a los clientes.
              </p>
            </Reveal>
            <div className="hero-badges">
              <span className="badge badge-success">
                <Icon name="circle" size={8} /> En desarrollo activo
              </span>
              <span className="badge badge-info">
                <Icon name="cubes" size={13} /> 5 Módulos funcionales
              </span>
              <span className="badge badge-neutral">
                <Icon name="calendar" size={13} /> 6 meses · Equipo de 5
              </span>
              <span className="badge badge-neutral">
                <Icon name="file" size={13} /> Documentado: 20 Ene 2026
              </span>
            </div>
          </div>
        </section>

        {/* -- FICHA TECNICA -- */}
        <section className="section">
          <Reveal>
            <div className="container section-header">
              <p className="eyebrow">Ficha Técnica</p>
              <h2>Datos del proyecto</h2>
              <p className="section-lede">
                Referencia rápida con la información institucional y de estado
                del sistema.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="container">
              <div className="ficha-grid">
                {[
                  {
                    label: "Nombre Oficial",
                    value: "MAKA Online Wedding System",
                    sub: "MAKA OWS",
                  },
                  {
                    label: "Versión Actual",
                    value: "2.0",
                    sub: "Migración a Microservicios",
                  },
                  {
                    label: "Propósito",
                    value: "Gestión integral de bodas",
                    sub: "Planificación, inventario, servicios y notificaciones",
                  },
                  {
                    label: "Estado",
                    value: "En desarrollo activo",
                    sub: "Proyecto académico · 6 meses",
                    accent: true,
                  },
                  {
                    label: "Equipo",
                    value: "5 integrantes",
                    sub: "Presupuesto cero · Free tier cloud",
                  },
                  {
                    label: "Documentación",
                    value: "20 de enero de 2026",
                    sub: "Revisión continua con cada sprint",
                  },
                ].map((item) => (
                  <div className="ficha-item" key={item.label}>
                    <span className="fi-label">{item.label}</span>
                    <span
                      className="fi-value"
                      style={item.accent ? { color: "var(--success)" } : {}}
                    >
                      {item.value}
                    </span>
                    <span className="fi-sub">{item.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <div className="section-divider" />

        {/* -- CONTEXTO -- */}
        <section className="section">
          <Reveal>
            <div className="container section-header">
              <p className="eyebrow">Contexto</p>
              <h2>¿Cómo evolucionó la plataforma?</h2>
              <p className="section-lede">
                La primera versión del sistema presentaba limitaciones que
                dificultaban su crecimiento y mantenimiento. MAKA OWS 2.0
                resuelve cada uno de esos puntos con una plataforma moderna,
                modular y preparada para escalar.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="container migration-grid">
              <div className="migration-card v1">
                <div className="mc-header">
                  <Icon name="alert" size={20} className="icon-danger" />
                  <span className="mc-title">Versión 1.0 — PHP Monolito</span>
                </div>
                <ul className="mc-list">
                  <li>
                    Cualquier cambio podía romper otras partes del sistema sin
                    previo aviso
                  </li>
                  <li>
                    Añadir nuevas funcionalidades obligaba a redesplegar toda la
                    aplicación
                  </li>
                  <li>
                    El mantenimiento se volvía más costoso y arriesgado con cada
                    mejora
                  </li>
                  <li>
                    Los módulos de negocio estaban mezclados y eran difíciles de
                    gestionar
                  </li>
                  <li>
                    Tecnología desactualizada con limitaciones para
                    integraciones modernas
                  </li>
                </ul>
              </div>
              <div className="migration-card v2">
                <div className="mc-header">
                  <Icon name="rocket" size={20} className="icon-accent" />
                  <span className="mc-title">Versión 2.0 — Microservicios</span>
                </div>
                <ul className="mc-list">
                  <li>
                    Cada módulo es independiente: se puede actualizar o escalar
                    sin afectar al resto
                  </li>
                  <li>
                    Tecnología moderna en frontend, backend e infraestructura en
                    la nube
                  </li>
                  <li>
                    Mejor rendimiento y experiencia de usuario gracias a caché y
                    renderizado optimizado
                  </li>
                  <li>
                    Seguridad por capas con autenticación y control de acceso
                    por roles
                  </li>
                  <li>
                    Entorno preparado para producción con despliegue automático
                    en la nube
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        <div className="section-divider" />

        {/* -- MODULOS -- */}
        <section className="section">
          <Reveal>
            <div className="container section-header">
              <p className="eyebrow">Módulos</p>
              <h2>5 módulos independientes</h2>
              <p className="section-lede">
                La plataforma está dividida en cinco módulos funcionales
                especializados. Cada uno gestiona un área clave del negocio de
                forma autónoma.
              </p>
            </div>
          </Reveal>
          <div className="container services-grid">
            {[
              {
                icon: "key" as const,
                name: "Acceso y Usuarios",
                desc: "Gestiona el registro e inicio de sesión de todos los usuarios. Controla los permisos según el rol: administrador, personal del evento o cliente.",
              },
              {
                icon: "heart" as const,
                name: "Gestión del Evento",
                desc: "Núcleo del sistema. Centraliza toda la información de cada boda: fechas, locaciones, lista de invitados y seguimiento del estado en cada etapa.",
              },
              {
                icon: "box" as const,
                name: "Inventario",
                desc: "Controla los recursos materiales disponibles: mobiliario, decoración, catering y cualquier elemento asignable. Visualiza y actualiza el stock en tiempo real.",
              },
              {
                icon: "users" as const,
                name: "Proveedores y Servicios",
                desc: "Catálogo de proveedores disponibles: fotografía, música, catering, transporte. Incluye gestión de contrataciones y seguimiento de confirmaciones.",
              },
              {
                icon: "bell" as const,
                name: "Notificaciones",
                desc: "Sistema de alertas automáticas. Envía notificaciones y correos a los participantes sobre cambios de estado, recordatorios y actualizaciones importantes.",
              },
            ].map((s, i) => (
              <Reveal delay={i * 0.08} key={s.name}>
                <div className="service-card">
                  <Icon name={s.icon} size={20} className="service-icon" />
                  <div className="service-name">{s.name}</div>
                  <p className="service-desc">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* -- STACK -- */}
        <section className="section">
          <Reveal>
            <div className="container section-header">
              <p className="eyebrow">Stack Tecnológico</p>
              <h2>Tecnologías del core</h2>
              <p className="section-lede">
                Selección de herramientas modernas que priorizan el rendimiento,
                la mantenibilidad y la experiencia de desarrollo.
              </p>
            </div>
          </Reveal>
          <div className="container stack-grid">
            {/* Frontend */}
            <Reveal delay={0}>
              <div className="stack-card">
                <div className="stack-top">
                  <span className="stack-category">Frontend</span>
                  <Icon name="monitor" size={18} className="icon-accent" />
                </div>
                <div className="stack-items">
                  {[
                    {
                      icon: "code",
                      name: "Next.js 14",
                      desc: "App Router, SSR, Server & Client Components",
                    },
                    {
                      icon: "sparkle",
                      name: "Tailwind CSS",
                      desc: "Diseño responsivo utility-first",
                    },
                    {
                      icon: "server",
                      name: "TanStack Query",
                      desc: "Data fetching, caché y sincronización",
                    },
                    {
                      icon: "chip",
                      name: "Zustand",
                      desc: "Estado global ligero y escalable",
                    },
                  ].map((item) => (
                    <div className="stack-item" key={item.name}>
                      <i
                        className={`${item.icon} stack-item-icon`}
                        aria-hidden="true"
                      ></i>
                      <div>
                        <div className="stack-item-name">{item.name}</div>
                        <div className="stack-item-desc">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            {/* Backend */}
            <Reveal delay={0.12}>
              <div className="stack-card">
                <div className="stack-top">
                  <span className="stack-category">Backend</span>
                  <Icon name="server" size={18} className="icon-accent" />
                </div>
                <div className="stack-items">
                  {[
                    {
                      icon: "code",
                      name: "NestJS + TypeScript",
                      desc: "Framework para APIs robustas y bien estructuradas",
                    },
                    {
                      icon: "git-branch",
                      name: "Prisma 7",
                      desc: "ORM, migraciones y tipado seguro",
                    },
                    {
                      icon: "sitemap",
                      name: "PostgreSQL 17",
                      desc: "Base de datos relacional con esquemas separados por módulo",
                    },
                  ].map((item) => (
                    <div className="stack-item" key={item.name}>
                      <i
                        className={`${item.icon} stack-item-icon`}
                        aria-hidden="true"
                      ></i>
                      <div>
                        <div className="stack-item-name">{item.name}</div>
                        <div className="stack-item-desc">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            {/* Infraestructura */}
            <Reveal delay={0.24}>
              <div className="stack-card">
                <div className="stack-top">
                  <span className="stack-category">Infraestructura</span>
                  <Icon name="cloud" size={18} className="icon-accent" />
                </div>
                <div className="stack-items">
                  {[
                    {
                      icon: "box" as const,
                      name: "Docker & Compose",
                      desc: "Entornos reproducibles, orquestación de servicios",
                    },
                    {
                      icon: "cloud",
                      name: "AWS EC2 + RDS",
                      desc: "Backend en EC2, base de datos en RDS",
                    },
                    {
                      icon: "rocket",
                      name: "Vercel + GitLab CI/CD",
                      desc: "Despliegue continuo del frontend",
                    },
                  ].map((item) => (
                    <div className="stack-item" key={item.name}>
                      <i
                        className={`${item.icon} stack-item-icon`}
                        aria-hidden="true"
                      ></i>
                      <div>
                        <div className="stack-item-name">{item.name}</div>
                        <div className="stack-item-desc">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="section-divider" />

        {/* -- SEGURIDAD -- */}
        <section className="section">
          <Reveal>
            <div className="container section-header">
              <p className="eyebrow">Seguridad</p>
              <h2>Seguridad y control de acceso</h2>
              <p className="section-lede">
                Modelo de seguridad en capas que protege cada endpoint con
                autenticación, autorización basada en roles y buenas prácticas
                de configuración.
              </p>
            </div>
          </Reveal>
          <div className="container security-grid">
            {[
              {
                pill: "Autenticación",
                icon: "shield" as const,
                items: [
                  "Sesiones seguras con tokens de corta duración",
                  "Renovación automática de sesión sin interrupciones",
                  "Contraseñas cifradas con algoritmos estándar del sector",
                  "Clave secreta compartida y gestionada de forma segura entre módulos",
                ],
              },
              {
                pill: "Autorización",
                icon: "user-lock" as const,
                items: [
                  "Control de acceso por roles: Administrador, Personal y Cliente",
                  "Cada acción verifica los permisos del usuario antes de ejecutarse",
                  "Cada módulo gestiona sus propios controles de acceso",
                  "Separación clara de responsabilidades según el rol asignado",
                ],
              },
              {
                pill: "Buenas Prácticas",
                icon: "list-check" as const,
                items: [
                  "Configuración gestionada mediante variables de entorno seguras",
                  "Validación estricta de todos los datos de entrada",
                  "Ningún dato sensible almacenado directamente en el código",
                  "Auditorías periódicas de dependencias y librerías",
                ],
              },
            ].map((card, i) => (
              <Reveal delay={i * 0.12} key={card.pill}>
                <div className="security-card">
                  <div className="card-top">
                    <span className="pill">{card.pill}</span>
                      <Icon
                        name={card.icon}
                        size={18}
                        className="icon-accent"
                      />

                  </div>
                  <ul className="security-list">
                    {card.items.map((item) => (
                      <li key={item}>
                        <Icon name="check-circle" size={14} /> {item}

                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* -- CRONOGRAMA -- */}
        <section className="section">
          <Reveal>
            <div className="container section-header">
              <p className="eyebrow">Cronograma</p>
              <h2>Hoja de ruta del proyecto</h2>
              <p className="section-lede">
                24 semanas divididas en tres
                fases: setup y desarrollo del core, integración y testing, y
                despliegue en producción.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="container">
              <div className="timeline">
                <div className="timeline-item active">
                  <div className="timeline-weeks">Semanas 1 – 8</div>
                  <div className="timeline-title">
                    Setup del entorno y desarrollo core
                  </div>
                  <ul className="timeline-details">
                    <li>
                      Configuración de Docker Compose con todos los servicios y
                      PostgreSQL
                    </li>
                    <li>
                      Scaffolding de los 5 microservicios NestJS con módulos
                      base
                    </li>
                    <li>Modelos de datos con Prisma y primeras migraciones</li>
                    <li>Implementación del Auth Service con JWT completo</li>
                    <li>
                      Desarrollo del Evento Service como núcleo del negocio
                    </li>
                    <li>
                      Setup de Next.js 14 con App Router, Zustand y TanStack
                      Query
                    </li>
                  </ul>
                </div>
                <div className="timeline-item">
                  <div className="timeline-weeks">Semanas 9 – 16</div>
                  <div className="timeline-title">
                    Testing, integración y pulido de UI/UX
                  </div>
                  <ul className="timeline-details">
                    <li>
                      Desarrollo de Inventario, Servicio y Notification Services
                    </li>
                    <li>
                      Testing unitario con Jest/NestJS en todos los servicios
                      backend
                    </li>
                    <li>Testing de componentes frontend con Testing Library</li>
                    <li>Integración end-to-end de todos los microservicios</li>
                    <li>
                      Refinamiento de UI/UX y diseño responsivo con Tailwind
                    </li>
                    <li>Code reviews obligatorias y revisión de seguridad</li>
                  </ul>
                </div>
                <div className="timeline-item">
                  <div className="timeline-weeks">Semanas 17 – 24</div>
                  <div className="timeline-title">
                    Despliegue en producción y entrega final
                  </div>
                  <ul className="timeline-details">
                    <li>
                      Configuración de AWS EC2 para los microservicios backend
                    </li>
                    <li>
                      Provisioning de AWS RDS para PostgreSQL en producción
                    </li>
                    <li>
                      Setup de CI/CD en GitLab para despliegue automático en
                      Vercel
                    </li>
                    <li>
                      Pruebas de carga y corrección de errores en entorno real
                    </li>
                    <li>
                      Documentación final del sistema y presentación académica
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <div className="section-divider" />

        {/* -- EQUIPO -- */}
        <section className="section">
          <Reveal>
            <div className="container section-header">
              <p className="eyebrow">Equipo</p>
              <h2>Las personas detrás del proyecto</h2>
              <p className="section-lede">
                Equipo multidisciplinar de 5 ingenieros trabajando con
                metodología ágil, sprints semanales y Git Flow con Conventional
                Commits.
              </p>
            </div>
          </Reveal>
          <div className="container team-grid">
            {[
              {
                gh: "MemoLuche",
                name: "Guillermo Gordillo Pizarro",
                role: "Project Manager & Backend Dev",
              },
              {
                gh: "Jos3mi14",
                name: "José Emilio Sánchez Miñón",
                role: "Frontend Dev & QA",
              },
              {
                gh: "TERORandOne",
                name: "José Diego Barrios Alcántara",
                role: "Backend Developer",
              },
              {
                gh: "andyyquiterio",
                name: "Andy Quiterio Ibarra",
                role: "UI/UX & Frontend Developer",
              },
              {
                gh: "not-EmilioGS",
                name: "Emilio Galarza Salinas",
                role: "Frontend Developer",
              },
            ].map((member, i) => (
              <Reveal delay={i * 0.08} key={member.gh}>
                <div className="team-member">
                  <div className="team-avatar">
                    <img
                      src={`https://github.com/${member.gh}.png`}
                      alt={`Foto de ${member.name}`}
                      width={72}
                      height={72}
                      loading="lazy"
                      decoding="async"
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
                    <Icon name="github" size={14} /> @{member.gh}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer minimal />
      <ScrollToTopBtn />
    </>
  );
}
