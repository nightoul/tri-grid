import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HexIcon from '../components/HexIcon.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import LineIcon from '../components/LineIcon.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

// Společná šablona pro všechny divize. Vizuální data (barva, ikony, obrázky)
// přichází z src/data/divisions.js, texty z divisionsData.<id> v JSON.
function DivisionPage({ division }) {
  const { t, i18n } = useTranslation()
  const { lang } = useParams()
  const {
    id, accent, type, heroImage, overviewImage, serviceIcons, serviceImages, stepIcons, galleryImages, brightCanvas,
  } = division
  const key = (name) => `divisionsData.${id}.${name}`
  // Volitelný text: když klíč v JSON chybí, sekce se prostě nevykreslí.
  const optional = (name) => (i18n.exists(key(name)) ? t(key(name)) : null)

  const services = t(key('services'), { returnObjects: true })
  const steps = t(key('steps'), { returnObjects: true })
  // Galerie: buď "gallery" s nadpisem a popisem u každé fotky,
  // nebo starší "galleryCaptions" jen s krátkým popiskem.
  const gallery = i18n.exists(key('gallery'))
    ? t(key('gallery'), { returnObjects: true })
    : t(key('galleryCaptions'), { returnObjects: true }).map((caption) => ({ title: caption }))

  const heroSubtitle = optional('heroSubtitle')
  const heroCta = optional('heroCta')
  const ctaHeading = optional('ctaHeading')
  const ctaEyebrow = optional('ctaEyebrow')
  const ctaText = optional('ctaText')
  const ctaButton = optional('ctaButton')

  usePageTitle(t(key('label')))

  return (
    <div className={`division-page${brightCanvas ? ' division-page--bright-canvas' : ''}`}>
      <section className={`division-page-hero division-page-hero--${accent}`}>
        <div className={`division-page-hero__bg division-page-hero__bg--${accent}`} style={{ backgroundImage: `url(${heroImage})` }} />
        <div className={`division-page-hero__overlay division-page-hero__overlay--${accent}`} aria-hidden="true" />
        <div className="container division-page-hero__inner">
          <div className="division-page-hero__head">
            <HexIcon id={`page-${id}`} accent={accent} type={type} />
            <div className="division-page-hero__title">
              <h1>{t(key('label'))}</h1>
            </div>
          </div>
          {heroSubtitle && <p className="division-page-hero__subtitle">{heroSubtitle}</p>}
          <p className="hero__lede">{t(key('heroLede'))}</p>
          {heroCta && (
            <Link to={`/${lang}#kontakt`} className="division-page-hero__cta">
              <LineIcon name="send" />
              {heroCta}
            </Link>
          )}
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
            {services.map((s, i) => (serviceImages ? (
              <div className="service-card service-card--media" key={s.title}>
                <img className="service-card__image" src={serviceImages[i % serviceImages.length]} alt="" loading="lazy" />
                <div className="service-card__body">
                  <div className="service-card__head">
                    <LineIcon name={serviceIcons[i]} className="service-card__line-icon" />
                    <h3>{s.title}</h3>
                  </div>
                  <p>{s.desc}</p>
                </div>
              </div>
            ) : (
              <div className="service-card" key={s.title}>
                <ServiceIcon variant={serviceIcons[i]} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            )))}
          </div>
        </div>
      </section>

      <section className={`process-section process-section--${accent}`}>
        <div className="container">
          <p className="eyebrow">{t('common.howWeWorkEyebrow')}</p>
          <h2>{t('common.howWeWorkHeading')}</h2>
          <div className={`process-steps${stepIcons ? ' process-steps--icons' : ''}`}>
            {steps.map((s, i) => (
              <div className="process-step" key={s.title}>
                {stepIcons ? (
                  <div className="process-step__marker">
                    <span className="process-step__icon">
                      <LineIcon name={stepIcons[i]} />
                    </span>
                    <span className="process-step__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="process-step__line" aria-hidden="true" />
                  </div>
                ) : (
                  <span className="process-step__num">{String(i + 1).padStart(2, '0')}</span>
                )}
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
            {gallery.map((item, i) => (
              <figure className="gallery-item" key={item.title}>
                {/* Když je fotek míň než položek, použijí se znovu od začátku. */}
                <img src={galleryImages[i % galleryImages.length]} alt={item.title} loading="lazy" />
                <figcaption>
                  {item.desc ? (
                    <>
                      <strong className="gallery-item__title">{item.title}</strong>
                      <span className="gallery-item__desc">{item.desc}</span>
                    </>
                  ) : item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`division-page-body division-page-body--${accent}`}>
        {ctaHeading ? (
          <div className="container division-page-cta division-page-cta--rich">
            <div className="division-page-cta__text">
              {ctaEyebrow && <p className="eyebrow">{ctaEyebrow}</p>}
              <h2>{ctaHeading}</h2>
              <p>{t(key('ctaQuestion'))}</p>
              {ctaText && <p>{ctaText}</p>}
            </div>
            <Link to={`/${lang}#kontakt`} className="division-page-cta__button">
              {ctaButton ?? t('common.ctaContact')}
            </Link>
          </div>
        ) : (
          <div className="container division-page-cta">
            <p>{t(key('ctaQuestion'))}</p>
            <Link to={`/${lang}#kontakt`} className="division-page-cta__link">{t('common.ctaContact')}</Link>
          </div>
        )}
      </section>
    </div>
  )
}

export default DivisionPage
