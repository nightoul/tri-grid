import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Galerie s jednou velkou fotkou, mezi fotkami se prolíná.
// variant: 'thumbs' = velká fotka v obsahu + řada náhledů pod ní,
//          'cinema' = fotka přes celou šířku okna + tečky pod ní.
function GalleryShowcase({ eyebrow, heading, items, variant = 'thumbs' }) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const swipe = useRef(null)
  const thumbsRef = useRef(null)
  const total = items.length
  const pad = (n) => String(n).padStart(2, '0')

  const go = (i) => setIndex((i + total) % total)

  // Aktivní náhled držíme v zorném poli řady náhledů.
  useEffect(() => {
    const row = thumbsRef.current
    const thumb = row?.children[index]
    if (!thumb) return
    row.scrollTo({ left: thumb.offsetLeft - (row.clientWidth - thumb.offsetWidth) / 2, behavior: 'smooth' })
  }, [index])

  // Swipe prstem i tažení myší po velké fotce.
  const onPointerDown = (e) => {
    swipe.current = e.clientX
  }
  const onPointerUp = (e) => {
    if (swipe.current === null) return
    const dx = e.clientX - swipe.current
    swipe.current = null
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1))
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(index + 1)
    if (e.key === 'ArrowLeft') go(index - 1)
  }

  const stage = (
    <div
      className="gallery-showcase__stage"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => { swipe.current = null }}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label={heading}
    >
      {items.map((item, i) => (
        <figure
          key={item.title}
          className={`gallery-showcase__slide${i === index ? ' is-active' : ''}`}
          aria-hidden={i !== index}
        >
          <img src={item.image} alt={item.title} draggable="false" loading={i === 0 ? 'eager' : 'lazy'} />
          {!item.hideCaption && (
            <figcaption>
              <div className={variant === 'cinema' ? 'container' : undefined}>
                <strong>{item.title}</strong>
                {item.desc && <span>{item.desc}</span>}
              </div>
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )

  return (
    <div className={`gallery-showcase gallery-showcase--${variant}`}>
      <div className="container gallery-carousel__header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
        </div>
        <div className="gallery-carousel__controls">
          <span className="gallery-carousel__counter" aria-live="polite">
            <strong>{pad(index + 1)}</strong> / {pad(total)}
          </span>
          <button type="button" className="gallery-carousel__arrow" onClick={() => go(index - 1)} aria-label={t('common.galleryPrev')}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 L8 12 L15 19" /></svg>
          </button>
          <button type="button" className="gallery-carousel__arrow" onClick={() => go(index + 1)} aria-label={t('common.galleryNext')}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5 L16 12 L9 19" /></svg>
          </button>
        </div>
      </div>

      {variant === 'cinema' ? stage : <div className="container">{stage}</div>}

      <div className="container">
        {variant === 'cinema' ? (
          <div className="gallery-showcase__dots">
            {items.map((item, i) => (
              <button
                type="button"
                key={item.title}
                className={i === index ? 'is-active' : ''}
                onClick={() => go(i)}
                aria-label={t('common.gallerySlide', { n: i + 1, total })}
                aria-current={i === index}
              />
            ))}
          </div>
        ) : (
          <div className="gallery-showcase__thumbs" ref={thumbsRef}>
            {items.map((item, i) => (
              <button
                type="button"
                key={item.title}
                className={i === index ? 'is-active' : ''}
                onClick={() => go(i)}
                aria-label={t('common.gallerySlide', { n: i + 1, total })}
                aria-current={i === index}
              >
                <img src={item.image} alt="" loading="lazy" draggable="false" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryShowcase
