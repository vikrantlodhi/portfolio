import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import useActiveSection from './hooks/useActiveSection'
import { nav } from './data'

const ids = nav.map(([id]) => id)

export default function App() {
  const { active, jump } = useActiveSection(ids)
  return (
    <>
      <TopBar />
      <div className="wrap">
        <Sidebar active={active} onJump={jump} />
        <main>
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
          <footer>Designed and coded by Vikrant Lodhi ❤️.</footer>
        </main>
      </div>
      <BackToTop />
    </>
  )
}
