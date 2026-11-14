function ServiceIcon({ variant }) {
  return (
    <svg viewBox="0 0 48 48" className="service-card__icon" aria-hidden="true">
      <circle cx="24" cy="24" r="22" className="service-card__icon-ring" />

      {variant === 'install' && (
        <path
          d="M24 12 L16 26 H22 L19 36 L32 20 H25 Z"
          className="service-card__icon-glyph"
        />
      )}

      {variant === 'inspect' && (
        <path
          d="M15 24 L21 30 L33 16"
          fill="none"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="service-card__icon-glyph service-card__icon-glyph--stroke"
        />
      )}

      {variant === 'lowvoltage' && (
        <g className="service-card__icon-glyph service-card__icon-glyph--stroke" strokeWidth="3.2" strokeLinecap="round" fill="none">
          <circle cx="24" cy="24" r="4.5" />
          <path d="M24 12 V16.5 M24 31.5 V36 M12 24 H16.5 M31.5 24 H36" />
        </g>
      )}

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

      {variant === 'supervise' && (
        <g
          className="service-card__icon-glyph service-card__icon-glyph--stroke"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M12 27 A12 12 0 0 1 36 27" />
          <path d="M8 27 H40" />
        </g>
      )}
    </svg>
  )
}

export default ServiceIcon
