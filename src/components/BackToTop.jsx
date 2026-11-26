import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(scrollY > 500)
    on()
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  const top = () => scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  return (
    <button className={'btt' + (show ? ' show' : '')} type="button" aria-label="Back to top" onClick={top}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
      Back to top
    </button>
  )
}
