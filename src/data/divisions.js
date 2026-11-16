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

import stavebnictviBg from '../assets/images/Stavebnictvi_bg.jpg'
import stavebnictvi1 from '../assets/images/stavebnictvi1.jpg'
import hrubaStavba from '../assets/images/stavebnictvi-hruba-stavba.jpg'
import zednickePrace from '../assets/images/stavebnictvi-zednicke-prace.jpg'
import dokoncovaciPrace from '../assets/images/stavebnictvi-dokoncovaci-prace.jpg'

// Texty (label, tagline, služby...) žijí v překladových slovnících pod klíčem
// divisionsData.<id> — tady zůstává jen strukturální/vizuální informace.
// Pořadí serviceIcons/serviceImages a galleryImages musí sedět s poli
// services a gallery (galleryCaptions / galleryAlts) v JSON. Nová divize =
// nový záznam tady + texty v JSON; stránka i trasa /divize/<id> se vytvoří
// automaticky.
//
// Moderní vzhled (jako Kovovýroba a Elektrotechnika):
//   modern: true      — užší rozestupy, hero s modrou linkou a tlačítkem
//   serviceImages     — karty služeb s fotkou nahoře
//   stepIcons         — kroky spolupráce s ikonami v kroužku
//   serviceIcons      — názvy ikon z LineIcon.jsx (bez modern: ServiceIcon.jsx)
// Volitelné texty v JSON: heroSubtitle, heroCta, stepsHeading.
// Služba může mít místo "desc" seznam "items".
const divisions = [
  {
    id: 'elektrotechnika',
    accent: 'blue',
    type: 'bolt',
    heroImage: elektrotechnikaBg,
    overviewImage: elektroPrehled,
    modern: true,
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
    brightCanvas: true,
  },
  {
    id: 'kovovyroba',
    accent: 'steel',
    type: 'gear',
    heroImage: kovovyrobaBg,
    overviewImage: kovoPrehled,
    modern: true,
    serviceIcons: ['layers', 'sparkles', 'cube'],
    serviceImages: [kovoSluzbaArchitektonicka, kovoSluzbaLesteni, kovoSluzbaZakazkova],
    stepIcons: ['chat', 'document', 'gear', 'check'],
    // Pořadí musí sedět s polem "gallery" v JSON.
    galleryImages: [
      kovoGalerieZabradli, // Nerezová zábradlí a schodiště
      kovoGalerieSklo, // Skleněná zábradlí a zastřešení
      kovoGalerieLesteni, // Broušení a leštění nerezu
      kovoGalerieZakazkove, // Zakázkové nerezové výrobky
      kovoGalerieInterier, // Interiérové kovové konstrukce
      kovoGalerieDesign, // Povrchové úpravy designových kovů
    ],
  },
  {
    id: 'stavebnictvi',
    accent: 'brick',
    type: 'roof',
    heroImage: stavebnictviBg,
    overviewImage: stavebnictvi1,
    serviceIcons: ['build', 'finish', 'supervise'],
    galleryImages: [hrubaStavba, zednickePrace, dokoncovaciPrace],
  },
]

export default divisions
