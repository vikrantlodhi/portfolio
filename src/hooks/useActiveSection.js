import { useCallback, useEffect, useRef, useState } from 'react'

// Tracks which section is in view. Waits ~100ms before switching so fast scrolling
// doesn't flicker, and locks onto the clicked item while the page glides to it.
export default function useActiveSection(ids) {
  const [active, setActive] = useState(0)
  const s = useRef({ pend: 0, timer: 0, end: 0, lock: false, unlock: () => {} })

  useEffect(() => {
    const st = s.current
    const secs = ids.map((id) => document.getElementById(id))
    const calc = () => {
      let i = 0
      secs.forEach((el, k) => { if (el && el.getBoundingClientRect().top <= innerHeight * 0.4) i = k })
      if (scrollY > 0 && innerHeight + scrollY >= document.documentElement.scrollHeight - 4) i = secs.length - 1
      return i
    }
    const set = (i) => { st.pend = i; setActive(i) }
    st.unlock = () => { st.lock = false; set(calc()) }
    let tick = false
    const spy = () => {
      tick = false
      if (st.lock) { clearTimeout(st.end); st.end = setTimeout(st.unlock, 140); return }
      const i = calc()
      if (i === st.pend) return
      st.pend = i
      clearTimeout(st.timer)
      st.timer = setTimeout(() => set(calc()), 100)
    }
    const onScroll = () => { if (!tick) { tick = true; requestAnimationFrame(spy) } }
    const onResize = () => set(calc())
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onResize)
    set(calc())
    return () => {
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onResize)
      clearTimeout(st.timer); clearTimeout(st.end)
    }
  }, [ids])

  const jump = useCallback((k) => {
    const st = s.current
    st.lock = true
    clearTimeout(st.timer)
    st.pend = k
    setActive(k)
    clearTimeout(st.end)
    st.end = setTimeout(st.unlock, 700)
  }, [])

  return { active, jump }
}
