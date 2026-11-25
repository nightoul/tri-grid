import { afterEach, describe, expect, test } from 'vitest'
import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'
import '../src/i18n/i18n.js'
import App from '../src/App.jsx'
import languages from '../src/data/languages.js'
import divisions from '../src/data/divisions.js'
import cs from '../src/i18n/locales/cs/translation.json'

// Každá stránka v každém jazyce se musí vykreslit bez chyby, mít nadpis
// a nesmí na ní být vidět nepřeložený klíč (např. "divisionsData.kovovyroba.label").
const pages = ['', 'o-nas', 'reference', ...divisions.map((d) => `divize/${d.id}`)]
const rawKey = new RegExp(`\\b(${Object.keys(cs).join('|')})\\.[\\w.]+`)

let root
let container

afterEach(() => {
  act(() => root.unmount())
  container.remove()
})

async function render(path) {
  container = document.createElement('div')
  document.body.appendChild(container)
  root = createRoot(container)
  await act(async () => {
    root.render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    )
  })
  return container
}

describe.each(languages.map((l) => l.code))('jazyk %s', (lang) => {
  test.each(pages)('stránka /%s se vykreslí', async (page) => {
    const html = await render(`/${lang}/${page}`)
    expect(html.querySelector('h1')?.textContent).toBeTruthy()
    expect(html.textContent).not.toMatch(rawKey)
  })
})
