import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HexIcon from '../components/HexIcon.jsx'
import LineIcon from '../components/LineIcon.jsx'
import divisions from '../data/divisions.js'
import usePageTitle from '../hooks/usePageTitle.js'
import heroBg from '../assets/images/hero-bg.jpg'
import whyUsImage from '../assets/images/why-us-handshake.jpg'
import CircuitAnimation from '../components/CircuitAnimation.jsx'

// Ikony k bodům "Proč Tri-Grid?" a ke krokům spolupráce
// (pořadí = home.why.list a home.process.steps v JSON)
const WHY_ICONS = ['bolt', 'shield', 'layers', 'handshake']
const PROCESS_ICONS = ['chat', 'document', 'helmet', 'checkbox']

function Homepage() {
  const { t } = useTranslation()
  usePageTitle()
  const { lang } = useParams()
  const whyList = t('home.why.list', { returnObjects: true })
  const processSteps = t('home.process.steps', { returnObjects: true })

  function handleInquirySubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `${t('home.contact.emailSubject')} — ${data.get('division')}`
    const body = [
      `${t('home.contact.form.name')}: ${data.get('name')}`,
      `${t('home.contact.form.email')}: ${data.get('email')}`,
      `${t('home.contact.form.phone')}: ${data.get('phone') || '—'}`,
      `${t('home.contact.form.division')}: ${data.get('division')}`,
      '',
      data.get('message'),
    ].join('\n')

    window.location.href = `mailto:info@tri-grid.cz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section className="hero" id="top">
        <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="hero__overlay" aria-hidden="true" />
        <CircuitAnimation />
        <div className="container hero__inner">
          <h1>
            {t('home.title').split('. ').map((line, index, lines) => (
              <span className="hero__title-line" key={index}>
                {line}{index < lines.length - 1 ? '. ' : ''}
              </span>
            ))}
          </h1>
          <p className="hero__lede">{t('home.lede')}</p>
          <div className="hero__actions">
            <Link to={`/${lang}#kontakt`} className="hero__button hero__button--primary">
              <LineIcon name="send" />
              {t('home.ctaInquiry')}
            </Link>
          </div>

          <div className="division-grid" id="divize">
            {divisions.map((d) => (
              <Link
                to={`/${lang}/divize/${d.id}`}
                className={`division-card division-card--${d.accent}`}
                key={d.id}
                style={{ '--tile-image': `url(${d.heroImage})` }}
              >
                <HexIcon id={`card-${d.id}`} accent={d.accent} type={d.type} lowerOutlineOnly={d.type === 'roof'} alignBaseline />
                <h3>{t(`divisionsData.${d.id}.label`)}</h3>
                <p>{t(`divisionsData.${d.id}.tagline`)}</p>
                <span className="division-card__link">{t('home.tileMore')} <span className="division-card__arrow" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="why">
        <div className="container why__inner">
          <div className="why__text">
            <p className="eyebrow eyebrow--line">{t('home.why.eyebrow')}</p>
            <h2>{t('home.why.heading')}</h2>
            <p>{t('home.why.intro')}</p>
          </div>
          <ul className="why-list">
            {whyList.map((item, i) => (
              <li key={item.title}>
                <span className="why-list__icon">
                  <LineIcon name={WHY_ICONS[i]} />
                </span>
                <span>
                  <strong>{item.title}</strong>
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="why__media">
          <img src={whyUsImage} alt="" loading="lazy" />
        </div>
      </section>

      <section className="how">
        <div className="container">
          <p className="eyebrow eyebrow--line">{t('common.howWeWorkEyebrow')}</p>
          <h2>{t('home.process.heading')}</h2>
          <ol className="how-steps">
            {processSteps.map((step, i) => (
              <li className="how-step" key={step.title}>
                <LineIcon name={PROCESS_ICONS[i]} className="how-step__icon" />
                <span className="how-step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div className="container contact__inner">
          <div className="contact__intro">
            <p className="eyebrow">{t('home.contact.eyebrow')}</p>
            <h2>{t('home.contact.heading')}</h2>
            <p className="contact__lede">{t('home.contact.lede')}</p>

            <div className="contact__details">
              <a className="contact__detail" href="mailto:info@tri-grid.cz">
                <span className="contact__detail-label">{t('home.contact.emailLabel')}</span>
                <strong>info@tri-grid.cz</strong>
              </a>
              <div className="contact__detail">
                <span className="contact__detail-label">{t('home.contact.areaLabel')}</span>
                <strong>{t('home.contact.country')}</strong>
              </div>
            </div>

            <p className="contact__reassurance">
              <span aria-hidden="true">✓</span>
              {t('home.contact.reassurance')}
            </p>
          </div>

          <form className="contact-form" onSubmit={handleInquirySubmit}>
            <h3>{t('home.contact.form.heading')}</h3>
            <div className="contact-form__row">
              <label>
                {t('home.contact.form.name')}
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                {t('home.contact.form.email')}
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <div className="contact-form__row">
              <label>
                {t('home.contact.form.phone')}
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label>
                {t('home.contact.form.division')}
                <select name="division" defaultValue={t('home.contact.form.divisionOptions.general')}>
                  <option>{t('home.contact.form.divisionOptions.general')}</option>
                  <option>{t('divisionsData.elektrotechnika.label')}</option>
                  <option>{t('divisionsData.kovovyroba.label')}</option>
                  <option>{t('divisionsData.stavebnictvi.label')}</option>
                </select>
              </label>
            </div>
            <label>
              {t('home.contact.form.message')}
              <textarea name="message" rows="5" placeholder={t('home.contact.form.messagePlaceholder')} required />
            </label>
            <button className="contact-form__submit" type="submit">{t('home.contact.form.submit')}</button>
            <p className="contact-form__note">{t('home.contact.form.note')}</p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Homepage
