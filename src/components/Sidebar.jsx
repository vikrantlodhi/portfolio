import { profile, nav } from '../data'
import { icons } from '../icons'

const socials = [
  ['GitHub', profile.github],
  ['LinkedIn', profile.linkedin],
  ['Email', `mailto:${profile.email}`],
]

export default function Sidebar({ active, onJump }) {
  return (
    <header>
      <div>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="tag">{profile.tagline}</p>
        <span className="now">{profile.status}</span>
        <nav className="rail" aria-label="Sections">
          {nav.map(([id, label], k) => (
            <a key={id} className={'nl' + (active === k ? ' on' : '')} href={'#' + id} onClick={() => onJump(k)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="cv" href={import.meta.env.BASE_URL + profile.resume} download="Vikrant_Lodhi_Resume.pdf" aria-label="Download my resume as PDF">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></svg>
          My Resume
        </a>
      </div>
      <ul className="soc">
        {socials.map(([name, href]) => (
          <li key={name}>
            <a href={href} target='_blank' aria-label={name}>
              <svg viewBox="0 0 24 24"><path d={icons[name]} /></svg>
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
