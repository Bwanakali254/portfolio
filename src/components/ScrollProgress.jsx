import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

export default function ScrollProgress({ reduced }) {
  const bar = useRef(null)

  useLayoutEffect(() => {
    if (reduced || !bar.current) return undefined

    const tween = gsap.to(bar.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reduced])

  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__bar" ref={bar} />
    </div>
  )
}
