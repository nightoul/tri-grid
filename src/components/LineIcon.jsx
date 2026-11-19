// Tenké obrysové ikony (24×24, barva podle currentColor) pro karty služeb
// a kroky spolupráce na stránkách divizí, pro sekce na úvodní stránce a O nás.
const paths = {
  // vrstvené desky — stavební a architektonická kovovýroba
  layers: (
    <>
      <path d="M12 3 L21 8 L12 13 L3 8 Z" />
      <path d="M3 12 L12 17 L21 12" />
      <path d="M3 16 L12 21 L21 16" />
    </>
  ),
  // jiskry — broušení a leštění
  sparkles: (
    <>
      <path d="M10 3 L11.6 8.4 L17 10 L11.6 11.6 L10 17 L8.4 11.6 L3 10 L8.4 8.4 Z" />
      <path d="M18 14 L18.8 16.2 L21 17 L18.8 17.8 L18 20 L17.2 17.8 L15 17 L17.2 16.2 Z" />
      <path d="M18 3 V6 M16.5 4.5 H19.5" />
    </>
  ),
  // kostka — zakázková výroba
  cube: (
    <>
      <path d="M12 2.5 L20.5 7.25 V16.75 L12 21.5 L3.5 16.75 V7.25 Z" />
      <path d="M3.5 7.25 L12 12 L20.5 7.25 M12 12 V21.5" />
    </>
  ),
  // blesk — elektroinstalace
  bolt: (
    <path d="M13.5 2.5 L5 13.5 H11.5 L10.5 21.5 L19 10.5 H12.5 Z" />
  ),
  // deska s fajfkou — revize a odborné prohlídky
  clipboard: (
    <>
      <path d="M8.5 4.5 H6 V21.5 H18 V4.5 H15.5" />
      <path d="M9 3 H15 V6 H9 Z" />
      <path d="M9 13.5 L11.2 15.7 L15.5 11.2" />
    </>
  ),
  // signál / síť — slaboproudé systémy
  network: (
    <>
      <path d="M2.5 9 A13.5 13.5 0 0 1 21.5 9" />
      <path d="M5.5 12.5 A9 9 0 0 1 18.5 12.5" />
      <path d="M8.5 16 A4.5 4.5 0 0 1 15.5 16" />
      <path d="M12 19.5 H12.01" strokeWidth="2.6" />
    </>
  ),
  // bublina — poptávka a konzultace
  chat: (
    <>
      <path d="M4 5.5 H20 V16 H10 L6 19.5 V16 H4 Z" />
      <path d="M8 10.5 H8.01 M12 10.5 H12.01 M16 10.5 H16.01" strokeWidth="2.4" />
    </>
  ),
  // dokument — návrh a nacenění
  document: (
    <>
      <path d="M6 2.5 H14.5 L19 7 V21.5 H6 Z" />
      <path d="M14.5 2.5 V7 H19 M9 11.5 H16 M9 15 H16 M9 18.5 H13" />
    </>
  ),
  // ozubené kolo — výroba a montáž
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5 L13.6 5 L16.6 4.1 L17.1 7.1 L20 8.1 L18.7 10.9 L20.6 13.3 L17.9 14.8 L18 17.9 L15 17.7 L13.4 20.3 L12 19.5 L10.6 20.3 L9 17.7 L6 17.9 L6.1 14.8 L3.4 13.3 L5.3 10.9 L4 8.1 L6.9 7.1 L7.4 4.1 L10.4 5 Z" />
    </>
  ),
  // papírová vlaštovka — tlačítko poptávky
  send: (
    <>
      <path d="M21 3 L3 10.5 L10 13.5 L13.5 21 Z" />
      <path d="M21 3 L10 13.5" />
    </>
  ),
  // budova — kompletní stavební realizace
  building: (
    <>
      <path d="M3 21 H21" />
      <path d="M5 21 V5 L13 3 V21" />
      <path d="M13 9 H19 V21" />
      <path d="M8 8 H10 M8 12 H10 M8 16 H10 M16 13 H16.01 M16 17 H16.01" />
    </>
  ),
  // malířský váleček — rekonstrukce a modernizace
  roller: (
    <>
      <rect x="4" y="3.5" width="13" height="5" rx="1.2" />
      <path d="M17 6 H19.5 V11 H11.5 V14" />
      <rect x="10" y="14" width="3" height="7" rx="1" />
    </>
  ),
  // koleno potrubí s přírubami — rozvody a infrastruktura
  pipes: (
    <>
      <path d="M4 9 H12 A3.5 3.5 0 0 1 15.5 12.5 V20" />
      <path d="M7 6.5 V11.5" />
      <path d="M13 16.5 H18" />
    </>
  ),
  // klíč — vztah k řemeslu
  wrench: (
    <path d="M14.7 6.3 A1 1 0 0 0 14.7 7.7 L16.3 9.3 A1 1 0 0 0 17.7 9.3 L21.47 5.53 A6 6 0 0 1 13.53 13.47 L6.62 20.38 A2.12 2.12 0 0 1 3.62 17.38 L10.53 10.47 A6 6 0 0 1 18.47 2.53 L14.71 6.29 Z" />
  ),
  // štít s fajfkou — odpovědnost
  shieldCheck: (
    <>
      <path d="M12 3 L19 5.8 V11.5 C19 15.9 16.2 19.2 12 21 C7.8 19.2 5 15.9 5 11.5 V5.8 Z" />
      <path d="M9 12 L11 14 L15 9.8" />
    </>
  ),
  // skupina lidí — spolupráce
  users: (
    <>
      <path d="M16 21 V19 A4 4 0 0 0 12 15 H6 A4 4 0 0 0 2 19 V21" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21 V19 A4 4 0 0 0 19 15.13" />
      <path d="M16 3.13 A4 4 0 0 1 16 10.88" />
    </>
  ),
  // štít — odbornost a bezpečnost
  shield: (
    <path d="M12 3 L19 5.8 V11.5 C19 15.9 16.2 19.2 12 21 C7.8 19.2 5 15.9 5 11.5 V5.8 Z" />
  ),
  // podání rukou — individuální přístup
  handshake: (
    <>
      <path d="M11 17 L13 19 A1 1 0 0 0 16 16" />
      <path d="M14 14 L16.5 16.5 A1 1 0 0 0 19.5 13.5 L15.6 9.6 A3 3 0 0 0 11.4 9.6 L10.5 10.5 A1 1 0 0 1 7.5 7.5 L10.3 4.7 A5.8 5.8 0 0 1 17.4 3.8 L17.9 4.1 A2 2 0 0 0 19.3 4.4 L21 4" />
      <path d="M21 3 L22 14 H20" />
      <path d="M3 3 L2 14 L8.5 20.5 A1 1 0 0 0 11.5 17.5" />
      <path d="M3 4 H11" />
    </>
  ),
  // fajfka ve čtverci — předání
  checkbox: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M8.5 12.2 L11 14.7 L15.8 9.6" />
    </>
  ),
  // fajfka v kruhu — kontrola a předání
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.2 L10.8 15 L16.2 9.2" />
    </>
  ),
}

function LineIcon({ name, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`line-icon ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export default LineIcon
