import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap'
import { scrollToId } from '../lib/scroll'
import { heroChips, profile } from '../data'
import NetworkCanvas from './NetworkCanvas'

const formatTime = () =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Nairobi',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())

function Clock() {
  const [time, setTime] = useState(formatTime)

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 30000)
    return () => clearInterval(id)
  }, [])

  return <span>{time} EAT</span>
}

function Word({ text, className = '' }) {
  return (
    <span className={`line ${className}`} aria-hidden="true">
      {[...text].map((char, i) => (
        <span key={i} className="ch">
          {char}
        </span>
      ))}
    </span>
  )
}

export default function Hero({ reduced }) {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (reduced || !root.current) return undefined

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.to('.letterbox--top', { yPercent: -100, duration: 1.5 }, 0)
        .to('.letterbox--bottom', { yPercent: 100, duration: 1.5 }, 0)
        .from('.ch', { yPercent: 115, duration: 1.3, stagger: 0.045 }, 0.2)
        .from('[data-hero]', { y: 24, opacity: 0, duration: 1, stagger: 0.1 }, 0.8)

      gsap.to('.hero__inner', {
        yPercent: -10,
        opacity: 0.15,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="top" className="hero" ref={root}>
      <NetworkCanvas reduced={reduced} />
      <div className="hero__vignette" aria-hidden="true" />
      <div className="letterbox letterbox--top" aria-hidden="true" />
      <div className="letterbox letterbox--bottom" aria-hidden="true" />

      <div className="hero__hud" aria-hidden="true">
        <span className="rec">
          <i /> Signal online
        </span>
        <span>
          {profile.location} · <Clock />
        </span>
      </div>

      <div className="wrap hero__inner">
        <p className="eyebrow" data-hero>
          IT support · Networking · Web development
        </p>
        <h1 className="hero__title" aria-label={profile.name}>
          <Word text="Hamisi" />
          <Word text="Abdalla" className="line--accent" />
        </h1>
        <p className="hero__lede" data-hero>
          I keep systems running, and build the websites that run on them. From server rooms and hotel Wi-Fi to
          a live e-commerce platform.
        </p>
        <div className="hero__cta" data-hero>
          <button type="button" className="btn btn--primary" onClick={() => scrollToId('journey')}>
            Follow the journey
          </button>
          <a className="btn btn--ghost" href={profile.cv} download>
            Download CV
          </a>
        </div>
        <ul className="chips" data-hero>
          {heroChips.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </ul>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  )
}
