import { Link } from 'react-router-dom'
import HexIcon from '../components/HexIcon.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'

const services = [
  {
    title: 'Elektroinstalace novostaveb a rekonstrukcí',
    desc: 'Kompletní rozvody od hrubé stavby po finální zapojení — rozvaděče, zásuvkové okruhy i osvětlení.',
    icon: 'install',
  },
  {
    title: 'Revize a odborné prohlídky',
    desc: 'Pravidelné i jednorázové revize elektrických instalací podle platných norem, s jasným protokolem.',
    icon: 'inspect',
  },
  {
    title: 'Návrh a realizace slaboproudých systémů',
    desc: 'Zabezpečení, kamerové systémy, datové rozvody a příprava na chytrou domácnost.',
    icon: 'lowvoltage',
  },
]

const steps = [
  {
    title: 'Poptávka a konzultace',
    desc: 'Probereme rozsah prací a základní požadavky — osobně na místě nebo na dálku.',
  },
  {
    title: 'Návrh a nacenění',
    desc: 'Připravíme technický návrh a transparentní cenovou nabídku bez skrytých položek.',
  },
  {
    title: 'Realizace',
    desc: 'Provedeme instalaci podle domluveného harmonogramu a průběžně vás informujeme.',
  },
  {
    title: 'Revize a předání',
    desc: 'Zkontrolujeme funkčnost, vystavíme revizní zprávu a předáme kompletní dokumentaci.',
  },
]

const gallery = [
  { seed: 'trigrid-elec-panel', caption: 'Instalace a zapojení rozvaděče' },
  { seed: 'trigrid-elec-wiring', caption: 'Rozvody v novostavbě' },
  { seed: 'trigrid-elec-tools', caption: 'Odborná revize a měření' },
]

function ElektrotechnikaPage() {
  return (
    <>
      <section className="division-page-hero division-page-hero--blue">
        <div className="container division-page-hero__inner">
          <Link to="/#divize" className="division-page-back">← Zpět</Link>
          <div className="division-page-hero__head">
            <HexIcon id="page-elektrotechnika" accent="blue" type="bolt" />
            <div>
              <p className="eyebrow">Divize</p>
              <h1>Elektrotechnika</h1>
            </div>
          </div>
          <p className="hero__lede">
            Silnoproudé i slaboproudé rozvody, revize a chytré systémy — pro byty,
            rodinné domy i komerční objekty, od návrhu po předání.
          </p>
        </div>
      </section>

      <section className="division-overview">
        <div className="container division-overview__inner">
          <div className="division-overview__text">
            <p className="eyebrow">Co pro vás uděláme</p>
            <h2>Elektřina, na kterou se dá spolehnout</h2>
            <p>
              Zajišťujeme kompletní elektroinstalace a revize pro byty, rodinné domy
              i komerční prostory — od prvního návrhu až po předání funkčního
              systému. Pracujeme jak se silnoproudými rozvody, tak se slaboproudými
              systémy (zabezpečení, datové rozvody, chytrá domácnost), takže na
              stavbě řešíte elektřinu jen s jedním dodavatelem.
            </p>
          </div>
          <div className="division-overview__media">
            <img
              src="https://picsum.photos/seed/trigrid-elec-main/640/760"
              alt="Ilustrační fotografie elektromontážních prací"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="service-section service-section--blue">
        <div className="container">
          <p className="eyebrow">Naše služby</p>
          <h2>Tři pilíře divize Elektrotechnika</h2>
          <div className="service-cards">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <ServiceIcon variant={s.icon} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section process-section--blue">
        <div className="container">
          <p className="eyebrow">Jak probíhá spolupráce</p>
          <h2>Čtyři kroky od poptávky k předání</h2>
          <div className="process-steps">
            {steps.map((s, i) => (
              <div className="process-step" key={s.title}>
                <span className="process-step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <p className="eyebrow">Ukázky prací</p>
          <h2>Elektroinstalace v praxi</h2>
          <div className="gallery-grid">
            {gallery.map((g) => (
              <figure className="gallery-item" key={g.seed}>
                <img
                  src={`https://picsum.photos/seed/${g.seed}/640/480`}
                  alt={g.caption}
                  loading="lazy"
                />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="gallery-note">
            Ilustrační fotografie — jakmile budete mít snímky z vlastních realizací,
            nahradíme je za skutečné.
          </p>
        </div>
      </section>

      <section className="division-page-body division-page-body--blue">
        <div className="container division-page-cta">
          <p>Máte poptávku v oboru elektrotechnika?</p>
          <Link to="/#kontakt" className="division-page-cta__link">Kontaktujte nás →</Link>
        </div>
      </section>
    </>
  )
}

export default ElektrotechnikaPage
