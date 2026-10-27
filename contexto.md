# Contexto del proyecto: Jos3mi14/Jos3mi14.github.io

## Qué es

Portafolio profesional de José Emilio Sánchez Miñón, desarrollador de
aplicaciones móviles. Se publica en **https://jos3mi14.github.io/** (GitHub
Pages, rama `main`).

- **Público:** recrutadores de desarrollo móvil y clientes potenciales.
- **Trabajo de la página:** que en cinco segundos se entienda quién es, qué
  construye y cómo contactarle.

## Estado actual del repositorio

- **Stack:** React 19 + TypeScript 5.9 (strict) + Vite 7 + Tailwind CSS 4 +
  React Router 7.
- **Sin dependencias de animación ni de iconos:** el movimiento es CSS nativo
  y los iconos son SVG en línea. Las fuentes están autoalojadas.
- **Pre-renderizado:** `npm run build` genera el HTML estático de la portada
  (`/`) con `react-dom/server`; el cliente hidrata ese HTML.
- **Rutas:** solo `/`. Cualquier ruta desconocida redirige a la portada.
- **Contenido:** `src/data/portfolioData.ts` es la única fuente de los datos
  del portafolio; `src/data/routeMeta.ts` contiene los metadatos del sitio.
- **Proyectos:** las fichas viven en la portada (`ProjectsSection`); no hay
  páginas individuales por proyecto.

## Objetivo de la interfaz

El sitio se guía por un sistema editorial ("Spec Sheet") definido en
`src/styles/tokens.css`: fondo grafito azulado, acento mostaza para producto y
negocio, azul plano reservado a lo técnico, Instrument Serif para display y
monoespaciada para las etiquetas y cifras. Las secciones se numeran
(`01 — SOBRE MÍ`) porque el recorrido sí es una secuencia.

## Contenido factual (no modificar sin confirmación)

Estos datos vienen del autor y no se cambian por iniciativa propia:

- 1 año construyendo producto; React Native, Expo, TypeScript, Kotlin.
- MAKA OWS 2.0: 5 microservicios NestJS, Next.js 14, PostgreSQL, Prisma,
  Docker, AWS EC2; 24 semanas; equipo de 5.
- MAKA OWS App Android: Kotlin, Jetpack Compose, MVVM, arquitectura limpia.
- Nyma: asistente para adultos mayores con IA conversacional, IoT y Gemini
  API, Assembly AI, SQLite.
- Contacto: jsanchezminon@gmail.com, github.com/Jos3mi14,
  linkedin.com/in/jesanchezminon/.

## Reglas de despliegue

- Es un _user site_ (`Jos3mi14.github.io`), por lo que `base` es `/`.
- `public/404.html` guarda la ruta desconocida en `sessionStorage` y vuelve a
  la raíz para que React Router la resuelva.
- `main` dispara el despliegue; cada pull request ejecuta las validaciones.

## Notas importantes

- GitHub Pages solo sirve archivos estáticos: Vite compila React/TS y el
  pre-renderizado a `/dist`, que es 100 % estático.
- Si se añade una ruta hay que registrar sus metadatos en `routeMeta.ts` para
  que el pre-renderizado la incluya (title, description, canonical, OG).
