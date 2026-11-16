import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

// Zvětšená fotka přes celou obrazovku. Zavírá se křížkem, klávesou Esc nebo
// kliknutím mimo fotku; šipky (i na klávesnici) a swipe listují dál.
// onClose(index) dostane fotku, na které uživatel skončil.
function GalleryLightbox({ items, start, onClose }) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(start)
  const closeRef = useRef(null)
  const swipe = useRef(null)
  const total = items.length
  const item = items[index]

  const go = (dir) => setIndex((i) => (i + dir + total) % total)
  const close = () => onClose(index)

  // Klávesy čteme přes ref, aby listener nemusel vznikat znovu při každé změně.
  const keys = useRef()
  keys.current = (e) => {
    if (e.key === 'Escape') close()
    else if (e.key === 'ArrowLeft') go(-1)
    else if (e.key === 'ArrowRight') go(1)
  }

  useEffect(() => {
    const opener = document.activeElement
    const onKey = (e) => keys.current(e)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
      opener?.focus?.({ preventScroll: true })
    }
  }, [])

  const onPointerDown = (e) => {
    swipe.current = e.clientX
  }

  const onPointerUp = (e) => {
    if (swipe.current === null) return
    const dx = e.clientX - swipe.current
    swipe.current = null
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
  }

  const pad = (n) => String(n).padStart(2, '0')

  return createPortal(
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={t('common.gallerySlide', { n: index + 1, total })}
      onClick={(e) => e.target === e.currentTarget && close()}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <span className="gallery-lightbox__counter" aria-hidden="true">
        <strong>{pad(index + 1)}</strong> / {pad(total)}
      </span>
      <img src={item.image} alt={item.title} draggable="false" />
      <button
        type="button"
        className="gallery-lightbox__close"
        onClick={close}
        aria-label={t('common.galleryClose')}
        ref={closeRef}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 L18 18 M18 6 L6 18" /></svg>
      </button>
      {total > 1 && (
        <>
          <button
            type="button"
            className="gallery-lightbox__arrow gallery-lightbox__arrow--prev"
            onClick={() => go(-1)}
            aria-label={t('common.galleryPrev')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 L8 12 L15 19" /></svg>
          </button>
          <button
            type="button"
            className="gallery-lightbox__arrow gallery-lightbox__arrow--next"
            onClick={() => go(1)}
            aria-label={t('common.galleryNext')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5 L16 12 L9 19" /></svg>
          </button>
        </>
      )}
    </div>,
    document.body,
  )
}

export default GalleryLightbox
