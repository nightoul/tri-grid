import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HexIcon from '../components/HexIcon.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import LineIcon from '../components/LineIcon.jsx'
import GalleryCarousel from '../components/GalleryCarousel.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

// Společná šablona pro všechny divize. Vizuální data (barva, ikony, obrázky)
// přichází z src/data/divisions.js, texty z divisionsData.<id> v JSON.
function DivisionPage({ division }) {
  const { t, i18n } = useTranslation()
  const { lang } = useParams()
  const {
    id, accent, type, heroImage, overviewImage, serviceIcons, serviceImages, stepIcons, galleryImages, brightCanvas, modern,
  } = division
  const key = (name) => `divisionsData.${id}.${name}`
  // Volitelný text: když klíč v JSON chybí, sekce se prostě nevykreslí.
  const optional = (name) => (i18n.exists(key(name)) ? t(key(name)) : null)

  const services = t(key('services'), { returnObjects: true })
  const steps = t(key('steps'), { returnObjects: true })
  // Galerie, tři varianty textů v JSON:
  //  - "gallery": nadpis + popis u každé fotky,
  //  - "galleryCaptions": jen krátký popisek,
  //  - "galleryAlts": bez popisků na webu, názvy jen jako alt text fotek.
  let gallery
  if (i18n.exists(key('gallery'))) {
    gallery = t(key('gallery'), { returnObjects: true })
  } else if (i18n.exists(key('galleryAlts'))) {
    gallery = t(key('galleryAlts'), { returnObjects: true }).map((alt) => ({ title: alt, hideCaption: true }))
  } else {
    gallery = t(key('galleryCaptions'), { returnObjects: true }).map((caption) => ({ title: caption }))
  }

  const heroSubtitle = optional('heroSubtitle')
  const heroCta = optional('heroCta')
  const stepsHeading = optional('stepsHeading') ?? t('common.howWeWorkHeading')

  usePageTitle(t(key('label')))
  // DOČASNÉ: popisky fotek (nadpis i popis) se na webu nezobrazují, zůstávají
  // jen jako alt text. Pro vrácení smazat "hideCaption: true".
  const galleryItems = gallery.map((item, i) => ({
    ...item,
    image: galleryImages[i],
    hideCaption: true,
  }))

  return (
    <div className={`division-page${brightCanvas ? ' division-page--bright-canvas' : ''}${modern ? ' division-page--modern' : ''}`}>
      <section className={`division-page-hero division-page-hero--${accent}`}>
        <div className={`division-page-hero__bg division-page-hero__bg--${accent}`} style={{ '--hero-img': `url(${heroImage})` }} />
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
                  {s.desc && <p>{s.desc}</p>}
                  {s.items && (
                    <ul className="service-card__list">
                      {s.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
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
          <h2>{stepsHeading}</h2>
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
        {modern ? (
          <GalleryCarousel
            eyebrow={t('common.workSamplesEyebrow')}
            heading={t(key('galleryHeading'))}
            items={galleryItems}
          />
        ) : (
          <div className="container">
            <p className="eyebrow">{t('common.workSamplesEyebrow')}</p>
            <h2>{t(key('galleryHeading'))}</h2>
            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <figure className="gallery-item" key={item.title}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  {!item.hideCaption && <figcaption>{item.title}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className={`division-cta division-cta--${accent}`}>
        <div className="container division-cta__inner">
          <div>
            <h2>{t('common.ctaHeading')}</h2>
            <p>{t(key('ctaText'))}</p>
          </div>
          <Link to={`/${lang}#kontakt`} className="division-cta__button">{t('common.ctaButton')}</Link>
        </div>
      </section>
    </div>
  )
}

export default DivisionPage
