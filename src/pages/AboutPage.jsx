import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LineIcon from '../components/LineIcon.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import heroImage from '../assets/images/o-nas-hero-ocelova-konstrukce.webp'

// Ikony k hodnotám "Co nás spojuje" (pořadí = aboutPage.values.items v JSON)
const VALUE_ICONS = ['wrench', 'shieldCheck', 'users']

function AboutPage() {
  const { t } = useTranslation()
  usePageTitle(t('nav.about'))
  const { lang } = useParams()
  const members = t('aboutPage.team.members', { returnObjects: true })
  const values = t('aboutPage.values.items', { returnObjects: true })

  return (
    <>
      <section className="about-hero">
        <div className="about-hero__bg" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" />
        <div className="container about-hero__inner">
          <p className="eyebrow eyebrow--line-after">{t('aboutPage.hero.eyebrow')}</p>
          <h1>{t('aboutPage.hero.title')}</h1>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story__inner">
          <h2 className="about-heading">{t('aboutPage.story.heading')}</h2>
          <p>{t('aboutPage.story.text')}</p>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <p className="eyebrow eyebrow--line-after about-team__eyebrow">{t('aboutPage.team.eyebrow')}</p>
          <ul className="about-team__cards">
            {members.map((name) => (
              <li className="about-team__card" key={name}>
                <h3>{name}</h3>
                <p>{t('aboutPage.team.role')}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="about-heading">{t('aboutPage.values.heading')}</h2>
          <ul className="about-values__list">
            {values.map((v, i) => (
              <li key={v.title}>
                <LineIcon name={VALUE_ICONS[i]} className="about-values__icon" />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="division-page-body division-page-body--blue">
        <div className="container division-page-cta">
          <p>{t('aboutPage.cta.text')}</p>
          <Link to={`/${lang}#kontakt`} className="division-page-cta__link">{t('common.ctaContact')}</Link>
        </div>
      </section>
    </>
  )
}

export default AboutPage
