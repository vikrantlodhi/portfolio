import { useState } from 'react'
import { profile } from '../data'

const ENDPOINT = 'https://api.web3forms.com/submit'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', text: '' })
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (e.target.botcheck.checked) return // hidden spam trap
    setStatus({ state: 'sending', text: '' })
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          subject: `Portfolio message from ${f.name.trim()}`,
          from_name: 'Portfolio website',
          name: f.name.trim(),
          email: f.email.trim(),
          message: f.message.trim(),
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus({ state: 'success', text: 'Thanks! Your message was sent. I’ll get back to you soon.' })
        setF({ name: '', email: '', message: '' })
      } else {
        setStatus({ state: 'error', text: 'Something went wrong. Please try again, or email me directly below.' })
      }
    } catch {
      setStatus({ state: 'error', text: 'Network error. Please try again, or email me directly below.' })
    }
  }

  return (
    <section id="contact">
      <div className="cta">
        <h2>Let’s talk</h2>
        <p>Hiring, collaborating, or running a training programme? Leave a note and I’ll get back to you.</p>
        <form className="fm" onSubmit={submit}>
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
          <div className="row">
            <label>Name<input name="name" type="text" autoComplete="name" required placeholder="Your name" value={f.name} onChange={change} /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" value={f.email} onChange={change} /></label>
          </div>
          <label>Your message<textarea name="message" required placeholder="How can I help?" value={f.message} onChange={change} /></label>
          <button type="submit" disabled={status.state === 'sending'}>
            {status.state === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          <p className={'ok ' + status.state} role="status" aria-live="polite">{status.text}</p>
        </form>
        <div className="direct">
          <span>Prefer to write directly? Email me at</span>
          <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="lk">
            <a href={profile.github} target='_blank'>GitHub</a>
            <a href={profile.linkedin} target='_blank'>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}