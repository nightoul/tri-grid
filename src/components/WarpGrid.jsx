import { useEffect, useRef } from 'react'

export default function WarpGrid() {
  const svgRef = useRef(null)
  const pathRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    const hero = svg.closest('.hero')
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let width = 0
    let height = 0
    let frame = 0
    let visible = true
    let previous = 0
    let strength = 0
    const pointer = { x: 0, y: 0, active: false }
    const center = { x: 0, y: 0 }

    function draw(time = 0) {
      frame = 0
      if (!visible || document.hidden) return
      const delta = previous ? Math.min(time - previous, 64) : 16
      previous = time
      const ease = 1 - Math.exp(-delta / 110)
      const active = pointer.active && !motion.matches
      strength += ((active ? 1 : 0) - strength) * ease
      center.x += (pointer.x - center.x) * ease
      center.y += (pointer.y - center.y) * ease
      const radius = 230
      const point = (x, y) => {
        const dx = x - center.x
        const dy = y - center.y
        const pull = Math.exp(-(dx * dx + dy * dy) / (radius * radius)) * 0.34 * strength
        return `${(x - dx * pull).toFixed(1)},${(y - dy * pull).toFixed(1)}`
      }
      let lines = ''
      for (let x = -32; x <= width + 32; x += 32) {
        for (let y = -32; y < height + 48; y += 12) lines += `${y === -32 ? 'M' : 'L'}${point(x, y)}`
      }
      for (let y = -32; y <= height + 32; y += 32) {
        for (let x = -32; x < width + 48; x += 12) lines += `${x === -32 ? 'M' : 'L'}${point(x, y)}`
      }
      pathRef.current.setAttribute('d', lines)
      if (!motion.matches && (active || strength > 0.001)) frame = requestAnimationFrame(draw)
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(draw)
    }
    function move(event) {
      if (event.pointerType === 'touch') return
      const rect = hero.getBoundingClientRect()
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
        leave()
        return
      }
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      if (!pointer.active) Object.assign(center, { x: pointer.x, y: pointer.y })
      pointer.active = true
      schedule()
    }
    function leave() {
      pointer.active = false
      schedule()
    }
    const resize = new ResizeObserver(() => {
      width = hero.clientWidth
      height = hero.clientHeight
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
      schedule()
    })
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) schedule()
    })
    resize.observe(hero)
    intersection.observe(hero)
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)
    document.addEventListener('visibilitychange', schedule)
    motion.addEventListener('change', schedule)
    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      intersection.disconnect()
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
      document.removeEventListener('visibilitychange', schedule)
      motion.removeEventListener('change', schedule)
    }
  }, [])

  return <svg ref={svgRef} className="hero__warp-grid" aria-hidden="true"><path ref={pathRef} /></svg>
}
