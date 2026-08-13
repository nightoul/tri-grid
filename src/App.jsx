import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Homepage from './pages/Homepage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ElektrotechnikaPage from './pages/ElektrotechnikaPage.jsx'
import StrojirenstviPage from './pages/StrojirenstviPage.jsx'
import StavebnictviPage from './pages/StavebnictviPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="o-nas" element={<AboutPage />} />
        <Route path="divize/elektrotechnika" element={<ElektrotechnikaPage />} />
        <Route path="divize/strojirenstvi" element={<StrojirenstviPage />} />
        <Route path="divize/stavebnictvi" element={<StavebnictviPage />} />
        {/* Další stránky se přidávají sem, např.:
        <Route path="kontakt" element={<ContactPage />} />
        */}
      </Route>
    </Routes>
  )
}

export default App
