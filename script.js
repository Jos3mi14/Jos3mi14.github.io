// ========================================
// CONFIGURACIÓN INICIAL Y VARIABLES
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Inicializar todos los componentes
    initMobileMenu();
    initScrollToTop();
    initActiveNavLinks();
    initAnimationsOnScroll();
    initSmoothScroll();
    initProjectCardHover();
    initTypewriter();
}

// ========================================
// MENÚ MÓVIL RESPONSIVE
// ========================================
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    if (!mobileMenu || !navLinks) return;

    // Toggle menú al hacer clic en el botón
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Animar las barras del menú hamburguesa
        const bars = mobileMenu.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navLinks.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Cerrar menú al hacer clic en un enlace
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            
            // Restaurar barras del menú
            const bars = mobileMenu.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            
            const bars = mobileMenu.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        }
    });
}

// ========================================
// BOTÓN SCROLL TO TOP
// ========================================
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    if (!scrollBtn) return;

    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // Scroll al hacer clic
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// NAVEGACIÓN ACTIVA AL HACER SCROLL
// ========================================
function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Agregar efecto al navbar cuando se hace scroll
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        if (scrollY > 100) {
            navbar.style.background = 'rgba(5, 10, 15, 0.97)';
            navbar.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(0, 229, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(5, 10, 15, 0.75)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ========================================
// SCROLL SUAVE PARA ENLACES INTERNOS
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// ANIMACIONES AL HACER SCROLL (fade-in / slide-up + AOS)
// ========================================
function initAnimationsOnScroll() {
    // Detectar preferencia de movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        document.querySelectorAll('[data-aos], [data-anim]').forEach(el => {
            el.classList.add('aos-animate', 'is-visible');
        });
        return;
    }

    const observerOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                // Soporta tanto data-aos-delay como data-anim-delay
                const delay = parseInt(el.dataset.aosDelay || el.dataset.animDelay || 0, 10);
                setTimeout(() => {
                    el.classList.add('aos-animate'); // para [data-aos]
                    el.classList.add('is-visible');   // para [data-anim]
                }, delay);
                observer.unobserve(el);
            }
        });
    }, observerOptions);

    // Observar elementos [data-aos] y [data-anim]
    document.querySelectorAll('[data-aos], [data-anim]').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// EFECTO DE HOVER EN PROJECT CARDS - Nuevo
// ========================================
function initProjectCardHover() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });
}

// ========================================
// LOG DE INICIO (CONSOLE)
// ========================================
console.log('%c¡Hola! 👋', 'color: #a78bfa; font-size: 22px; font-weight: 700;');
console.log('%cDesarrollando apps móviles con impacto real.', 'color: #c4b5fd; font-size: 14px;');
console.log('%cPortafolio de José Emilio Sánchez Miñón', 'color: #7a8aaa; font-size: 12px;');

// ========================================
// TYPEWRITER HERO
// ========================================
function initTypewriter() {
    const el = document.getElementById('typewriter-text');
    if (!el) return;

    const words = ['Dev Móvil', 'Curioso', 'React Native Dev', 'Detallista', 'Product Thinker', 'Apasionado', 'TypeScript Dev', 'Estratégico', 'Builder de Apps', 'Versátil'];
    let wordIndex = 0, charIndex = 0, deleting = false;

    function tick() {
        const word = words[wordIndex];
        if (!deleting) {
            charIndex++;
            el.textContent = word.slice(0, charIndex);
            if (charIndex === word.length) {
                deleting = true;
                setTimeout(tick, 1800);
                return;
            }
            setTimeout(tick, 105);
        } else {
            charIndex--;
            el.textContent = word.slice(0, charIndex);
            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(tick, 380);
                return;
            }
            setTimeout(tick, 55);
        }
    }

    setTimeout(tick, 800);
}