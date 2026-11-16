import { useState } from 'react'

// DOČASNÉ: volba varianty galerie pro klienta (viz GalleryVariantSwitch.jsx).
export const GALLERY_VARIANTS = [
  { id: 'strip', label: 'A', name: 'Pás fotek' },
  { id: 'spotlight', label: 'B', name: 'Fotka uprostřed' },
  { id: 'thumbs', label: 'C', name: 'Velká fotka + náhledy' },
  { id: 'cinema', label: 'D', name: 'Přes celou šířku' },
]

const STORAGE_KEY = 'tg-gallery-variant'

// Varianta jde nastavit i odkazem: ?galerie=b
function readInitial() {
  const fromUrl = new URLSearchParams(window.location.search).get('galerie')
  const byLabel = GALLERY_VARIANTS.find((v) => v.label.toLowerCase() === fromUrl?.toLowerCase())
  if (byLabel) return byLabel.id
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (GALLERY_VARIANTS.some((v) => v.id === saved)) return saved
  } catch {
    // localStorage nemusí být dostupné (anonymní okno apod.)
  }
  return GALLERY_VARIANTS[0].id
}

export function useGalleryVariant() {
  const [variant, setVariantState] = useState(readInitial)
  const setVariant = (id) => {
    setVariantState(id)
    // Odkaz v adresním řádku odpovídá zvolené variantě (dá se poslat klientovi).
    const url = new URL(window.location.href)
    url.searchParams.set('galerie', GALLERY_VARIANTS.find((v) => v.id === id).label.toLowerCase())
    window.history.replaceState(window.history.state, '', url)
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      // nevadí, volba jen nepřežije obnovení stránky
    }
  }
  return [variant, setVariant]
}
