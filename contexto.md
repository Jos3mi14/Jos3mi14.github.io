# Contexto del proyecto: Jos3mi14/Jos3mi14.github.io

## Estado actual del repositorio
- **Repo:** https://github.com/Jos3mi14/Jos3mi14.github.io
- **Rama principal:** `main` (sin protección)
- **GitHub Pages:** activo, sirviendo desde la rama `main`
- **Stack actual:** Vanilla HTML + CSS + JavaScript (sin frameworks)
- **Archivos:**
  - `index.html` (~15 KB) — Página principal
  - `maka-ows.html` (~47 KB) — Página secundaria
  - `script.js` (~9 KB) — Lógica JS
  - `styles.css` (~23 KB) — Estilos

## Objetivo de migración
Migrar el sitio a **React + TypeScript + Tailwind CSS** usando **Vite** como bundler, manteniendo el hosting en **GitHub Pages** con despliegue automatizado vía **GitHub Actions**.

## Stack objetivo
- **Framework:** React 18+
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4 (con `@tailwindcss/vite`)
- **Bundler:** Vite (`react-ts` template)
- **Routing:** React Router DOM
- **Animaciones:** Framer Motion (recomendado)
- **Deploy:** GitHub Actions → GitHub Pages (source: "GitHub Actions")

## Configuración clave de Vite
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // User site: Jos3mi14.github.io → base debe ser '/'
})
```

## CSS principal
```css
/* src/index.css */
@import "tailwindcss";
```

## Estructura de carpetas objetivo
```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── MakaOws.tsx
├── pages/
│   ├── Home.tsx         ← migración de index.html
│   └── MakaOwsPage.tsx  ← migración de maka-ows.html
├── App.tsx
└── main.tsx
```

## GitHub Actions — Deploy workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

## Comandos de setup local
```bash
git clone https://github.com/Jos3mi14/Jos3mi14.github.io.git
cd Jos3mi14.github.io
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss @tailwindcss/vite
npm install react-router-dom framer-motion
npm install -D @types/react-router-dom
npm run dev
```

## Notas importantes
- GitHub Pages solo sirve archivos **estáticos**; Vite compila React/TS a `/dist` que es 100% estático.
- Configurar en GitHub: **Settings → Pages → Source → GitHub Actions**
- Para rutas del cliente con React Router, puede necesitarse un `404.html` que redirija a `index.html` en GitHub Pages.
- No hay `package.json` ni `node_modules` aún en el repo; el proyecto parte desde cero con Vite.