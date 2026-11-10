import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HexIcon from '../components/HexIcon.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

// Společná šablona pro všechny divize. Vizuální data (barva, ikony, obrázky)
// přichází z src/data/divisions.js, texty z divisionsData.<id> v JSON.
function DivisionPage({ division }) {
  const { t } = useTranslation()
  const { lang } = useParams()
  const { id, accent, type, heroImage, overviewImage, serviceIcons, galleryImages, brightCanvas } = division
  const key = (name) => `divisionsData.${id}.${name}`

  const services = t(key('services'), { returnObjects: true })
  const steps = t(key('steps'), { returnObjects: true })
  const galleryCaptions = t(key('galleryCaptions'), { returnObjects: true })

  usePageTitle(t(key('label')))

  return (
    <div className={`division-page${brightCanvas ? ' division-page--bright-canvas' : ''}`}>
      <section className={`division-page-hero division-page-hero--${accent}`}>
        <div className={`division-page-hero__bg division-page-hero__bg--${accent}`} style={{ backgroundImage: `url(${heroImage})` }} />
        <div className={`division-page-hero__overlay division-page-hero__overlay--${accent}`} aria-hidden="true" />
        <div className="container division-page-hero__inner">
          <div className="division-page-hero__head">
            <HexIcon id={`page-${id}`} accent={accent} type={type} />
            <div>
              <h1>{t(key('label'))}</h1>
            </div>
          </div>
          <p className="hero__lede">{t(key('heroLede'))}</p>
        </div>
      </section>

      <section className={`division-overview division-overview--${accent}`}>
        <div className="container division-overview__inner">
          <div className="division-overview__text">
            <p className="eyebrow">{t('common.whatWeDoEyebrow')}</p>
            <h2>{t(key('overviewHeading'))}</h2>
            <p>{t(key('overviewText'))}</p>
          </div>
          <div className="division-overview__media">
            <img src={overviewImage} alt="" loading="lazy" />
          </div>
        </div>
      </section>

      <section className={`service-section service-section--${accent}`}>
        <div className="container">
          <p className="eyebrow">{t('common.ourServicesEyebrow')}</p>
          <h2>{t(key('servicesHeading'))}</h2>
          <div className="service-cards">
            {services.map((s, i) => (
              <div className="service-card" key={s.title}>
                <ServiceIcon variant={serviceIcons[i]} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`process-section process-section--${accent}`}>
        <div className="container">
          <p className="eyebrow">{t('common.howWeWorkEyebrow')}</p>
          <h2>{t('common.howWeWorkHeading')}</h2>
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

      <section className={`gallery-section gallery-section--${accent}`}>
        <div className="container">
          <p className="eyebrow">{t('common.workSamplesEyebrow')}</p>
          <h2>{t(key('galleryHeading'))}</h2>
          <div className="gallery-grid">
            {galleryCaptions.map((caption, i) => (
              <figure className="gallery-item" key={caption}>
                <img src={galleryImages[i]} alt={caption} loading="lazy" />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`division-page-body division-page-body--${accent}`}>
        <div className="container division-page-cta">
          <p>{t(key('ctaQuestion'))}</p>
          <Link to={`/${lang}#kontakt`} className="division-page-cta__link">{t('common.ctaContact')}</Link>
        </div>
      </section>
    </div>
  )
}

export default DivisionPage
