// Small bridge so the nav can scroll smoothly whether or not Lenis is running.
let lenisInstance = null

export const setLenis = (instance) => {
  lenisInstance = instance
}

export const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (!el) return

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -72, duration: 1.4 })
    return
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}
