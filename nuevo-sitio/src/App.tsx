import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MakaOwsPage from './pages/MakaOwsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maka-ows" element={<MakaOwsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
