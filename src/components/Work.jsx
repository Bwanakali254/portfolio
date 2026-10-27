import { useRef } from 'react'
import useReveal from '../hooks/useReveal'
import { projects, testimonial } from '../data'
import entServicesImg from '../assets/projects/Ent Services.png'
import clientPhoto from '../assets/Testimonial/sothside ceo.jpg'

// To use a real screenshot for a project: drop it in src/assets/projects/, import it above,
// and add it to the IMAGES map below, keyed by the project title.
const IMAGES = {
  'ENT Services': entServicesImg,
}

function Cover({ project }) {
  const img = IMAGES[project.title]
  if (img) {
    return <img className="cover__img" src={img} alt={`${project.title} website preview`} loading="lazy" />
  }

  return (
    <div className="cover__mock" style={{ '--c1': project.c1, '--c2': project.c2 }} aria-hidden="true">
      <div className="cover__bar">
        <i />
        <i />
        <i />
        <span>{project.host}</span>
      </div>
      <div className="cover__mark">{project.title}</div>
    </div>
  )
}

export default function Work({ reduced }) {
  const root = useRef(null)
  useReveal(root, reduced)

  return (
    <section id="work" className="section" ref={root}>
      <div className="wrap">
        <header className="section-head" data-reveal>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">
            Live sites, <em>real businesses.</em>
          </h2>
          <p className="section-lede">
            Everything below is in production. I build it, host it, watch it and keep it secure.
          </p>
        </header>

        <div className="cards">
          {projects.map((project, i) => (
            <article key={project.title} className="card" data-reveal={(i % 2) * 0.12}>
              <div className="cover">
                <Cover project={project} />
              </div>
              <div className="card__body">
                <p className="card__kicker">{project.kicker}</p>
                <h3 className="card__title">{project.title}</h3>
                <p className="card__text">{project.summary}</p>
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a className="card__link" href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit {project.host} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <figure className="quote" data-reveal>
          <blockquote>“{testimonial.quote}”</blockquote>
          <figcaption>
            <img src={clientPhoto} alt="" width="48" height="48" loading="lazy" />
            <span>
              <strong>{testimonial.name}</strong>
              {testimonial.title}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
