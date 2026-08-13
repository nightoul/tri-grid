function HexIcon({ id, accent, type }) {
  const clipId = `hexClip-${id}`
  const patternId = `brickPattern-${id}`
  const hexPoints = '25,3 75,3 100,50 75,97 25,97 0,50'

  return (
    <svg viewBox="0 0 100 100" className={`hex-icon hex-icon--${accent}`} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <polygon points={hexPoints} />
        </clipPath>
        {type === 'brick' && (
          <pattern id={patternId} width="34" height="18" patternUnits="userSpaceOnUse">
            <rect x="1" y="1" width="15" height="7" className="brick-block" />
            <rect x="18" y="1" width="15" height="7" className="brick-block" />
            <rect x="10" y="10" width="15" height="7" className="brick-block" />
            <rect x="-7" y="10" width="15" height="7" className="brick-block" />
            <rect x="27" y="10" width="15" height="7" className="brick-block" />
          </pattern>
        )}
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
        {type === 'brick' && (
          <rect x="0" y="0" width="100" height="100" fill={`url(#${patternId})`} />
        )}
      </g>
    </svg>
  )
}

export default HexIcon
