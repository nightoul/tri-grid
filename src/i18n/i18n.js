import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import cs from './locales/cs/translation.json'
import en from './locales/en/translation.json'

// Česká typografie: jednopísmenná předložka nebo spojka (k, s, v, z, o, u,
// a, i) nesmí zůstat na konci řádku. Za ni se vloží nezlomitelná mezera,
// takže se zalomí spolu s následujícím slovem. Platí pro všechny české texty.
const ONE_LETTER = /(^|[\s(„"])([kKsSvVzZoOuUaAiI]) /g
function keepOneLetterWords(value) {
  if (typeof value === 'string') {
    // dvakrát kvůli sousedním případům ("a v lese")
    return value.replace(ONE_LETTER, '$1$2\u00a0').replace(ONE_LETTER, '$1$2\u00a0')
  }
  if (Array.isArray(value)) return value.map(keepOneLetterWords)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, keepOneLetterWords(v)]))
  }
  return value
}

i18n.use(initReactI18next).init({
  resources: {
    cs: { translation: keepOneLetterWords(cs) },
    en: { translation: en },
  },
  lng: 'cs',
  fallbackLng: 'cs',
  supportedLngs: ['cs', 'en'],
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
