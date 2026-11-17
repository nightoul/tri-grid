function ServiceIcon({ variant }) {
  return (
    <svg viewBox="0 0 48 48" className="service-card__icon" aria-hidden="true">
      <circle cx="24" cy="24" r="22" className="service-card__icon-ring" />

      {variant === 'build' && (
        <g>
          <polygon points="16,16 32,16 24,32" className="service-card__icon-glyph" />
          <rect x="21" y="7" width="6" height="7" rx="1" className="service-card__icon-glyph" />
        </g>
      )}

      {variant === 'finish' && (
        <g>
          <rect
            x="10" y="20" width="28" height="8" rx="2"
            className="service-card__icon-glyph service-card__icon-glyph--stroke"
            strokeWidth="3"
          />
          <circle cx="24" cy="24" r="2.6" className="service-card__icon-glyph" />
        </g>
      )}

      {/* koleno potrubí s přírubami — rozvody a infrastruktura */}
      {variant === 'pipes' && (
        <g
          className="service-card__icon-glyph service-card__icon-glyph--stroke"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M10 18 H24 A7 7 0 0 1 31 25 V38" />
          <path d="M15 13.5 V22.5" />
          <path d="M26.5 32 H35.5" />
        </g>
      )}
    </svg>
  )
}

export default ServiceIcon
