import { Link } from 'react-router-dom'
import HexIcon from '../components/HexIcon.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'

const services = [
  {
    title: 'Strojírenská konstrukce a výroba',
    desc: 'Návrh a výroba strojních dílů a sestav na míru — od prototypu po malosériovou výrobu.',
    icon: 'design',
  },
  {
    title: 'Montáž a servis technologických celků',
    desc: 'Instalace, uvedení do provozu a pravidelný servis výrobních a technologických linek.',
    icon: 'wrench',
  },
  {
    title: 'Zámečnické a svářečské práce',
    desc: 'Svařování, obrábění a zámečnické práce podle výkresové dokumentace i přímo na místě.',
    icon: 'weld',
  },
]

const steps = [
  {
    title: 'Poptávka a konzultace',
    desc: 'Probereme technické zadání, výkresy nebo požadovaný účel zařízení.',
  },
  {
    title: 'Návrh a nacenění',
    desc: 'Připravíme konstrukční návrh a transparentní cenovou nabídku.',
  },
  {
    title: 'Výroba a montáž',
    desc: 'Zajistíme výrobu, obrábění, svařování a instalaci přímo na místě.',
  },
  {
    title: 'Zkoušky a předání',
    desc: 'Otestujeme funkčnost celku, zaškolíme obsluhu a předáme dokumentaci.',
  },
]

const gallery = [
  { seed: 'trigrid-mach-parts', caption: 'Výroba strojních dílů' },
  { seed: 'trigrid-mach-assembly', caption: 'Montáž technologického celku' },
  { seed: 'trigrid-mach-welding', caption: 'Svářečské práce na míru' },
]

function StrojirenstviPage() {
  return (
    <>
      <section className="division-page-hero division-page-hero--steel">
        <div className="container division-page-hero__inner">
          <Link to="/#divize" className="division-page-back">← Zpět</Link>
          <div className="division-page-hero__head">
            <HexIcon id="page-strojirenstvi" accent="steel" type="gear" />
            <div>
              <p className="eyebrow">Divize</p>
              <h1>Strojírenství</h1>
            </div>
          </div>
          <p className="hero__lede">
            Konstrukce, výroba, montáž a servis strojních a technologických celků
            na míru — od jednotlivého dílu po kompletní linku.
          </p>
        </div>
      </section>

      <section className="division-overview">
        <div className="container division-overview__inner">
          <div className="division-overview__text">
            <p className="eyebrow">Co pro vás uděláme</p>
            <h2>Strojírenství, které drží krok s provozem</h2>
            <p>
              Navrhujeme, vyrábíme a montujeme strojní a technologické celky na
              míru — od jednotlivých dílů po kompletní výrobní linky. Součástí je
              i běžný servis a údržba, takže se na fungující provoz můžete
              spolehnout dlouhodobě, ne jen v den předání.
            </p>
          </div>
          <div className="division-overview__media">
            <img
              src="https://picsum.photos/seed/trigrid-mach-main/640/760"
              alt="Ilustrační fotografie strojírenské výroby"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="service-section service-section--steel">
        <div className="container">
          <p className="eyebrow">Naše služby</p>
          <h2>Tři pilíře divize Strojírenství</h2>
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

      <section className="process-section process-section--steel">
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
          <h2>Strojírenství v praxi</h2>
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

      <section className="division-page-body division-page-body--steel">
        <div className="container division-page-cta">
          <p>Máte poptávku v oboru strojírenství?</p>
          <Link to="/#kontakt" className="division-page-cta__link">Kontaktujte nás →</Link>
        </div>
      </section>
    </>
  )
}

export default StrojirenstviPage
