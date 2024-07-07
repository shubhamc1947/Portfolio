import React from 'react'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Works from './components/work/Works'
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact'
// import SkillTree from './Skill'
const App = () => {
  return (
    <div>
      <section className='homesection'>
        <Hero/>
      </section>
      <hr />
      <section className='aboutsection'>
        <About/>
      </section>
      <hr />
      <section className='skilssection'>
        <Skills/>
        {/* <SkillTree/> */}
      </section>
      <hr />

      <section className='worksection'>
        <Works/>
      </section>
      <hr />

      <section className='projectsection'>
        <Projects/>
      </section>

      
      <hr />

      <section className='contectsection'>
        <Contact/>
      </section>
    </div>
  )
}

export default App