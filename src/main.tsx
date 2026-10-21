import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const container = document.getElementById("root");

if (container) {
  const app = (
    <StrictMode>
      <App />
    </StrictMode>
  );

  // Si el HTML fue pre-renderizado (scripts/prerender.mjs) se hidrata;
  // en caso contrario se monta desde cero.
  if (container.childElementCount > 0) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
}
