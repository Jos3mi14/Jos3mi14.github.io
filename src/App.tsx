import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SkeletonLoader from "./components/ui/SkeletonLoader";
import Home from "./pages/Home";
import MakaOwsPage from "./pages/MakaOwsPage";
import MakaMobilePage from "./pages/MakaMobilePage";
import { useDocumentMeta } from "./hooks/useDocumentMeta";

export function AppRoutes() {
  useDocumentMeta();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/maka-ows"
        element={<Navigate to="/projects/maka-ows" replace />}
      />
      <Route path="/projects/maka-mobile" element={<MakaMobilePage />} />
      <Route path="/projects/maka-ows" element={<MakaOwsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

/**
 * Envoltura compartida por el cliente y el pre-renderizado: el arbol
 * debe ser identico en ambos para que la hidratacion no falle.
 */
export function AppShell() {
  return (
    <Suspense fallback={<SkeletonLoader />}>
      <AppRoutes />
    </Suspense>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
