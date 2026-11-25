import { describe, expect, test } from 'vitest'
import cs from '../src/i18n/locales/cs/translation.json'
import en from '../src/i18n/locales/en/translation.json'
import { keepOneLetterWords } from '../src/i18n/i18n.js'

// Projde oba slovníky a vrátí seznam rozdílů ve struktuře
// (chybějící klíč, jiný typ, jiný počet položek v seznamu, prázdný text).
function compare(a, b, path = '') {
  const problems = []
  const typeOf = (v) => (Array.isArray(v) ? 'array' : typeof v)

  if (typeOf(a) !== typeOf(b)) {
    return [`${path}: cs je ${typeOf(a)}, en je ${typeOf(b)}`]
  }
  if (typeof a === 'string') {
    if (!a.trim()) problems.push(`${path}: prázdný text v cs`)
    if (!b.trim()) problems.push(`${path}: prázdný text v en`)
    return problems
  }
  if (Array.isArray(a) && a.length !== b.length) {
    problems.push(`${path}: cs má ${a.length} položek, en ${b.length}`)
  }
  if (a && typeof a === 'object') {
    for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) {
      const sub = path ? `${path}.${key}` : key
      if (!(key in b)) problems.push(`${sub}: chybí v en`)
      else if (!(key in a)) problems.push(`${sub}: chybí v cs`)
      else problems.push(...compare(a[key], b[key], sub))
    }
  }
  return problems
}

describe('překlady', () => {
  test('čeština a angličtina mají stejné klíče a stejně dlouhé seznamy', () => {
    expect(compare(cs, en)).toEqual([])
  })

  test('texty s proměnnými mají v obou jazycích stejné proměnné', () => {
    const vars = (s) => [...s.matchAll(/{{\s*(\w+)\s*}}/g)].map((m) => m[1]).sort()
    const problems = []
    const walk = (a, b, path) => {
      if (typeof a === 'string') {
        if (vars(a).join() !== vars(b).join()) problems.push(path)
      } else if (a && typeof a === 'object') {
        for (const key of Object.keys(a)) if (key in b) walk(a[key], b[key], `${path}.${key}`)
      }
    }
    walk(cs, en, '')
    expect(problems).toEqual([])
  })

  test('jednopísmenná slova v češtině zůstanou na řádku s dalším slovem', () => {
    const nbsp = '\u00a0'
    expect(keepOneLetterWords('vztah k řemeslu')).toBe(`vztah k${nbsp}řemeslu`)
    expect(keepOneLetterWords('a v lese i s nimi')).toBe(`a${nbsp}v${nbsp}lese i${nbsp}s${nbsp}nimi`)
    expect(keepOneLetterWords('Bělá pod Bezdězem')).toBe('Bělá pod Bezdězem')
    expect(keepOneLetterWords({ list: ['o nás'] })).toEqual({ list: [`o${nbsp}nás`] })
  })
})
