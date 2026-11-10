import elektrotechnikaBg from '../assets/images/Elektrotechnika_bg.jpg'
import smartHome from '../assets/images/elektrotechnika-smart-home.jpg'
import rozvadec from '../assets/images/elektrotechnika-rozvadec.jpg'
import rozvodyNovostavba from '../assets/images/elektrotechnika-rozvody-novostavba.jpg'
import revizeMereni from '../assets/images/elektrotechnika-revize-mereni.jpg'

import kovovyrobaBg from '../assets/images/Kovovyroba_bg.jpg'
import kovovyroba1 from '../assets/images/kovovyroba1.jpg'
import kovovyroba2 from '../assets/images/kovovyroba2.jpg'
import kovovyroba3 from '../assets/images/kovovyroba3.jpg'
import svarovaniNaMiru from '../assets/images/kovovyroba-svarovani-na-miru.jpg'

import stavebnictviBg from '../assets/images/Stavebnictvi_bg.jpg'
import stavebnictvi1 from '../assets/images/stavebnictvi1.jpg'
import hrubaStavba from '../assets/images/stavebnictvi-hruba-stavba.jpg'
import zednickePrace from '../assets/images/stavebnictvi-zednicke-prace.jpg'
import dokoncovaciPrace from '../assets/images/stavebnictvi-dokoncovaci-prace.jpg'

// Texty (label, tagline, služby...) žijí v překladových slovnících pod klíčem
// divisionsData.<id> — tady zůstává jen strukturální/vizuální informace.
// Pořadí serviceIcons a galleryImages musí sedět s poli services
// a galleryCaptions v JSON. Nová divize = nový záznam tady + texty v JSON;
// stránka i trasa /divize/<id> se vytvoří automaticky.
const divisions = [
  {
    id: 'elektrotechnika',
    accent: 'blue',
    type: 'bolt',
    heroImage: elektrotechnikaBg,
    overviewImage: smartHome,
    serviceIcons: ['install', 'inspect', 'lowvoltage'],
    galleryImages: [rozvadec, rozvodyNovostavba, revizeMereni],
    brightCanvas: true,
  },
  {
    id: 'kovovyroba',
    accent: 'steel',
    type: 'gear',
    heroImage: kovovyrobaBg,
    overviewImage: kovovyroba1,
    serviceIcons: ['design', 'wrench', 'weld'],
    galleryImages: [kovovyroba2, kovovyroba3, svarovaniNaMiru],
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
