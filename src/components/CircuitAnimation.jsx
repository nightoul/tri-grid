function CircuitAnimation() {
  return (
    <svg
      className="circuit-animation"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="circuitSparkGlow" x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="circuit-animation__traces">
        <path id="circuitRoute" d="M-80 185 H190 V112 H490 V218 H790 V125 H1080 V245 H1520" />
        <path d="M490 218 V390 H720" />
        <path d="M1080 245 V430 H1300" />
      </g>

      <g className="circuit-animation__nodes">
        <circle cx="190" cy="185" r="5" />
        <circle cx="490" cy="218" r="5" />
        <circle cx="790" cy="125" r="5" />
        <circle cx="1080" cy="245" r="5" />
        <circle cx="720" cy="390" r="5" />
        <circle cx="1300" cy="430" r="5" />
      </g>

      <g className="circuit-animation__spark" filter="url(#circuitSparkGlow)">
        <circle r="10" className="circuit-animation__spark-halo" />
        <circle r="3.5" className="circuit-animation__spark-core" />
        <animateMotion dur="11s" repeatCount="indefinite">
          <mpath href="#circuitRoute" />
        </animateMotion>
      </g>
    </svg>
  )
}

export default CircuitAnimation
