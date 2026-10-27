import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SkeletonLoader from "./components/ui/SkeletonLoader";
import Home from "./pages/Home";
import { useDocumentMeta } from "./hooks/useDocumentMeta";

export function AppRoutes() {
  useDocumentMeta();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
