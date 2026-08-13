import { Link } from 'react-router-dom'
import HexIcon from '../components/HexIcon.jsx'
import divisions from '../data/divisions.js'
import logoIcon from '../assets/tri-grid-logo.svg'

function Homepage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="container hero__inner">
          <p className="eyebrow">Tri-Grid s.r.o. · Když se řemesla potkají</p>
          <h1>Tři obory. Jeden partner.</h1>
          <p className="hero__lede">
            Tri-Grid s.r.o. spojuje elektrotechniku, strojírenství a stavebnictví
            pod jednu střechu — od návrhu po realizaci.
          </p>

          <div className="division-grid" id="divize">
            {divisions.map((d) => (
              <Link to={`/divize/${d.id}`} className={`division-card division-card--${d.accent}`} key={d.id}>
                <HexIcon id={`card-${d.id}`} accent={d.accent} type={d.type} />
                <h3>{d.label}</h3>
                <p>{d.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-strip__inner">
          <div className="stat stat--logo">
            <img src={logoIcon} alt="Tri-Grid s.r.o." className="stat__logo" />
          </div>
          <div className="stat">
            <span className="stat__value">3</span>
            <span className="stat__label">zakladatelé s praxí v oboru</span>
          </div>
          <div className="stat">
            <span className="stat__value">1</span>
            <span className="stat__label">kontakt pro celý projekt</span>
          </div>
          {/* PLACEHOLDER — upřesnit s klientem před spuštěním webu */}
          <div className="stat">
            <span className="stat__value">10 000+</span>
            <span className="stat__label">zakázek</span>
          </div>
        </div>
      </section>

      <div className="division-overview division-overview--tight">
        <div className="container division-overview__inner">
          <div className="division-overview__text">
            <p className="eyebrow">Proč Tri-Grid</p>
            <h2 className="why-heading">Proč spolupracovat s námi</h2>
            <p>
              Jsme nová firma, ale ne noví v oboru — zakladatelé mají za sebou
              roky praxe každý ve svém řemesle. Spojili jsme se, aby klient
              nemusel koordinovat tři různé dodavatele sám.
            </p>
            <ul className="why-list">
              <li>
                <strong>Osobní přístup</strong> — každou zakázku řešíme
                individuálně, přímo s někým z týmu, ne přes vrstvu obchodníků.
              </li>
              <li>
                <strong>Zkušenost napříč obory</strong> — elektro, stroje
                i stavby máme pokryté lidmi s dlouholetou praxí.
              </li>
              <li>
                <strong>Koordinace bez ztrát</strong> — divize spolu komunikují
                napřímo, takže se nic neztratí mezi řemesly.
              </li>
              <li>
                <strong>Transparentní nabídky</strong> — jasné nacenění bez
                skrytých položek.
              </li>
            </ul>
          </div>
          <div className="division-overview__media">
            <img
              src="https://picsum.photos/seed/trigrid-why-us/640/760"
              alt="Ilustrační fotografie realizace"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <section className="about" id="o-nas">
        <div className="container about__inner">
          <p className="eyebrow">O nás</p>
          <p>
            Tri-Grid zakládají tři kolegové, kteří se rozhodli spojit své obory pod
            jednu značku. Místo shánění tří různých dodavatelů na elektřinu, stroje
            a stavbu dostane klient jeden kontakt a koordinovaný tým.
          </p>
          <Link to="/o-nas" className="about__more">Zjistit více o nás →</Link>
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
    </>
  )
}

export default Homepage
