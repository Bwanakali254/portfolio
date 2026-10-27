import { useRef } from 'react'
import useReveal from '../hooks/useReveal'
import { education, languages, toolkit } from '../data'

export default function Toolkit({ reduced }) {
  const root = useRef(null)
  useReveal(root, reduced)

  return (
    <section id="toolkit" className="section" ref={root}>
      <div className="wrap">
        <header className="section-head" data-reveal>
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title">
            Three skills, <em>one stack.</em>
          </h2>
          <p className="section-lede">
            Most developers never see the network their site runs on. Most network technicians never ship the
            site. I do both.
          </p>
        </header>

        <div className="kit">
          {toolkit.map((group, i) => (
            <article key={group.heading} className="kit__col" data-reveal={i * 0.1}>
              <p className="kit__lead">{group.lead}</p>
              <h3 className="kit__title">{group.heading}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="edu" data-reveal>
          <div>
            <p className="eyebrow">Education & certification</p>
            <ul className="edu__list">
              {education.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>
                    {item.place} · {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Languages</p>
            <ul className="edu__list">
              {languages.map((lang) => (
                <li key={lang}>
                  <strong>{lang}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
