import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_META, SITE_URL } from "../data/routeMeta";

function setMeta(selector: string, attribute: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.setAttribute(attribute, value);
}

/**
 * Mantiene sincronizados title, description, canonical y Open Graph
 * con la ruta actual (el HTML pre-renderizado ya trae los valores
 * iniciales; esto cubre la navegación dentro de la SPA).
 */
export function useDocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META.find((route) => route.path === pathname);
    if (!meta) return;

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", `${SITE_URL}${meta.path}`);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);

    const canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (canonical) canonical.setAttribute("href", `${SITE_URL}${meta.path}`);
  }, [pathname]);
}
