import { Link } from 'react-router-dom'
import HexIcon from '../components/HexIcon.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'

const services = [
  {
    title: 'Novostavby a rekonstrukce',
    desc: 'Kompletní realizace staveb od základů po hrubou stavbu, včetně rekonstrukcí stávajících objektů.',
    icon: 'build',
  },
  {
    title: 'Zednické a dokončovací práce',
    desc: 'Omítky, obklady, podlahy a další dokončovací práce provedené s důrazem na detail.',
    icon: 'finish',
  },
  {
    title: 'Stavební dozor a příprava projektů',
    desc: 'Kontrola kvality a postupu prací, koordinace řemesel a příprava projektové dokumentace.',
    icon: 'supervise',
  },
]

const steps = [
  {
    title: 'Poptávka a konzultace',
    desc: 'Probereme rozsah stavby, představy a orientační rozpočet.',
  },
  {
    title: 'Projekt a nacenění',
    desc: 'Připravíme nebo zkontrolujeme projektovou dokumentaci a cenovou nabídku.',
  },
  {
    title: 'Realizace',
    desc: 'Provedeme stavební práce podle harmonogramu, s průběžnou kontrolou kvality.',
  },
  {
    title: 'Předání a dokumentace',
    desc: 'Předáme dokončené dílo včetně veškeré dokumentace a revizí.',
  },
]

const gallery = [
  { seed: 'trigrid-build-shell', caption: 'Hrubá stavba' },
  { seed: 'trigrid-build-mason', caption: 'Zednické práce' },
  { seed: 'trigrid-build-finish', caption: 'Dokončovací práce' },
]

function StavebnictviPage() {
  return (
    <>
      <section className="division-page-hero division-page-hero--brick">
        <div className="container division-page-hero__inner">
          <Link to="/#divize" className="division-page-back">← Zpět</Link>
          <div className="division-page-hero__head">
            <HexIcon id="page-stavebnictvi" accent="brick" type="brick" />
            <div>
              <p className="eyebrow">Divize</p>
              <h1>Stavebnictví</h1>
            </div>
          </div>
          <p className="hero__lede">
            Novostavby, rekonstrukce a dokončovací práce s důrazem na kvalitu,
            harmonogram a jasnou komunikaci od základů po předání klíčů.
          </p>
        </div>
      </section>

      <section className="division-overview">
        <div className="container division-overview__inner">
          <div className="division-overview__text">
            <p className="eyebrow">Co pro vás uděláme</p>
            <h2>Od základové desky po předání klíčů</h2>
            <p>
              Realizujeme novostavby i rekonstrukce — hrubou stavbu, zednické
              a dokončovací práce i stavební dozor. Díky propojení se strojírenskou
              a elektro divizí zvládneme koordinovat i technicky náročnější
              zakázky bez zbytečných prodlev mezi řemesly.
            </p>
          </div>
          <div className="division-overview__media">
            <img
              src="https://picsum.photos/seed/trigrid-build-main/640/760"
              alt="Ilustrační fotografie stavebních prací"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="service-section service-section--brick">
        <div className="container">
          <p className="eyebrow">Naše služby</p>
          <h2>Tři pilíře divize Stavebnictví</h2>
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

      <section className="process-section process-section--brick">
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
          <h2>Stavebnictví v praxi</h2>
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

      <section className="division-page-body division-page-body--brick">
        <div className="container division-page-cta">
          <p>Máte poptávku v oboru stavebnictví?</p>
          <Link to="/#kontakt" className="division-page-cta__link">Kontaktujte nás →</Link>
        </div>
      </section>
    </>
  )
}

export default StavebnictviPage
