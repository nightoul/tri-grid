import './App.css'
import logoIcon from './assets/logo-icon.png'

const divisions = [
  {
    id: 'elektrotechnika',
    node: '01',
    label: 'Elektrotechnika',
    tagline: 'Proud, rozvody, revize',
    desc: 'Elektroinstalace, revize a návrh silnoproudých i slaboproudých rozvodů pro byty, rodinné domy i komerční objekty.',
    services: [
      'Elektroinstalace novostaveb a rekonstrukcí',
      'Revize a odborné prohlídky',
      'Návrh a realizace slaboproudých systémů',
    ],
    accent: 'blue',
    type: 'bolt',
  },
  {
    id: 'strojirenstvi',
    node: '02',
    label: 'Strojírenství',
    tagline: 'Konstrukce, výroba, montáž',
    desc: 'Konstrukce, výroba a montáž strojních a technologických celků na míru, včetně servisu.',
    services: [
      'Strojírenská konstrukce a výroba',
      'Montáž a servis technologických celků',
      'Zámečnické a svářečské práce',
    ],
    accent: 'steel',
    type: 'gear',
  },
  {
    id: 'stavebnictvi',
    node: '03',
    label: 'Stavebnictví',
    tagline: 'Od základů po dokončení',
    desc: 'Realizace staveb od hrubé stavby po dokončovací práce, s důrazem na kvalitu a dodržení termínů.',
    services: [
      'Novostavby a rekonstrukce',
      'Zednické a dokončovací práce',
      'Stavební dozor a příprava projektů',
    ],
    accent: 'brick',
    type: 'brick',
  },
]

const aboutRows = [
  ['FIRMA', 'Tri-Grid s.r.o.'],
  ['OBORY', 'Elektro / Stroj / Stavba'],
  ['ZAKLADATELÉ', '3'],
  ['MODEL', 'Jeden kontakt, koordinovaný tým'],
]

const team = [
  { name: 'Zakladatel 1', role: 'Elektrotechnika', badge: '01' },
  { name: 'Zakladatel 2', role: 'Strojírenství', badge: '02' },
  { name: 'Zakladatel 3', role: 'Stavebnictví', badge: '03' },
]

function NodeGlyph({ id, accent, type }) {
  const clipId = `clip-${id}`
  const patternId = `brick-${id}`
  const hexPoints = '25,3 75,3 100,50 75,97 25,97 0,50'

  return (
    <svg viewBox="0 0 100 100" className={`node-glyph node-glyph--${accent}`} aria-hidden="true">
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
      <polygon points={hexPoints} className="node-glyph__outline" />
      <g clipPath={`url(#${clipId})`}>
        {type === 'bolt' && (
          <polygon points="58,10 36,54 50,54 42,90 70,42 55,42 64,10" className="node-glyph__fill" />
        )}
        {type === 'gear' && (
          <g>
            <circle cx="50" cy="50" r="19" className="node-glyph__ring" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <rect
                key={deg}
                x="46"
                y="12"
                width="8"
                height="13"
                className="node-glyph__fill"
                transform={`rotate(${deg} 50 50)`}
              />
            ))}
          </g>
        )}
        {type === 'brick' && <rect x="0" y="0" width="100" height="100" fill={`url(#${patternId})`} />}
      </g>
    </svg>
  )
}

function NodeMap() {
  return (
    <svg viewBox="0 0 280 220" className="node-map" aria-hidden="true">
      <line x1="140" y1="30" x2="40" y2="185" className="node-map__line node-map__line--blue" />
      <line x1="140" y1="30" x2="240" y2="185" className="node-map__line node-map__line--brick" />
      <line x1="40" y1="185" x2="240" y2="185" className="node-map__line node-map__line--steel node-map__line--animated" />
      <circle cx="140" cy="30" r="7" className="node-map__dot node-map__dot--blue" />
      <circle cx="40" cy="185" r="7" className="node-map__dot node-map__dot--steel" />
      <circle cx="240" cy="185" r="7" className="node-map__dot node-map__dot--brick" />
      <text x="140" y="16" textAnchor="middle" className="node-map__label">N.01 ELEKTRO</text>
      <text x="40" y="207" textAnchor="middle" className="node-map__label">N.02 STROJ</text>
      <text x="240" y="207" textAnchor="middle" className="node-map__label">N.03 STAVBA</text>
    </svg>
  )
}

function App() {
  return (
    <div className="page">
      <nav className="rail">
        <a href="#top" className="rail__logo">
          <img src={logoIcon} alt="Tri-Grid s.r.o." />
        </a>
        <div className="rail__brand">TRI—GRID</div>
        <ul className="rail__nodes">
          <li><a href="#elektrotechnika">N.01</a></li>
          <li><a href="#strojirenstvi">N.02</a></li>
          <li><a href="#stavebnictvi">N.03</a></li>
          <li><a href="#kontakt">N.04</a></li>
        </ul>
      </nav>

      <main className="sheet" id="top">
        <section className="panel hero-panel">
          <p className="tag">VÝKRES Č. 001 — ELEKTRO / STROJ / STAVBA</p>
          <h1>Tři obory.<br />Jeden systém.</h1>
          <p className="hero-panel__lede">
            Tri-Grid s.r.o. propojuje elektrotechniku, strojírenství a stavebnictví
            do jedné sítě — od návrhu po realizaci, s jedním kontaktem pro celý projekt.
          </p>
          <NodeMap />
        </section>

        {divisions.map((d) => (
          <section className="panel node-panel" id={d.id} key={d.id}>
            <div className={`node-panel__marker node-panel__marker--${d.accent}`} />
            <div className="node-panel__head">
              <NodeGlyph id={d.id} accent={d.accent} type={d.type} />
              <div>
                <p className="tag">N.{d.node} — {d.label.toUpperCase()}</p>
                <h2>{d.tagline}</h2>
              </div>
            </div>
            <p className="node-panel__desc">{d.desc}</p>
            <ol className="node-panel__services">
              {d.services.map((s, i) => (
                <li key={s}>
                  <span className="node-panel__index">{String(i + 1).padStart(2, '0')}</span>
                  {s}
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section className="panel spec-panel" id="o-nas">
          <p className="tag">O NÁS</p>
          <h2>Nová firma, zkušený základ</h2>
          <p>
            Tri-Grid zakládají tři kolegové, kteří se rozhodli spojit své obory pod
            jednu značku — místo tří dodavatelů jeden koordinovaný tým.
          </p>
          <dl className="spec-table">
            {aboutRows.map(([k, v]) => (
              <div className="spec-table__row" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="panel team-panel" id="tym">
          <p className="tag">TÝM</p>
          <h2>Tři zakladatelé, tři obory</h2>
          <div className="badge-grid">
            {team.map((t) => (
              <div className="badge" key={t.name}>
                <span className="badge__no">OBSL. Č. {t.badge}</span>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel stamp-panel" id="kontakt">
          <p className="tag">KONTAKT</p>
          <div className="stamp">
            <div className="stamp__row">
              <dt>E-MAIL</dt>
              <dd><a href="mailto:info@tri-grid.cz">info@tri-grid.cz</a></dd>
            </div>
            <div className="stamp__row">
              <dt>TELEFON</dt>
              <dd><a href="tel:+420000000000">+420 000 000 000</a></dd>
            </div>
            <div className="stamp__row">
              <dt>SÍDLO</dt>
              <dd>Česká republika</dd>
            </div>
            <div className="stamp__row">
              <dt>REV.</dt>
              <dd>{new Date().getFullYear()}—01</dd>
            </div>
          </div>
        </section>

        <footer className="foot">
          <span>© {new Date().getFullYear()} Tri-Grid s.r.o.</span>
          <span>ELEKTRO · STROJ · STAVBA</span>
        </footer>
      </main>
    </div>
  )
}

export default App
