import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ContactCta from '../components/ContactCta.jsx'
import LineIcon from '../components/LineIcon.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import heroImage from '../assets/images/reference-hero-prumyslova-hala.webp'

// Ikona ke každému projektu (pořadí = referencesPage.projects v JSON).
// Při přidání projektu přidat i ikonu sem; chybějící ikona = továrna.
const PROJECT_ICONS = ['factory', 'warehouse', 'bolt', 'landmark', 'apartment', 'warehouse', 'house', 'factory']

// Údaje za názvem a objednatelem (popisky v referencesPage.columns).
// DOČASNÉ: rozsah, rok a hodnota u projektů jsou zatím zástupná data,
// než klient pošle skutečné údaje.
const DETAILS = ['scope', 'year', 'value']

// Stránka Reference — hero a seznam realizovaných projektů bez záhlaví:
// ikona | název | (objednatel) | rozsah | rok | hodnota. Na telefonu je každý
// projekt karta a u rozsahu, roku a hodnoty se ukáže popisek. Hodnota zakázky je v JSON číslo v Kč a formátuje
// se podle jazyka (cs: 5 000 000 Kč, en: CZK 5,000,000).
// Hero používá stejné styly jako stránka O nás (about.css).
function ReferencesPage() {
  const { t } = useTranslation()
  usePageTitle(t('nav.references'))
  const { lang } = useParams()
  const projects = t('referencesPage.projects', { returnObjects: true })
  const money = new Intl.NumberFormat(lang, { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 })

  return (
    <div className="references-page">
      <section className="about-hero references-hero">
        <div className="about-hero__bg references-hero__bg" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" />
        <div className="container about-hero__inner">
          <p className="eyebrow eyebrow--line-after">{t('referencesPage.hero.eyebrow')}</p>
          <h1>{t('referencesPage.hero.title')}</h1>
          <p className="references-hero__text">{t('referencesPage.hero.text')}</p>
        </div>
      </section>

      <section className="references">
        <div className="container">
          <ul className="references-list" aria-label={t('referencesPage.listLabel')}>
            {projects.map((project, i) => (
              <li className="references-list__row" key={project.name}>
                <span className="references-list__icon" aria-hidden="true">
                  <LineIcon name={PROJECT_ICONS[i] ?? 'factory'} />
                </span>
                <strong className="references-list__name">{project.name}</strong>
                <span className="references-list__client">({project.client})</span>
                {DETAILS.map((c) => (
                  <span key={c} className={`references-list__${c}`}>
                    {/* popisek: na počítači skrytý (jen pro čtečky), na telefonu vidět */}
                    <span className="references-list__label">{t(`referencesPage.columns.${c}`)}</span>
                    {c === 'value' ? money.format(project.value) : project[c]}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta text={t('referencesPage.cta.text')} />
    </div>
  )
}

export default ReferencesPage
