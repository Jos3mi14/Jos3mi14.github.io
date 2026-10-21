/* eslint-disable react-refresh/only-export-components -- este módulo solo se usa en el build de SSR */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppShell } from "./App";

export { ROUTE_META, PERSON_SCHEMA, SITE_URL } from "./data/routeMeta";

/**
 * Renderiza la aplicación para una URL concreta. Lo usa el script de
 * pre-renderizado para generar un HTML estático por ruta.
 * El árbol debe ser idéntico al que monta el cliente para que la
 * hidratación no produzca errores.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  );
}
