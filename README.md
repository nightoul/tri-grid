# Tri-Grid web

Web firmy Tri-Grid s.r.o. (React + Vite, čeština a angličtina). Po pushi do `master` se automaticky otestuje a nasadí na GitHub Pages.

## Příkazy

```bash
npm install      # instalace závislostí
npm run dev      # vývojový server
npm test         # testy (překlady, data divizí, vykreslení stránek)
npm run lint     # kontrola kódu
npm run build    # produkční build do dist/
```

## Kde co je

- `src/i18n/locales/{cs,en}/translation.json` — všechny texty webu
- `src/data/divisions.js` — divize: fotky, ikony, barvy
- `src/pages/DivisionPage.jsx` — společná stránka pro všechny divize
- `src/styles/` — styly (pořadí importů v `src/App.css`)
- `tests/` — testy
