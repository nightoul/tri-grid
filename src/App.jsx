import './App.css'
import logoIcon from './assets/logo-icon.png'

const divisions = [
  {
    id: 'elektrotechnika',
    label: 'Elektrotechnika',
    tagline: 'Proud, rozvody, revize',
    desc: 'Elektroinstalace, revize a návrh silnoproudých i slaboproudých rozvodů pro byty, rodinné domy i komerční objekty.',
    points: [
      'Elektroinstalace novostaveb a rekonstrukcí',
      'Revize a odborné prohlídky',
      'Návrh a realizace slaboproudých systémů',
    ],
    accent: 'blue',
    type: 'bolt',
  },
  {
    id: 'strojirenstvi',
    label: 'Strojírenství',
    tagline: 'Konstrukce, výroba, montáž',
    desc: 'Konstrukce, výroba a montáž strojních a technologických celků na míru, včetně servisu.',
    points: [
      'Strojírenská konstrukce a výroba',
      'Montáž a servis technologických celků',
      'Zámečnické a svářečské práce',
    ],
    accent: 'steel',
    type: 'gear',
  },
  {
    id: 'stavebnictvi',
    label: 'Stavebnictví',
    tagline: 'Od základů po dokončení',
    desc: 'Realizace staveb od hrubé stavby po dokončovací práce, s důrazem na kvalitu a dodržení termínů.',
    points: [
      'Novostavby a rekonstrukce',
      'Zednické a dokončovací práce',
      'Stavební dozor a příprava projektů',
    ],
    accent: 'brick',
    type: 'brick',
  },
]

const team = [
  { name: 'Zakladatel 1', role: 'Elektrotechnika', initials: 'Z1' },
  { name: 'Zakladatel 2', role: 'Strojírenství', initials: 'Z2' },
  { name: 'Zakladatel 3', role: 'Stavebnictví', initials: 'Z3' },
]

function HexIcon({ id, accent, type }) {
  const clipId = `hexClip-${id}`
  const patternId = `brickPattern-${id}`
  const hexPoints = '25,3 75,3 100,50 75,97 25,97 0,50'

  return (
    <svg viewBox="0 0 100 100" className={`hex-icon hex-icon--${accent}`} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <polygon points={hexPoints} />
        </clipPath>
        {type === 'brick' && (
          <pattern id={patternId} width="34" height="18" patternUnits="userSpaceOnUse">
            <rect x="1" y="1" width="15" height="7" className="brick-block" />
            <rect x="18" y="1" width="15" height="7" className="brick-block" />
            <rect x="10" y="10" width="15" height="7" className="brick-block" />
            <rect x="-7" y="10" width="15" height="7" className="brick-block" />
            <rect x="27" y="10" width="15" height="7" className="brick-block" />
          </pattern>
        )}
      </defs>

      <polygon points={hexPoints} className="hex-outline" />

      <g clipPath={`url(#${clipId})`}>
        {type === 'bolt' && (
          <polygon points="58,10 36,54 50,54 42,90 70,42 55,42 64,10" className="hex-glyph" />
        )}
        {type === 'gear' && (
          <g>
            <circle cx="50" cy="50" r="19" className="hex-glyph-ring" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <rect
                key={deg}
                x="46"
                y="12"
                width="8"
                height="13"
                className="hex-glyph"
                transform={`rotate(${deg} 50 50)`}
              />
            ))}
          </g>
        )}
        {type === 'brick' && (
          <rect x="0" y="0" width="100" height="100" fill={`url(#${patternId})`} />
        )}
      </g>
    </svg>
  )
}

function App() {
  return (
    <>
      <header className="site-header" id="top">
        <div className="container site-header__inner">
          <a href="#top" className="logo-mark">
            <img src={logoIcon} alt="Tri-Grid s.r.o." className="logo-mark__icon" />
            <span>Tri-Grid</span>
          </a>
          <nav className="nav">
            <a href="#divize">Divize</a>
            <a href="#o-nas">O nás</a>
            <a href="#tym">Tým</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero__inner">
            <p className="eyebrow">Elektrotechnika · Strojírenství · Stavebnictví</p>
            <h1>Tři obory. Jeden partner.</h1>
            <p className="hero__lede">
              Tri-Grid s.r.o. spojuje elektrotechniku, strojírenství a stavebnictví
              pod jednu střechu — od návrhu po realizaci.
            </p>

            <div className="division-grid" id="divize">
              {divisions.map((d) => (
                <a href={`#${d.id}`} className={`division-card division-card--${d.accent}`} key={d.id}>
                  <HexIcon id={`card-${d.id}`} accent={d.accent} type={d.type} />
                  <h3>{d.label}</h3>
                  <p>{d.tagline}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="o-nas">
          <div className="container about__inner">
            <p className="eyebrow">O nás</p>
            <h2>Nová firma, zkušený základ</h2>
            <p>
              Tri-Grid zakládají tři kolegové, kteří se rozhodli spojit své obory pod
              jednu značku. Místo shánění tří různých dodavatelů na elektřinu, stroje
              a stavbu dostane klient jeden kontakt a koordinovaný tým.
            </p>
            <ul className="about__points">
              <li>Jeden kontakt pro tři obory</li>
              <li>Koordinace mezi divizemi bez ztráty informací</li>
              <li>Přímý kontakt se zakladateli na každé zakázce</li>
            </ul>
          </div>
        </section>

        <section className="divisions">
          {divisions.map((d, i) => (
            <div
              className={`division-detail division-detail--${d.accent} ${i % 2 === 1 ? 'is-reversed' : ''}`}
              id={d.id}
              key={d.id}
            >
              <div className="container division-detail__inner">
                <div className="division-detail__visual">
                  <HexIcon id={`detail-${d.id}`} accent={d.accent} type={d.type} />
                </div>
                <div className="division-detail__text">
                  <p className="eyebrow">{d.label}</p>
                  <h2>{d.tagline}</h2>
                  <p>{d.desc}</p>
                  <ul>
                    {d.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="team" id="tym">
          <div className="container">
            <p className="eyebrow">Tým</p>
            <h2>Tři zakladatelé, tři obory</h2>
            <div className="team-grid">
              {team.map((t) => (
                <div className="team-card" key={t.name}>
                  <div className="team-card__avatar">{t.initials}</div>
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="kontakt">
          <div className="container contact__inner">
            <p className="eyebrow">Kontakt</p>
            <h2>Pojďme probrat váš projekt</h2>
            <div className="contact__details">
              <a href="mailto:info@tri-grid.cz">info@tri-grid.cz</a>
              <a href="tel:+420000000000">+420 000 000 000</a>
              <span>Česká republika</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span>© {new Date().getFullYear()} Tri-Grid s.r.o.</span>
          <span className="site-footer__divisions">
            Elektrotechnika · Strojírenství · Stavebnictví
          </span>
        </div>
      </footer>
    </>
  )
}

export default App
