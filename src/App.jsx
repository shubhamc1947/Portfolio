import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Works from './components/work/Works';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';
import { Analytics } from "@vercel/analytics/react";

// Main homepage layout remains the same
const HomePage = () => {
  return (
    <div>
      <section id="home" className='homesection'>
        <Hero/>
      </section>
      <hr />
      <section id="about" className='aboutsection'>
        <About/>
      </section>
      <hr />
      <section id="skills" className='skilssection'>
        <Skills/>
        {/* <SkillTree/> */}
      </section>
      <hr />
      <section id="worksection" className='worksection'>
        <Works/>
      </section>
      <hr />
      <section id="projectsection" className='projectsection'>
        <Projects/>
      </section>
      <hr />
      <section id="contact" className='contectsection'>
        <Contact/>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Analytics/>
    </Router>
  );
};

export default App;
