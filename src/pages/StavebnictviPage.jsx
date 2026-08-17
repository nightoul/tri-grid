import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HexIcon from '../components/HexIcon.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import stavebnictvi1 from '../assets/images/stavebnictvi1.jpg'
import stavebnictviBg from '../assets/images/Stavebnictvi_bg.jpg'
import stavebnictvi2 from '../assets/images/stavebnictvi2.jpg'
import stavebnictvi3 from '../assets/images/stavebnictvi3.jpg'
import stavebnictvi4 from '../assets/images/stavebnictvi4.jpg'

const serviceIcons = ['build', 'finish', 'supervise']
const galleryImages = [stavebnictvi2, stavebnictvi3, stavebnictvi4]

function StavebnictviPage() {
  const { t } = useTranslation()
  const { lang } = useParams()

  const services = t('divisionsData.stavebnictvi.services', { returnObjects: true })
  const steps = t('divisionsData.stavebnictvi.steps', { returnObjects: true })
  const galleryCaptions = t('divisionsData.stavebnictvi.galleryCaptions', { returnObjects: true })

  return (
    <>
      <section className="division-page-hero">
        {/* Zatím placeholder — nahraď souborem stejného jména
            (src/assets/images/Stavebnictvi_bg.jpg) za reálnou fotku. */}
        <div className="division-page-hero__bg" style={{ backgroundImage: `url(${stavebnictviBg})` }} />
        <div className="division-page-hero__overlay division-page-hero__overlay--brick" aria-hidden="true" />
        <div className="container division-page-hero__inner">
          <Link to={`/${lang}`} className="division-page-back">{t('common.backToDivisions')}</Link>
          <div className="division-page-hero__head">
            <HexIcon id="page-stavebnictvi" accent="brick" type="brick" />
            <div>
              <p className="eyebrow">{t('common.divisionsEyebrow')}</p>
              <h1>{t('divisionsData.stavebnictvi.label')}</h1>
            </div>
          </div>
          <p className="hero__lede">{t('divisionsData.stavebnictvi.heroLede')}</p>
        </div>
      </section>

      <section className="division-overview">
        <div className="container division-overview__inner">
          <div className="division-overview__text">
            <p className="eyebrow">{t('common.whatWeDoEyebrow')}</p>
            <h2>{t('divisionsData.stavebnictvi.overviewHeading')}</h2>
            <p>{t('divisionsData.stavebnictvi.overviewText')}</p>
          </div>
          <div className="division-overview__media">
            {/* Zatím placeholder — nahraď souborem stejného jména
                (src/assets/images/stavebnictvi1.jpg) za reálnou fotku. */}
            <img src={stavebnictvi1} alt="" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="service-section service-section--brick">
        <div className="container">
          <p className="eyebrow">{t('common.ourServicesEyebrow')}</p>
          <h2>{t('divisionsData.stavebnictvi.servicesHeading')}</h2>
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

      <section className="process-section process-section--brick">
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
          <h2>{t('divisionsData.stavebnictvi.galleryHeading')}</h2>
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

      <section className="division-page-body division-page-body--brick">
        <div className="container division-page-cta">
          <p>{t('divisionsData.stavebnictvi.ctaQuestion')}</p>
          <Link to={`/${lang}#kontakt`} className="division-page-cta__link">{t('common.ctaContact')}</Link>
        </div>
      </section>
    </>
  )
}

export default StavebnictviPage
