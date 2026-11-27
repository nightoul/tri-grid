import { useTranslation } from 'react-i18next'
import ContactCta from '../components/ContactCta.jsx'
import LineIcon from '../components/LineIcon.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import heroImage from '../assets/images/reference-hero-prumyslova-hala.webp'

// Ikona ke každému projektu (pořadí = referencesPage.projects v JSON).
// Při přidání projektu přidat i ikonu sem; chybějící ikona = továrna.
const PROJECT_ICONS = ['factory', 'warehouse', 'bolt', 'landmark', 'apartment', 'warehouse', 'house', 'factory']

// Stránka Reference — hero a seznam realizovaných projektů bez záhlaví:
// ikona | název | objednatel. Na telefonu je každý projekt karta.
// Hero používá stejné styly jako stránka O nás (about.css).
function ReferencesPage() {
  const { t } = useTranslation()
  usePageTitle(t('nav.references'))
  const projects = t('referencesPage.projects', { returnObjects: true })

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
                <span className="references-list__client">{project.client}</span>
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
