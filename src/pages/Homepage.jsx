import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HexIcon from '../components/HexIcon.jsx'
import divisions from '../data/divisions.js'
import logoIcon from '../assets/tri-grid-logo.svg'
import heroBg from '../assets/images/hero-bg.jpg'
import CircuitAnimation from '../components/CircuitAnimation.jsx'

function Homepage() {
  const { t } = useTranslation()
  const { lang } = useParams()
  const whyList = t('home.why.list', { returnObjects: true })

  return (
    <>
      <section className="hero" id="top">
        {/* Zatím placeholder — nahraď souborem stejného jména
            (src/assets/images/hero-bg.jpg) za reálnou fotku. */}
        <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="hero__overlay" aria-hidden="true" />
        <CircuitAnimation />
        <div className="container hero__inner">
          <p className="eyebrow">{t('home.eyebrow')}</p>
          <h1>{t('home.title')}</h1>
          <p className="hero__lede">{t('home.lede')}</p>

          <div className="division-grid" id="divize">
            {divisions.map((d) => (
              <Link
                to={`/${lang}/divize/${d.id}`}
                className={`division-card division-card--${d.accent}`}
                key={d.id}
              >
                <HexIcon id={`card-${d.id}`} accent={d.accent} type={d.type} />
                <h3>{t(`divisionsData.${d.id}.label`)}</h3>
                <p>{t(`divisionsData.${d.id}.tagline`)}</p>
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
            <span className="stat__label">{t('home.stats.founders')}</span>
          </div>
          <div className="stat">
            <span className="stat__value">1</span>
            <span className="stat__label">{t('home.stats.contact')}</span>
          </div>
          {/* PLACEHOLDER — upřesnit s klientem před spuštěním webu */}
          <div className="stat">
            <span className="stat__value">10 000+</span>
            <span className="stat__label">{t('home.stats.orders')}</span>
          </div>
        </div>
      </section>

      <div className="division-overview division-overview--tight">
        <div className="container division-overview__inner">
          <div className="division-overview__text">
            <p className="eyebrow">{t('home.why.eyebrow')}</p>
            <h2 className="why-heading">{t('home.why.heading')}</h2>
            <p>{t('home.why.intro')}</p>
            <ul className="why-list">
              {whyList.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> — {item.desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="division-overview__media">
            <img
              src="https://picsum.photos/seed/trigrid-why-us/640/760"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <section className="about" id="o-nas">
        <div className="container about__inner">
          <p className="eyebrow">{t('home.about.eyebrow')}</p>
          <p>{t('home.about.text')}</p>
          <Link to={`/${lang}/o-nas`} className="about__more">{t('home.about.learnMore')}</Link>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div className="container contact__inner">
          <p className="eyebrow">{t('home.contact.eyebrow')}</p>
          <h2>{t('home.contact.heading')}</h2>
          <div className="contact__details">
            <a href="mailto:info@tri-grid.cz">info@tri-grid.cz</a>
            <a href="tel:+420000000000">+420 000 000 000</a>
            <span>{t('home.contact.country')}</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Homepage
