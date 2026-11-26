import { education } from '../data'
import Pills from './Pills'

export default function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <ol className="tl">
        {education.map((e) => (
          <li key={e.when}>
            <div className="when">{e.when}</div>
            <h3>{e.degree}<span>{e.school}</span></h3>
            <p>{e.text}</p>
            <Pills items={e.courses} />
          </li>
        ))}
      </ol>
    </section>
  )
}