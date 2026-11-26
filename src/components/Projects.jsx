import { projects } from '../data'
import { SniptyleArt, AnalyzerArt } from './Art'
import Pills from './Pills'

const arts = { sniptyle: <SniptyleArt />, analyzer: <AnalyzerArt /> }

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="tiles">
        {projects.map((p) => (
          <article className="tile" key={p.title}>
            <a className="ov" href={p.url} aria-label={`${p.title} on GitHub`} />
            <div className="art">
              {p.image ? <img src={p.image} alt={p.title} loading="lazy" /> : arts[p.art]}
            </div>
            <div className="tx">
              <span className="st">{p.status}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <Pills items={p.tags} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
