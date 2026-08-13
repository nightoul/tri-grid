import { Link } from 'react-router-dom'
import team from '../data/team.js'

const values = [
  {
    title: 'Jeden kontakt pro tři obory',
    desc: 'Nemusíte shánět zvlášť elektrikáře, strojaře a stavaře — stačí jeden telefon.',
  },
  {
    title: 'Koordinace bez ztrát',
    desc: 'Divize spolu komunikují napřímo, takže se nic neztratí mezi řemesly.',
  },
  {
    title: 'Přímý kontakt se zakladateli',
    desc: 'Na každé zakázce jednáte přímo s někým z týmu, ne přes vrstvu obchodníků.',
  },
]

function AboutPage() {
  return (
    <>
      <section className="division-page-hero division-page-hero--neutral">
        <div className="container division-page-hero__inner">
          <Link to="/" className="division-page-back">← Zpět</Link>
          <div className="division-page-hero__head">
            <div>
              <p className="eyebrow">O nás</p>
              <h1>Kdo jsme</h1>
            </div>
          </div>
          <p className="hero__lede">
            Tri-Grid spojuje tři kolegy a tři řemesla pod jednou značkou — od
            elektřiny přes stroje až po stavby.
          </p>
        </div>
      </section>

      <section className="division-overview">
        <div className="container division-overview__inner">
          <div className="division-overview__text">
            <p className="eyebrow">Jak Tri-Grid vznikl</p>
            <h2>Tři obory, jeden společný problém</h2>
            <p>
              Tri-Grid zakládají tři kolegové, kteří se dlouhodobě pohybují každý
              ve svém oboru — elektrotechnice, strojírenství a stavebnictví. Na
              společných zakázkách si všimli stejného problému: koordinace mezi
              řemeslníky často zabere víc času a energie než práce samotná.
              Rozhodli se to změnit a spojit své obory pod jednu značku, aby
              klient řešil jeden kontakt místo tří.
            </p>
          </div>
          <div className="division-overview__media">
            <img
              src="https://picsum.photos/seed/trigrid-about-story/640/760"
              alt="Ilustrační fotografie týmu při práci"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="service-section service-section--blue">
        <div className="container">
          <p className="eyebrow">Proč Tri-Grid</p>
          <h2>Co od nás můžete čekat</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="process-step" key={v.title}>
                <span className="process-step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
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

      <section className="division-page-body division-page-body--blue">
        <div className="container division-page-cta">
          <p>Chcete probrat svůj projekt?</p>
          <Link to="/#kontakt" className="division-page-cta__link">Kontaktujte nás →</Link>
        </div>
      </section>
    </>
  )
}

export default AboutPage
