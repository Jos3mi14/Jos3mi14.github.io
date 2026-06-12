import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SkeletonLoader from "./components/ui/SkeletonLoader";

const Home = lazy(() => import("./pages/Home"));
const MakaOwsPage = lazy(() => import("./pages/MakaOwsPage"));
const MakaMobilePage = lazy(() => import("./pages/MakaMobilePage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SkeletonLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/maka-ows"
            element={<Navigate to="/projects/maka-ows" replace />}
          />
          <Route path="/projects/maka-mobile" element={<MakaMobilePage />} />
          <Route path="/projects/maka-ows" element={<MakaOwsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
