import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import GalleryLightbox from './GalleryLightbox.jsx'

// Posuvná galerie (carousel) "Ukázky prací" na stránkách divizí.
// Pás fotek je v šířce obsahu stránky (.container) jako ostatní sekce.
// Používá nativní scroll se scroll-snap, takže funguje swipe na mobilu
// i trackpad. Navíc šipky, tažení myší a ukazatel průběhu.
// Kliknutím na fotku se otevře zvětšená (GalleryLightbox).
function GalleryCarousel({ eyebrow, heading, items }) {
  const { t } = useTranslation()
  const rootRef = useRef(null)
  const trackRef = useRef(null)
  const drag = useRef(null)
  // Po tažení myší prohlížeč pošle ještě click; ten fotku nesmí otevřít.
  const dragged = useRef(false)
  const [state, setState] = useState({ index: 0, progress: 0, atStart: true, atEnd: false })
  const [enlarged, setEnlarged] = useState(null)

  // Vzdálenost mezi začátky dvou sousedních slidů (šířka + mezera).
  const step = () => {
    const track = trackRef.current
    const slides = track?.children
    if (!slides || slides.length < 2) return track?.clientWidth ?? 0
    return slides[1].offsetLeft - slides[0].offsetLeft
  }

  // Pozice, na které pás dojede (začátky fotek; poslední je konec pásu,
  // protože poslední fotka se zarovnává doprava). Stejné jako scroll-snap.
  const snapPoints = () => {
    const track = trackRef.current
    const slides = [...track.children]
    const max = track.scrollWidth - track.clientWidth
    // index = index fotky; víc fotek u konce může mít stejnou pozici (konec pásu)
    return slides.map((slide) => Math.min(max, slide.offsetLeft - slides[0].offsetLeft))
  }

  const scrollToPoint = (left) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    trackRef.current.scrollTo({ left, behavior: reduce ? 'auto' : 'smooth' })
  }

  // Nejbližší zastávka ve směru dir (1 = doprava, -1 = doleva) od pozice left.
  const nextPoint = (left, dir) => {
    const points = snapPoints()
    return dir > 0
      ? points.find((p) => p > left + 2)
      : points.reverse().find((p) => p < left - 2)
  }

  const update = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    const left = track.scrollLeft
    const atEnd = left >= max - 2
    const index = atEnd ? items.length - 1 : Math.round(left / (step() || 1))
    // Výplň ukazatele = viditelná část pásu + kolik už je odscrollováno.
    const visible = track.clientWidth / track.scrollWidth
    setState({
      index,
      progress: max > 0 ? visible + (1 - visible) * (left / max) : 1,
      atStart: left <= 2,
      atEnd,
    })
  }, [items.length])

  // Při změně šířky okna přepočítat počítadlo a ukazatel průběhu.
  useEffect(() => {
    const observer = new ResizeObserver(update)
    observer.observe(rootRef.current)
    return () => observer.disconnect()
  }, [update])

  const scrollByStep = (dir) => {
    const target = nextPoint(trackRef.current.scrollLeft, dir)
    if (target !== undefined) scrollToPoint(target)
  }

  // Tažení myší (dotyk a trackpad řeší prohlížeč sám). Tažení začne až po
  // posunu o pár pixelů, jinak jde o obyčejné kliknutí na fotku.
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return
    drag.current = { x: e.clientX, left: trackRef.current.scrollLeft, active: false }
  }

  const onPointerMove = (e) => {
    const d = drag.current
    if (!d) return
    const track = trackRef.current
    if (!d.active) {
      if (Math.abs(e.clientX - d.x) < 6) return
      d.active = true
      track.classList.add('is-dragging')
      track.setPointerCapture(e.pointerId)
    }
    track.scrollLeft = d.left - (e.clientX - d.x)
  }

  const endDrag = (e) => {
    const d = drag.current
    drag.current = null
    if (!d?.active) return
    // click přijde hned po pointerup, timeout pojistku uvolní až po něm
    dragged.current = true
    setTimeout(() => { dragged.current = false })
    const track = trackRef.current
    const { left } = d
    track.releasePointerCapture?.(e.pointerId)
    track.classList.remove('is-dragging')
    // Po puštění dojede na nejbližší fotku ve směru tažení.
    const dir = Math.sign(track.scrollLeft - left)
    if (!dir) return
    const target = nextPoint(track.scrollLeft - dir * 3, dir)
    if (target !== undefined) scrollToPoint(target)
  }

  // Po zavření zvětšené fotky posune pás na fotku, kde uživatel skončil.
  const closeEnlarged = (i) => {
    setEnlarged(null)
    trackRef.current.scrollTo({ left: snapPoints()[i] ?? 0 })
  }

  const total = items.length
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className="gallery-carousel" ref={rootRef}>
      <div className="container gallery-carousel__header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
        </div>
        <div className="gallery-carousel__controls">
          <span className="gallery-carousel__counter" aria-hidden="true">
            <strong>{pad(state.index + 1)}</strong> / {pad(total)}
          </span>
          <button
            type="button"
            className="gallery-carousel__arrow"
            onClick={() => scrollByStep(-1)}
            disabled={state.atStart}
            aria-label={t('common.galleryPrev')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 L8 12 L15 19" /></svg>
          </button>
          <button
            type="button"
            className="gallery-carousel__arrow"
            onClick={() => scrollByStep(1)}
            disabled={state.atEnd}
            aria-label={t('common.galleryNext')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5 L16 12 L9 19" /></svg>
          </button>
        </div>
      </div>

      <div className="container">
        <ul
          className="gallery-carousel__track"
          ref={trackRef}
          onScroll={update}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          tabIndex={0}
          aria-label={heading}
        >
          {items.map((item, i) => (
            <li
              className={`gallery-carousel__slide${i === state.index ? ' is-active' : ''}`}
              key={item.title}
              aria-label={t('common.gallerySlide', { n: i + 1, total })}
            >
              <figure>
                <button
                  type="button"
                  className="gallery-carousel__zoom"
                  onClick={() => !dragged.current && setEnlarged(i)}
                  aria-label={`${t('common.galleryEnlarge')}: ${item.title}`}
                >
                  <img src={item.image} alt={item.title} loading="lazy" draggable="false" />
                </button>
                {!item.hideCaption && (
                  <figcaption>
                    <strong>{item.title}</strong>
                    {item.desc && <span>{item.desc}</span>}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>

        <div className="gallery-carousel__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${state.progress})` }} />
        </div>
      </div>

      {enlarged !== null && (
        <GalleryLightbox items={items} start={enlarged} onClose={closeEnlarged} />
      )}
    </div>
  )
}

export default GalleryCarousel
