import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // Malé zpoždění — po přechodu na jinou stránku musí být sekce
      // nejdřív vykreslená, než k ní můžeme plynule scrollovat.
      const id = location.hash.slice(1)
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
      return () => clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
