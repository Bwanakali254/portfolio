import { useLayoutEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './lib/gsap'
import { setLenis } from './lib/scroll'
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Work from './components/Work'
import Toolkit from './components/Toolkit'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const reduced = usePrefersReducedMotion()

  // Smooth scrolling, kept in step with GSAP's ticker so ScrollTrigger stays accurate.
  useLayoutEffect(() => {
    if (reduced) return undefined

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95 })
    setLenis(lenis)
    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      setLenis(null)
    }
  }, [reduced])

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="ambient" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <ScrollProgress reduced={reduced} />
      <Nav />
      <main id="main">
        <Hero reduced={reduced} />
        <Journey reduced={reduced} />
        <Work reduced={reduced} />
        <Toolkit reduced={reduced} />
        <Contact reduced={reduced} />
      </main>
      <Footer />
    </>
  )
}
