import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoIcon from '../assets/tri-grid-logo.svg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Zavřít menu při každé navigaci (klik na odkaz, tlačítko zpět v prohlížeči...)
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className={`site-header ${menuOpen ? 'is-menu-open' : ''}`}>
      <div className="site-header__strip" aria-hidden="true">
        <span className="site-header__strip-seg site-header__strip-seg--blue" />
        <span className="site-header__strip-seg site-header__strip-seg--steel" />
        <span className="site-header__strip-seg site-header__strip-seg--brick" />
      </div>
      <div className="container site-header__inner">
        <Link to="/" className="logo-mark">
          <img src={logoIcon} alt="Tri-Grid s.r.o." className="logo-mark__icon" />
          <span>Tri-Grid</span>
        </Link>

        <nav className="nav">
          <Link to="/#divize">Divize</Link>
          <Link to="/o-nas">O nás</Link>
          <Link to="/o-nas#tym">Tým</Link>
          <Link to="/#kontakt">Kontakt</Link>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__bar" />
          <span className="menu-toggle__bar" />
          <span className="menu-toggle__bar" />
        </button>
      </div>

      <nav className="mobile-nav" aria-hidden={!menuOpen}>
        <Link to="/#divize">Divize</Link>
        <Link to="/o-nas">O nás</Link>
        <Link to="/o-nas#tym">Tým</Link>
        <Link to="/#kontakt">Kontakt</Link>
      </nav>
    </header>
  )
}

export default Header
