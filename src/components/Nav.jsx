import { useState } from 'react'
import { scrollToId } from '../lib/scroll'
import { profile } from '../data'

const links = [
  { id: 'journey', label: 'Journey' },
  { id: 'work', label: 'Work' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const go = (event, id) => {
    event.preventDefault()
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a className="nav__brand" href="#top" onClick={(e) => go(e, 'top')} aria-label={`${profile.name}, back to top`}>
          HA<span>.</span>
        </a>

        <nav aria-label="Primary" className={`nav__links ${open ? 'is-open' : ''}`}>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={(e) => go(e, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav__cta">
              <a href={profile.cv} download>
                CV
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
