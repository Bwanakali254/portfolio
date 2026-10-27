import { useRef, useState } from 'react'
import useReveal from '../hooks/useReveal'
import { profile } from '../data'

// Optional: set VITE_CONTACT_ENDPOINT (for example a Formspree or Web3Forms URL) in Vercel's
// environment variables. Without it, the form opens the visitor's email app instead.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

// Contact details are assembled when needed rather than printed in the HTML, which
// keeps them away from the simplest scrapers.
const emailAddress = () => ['mwapodzoh6', 'gmail.com'].join('@')
const whatsappNumber = () => ['254', '796', '530', '452'].join('')

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const COOLDOWN_MS = 60000

const MESSAGES = {
  invalid: 'Please add your name, a valid email and a message of at least 10 characters.',
  throttled: 'Thanks. Please wait a minute before sending another message.',
  sending: 'Sending…',
  sent: 'Message sent. I will reply as soon as I can.',
  mailto: 'Your email app should open with the message ready to send.',
  error: 'Something went wrong. Please try WhatsApp or email instead.',
}

export default function Contact({ reduced }) {
  const root = useRef(null)
  useReveal(root, reduced)
  const [status, setStatus] = useState('idle')

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))

    // Honeypot: real visitors never fill this hidden field. Bots do.
    if (data.company) {
      setStatus('sent')
      return
    }

    const name = String(data.name || '').trim().slice(0, 100)
    const email = String(data.email || '').trim().slice(0, 160)
    const message = String(data.message || '').trim().slice(0, 2000)

    if (name.length < 2 || !EMAIL_PATTERN.test(email) || message.length < 10) {
      setStatus('invalid')
      return
    }

    try {
      const last = Number(window.localStorage.getItem('contact:last') || 0)
      if (Date.now() - last < COOLDOWN_MS) {
        setStatus('throttled')
        return
      }
    } catch {
      // Storage can be unavailable (private mode). The cooldown is a courtesy, so carry on.
    }

    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
      const body = encodeURIComponent(`${message}\n\n${name} (${email})`)
      window.location.href = `mailto:${emailAddress()}?subject=${subject}&body=${body}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)

      try {
        window.localStorage.setItem('contact:last', String(Date.now()))
      } catch {
        // See above: storage is optional.
      }
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const openWhatsApp = () => {
    const text = encodeURIComponent('Hi Hamisi, I found your portfolio and would like to talk.')
    window.open(`https://wa.me/${whatsappNumber()}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  const openEmail = () => {
    window.location.href = `mailto:${emailAddress()}`
  }

  return (
    <section id="contact" className="section contact" ref={root}>
      <div className="wrap contact__grid">
        <div data-reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">
            Let&apos;s connect <em>the next node.</em>
          </h2>
          <p className="section-lede">
            Hiring for IT support or networking, or need a site that stays up? Send a message and I will reply
            quickly.
          </p>
          <div className="contact__actions">
            <button type="button" className="btn btn--primary" onClick={openWhatsApp}>
              Chat on WhatsApp
            </button>
            <button type="button" className="btn btn--ghost" onClick={openEmail}>
              Email me
            </button>
          </div>
          <ul className="contact__links">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.cv} download>
                Download CV
              </a>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate data-reveal="0.12">
          <label>
            <span>Name</span>
            <input name="name" type="text" autoComplete="name" maxLength={100} required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" maxLength={160} required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={5} maxLength={2000} required />
          </label>
          <div className="form__trap" aria-hidden="true">
            <label>
              <span>Company</span>
              <input name="company" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
            {MESSAGES[status] || ''}
          </p>
        </form>
      </div>
    </section>
  )
}
