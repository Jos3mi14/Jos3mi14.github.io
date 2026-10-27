# Portafolio — José Emilio Sánchez Miñón

Portafolio profesional de José Emilio Sánchez Miñón, desarrollador de
aplicaciones móviles. Está desplegado en GitHub Pages:
**<https://jos3mi14.github.io/>**

- **Qué es:** una SPA con pre-renderizado estático. El contenido real viaja en
  el HTML inicial (SEO y funcionamiento sin JavaScript) y luego React hidrata
  la página.
- **Audiencia:** recrutadores de desarrollo móvil y personas que buscan
  colaboración freelance en producto.
- **Objetivo de la página:** en cinco segundos debe quedar claro quién es, qué
  construye y cómo contactarle.

## Stack

| Herramienta              | Versión        | Para qué                                |
| ------------------------ | -------------- | --------------------------------------- |
| React                    | 19             | interfaz                                |
| TypeScript               | 5.9 (`strict`) | tipado estricto, sin `any`              |
| Vite                     | 7              | desarrollo y build                      |
| Tailwind CSS             | 4              | reset, utilidades puntuales y preflight |
| React Router             | 7              | enrutado y redirección a la portada     |
| Vitest + Testing Library | 3 / 16         | tests de componentes                    |

**No hay dependencias de animación ni de iconos:** las animaciones son CSS
nativo y los iconos son SVG en línea (`src/components/shared/Icon.tsx`). Las
fuentes están autoalojadas en `public/fonts` (subconjunto latin, 105 KB).

## Scripts

```bash
npm install        # dependencias
npm run dev        # servidor de desarrollo
npm run build      # tsc + build cliente + build SSR + pre-render de la portada
npm run preview    # sirve dist/ como lo hará GitHub Pages
npm run lint       # ESLint (typescript-eslint con reglas type-aware)
npm run test       # Vitest en modo watch
npm run test:run   # Vitest en una sola pasada
npm run format     # Prettier
```

## Estructura

```
src/
├── components/
│   ├── sections/       # HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection
│   ├── shared/         # Icon, Reveal, RoleRotator, ScrollToTopBtn
│   ├── Header.tsx      # navegación (normal y mínima)
│   └── Footer.tsx
├── data/
│   ├── portfolioData.ts  # contenido del portafolio (única fuente)
│   └── routeMeta.ts      # title, description y JSON-LD por ruta
├── hooks/              # useDocumentMeta, usePrefersReducedMotion, useSectionObserver, useScrolled
├── pages/              # Home
├── styles/
│   ├── tokens.css      # color, tipografía, espaciado, radios, sombras, movimiento
│   ├── fonts.css       # @font-face de las fuentes autoalojadas
│   ├── base.css        # reset, tipografía, botones, foco
│   ├── layout.css      # navbar, footer, secciones, skeleton
│   ├── home.css        # hero y secciones de la portada
│   └── motion.css      # revelados y secuencia de carga
├── entry-server.tsx    # render para el pre-renderizado
├── App.tsx             # rutas
└── main.tsx            # hidratación o montaje
scripts/
└── prerender.mjs      # genera dist/**/index.html por ruta
```

## Rutas

| Ruta | Contenido                                               |
| ---- | ------------------------------------------------------- |
| `/`  | portafolio: hero, sobre mí, stack, proyectos y contacto |

Cualquier ruta desconocida redirige a `/`. Los proyectos se documentan dentro
de la portada, sin páginas individuales.

## Sistema de diseño

Todos los valores visuales salen de `src/styles/tokens.css`:

- **Color:** grafito azulado (`#0d1117`) como base, mostaza (`#e0a63e`) para lo
  relacionado con producto y negocio, azul plano (`#6fa8f0`) reservado para lo
  técnico (stack, código). Los tres niveles de texto cumplen WCAG AA.
- **Tipografía:** _Instrument Serif_ para display, _Archivo_ para texto e
  _IBM Plex Mono_ para etiquetas y cifras.
- **Movimiento:** una única secuencia de carga en el hero y revelados al hacer
  scroll, ambos desactivados con `prefers-reduced-motion`.

## Accesibilidad

- HTML semántico, jerarquía de encabezados y enlace de salto al contenido.
- Foco visible en todos los elementos interactivos.
- El contenido nunca depende de JavaScript para ser visible: los revelados solo
  se ocultan cuando la clase `.js` está presente.

## Despliegue

`main` dispara `.github/workflows/deploy.yml`: valida (lint, tipos, tests),
compila y publica en GitHub Pages. `.github/workflows/ci.yml` ejecuta las
mismas validaciones en cada pull request.

El repositorio es un _user site_, por eso `base` es `/`. El `404.html` de
`public/` redirige las rutas desconocidas a la portada para que React Router
resuelva la ruta original.

## Licencia y créditos

Código propio. Las tipografías (Instrument Serif, Archivo, IBM Plex Mono) se
sirven desde el repositorio bajo sus respectivas licencias open source.
