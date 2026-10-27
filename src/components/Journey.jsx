import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { journey } from '../data'
import { SCENES } from './Scenes'

const DEFAULT_ACCENT = '#35e0c1'
const setAccent = (color) => document.documentElement.style.setProperty('--accent', color)

export default function Journey({ reduced }) {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (reduced || !root.current) return undefined

    const ctx = gsap.context(() => {
      // The rail fills as the story is scrolled.
      gsap.to('.rail__fill', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.journey__scenes', start: 'top 60%', end: 'bottom 60%', scrub: true },
      })

      gsap.utils.toArray('.scene').forEach((scene) => {
        const accent = scene.dataset.accent

        ScrollTrigger.create({
          trigger: scene,
          start: 'top 55%',
          end: 'bottom 55%',
          onToggle: (self) => scene.classList.toggle('is-active', self.isActive),
          onEnter: () => setAccent(accent),
          onEnterBack: () => setAccent(accent),
        })

        gsap.from(scene.querySelectorAll('[data-in]'), {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: scene, start: 'top 72%', once: true },
        })

        // Illustration drifts slightly against the scroll for depth.
        const art = scene.querySelector('.scene__art')
        if (art) {
          gsap.fromTo(
            art,
            { yPercent: 7 },
            {
              yPercent: -7,
              ease: 'none',
              scrollTrigger: { trigger: scene, start: 'top bottom', end: 'bottom top', scrub: true },
            },
          )
        }

        // Cables and links draw themselves in when the scene arrives.
        const strokes = scene.querySelectorAll('.draw')
        if (strokes.length) {
          gsap.set(strokes, { strokeDasharray: 1, strokeDashoffset: 1 })
          gsap.to(strokes, {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: 'power2.inOut',
            stagger: 0.15,
            scrollTrigger: { trigger: scene, start: 'top 65%', once: true },
          })
        }

        // The sun rises as the "Going live" scene scrolls through.
        const sun = scene.querySelector('.sun')
        if (sun) {
          gsap.fromTo(
            sun,
            { y: 80 },
            {
              y: -14,
              ease: 'none',
              scrollTrigger: { trigger: scene, start: 'top 80%', end: 'center 40%', scrub: true },
            },
          )
        }
      })
    }, root)

    return () => {
      ctx.revert()
      setAccent(DEFAULT_ACCENT)
    }
  }, [reduced])

  return (
    <section id="journey" className={`journey ${reduced ? 'is-static' : 'is-live'}`} ref={root}>
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">The journey</p>
          <h2 className="section-title">
            From the server room <em>to the live site.</em>
          </h2>
          <p className="section-lede">
            Five stops, one thread: make technology dependable for the people who use it.
          </p>
        </header>

        <div className="journey__scenes">
          <div className="rail" aria-hidden="true">
            <div className="rail__fill" />
          </div>

          {journey.map((stop) => {
            const Art = SCENES[stop.art]
            return (
              <article key={stop.id} id={stop.id} className="scene" data-accent={stop.accent}>
                <span className="scene__node" aria-hidden="true" />
                <div className="scene__text">
                  <p className="scene__meta" data-in>
                    <span>{stop.index}</span>
                    {stop.period}
                  </p>
                  <h3 className="scene__title" data-in>
                    {stop.title}
                  </h3>
                  <p className="scene__place" data-in>
                    {stop.place}
                  </p>
                  <p className="scene__body" data-in>
                    {stop.body}
                  </p>
                  <ul className="scene__points" data-in>
                    {stop.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="scene__art" aria-hidden="true">
                  <Art reduced={reduced} />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
