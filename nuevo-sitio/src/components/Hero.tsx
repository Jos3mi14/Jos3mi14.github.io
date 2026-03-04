import { useEffect, useRef } from 'react'

export default function Hero() {
  const typewriterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = typewriterRef.current
    if (!el) return

    const words = [
      'Dev Móvil', 'Curioso', 'React Native Dev', 'Detallista',
      'Product Thinker', 'Apasionado', 'TypeScript Dev', 'Estratégico',
      'Builder de Apps', 'Versátil',
    ]
    let wordIndex = 0, charIndex = 0, deleting = false
    let timer: ReturnType<typeof setTimeout>

    function tick() {
      const word = words[wordIndex]
      if (!deleting) {
        charIndex++
        el!.textContent = word.slice(0, charIndex)
        if (charIndex === word.length) {
          deleting = true
          timer = setTimeout(tick, 1800)
          return
        }
        timer = setTimeout(tick, 105)
      } else {
        charIndex--
        el!.textContent = word.slice(0, charIndex)
        if (charIndex === 0) {
          deleting = false
          wordIndex = (wordIndex + 1) % words.length
          timer = setTimeout(tick, 380)
          return
        }
        timer = setTimeout(tick, 55)
      }
    }

    timer = setTimeout(tick, 800)
    return () => clearTimeout(timer)
  }, [])

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
          Desarrollador Móvil · Modelos de Negocio
        </div>
        <h1>
          Hola, soy <span className="highlight-text">José Emilio</span>
        </h1>
        <p className="hero-typewriter">
          Soy <span ref={typewriterRef} className="typewriter-word"></span>
          <span className="type-cursor">|</span>
        </p>
        <p className="lede">
          Creo aplicaciones móviles con impacto real, combinando desarrollo técnico sólido
          con identificación de oportunidades de negocio y estrategia de producto.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary" onClick={(e) => handleScroll(e, 'projects')}>
            <i className="fas fa-code"></i> Ver proyectos
          </a>
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
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  )
}
