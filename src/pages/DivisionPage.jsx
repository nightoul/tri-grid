import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ContactCta from '../components/ContactCta.jsx'
import HexIcon from '../components/HexIcon.jsx'
import LineIcon from '../components/LineIcon.jsx'
import GalleryCarousel from '../components/GalleryCarousel.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

// Společná šablona pro všechny divize. Vizuální data (barva, ikony, obrázky)
// přichází z src/data/divisions.js, texty z divisionsData.<id> v JSON.
function DivisionPage({ division }) {
  const { t, i18n } = useTranslation()
  const { lang } = useParams()
  const {
    id, accent, type, heroImage, overviewImage, serviceIcons, serviceImages, stepIcons, galleryImages,
  } = division
  const key = (name) => `divisionsData.${id}.${name}`
  // Volitelný text: když klíč v JSON chybí, sekce se prostě nevykreslí.
  const optional = (name) => (i18n.exists(key(name)) ? t(key(name)) : null)

  const services = t(key('services'), { returnObjects: true })
  const steps = t(key('steps'), { returnObjects: true })
  // Galerie, dvě varianty textů v JSON:
  //  - "gallery": nadpis + popis u každé fotky,
  //  - "galleryAlts": jen názvy fotek (alt text).
  const gallery = i18n.exists(key('gallery'))
    ? t(key('gallery'), { returnObjects: true })
    : t(key('galleryAlts'), { returnObjects: true }).map((alt) => ({ title: alt }))

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
    <div className="division-page">
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

      <section className="service-section">
        <div className="container">
          <p className="eyebrow">{t('common.ourServicesEyebrow')}</p>
          <h2>{t(key('servicesHeading'))}</h2>
          <div className="service-cards">
            {services.map((s, i) => (
              <div className="service-card" key={s.title}>
                <img className="service-card__image" src={serviceImages[i]} alt="" loading="lazy" />
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
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
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
        <GalleryCarousel
          eyebrow={t('common.workSamplesEyebrow')}
          heading={t(key('galleryHeading'))}
          items={galleryItems}
        />
      </section>

      <ContactCta text={t(key('ctaText'))} />
    </div>
  )
}

export default DivisionPage
