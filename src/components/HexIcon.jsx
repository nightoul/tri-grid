function HexIcon({ id, accent, type }) {
  const clipId = `hexClip-${id}`
  const hexPoints = '25,3 75,3 100,50 75,97 25,97 0,50'

  return (
    <svg viewBox="0 0 100 100" className={`hex-icon hex-icon--${accent}`} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <polygon points={hexPoints} />
        </clipPath>
      </defs>

      <polygon points={hexPoints} className="hex-outline" />

      <g clipPath={`url(#${clipId})`}>
        {type === 'bolt' && (
          <polygon points="58,10 36,54 50,54 42,90 70,42 55,42 64,10" className="hex-glyph" />
        )}
        {type === 'gear' && (
          <g>
            <circle cx="50" cy="50" r="19" className="hex-glyph-ring" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <rect
                key={deg}
                x="46"
                y="12"
                width="8"
                height="13"
                className="hex-glyph"
                transform={`rotate(${deg} 50 50)`}
              />
            ))}
          </g>
        )}
        {type === 'roof' && (
          <g
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <path d="M14 62 L49 36 L86 62" className="hex-glyph-ring hex-roof" />
            <path d="M30 49 V30" className="hex-glyph-ring" />
          </g>
        )}
      </g>
    </svg>
  )
}

export default HexIcon
