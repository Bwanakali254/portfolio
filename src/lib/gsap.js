import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register once so every component can import from here.
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
