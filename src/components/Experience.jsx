import { experience } from '../data'
import Pills from './Pills'

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ol className="tl">
        {experience.map((e) => (
          <li key={e.when}>
            <div className="when">{e.when}</div>
            <h3>{e.title}<span>{e.org}</span></h3>
            <p>{e.text}</p>
            {e.tags && <Pills items={e.tags} />}
          </li>
        ))}
      </ol>
    </section>
  )
}
