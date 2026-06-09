import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FadeInView from '../components/shared/FadeInView'
import CountUp from '../components/reactbits/CountUp'
import styles from './MakaMobilePage.module.css'

export default function MakaMobilePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <Header minimal />
      <main id="main-content">

        {/* -- SECTION 1: HERO -- */}
        <section className={styles.pageHero}>
          <div className={styles.heroContent}>
            <nav aria-label="Ruta de navegación" className={styles.breadcrumb}>
              <Link to="/">Portafolio</Link>
              <span aria-hidden="true">→</span>
              <Link to="/projects/maka-ows">MAKA OWS</Link>
              <span aria-hidden="true">→</span>
              <span>App Android</span>
            </nav>

            <Link to="/" className={styles.backLink}>
              <i className="fas fa-arrow-left" aria-hidden="true"></i> Volver al portafolio
            </Link>

            <p className={styles.eyebrow}>
              <i className="fas fa-mobile-screen" aria-hidden="true"></i> PROYECTO ACADÉMICO · 2025–2026
            </p>

            <h1>MAKA OWS · <span>App Android</span></h1>

            <p className={styles.heroDesc}>
              Aplicación Android nativa para la gestión de bodas. Desarrollé el módulo móvil completo: desde la arquitectura de autenticación segura hasta el módulo de eventos con paginación real, consumiendo 5 microservicios NestJS desplegados en AWS.
            </p>

            <div className={styles.badges}>
              <span className={styles.badge}>Kotlin</span>
              <span className={styles.badge}>Jetpack Compose</span>
              <span className={styles.badge}>MVVM + Clean Arch</span>
              <span className={styles.badge}>En desarrollo activo</span>
            </div>

            <div className={styles.heroButtons}>
              <a
                href="https://app.makaows.web"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
                aria-label="Ver demo web de MAKA OWS"
              >
                Ver demo web
              </a>
              <Link to="/projects/maka-ows" className={styles.btnSecondary}>
                Ver proyecto completo
              </Link>
              <Link to="/" className={styles.btnGhost}>
                ← Volver al portafolio
              </Link>
            </div>
          </div>
        </section>

        {/* -- SECTION 2: REBOOT -- */}
        <section className={styles.container}>
          <FadeInView>
            <h2 className={styles.sectionTitle}>Sprint 3: De Expo a Kotlin nativo</h2>
            <div className={styles.gridTwo}>
              <div className={`${styles.rebootCard} ${styles.old}`}>
                <h3>
                  <i className={`fas fa-times-circle ${styles.iconWarning}`} aria-hidden="true"></i>
                  Expo / React Native (Sprints 1–2)
                </h3>
                <ul>
                  <li><i className={`fas fa-times ${styles.iconWarning} ${styles.iconList}`} aria-hidden="true"></i> Limitaciones de acceso a APIs nativas de Android</li>
                  <li><i className={`fas fa-times ${styles.iconWarning} ${styles.iconList}`} aria-hidden="true"></i> Dependencia del runtime de Expo</li>
                  <li><i className={`fas fa-times ${styles.iconWarning} ${styles.iconList}`} aria-hidden="true"></i> Rendimiento subóptimo en gama media</li>
                  <li><i className={`fas fa-times ${styles.iconWarning} ${styles.iconList}`} aria-hidden="true"></i> Abstracción alejada del ecosistema Android</li>
                </ul>
              </div>

              <div className={`${styles.rebootCard} ${styles.new}`}>
                <h3>
                  <i className={`fas fa-check-circle ${styles.iconAccent}`} aria-hidden="true"></i>
                  Kotlin nativo + Jetpack Compose (Sprint 3+)
                </h3>
                <ul>
                  <li><i className={`fas fa-check ${styles.iconAccent} ${styles.iconList}`} aria-hidden="true"></i> Acceso completo a APIs nativas</li>
                  <li><i className={`fas fa-check ${styles.iconAccent} ${styles.iconList}`} aria-hidden="true"></i> Jetpack Compose + Material Design 3</li>
                  <li><i className={`fas fa-check ${styles.iconAccent} ${styles.iconList}`} aria-hidden="true"></i> EncryptedSharedPreferences (AES256-GCM)</li>
                  <li><i className={`fas fa-check ${styles.iconAccent} ${styles.iconList}`} aria-hidden="true"></i> TokenAuthenticator con renovación automática en 401</li>
                  <li><i className={`fas fa-check ${styles.iconAccent} ${styles.iconList}`} aria-hidden="true"></i> MVVM + StateFlow + corutinas</li>
                  <li><i className={`fas fa-check ${styles.iconAccent} ${styles.iconList}`} aria-hidden="true"></i> BuildConfig para entornos de depuración y producción</li>
                </ul>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* -- SECTION 3: STACK -- */}
        <section className={styles.container}>
          <FadeInView>
            <h2 className={styles.sectionTitle}>Stack tecnológico</h2>
            <div className={styles.gridThree}>
              <div className={styles.stackCard}>
                <h3><i className="fab fa-android" aria-hidden="true"></i> Núcleo Android</h3>
                <div className={styles.stackBadges}>
                  <span className={styles.badge}>Kotlin</span>
                  <span className={styles.badge}>Jetpack Compose</span>
                  <span className={styles.badge}>Material Design 3</span>
                  <span className={styles.badge}>Navegación Compose</span>
                  <span className={styles.badge}>ViewModel + StateFlow</span>
                  <span className={styles.badge}>Corutinas</span>
                </div>
              </div>

              <div className={styles.stackCard}>
                <h3><i className="fas fa-shield-halved" aria-hidden="true"></i> Red y seguridad</h3>
                <div className={styles.stackBadges}>
                  <span className={styles.badge}>Retrofit 2 + OkHttp</span>
                  <span className={styles.badge}>TokenAuthenticator (renovación automática)</span>
                  <span className={styles.badge}>EncryptedSharedPreferences</span>
                  <span className={styles.badge}>Gson</span>
                  <span className={styles.badge}>BuildConfig por entorno</span>
                </div>
              </div>

              <div className={styles.stackCard}>
                <h3><i className="fas fa-sitemap" aria-hidden="true"></i> Arquitectura</h3>
                <div className={styles.stackBadges}>
                  <span className={styles.badge}>MVVM</span>
                  <span className={styles.badge}>Arquitectura limpia (data/domain/ui)</span>
                  <span className={styles.badge}>Sealed classes para UI state</span>
                  <span className={styles.badge}>Result&lt;T&gt; para errores</span>
                  <span className={styles.badge}>Git Flow + commits convencionales</span>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* -- SECTION 4: TIMELINE -- */}
        <section className={styles.container}>
          <h2 className={styles.sectionTitle}>Timeline de sprints</h2>
          <div className={styles.timeline}>

            <FadeInView delay={0}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMeta}>Sprint 1 · Feb 2025</div>
                <h3>Configuración + autenticación (Expo)</h3>
                <ul>
                  <li>Proyecto Expo + TypeScript inicializado</li>
                  <li>Cliente HTTP con interceptores + SecureStore</li>
                  <li>Store Zustand con persistencia</li>
                  <li>Pantalla de inicio de sesión con validación en tiempo real</li>
                  <li>Probado en iOS y Android</li>
                </ul>
              </div>
            </FadeInView>

            <FadeInView delay={0.1}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMeta}>Sprint 1 Android · Mar 2025</div>
                <h3>Reboot a Kotlin nativo</h3>
                <ul>
                  <li>Nuevo proyecto Android Studio, arquitectura MVVM</li>
                  <li>ApiService Retrofit + SecurePreferences AES256-GCM</li>
                  <li>TokenAuthenticator con refresh automático transparente</li>
                  <li>LoginScreen en Jetpack Compose + Material3</li>
                  <li>Pruebas contra backend local y producción</li>
                </ul>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMeta}>Sprint 4 · Abr 2025</div>
                <h3>Módulo de Eventos</h3>
                <ul>
                  <li>Modelos de dominio: Evento, EventosPaginados, CronogramaItem, InventarioAsignado</li>
                  <li>EventosRepository con Result&lt;T&gt; y mapeo de errores por código HTTP</li>
                  <li>EventosScreen: búsqueda en tiempo real, FilterChips por estatus, paginación con metadatos del backend</li>
                  <li>EventoDetalleScreen: info general, cliente, presupuesto, cronograma, inventario asignado</li>
                  <li>ConfiguraciónScreen: perfil real, cambio de contraseña (validación estricta)</li>
                  <li>Flujos completos de recuperación y restablecimiento de contraseña con bloqueo temporal anti-spam</li>
                </ul>
              </div>
            </FadeInView>

          </div>
        </section>

        {/* -- SECTION 5: DIAGRAM -- */}
        <section className={styles.container}>
          <FadeInView>
            <h2 className={styles.sectionTitle}>Diagrama de autenticación</h2>
            <div className={styles.diagram}>
              <div className={styles.diagramNode}>LoginScreen</div>
              <div className={styles.diagramArrow}></div>

              <div className={styles.diagramNode}>LoginViewModel · StateFlow&lt;LoginState&gt;</div>
              <div className={styles.diagramArrow}></div>

              <div className={styles.diagramNode}>AuthRepository</div>
              <div className={styles.diagramArrow}></div>

              <div className={styles.diagramNode}>POST /auth/login<br />→ AccessToken (15min)<br />+ RefreshToken (7d)</div>
              <div className={styles.diagramArrow}></div>

              <div className={styles.diagramNode}>EncryptedSharedPreferences<br />(AES256-GCM)</div>
              <div className={styles.diagramArrow}></div>

              <div className={styles.diagramNode}>OkHttp Interceptor<br />→ Authorization: Bearer &lt;token&gt;</div>
              <div className={styles.diagramArrow}>(respuesta 401)</div>

              <div className={styles.diagramNode}>TokenAuthenticator<br />→ POST /auth/refresh<br />→ nuevo AccessToken</div>
            </div>
          </FadeInView>
        </section>

        {/* -- SECTION 6: METRICS -- */}
        <section className={styles.container}>
          <FadeInView>
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>
                  <CountUp from={0} to={4} separator="," direction="up" duration={1} className="count-up-text" />
                </div>
                <div className={styles.metricLabel}>Sprints completados</div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>
                  <CountUp from={0} to={5} separator="," direction="up" duration={1} className="count-up-text" />
                </div>
                <div className={styles.metricLabel}>Microservicios consumidos</div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>0</div>
                <div className={styles.metricLabel}>Datos mock en producción</div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>
                  <CountUp from={0} to={2} separator="," direction="up" duration={1} className="count-up-text" />
                </div>
                <div className={styles.metricLabel}>Entornos (local + producción)</div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* -- SECTION 7: CTA -- */}
        <section className={styles.ctaSection}>
          <FadeInView>
            <h2>¿Quieres ver la arquitectura completa del sistema?</h2>
            <div className={styles.ctaButtons}>
              <Link to="/projects/maka-ows" className={styles.btnPrimary}>
                Ver MAKA OWS Web
              </Link>
              <Link to="/#contacto" className={styles.btnSecondary}>
                Hablemos
              </Link>
            </div>
          </FadeInView>
        </section>
      </main>
      <Footer />
    </>
  )
}
