/// <reference types="vitest" />
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * En `vite preview` las rutas con pre-renderizado se sirven desde su
 * propio index.html (igual que en GitHub Pages) en lugar de caer en
 * el fallback de la SPA.
 */
function prerenderRoutes(): Plugin {
  return {
    name: "prerender-routes",
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = (req.url ?? "").split("?")[0];

        if (
          pathname === "/" ||
          pathname.endsWith("/") ||
          pathname.endsWith(".html")
        ) {
          next();
          return;
        }

        const candidate = path.resolve(
          process.cwd(),
          "dist",
          pathname.replace(/^\//, ""),
          "index.html",
        );

        if (!existsSync(candidate)) {
          next();
          return;
        }

        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(readFileSync(candidate));
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss(), prerenderRoutes()],
  base: "/",
  build: {
    // En la compilación SSR las dependencias son externas: no se puede
    // aplicar manualChunks sobre ellas.
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              react: ["react", "react-dom", "react-router-dom"],
            },
          },
        },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    typecheck: {
      tsconfig: "./tsconfig.test.json",
    },
  },
}));
