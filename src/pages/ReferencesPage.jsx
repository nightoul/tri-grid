import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import usePageTitle from '../hooks/usePageTitle.js'
// stejná fotka jako hero na stránce Stavebnictví
import heroImage from '../assets/images/stavebnictvi-hero-ukazky-praci-komercni-objekt.webp'

// Sloupce tabulky (pořadí = pořadí sloupců, texty v referencesPage.table)
const COLUMNS = ['name', 'client', 'scope', 'year', 'value']

// Stránka Reference — hero a tabulka realizovaných projektů.
// Projekty jsou v JSON (referencesPage.projects), hodnota zakázky je číslo
// v Kč a formátuje se podle jazyka (cs: 5 000 000 Kč, en: CZK 5,000,000).
// Hero používá stejné styly jako stránka O nás (about.css), fotka je ze Stavebnictví.
function ReferencesPage() {
  const { t } = useTranslation()
  usePageTitle(t('nav.references'))
  const { lang } = useParams()
  const projects = t('referencesPage.projects', { returnObjects: true })
  const money = new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: 'CZK',
    maximumFractionDigits: 0,
  })

  const cell = (project, column) =>
    column === 'value' ? money.format(project.value) : project[column]

  return (
    <>
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
          <table className="references-table" aria-label={t('referencesPage.table.caption')}>
            <thead>
              <tr>
                {COLUMNS.map((c) => (
                  <th key={c} scope="col" className={`references-table__${c}`}>
                    {t(`referencesPage.table.${c}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => (
                <tr key={i}>
                  {COLUMNS.map((c) => (
                    // data-label = název sloupce, na telefonu se ukáže u hodnoty
                    <td key={c} className={`references-table__${c}`} data-label={t(`referencesPage.table.${c}`)}>
                      {cell(project, c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="division-page-body division-page-body--blue">
        <div className="container division-page-cta">
          <p>{t('referencesPage.cta.text')}</p>
          <Link to={`/${lang}#kontakt`} className="division-page-cta__link">{t('common.ctaContact')}</Link>
        </div>
      </section>
    </>
  )
}

export default ReferencesPage
