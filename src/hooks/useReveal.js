import { useLayoutEffect } from 'react'
import { gsap } from '../lib/gsap'

// Fades and lifts any [data-reveal] element inside `scope` as it enters the viewport.
// data-reveal="0.15" adds a delay in seconds. Skipped entirely for reduced motion.
export default function useReveal(scope, reduced) {
  useLayoutEffect(() => {
    if (reduced || !scope.current) return undefined

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 1,
          delay: Number(el.dataset.reveal) || 0,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })
    }, scope)

    return () => ctx.revert()
  }, [reduced, scope])
}
