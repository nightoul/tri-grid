import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import languages from '../data/languages.js'

const langCodes = languages.map((l) => l.code)
const langPathRegex = new RegExp(`^/(${langCodes.join('|')})`)

function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  const location = useLocation()
  const { lang } = useParams()

  const current = languages.find((l) => l.code === lang) || languages[0]
  const restOfPath = location.pathname.replace(langPathRegex, '')

  // Zavřít při navigaci (výběr jazyka, tlačítko zpět...)
  useEffect(() => {
    setOpen(false)
  }, [location])

  // Zavřít při kliknutí mimo dropdown
  useEffect(() => {
    function onClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div className="dropdown" ref={wrapperRef}>
      <button
        type="button"
        className="dropdown__toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {current.label}
        <svg className="dropdown__chevron" viewBox="0 0 12 8" aria-hidden="true">
          <path
            d="M1 1l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <ul className={`dropdown__menu ${open ? 'is-open' : ''}`} role="listbox">
        {languages.map((l) => (
          <li key={l.code} role="option" aria-selected={l.code === lang}>
            <Link
              to={`/${l.code}${restOfPath}${location.hash}`}
              className={l.code === lang ? 'is-active' : ''}
            >
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageSwitcher
