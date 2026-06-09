import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const MakaOwsPage = lazy(() => import('./pages/MakaOwsPage'))
const MakaMobilePage = lazy(() => import('./pages/MakaMobilePage'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="route-loading">Cargando contenido...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maka-ows" element={<Navigate to="/projects/maka-ows" replace />} />
          <Route path="/projects/maka-mobile" element={<MakaMobilePage />} />
          <Route path="/projects/maka-ows" element={<MakaOwsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
