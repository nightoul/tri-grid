import { GALLERY_VARIANTS } from '../hooks/useGalleryVariant.js'

// DOČASNÉ: přepínač vzhledu galerie, aby si klient mohl vybrat variantu
// na jedné URL. Po výběru smazat tento soubor, src/hooks/useGalleryVariant.js,
// jejich použití v DivisionPage.jsx a styly "DOČASNÉ: přepínač" v division-pages.css.
function GalleryVariantSwitch({ value, onChange }) {
  const current = GALLERY_VARIANTS.find((v) => v.id === value)
  return (
    <div className="gallery-switch" role="radiogroup" aria-label="Varianta galerie">
      <span className="gallery-switch__label">
        Galerie
        <small>{current?.name}</small>
      </span>
      {GALLERY_VARIANTS.map((v) => (
        <button
          type="button"
          key={v.id}
          role="radio"
          aria-checked={v.id === value}
          title={v.name}
          className={v.id === value ? 'is-active' : ''}
          onClick={() => {
            onChange(v.id)
            document.querySelector('.gallery-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          {v.label}
        </button>
      ))}
    </div>
  )
}

export default GalleryVariantSwitch
