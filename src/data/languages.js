import czechFlag from '../assets/flag-cz.svg'
import britishFlag from '../assets/flag-gb.svg'

// Přidání dalšího jazyka = přidat sem jeden řádek. Používá to jak
// Layout.jsx (validace jazyka v URL), tak LanguageSwitcher (dropdown v menu).
const languages = [
  { code: 'cs', label: 'CZ', name: 'Čeština', flag: czechFlag },
  { code: 'en', label: 'EN', name: 'English', flag: britishFlag },
]

export default languages
