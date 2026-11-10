import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Nastaví <title> stránky ve tvaru "Název | Tri-Grid s.r.o.".
// Bez argumentu použije výchozí titulek webu (meta.title v JSON).
function usePageTitle(pageTitle) {
  const { t } = useTranslation()
  const siteName = t('meta.siteName')
  const title = pageTitle ? `${pageTitle} | ${siteName}` : t('meta.title')

  useEffect(() => {
    document.title = title
  }, [title])
}

export default usePageTitle
