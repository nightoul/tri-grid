import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Posuvná galerie (carousel) pro "moderní" divizní stránky.
// Pás fotek používá nativní scroll se scroll-snap, takže funguje swipe na
// mobilu i trackpad. Navíc šipky, tažení myší a ukazatel průběhu.
// variant: 'strip' = pás fotek zarovnaný vlevo,
//          'spotlight' = jedna velká fotka uprostřed, sousední ztlumené.
function GalleryCarousel({ eyebrow, heading, items, variant = 'strip' }) {
  const { t } = useTranslation()
  const rootRef = useRef(null)
  const headerRef = useRef(null)
  const trackRef = useRef(null)
  const drag = useRef(null)
  const [state, setState] = useState({ index: 0, progress: 0, atStart: true, atEnd: false })

  // Vzdálenost mezi začátky dvou sousedních slidů (šířka + mezera).
  const step = () => {
    const track = trackRef.current
    const slides = track?.children
    if (!slides || slides.length < 2) return track?.clientWidth ?? 0
    return slides[1].offsetLeft - slides[0].offsetLeft
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

  // Pás fotek zarovnáme s obsahem stránky: odsazení = levý okraj textu
  // v hlavičce (padding .container se mění podle šířky okna).
  const align = useCallback(() => {
    const root = rootRef.current
    const header = headerRef.current
    if (!root || !header) return
    const inset = header.getBoundingClientRect().left - root.getBoundingClientRect().left
      + parseFloat(getComputedStyle(header).paddingLeft)
    root.style.setProperty('--carousel-inset', `${inset}px`)
    update()
  }, [update])

  useEffect(() => {
    const observer = new ResizeObserver(align)
    observer.observe(rootRef.current)
    return () => observer.disconnect()
  }, [align])

  const scrollByStep = (dir) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    trackRef.current.scrollBy({ left: dir * step(), behavior: reduce ? 'auto' : 'smooth' })
  }

  // Tažení myší (dotyk a trackpad řeší prohlížeč sám).
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return
    const track = trackRef.current
    drag.current = { x: e.clientX, left: track.scrollLeft }
    track.classList.add('is-dragging')
    track.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!drag.current) return
    trackRef.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x)
  }

  const endDrag = (e) => {
    if (!drag.current) return
    const track = trackRef.current
    const { left } = drag.current
    drag.current = null
    track.releasePointerCapture?.(e.pointerId)
    track.classList.remove('is-dragging')
    // Po puštění dojede na nejbližší fotku ve směru tažení.
    const s = step()
    if (!s) return
    const dir = Math.sign(track.scrollLeft - left)
    const target = (dir > 0 ? Math.ceil(track.scrollLeft / s) : Math.floor(track.scrollLeft / s)) * s
    track.scrollTo({ left: target, behavior: 'smooth' })
  }

  const total = items.length
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className={`gallery-carousel gallery-carousel--${variant}`} ref={rootRef}>
      <div className="container gallery-carousel__header" ref={headerRef}>
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
              <img src={item.image} alt={item.title} loading="lazy" draggable="false" />
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

      <div className="container">
        <div className="gallery-carousel__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${state.progress})` }} />
        </div>
      </div>
    </div>
  )
}

export default GalleryCarousel
