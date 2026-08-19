import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoIcon from '../assets/tri-grid-logo.svg'
import languages from '../data/languages.js'
import divisions from '../data/divisions.js'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import DivisionsDropdown from './DivisionsDropdown.jsx'

const langCodes = languages.map((l) => l.code)
const langPathRegex = new RegExp(`^/(${langCodes.join('|')})`)

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang } = useParams()
  const { t } = useTranslation()

  // Zavřít menu při každé navigaci (klik na odkaz, tlačítko zpět v prohlížeči...)
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Poskládá odkaz s aktuálním jazykem vpředu, např. langPath('/o-nas') -> '/cs/o-nas'
  const langPath = (path = '') => `/${lang}${path}`
  const restOfPath = location.pathname.replace(langPathRegex, '')

  return (
    <header className={`site-header ${menuOpen ? 'is-menu-open' : ''}`}>
      <div className="site-header__strip" aria-hidden="true">
        <span className="site-header__strip-seg site-header__strip-seg--blue" />
        <span className="site-header__strip-seg site-header__strip-seg--steel" />
        <span className="site-header__strip-seg site-header__strip-seg--brick" />
      </div>
      <div className="container site-header__inner">
        <Link to={langPath()} className="logo-mark">
          <img src={logoIcon} alt="Tri-Grid s.r.o." className="logo-mark__icon" />
          <span>Tri-Grid</span>
        </Link>

        <nav className="nav">
          <DivisionsDropdown />
          <Link to={langPath('/o-nas')}>{t('nav.about')}</Link>
          <Link to={langPath('#kontakt')}>{t('nav.contact')}</Link>
          <LanguageSwitcher />
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__bar" />
          <span className="menu-toggle__bar" />
          <span className="menu-toggle__bar" />
        </button>
      </div>

      <nav className="mobile-nav" aria-hidden={!menuOpen}>
        {divisions.map((d) => (
          <Link key={d.id} to={langPath(`/divize/${d.id}`)}>
            {t(`divisionsData.${d.id}.label`)}
          </Link>
        ))}
        <Link to={langPath('/o-nas')}>{t('nav.about')}</Link>
        <Link to={langPath('#kontakt')}>{t('nav.contact')}</Link>
        <div className="mobile-nav__langs">
          {languages.map((l) => (
            <Link
              key={l.code}
              to={`/${l.code}${restOfPath}${location.hash}`}
              className={l.code === lang ? 'is-active' : ''}
            >
              <span aria-hidden="true">{l.flag}</span>{' '}
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
