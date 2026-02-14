import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PlatformPage from './pages/PlatformPage'
import SciencePage from './pages/SciencePage'
import ParentsPage from './pages/ParentsPage'
import ClinicsPage from './pages/ClinicsPage'
import TeamPage from './pages/TeamPage'
import ConditionsPage from './pages/ConditionsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="platform" element={<PlatformPage />} />
          <Route path="science" element={<SciencePage />} />
          <Route path="parents" element={<ParentsPage />} />
          <Route path="clinics" element={<ClinicsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="conditions" element={<ConditionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
