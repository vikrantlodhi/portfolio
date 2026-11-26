import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <dl className="sp">
        {skills.map(([label, value]) => (
          <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
        ))}
      </dl>
    </section>
  )
}
