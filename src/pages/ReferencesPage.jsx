import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ContactCta from '../components/ContactCta.jsx'
import LineIcon from '../components/LineIcon.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import heroImage from '../assets/images/reference-hero-prumyslova-hala.webp'

// Ikona ke každému projektu (pořadí = referencesPage.projects v JSON).
// Při přidání projektu přidat i ikonu sem; chybějící ikona = továrna.
const PROJECT_ICONS = ['factory', 'warehouse', 'bolt', 'landmark', 'apartment', 'warehouse', 'house', 'factory']

// Sloupce za ikonou (texty záhlaví v referencesPage.columns).
// DOČASNÉ: rozsah, rok a hodnota u projektů jsou zatím zástupná data,
// než klient pošle skutečné údaje.
const COLUMNS = ['name', 'client', 'scope', 'year', 'value']

// Stránka Reference — hero a přehled realizovaných projektů jako tabulka
// s ikonou na začátku řádku. Na telefonu je každý projekt karta, u údajů
// se ukáže název sloupce. Hodnota zakázky je v JSON číslo v Kč a formátuje
// se podle jazyka (cs: 5 000 000 Kč, en: CZK 5,000,000).
// Hero používá stejné styly jako stránka O nás (about.css).
function ReferencesPage() {
  const { t } = useTranslation()
  usePageTitle(t('nav.references'))
  const { lang } = useParams()
  const projects = t('referencesPage.projects', { returnObjects: true })
  const money = new Intl.NumberFormat(lang, { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 })
  const cell = (project, column) => (column === 'value' ? money.format(project.value) : project[column])

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
          <div className="references-list" role="table" aria-label={t('referencesPage.listLabel')}>
            <div className="references-list__row references-list__head" role="row">
              <span className="references-list__icon-cell" aria-hidden="true" />
              {COLUMNS.map((c) => (
                <span key={c} className={`references-list__${c}`} role="columnheader">
                  {t(`referencesPage.columns.${c}`)}
                </span>
              ))}
            </div>
            {projects.map((project, i) => (
              <div className="references-list__row" role="row" key={project.name}>
                <span className="references-list__icon-cell" aria-hidden="true">
                  <span className="references-list__icon">
                    <LineIcon name={PROJECT_ICONS[i] ?? 'factory'} />
                  </span>
                </span>
                {COLUMNS.map((c) => (
                  // data-label = název sloupce, na telefonu se ukáže u údaje
                  <span key={c} className={`references-list__${c}`} role="cell" data-label={t(`referencesPage.columns.${c}`)}>
                    {cell(project, c)}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta text={t('referencesPage.cta.text')} />
    </div>
  )
}

export default ReferencesPage
