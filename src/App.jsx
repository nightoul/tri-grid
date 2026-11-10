import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Homepage from './pages/Homepage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import DivisionPage from './pages/DivisionPage.jsx'
import languages from './data/languages.js'
import divisions from './data/divisions.js'

const defaultLang = languages[0].code

function App() {
  return (
    <Routes>
      {/* Kořen webu přesměruje na výchozí jazyk (první v seznamu languages.js) */}
      <Route path="/" element={<Navigate to={`/${defaultLang}`} replace />} />

      <Route path=":lang" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="o-nas" element={<AboutPage />} />
        {divisions.map((d) => (
          <Route key={d.id} path={`divize/${d.id}`} element={<DivisionPage division={d} />} />
        ))}
        {/* Další stránky se přidávají sem, např.:
        <Route path="kontakt" element={<ContactPage />} />
        */}
      </Route>

      {/* Neznámá cesta -> zpět na výchozí jazyk */}
      <Route path="*" element={<Navigate to={`/${defaultLang}`} replace />} />
    </Routes>
  )
}

export default App
