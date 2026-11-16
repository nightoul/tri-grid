import { describe, expect, test } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import divisions from '../src/data/divisions.js'
import LineIcon from '../src/components/LineIcon.jsx'
import ServiceIcon from '../src/components/ServiceIcon.jsx'
import cs from '../src/i18n/locales/cs/translation.json'

// Ikona existuje, když se vykreslí s nějakým obsahem (neznámý název = prázdné SVG).
const lineIconExists = (name) => /<(path|circle)/.test(renderToStaticMarkup(<LineIcon name={name} />))
// ServiceIcon má vždy kroužek, samotný glyf je ve skupině <g>.
const serviceIconExists = (name) => renderToStaticMarkup(<ServiceIcon variant={name} />).includes('<g')

// Data divize (src/data/divisions.js) musí sedět s texty v JSON:
// počet ikon a fotek služeb = počet služeb, počet ikon kroků = počet kroků.
describe.each(divisions)('divize $id', (division) => {
  const texts = cs.divisionsData[division.id]

  test('má texty v překladech', () => {
    expect(texts, `chybí divisionsData.${division.id} v JSON`).toBeDefined()
    expect(texts.label).toBeTruthy()
  })

  test('každá služba má ikonu (a fotku, pokud se používají)', () => {
    expect(division.serviceIcons).toHaveLength(texts.services.length)
    if (division.serviceImages) {
      expect(division.serviceImages).toHaveLength(texts.services.length)
    }
  })

  test('všechny ikony služeb existují', () => {
    const exists = division.serviceImages ? lineIconExists : serviceIconExists
    const missing = division.serviceIcons.filter((name) => !exists(name))
    expect(missing).toEqual([])
  })

  test('každý krok spolupráce má ikonu', () => {
    if (!division.stepIcons) return
    expect(division.stepIcons).toHaveLength(texts.steps.length)
    expect(division.stepIcons.filter((name) => !lineIconExists(name))).toEqual([])
  })

  test('každá fotka v galerii má text a naopak', () => {
    const gallery = texts.gallery ?? texts.galleryAlts ?? texts.galleryCaptions
    expect(gallery?.length, 'chybí gallery / galleryAlts / galleryCaptions').toBeGreaterThan(0)
    expect(division.galleryImages).toHaveLength(gallery.length)
  })
})
