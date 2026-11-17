import elektrotechnikaBg from '../assets/images/Elektrotechnika_bg.webp'
import elektroPrehled from '../assets/images/elektrotechnika-prehled-rozvadec.webp'
import elektroSluzbaKabely from '../assets/images/elektrotechnika-sluzba-kabelove-trasy.webp'
import elektroSluzbaRevize from '../assets/images/elektrotechnika-sluzba-revize-mereni.webp'
import elektroSluzbaKamery from '../assets/images/elektrotechnika-sluzba-kamerovy-system.webp'
import elektroGalerieNizkonapetovy from '../assets/images/elektrotechnika-galerie-nizkonapetovy-rozvadec.webp'
import elektroGalerieDomovni from '../assets/images/elektrotechnika-galerie-domovni-rozvadec.webp'
import elektroGalerieLoxone from '../assets/images/elektrotechnika-galerie-loxone.webp'
import elektroGalerieDatovy from '../assets/images/elektrotechnika-galerie-datovy-rozvadec.webp'
import elektroGalerieTelefon from '../assets/images/elektrotechnika-galerie-domovni-telefon.webp'

import kovovyrobaBg from '../assets/images/kovovyroba-hero-zabradli.webp'
import kovoPrehled from '../assets/images/kovovyroba-prehled-fasada-balkon.webp'
import kovoSluzbaArchitektonicka from '../assets/images/kovovyroba-sluzba-architektonicka.webp'
import kovoSluzbaLesteni from '../assets/images/kovovyroba-sluzba-lesteni.webp'
import kovoSluzbaZakazkova from '../assets/images/kovovyroba-sluzba-zakazkova-vyroba.webp'
import kovoGalerieZabradli from '../assets/images/kovovyroba-galerie-zabradli-schodiste.webp'
import kovoGalerieSklo from '../assets/images/kovovyroba-galerie-sklo-zastreseni.webp'
import kovoGalerieLesteni from '../assets/images/kovovyroba-galerie-lesteni-nerezu.webp'
import kovoGalerieZakazkove from '../assets/images/kovovyroba-galerie-zakazkove-vyrobky.webp'
import kovoGalerieInterier from '../assets/images/kovovyroba-galerie-interier.webp'
import kovoGalerieDesign from '../assets/images/kovovyroba-galerie-designove-kovy.webp'
import kovoGalerieBalkon from '../assets/images/kovovyroba-galerie-balkonove-zabradli.webp'
import kovoGalerieSchodiste from '../assets/images/kovovyroba-galerie-schodistove-zabradli.webp'

import stavebnictvi1 from '../assets/images/stavebnictvi1.jpg'
import stavbaGalerieSadrokarton from '../assets/images/stavebnictvi-galerie-sadrokarton.webp'
import stavbaGalerieTechnicka from '../assets/images/stavebnictvi-galerie-technicka-mistnost.webp'
import stavbaGalerieObjekt from '../assets/images/stavebnictvi-galerie-komercni-objekt.webp'
import stavbaGalerieZpevnene from '../assets/images/stavebnictvi-galerie-zpevnene-plochy.webp'

// Texty (label, tagline, služby...) žijí v překladových slovnících pod klíčem
// divisionsData.<id> — tady zůstává jen strukturální/vizuální informace.
// Pořadí serviceIcons/serviceImages a galleryImages musí sedět s poli
// services a gallery / galleryAlts v JSON. Nová divize =
// nový záznam tady + texty v JSON; stránka i trasa /divize/<id> se vytvoří
// automaticky.
//
// Všechny divize mají stejné rozvržení. Každá potřebuje:
//   serviceImages     — fotky karet služeb (pořadí = services v JSON)
//   serviceIcons      — názvy ikon z LineIcon.jsx ke kartám služeb
//   stepIcons         — ikony kroků spolupráce (z LineIcon.jsx)
// Volitelné texty v JSON: heroSubtitle, heroCta, stepsHeading.
// Služba může mít místo "desc" seznam "items".
const divisions = [
  {
    id: 'elektrotechnika',
    accent: 'blue',
    type: 'bolt',
    heroImage: elektrotechnikaBg,
    overviewImage: elektroPrehled,
    serviceIcons: ['bolt', 'clipboard', 'network'],
    serviceImages: [elektroSluzbaKabely, elektroSluzbaRevize, elektroSluzbaKamery],
    stepIcons: ['chat', 'document', 'gear', 'check'],
    // Pořadí musí sedět s polem "galleryAlts" v JSON.
    galleryImages: [
      elektroGalerieNizkonapetovy, // Nízkonapěťový rozvaděč
      elektroGalerieDomovni, // Domovní elektrický rozvaděč
      elektroGalerieLoxone, // Řídicí jednotka Loxone v rozvaděči
      elektroGalerieDatovy, // Datový a serverový rozvaděč
      elektroGalerieTelefon, // Domovní videotelefon
    ],
  },
  {
    id: 'kovovyroba',
    accent: 'steel',
    type: 'gear',
    heroImage: kovovyrobaBg,
    overviewImage: kovoPrehled,
    serviceIcons: ['layers', 'sparkles', 'cube'],
    serviceImages: [kovoSluzbaArchitektonicka, kovoSluzbaLesteni, kovoSluzbaZakazkova],
    stepIcons: ['chat', 'document', 'gear', 'check'],
    // Pořadí musí sedět s polem "gallery" v JSON.
    galleryImages: [
      kovoGalerieSklo, // Skleněná zábradlí a zastřešení
      kovoGalerieZakazkove, // Zakázkové nerezové výrobky
      kovoGalerieBalkon, // Nerezové balkonové zábradlí
      kovoGalerieLesteni, // Broušení a leštění nerezu
      kovoGalerieSchodiste, // Nerezové schodišťové zábradlí
      kovoGalerieInterier, // Interiérové kovové konstrukce
      kovoGalerieZabradli, // Nerezová zábradlí a schodiště
      kovoGalerieDesign, // Povrchové úpravy designových kovů
    ],
  },
  {
    id: 'stavebnictvi',
    accent: 'brick',
    type: 'roof',
    heroImage: stavbaGalerieObjekt,
    overviewImage: stavebnictvi1,
    serviceIcons: ['building', 'roller', 'pipes'],
    // DOČASNÉ: fotky z galerie, než klient pošle vlastní fotky ke službám
    serviceImages: [stavbaGalerieObjekt, stavbaGalerieSadrokarton, stavbaGalerieTechnicka],
    stepIcons: ['chat', 'document', 'gear', 'check'],
    // Pořadí musí sedět s polem "galleryAlts" v JSON.
    galleryImages: [
      stavbaGalerieSadrokarton, // Sádrokartonový podhled
      stavbaGalerieTechnicka, // Technická místnost a rozvody vytápění
      stavbaGalerieObjekt, // Novostavba komerčního objektu
      stavbaGalerieZpevnene, // Zpevněné plochy a sadové úpravy
    ],
  },
]

export default divisions
