import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HexIcon from '../components/HexIcon.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import strojirenstvi1 from '../assets/images/strojirenstvi1.jpg'
import strojirenstviBg from '../assets/images/Strojirenstvi_bg.jpg'
import strojirenstvi2 from '../assets/images/strojirenstvi2.jpg'
import strojirenstvi3 from '../assets/images/strojirenstvi3.jpg'
import strojirenstvi4 from '../assets/images/strojirenstvi4.jpg'

const serviceIcons = ['design', 'wrench', 'weld']
const galleryImages = [strojirenstvi2, strojirenstvi3, strojirenstvi4]

function StrojirenstviPage() {
  const { t } = useTranslation()
  const { lang } = useParams()

  const services = t('divisionsData.strojirenstvi.services', { returnObjects: true })
  const steps = t('divisionsData.strojirenstvi.steps', { returnObjects: true })
  const galleryCaptions = t('divisionsData.strojirenstvi.galleryCaptions', { returnObjects: true })

  return (
    <>
      <section className="division-page-hero">
        {/* Zatím placeholder — nahraď souborem stejného jména
            (src/assets/images/Strojirenstvi_bg.jpg) za reálnou fotku. */}
        <div className="division-page-hero__bg division-page-hero__bg--steel" style={{ backgroundImage: `url(${strojirenstviBg})` }} />
        <div className="division-page-hero__overlay division-page-hero__overlay--steel" aria-hidden="true" />
        <div className="container division-page-hero__inner">
          <Link to={`/${lang}`} className="division-page-back">{t('common.backToDivisions')}</Link>
          <div className="division-page-hero__head">
            <HexIcon id="page-strojirenstvi" accent="steel" type="gear" />
            <div>
              <h1>{t('divisionsData.strojirenstvi.label')}</h1>
            </div>
          </div>
          <p className="hero__lede">{t('divisionsData.strojirenstvi.heroLede')}</p>
        </div>
      </section>

      <section className="division-overview">
        <div className="container division-overview__inner">
          <div className="division-overview__text">
            <p className="eyebrow">{t('common.whatWeDoEyebrow')}</p>
            <h2>{t('divisionsData.strojirenstvi.overviewHeading')}</h2>
            <p>{t('divisionsData.strojirenstvi.overviewText')}</p>
          </div>
          <div className="division-overview__media">
            {/* Zatím placeholder — nahraď souborem stejného jména
                (src/assets/images/strojirenstvi1.jpg) za reálnou fotku. */}
            <img src={strojirenstvi1} alt="" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="service-section service-section--steel">
        <div className="container">
          <p className="eyebrow">{t('common.ourServicesEyebrow')}</p>
          <h2>{t('divisionsData.strojirenstvi.servicesHeading')}</h2>
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

      <section className="process-section process-section--steel">
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

      <section className="gallery-section">
        <div className="container">
          <p className="eyebrow">{t('common.workSamplesEyebrow')}</p>
          <h2>{t('divisionsData.strojirenstvi.galleryHeading')}</h2>
          <div className="gallery-grid">
            {galleryCaptions.map((caption, i) => (
              <figure className="gallery-item" key={caption}>
                <img src={galleryImages[i]} alt={caption} loading="lazy" />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="gallery-note">{t('common.galleryNote')}</p>
        </div>
      </section>

      <section className="division-page-body division-page-body--steel">
        <div className="container division-page-cta">
          <p>{t('divisionsData.strojirenstvi.ctaQuestion')}</p>
          <Link to={`/${lang}#kontakt`} className="division-page-cta__link">{t('common.ctaContact')}</Link>
        </div>
      </section>
    </>
  )
}

export default StrojirenstviPage
