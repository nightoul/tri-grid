# Tri-Grid web

Web firmy Tri-Grid s.r.o. (React + Vite, čeština a angličtina), běží na hostingu Forpsi na tri-grid.cz.

## Nasazení

Po pushi do `master` GitHub Actions (`.github/workflows/deploy.yml`) web zkontroluje, otestuje, sestaví a nahraje přes FTP na Forpsi do složky `www/`. Za minutu či dvě je změna na tri-grid.cz. Průběh je na kartě Actions v repozitáři; když lint nebo testy selžou, nic se nenahraje.

Přístup na FTP je v Settings → Secrets and variables → Actions: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

`public/.htaccess` (při buildu se zkopíruje do `dist/`) přesměruje web na HTTPS, zajistí, že fungují přímé odkazy na podstránky (např. `/cs/reference`), a nastaví cache.

Ruční nahrání (jen v nouzi): `npm run build` a obsah složky `dist/` včetně skrytého `.htaccess` nahrát do `www/` na Forpsi.

## Příkazy

```bash
npm install      # instalace závislostí
npm run dev      # vývojový server
npm test         # testy (překlady, data divizí, vykreslení stránek)
npm run lint     # kontrola kódu
npm run build    # produkční build do dist/
```

## Kde co je

- `src/i18n/locales/{cs,en}/translation.json` — všechny texty webu (projekty na stránce Reference jsou v `referencesPage.projects`, ikony k nim v `PROJECT_ICONS` v `src/pages/ReferencesPage.jsx`)
- `src/i18n/i18n.js` — nastavení jazyků; v češtině automaticky drží jednopísmenná slova (k, s, v, z, o, u, a, i) na řádku s dalším slovem
- `src/data/divisions.js` — divize: fotky, ikony, barvy
- `src/assets/images/` — fotky, název = `stránka-sekce-popis` (např. `kovovyroba-ukazky-praci-balkonove-zabradli.webp`; stránky `uvodni-stranka`, `elektrotechnika`, `kovovyroba`, `stavebnictvi`, `o-nas`, `reference`; sekce: `hero`, `co-pro-vas-udelame`, `nase-sluzby`, `ukazky-praci`, `proc-tri-grid`)
- `src/pages/` — stránky: úvodní, divize (`DivisionPage.jsx`, společná pro všechny divize), O nás, Reference
- `src/components/ContactCta.jsx` — závěrečná výzva „Máte projekt?“ na konci stránek
- `src/styles/` — styly (pořadí importů v `src/App.css`)
- `tests/` — testy
