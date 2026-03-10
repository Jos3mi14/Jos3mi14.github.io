import DecryptedText from './reactbits/DecryptedText'
import RotatingText from './reactbits/RotatingText'
import ShinyText from './reactbits/ShinyText'
import StarBorder from './reactbits/StarBorder'
import FadeInView from './shared/FadeInView'

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="eyebrow">
          <span className="status-dot"></span>
          <ShinyText
            text="Desarrollador Móvil · Modelos de Negocio"
            speed={3}
            color="var(--accent)"
            shineColor="#80ffff"
          />
        </div>
        <h1>
          Hola, soy{' '}
          <DecryptedText
            text="José Emilio"
            animateOn="view"
            sequential={true}
            speed={60}
            revealDirection="start"
            className="highlight-text"
          />
        </h1>
        <p className="hero-typewriter">
          Soy{' '}
          <RotatingText
            texts={[
              'Dev Móvil', 'Curioso', 'React Native Dev', 'Detallista',
              'Product Thinker', 'Apasionado', 'TypeScript Dev', 'Estratégico',
              'Builder de Apps', 'Versátil',
            ]}
            mainClassName="typewriter-word"
            staggerFrom="last"
            staggerDuration={0.03}
            splitBy="characters"
            rotationInterval={2500}
          />
        </p>
        <FadeInView direction="up" distance={20} delay={0.4}>
          <p className="lede">
            Creo aplicaciones móviles con impacto real, combinando desarrollo técnico sólido
            con identificación de oportunidades de negocio y estrategia de producto.
          </p>
        </FadeInView>
        <FadeInView direction="up" distance={20} delay={0.6}>
          <div className="hero-actions">
            <StarBorder
              as="a"
              color="var(--accent)"
              speed="4s"
              href="#projects"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, 'projects')}
            >
              <i className="fas fa-code"></i> Ver proyectos
            </StarBorder>
            <a href="#contact" className="btn btn-ghost" onClick={(e) => handleScroll(e, 'contact')}>
              <i className="fas fa-envelope"></i> Hablemos
            </a>
            <a
              href="https://github.com/Jos3mi14"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link"
            >
              GitHub <i className="fas fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </FadeInView>
      </div>
      <FadeInView direction="up" distance={10} delay={1.2}>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </FadeInView>
    </section>
  )
}
