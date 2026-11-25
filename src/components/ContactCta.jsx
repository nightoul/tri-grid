import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Závěrečná výzva ke kontaktu na konci stránky (divize, O nás, Reference):
// nadpis "Máte projekt?", text podle stránky a tlačítko na kontaktní formulář.
function ContactCta({ text }) {
  const { t } = useTranslation()
  const { lang } = useParams()

  return (
    <section className="division-cta">
      <div className="container division-cta__inner">
        <div>
          <h2>{t('common.ctaHeading')}</h2>
          <p>{text}</p>
        </div>
        <Link to={`/${lang}#kontakt`} className="division-cta__button">{t('common.ctaButton')}</Link>
      </div>
    </section>
  )
}

export default ContactCta
