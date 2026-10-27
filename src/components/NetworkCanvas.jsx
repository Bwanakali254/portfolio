import { useEffect, useRef } from 'react'

// Living network backdrop for the hero: drifting nodes that link up when close
// and lean toward the pointer. Pauses off-screen and in hidden tabs; draws one
// still frame for reduced motion.
const LINK_DISTANCE = 150
const POINTER_RADIUS_SQ = 22000

export default function NetworkCanvas({ reduced }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let width = 0
    let height = 0
    let raf = 0
    let visible = true
    let nodes = []
    const pointer = { x: -9999, y: -9999 }

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round(Math.min(90, Math.max(28, (width * height) / 16000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        const dx = pointer.x - n.x
        const dy = pointer.y - n.y
        const d2 = dx * dx + dy * dy
        if (d2 < POINTER_RADIUS_SQ) {
          const pull = (1 - d2 / POINTER_RADIUS_SQ) * 0.02
          n.x -= dx * pull
          n.y -= dy * pull
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.lineWidth = 1

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(53, 224, 193, ${(1 - dist / LINK_DISTANCE) * 0.35})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = 'rgba(180, 255, 240, 0.85)'
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      if (visible && !document.hidden) {
        step()
        draw()
      }
      raf = requestAnimationFrame(loop)
    }

    const onPointer = (e) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
    }

    const onResize = () => {
      build()
      if (reduced) draw()
    }

    build()
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    observer.observe(canvas)
    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(canvas)

    if (reduced) {
      draw()
    } else {
      window.addEventListener('pointermove', onPointer, { passive: true })
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointer)
      observer.disconnect()
      resizeObserver.disconnect()
    }
  }, [reduced])

  return <canvas ref={ref} className="hero__canvas" aria-hidden="true" />
}
