import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Landing from './pages/Landing';
import Writing from './pages/Writing';
import Article from './pages/Article';
import CaseStudy from './pages/CaseStudy';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      // Wait for the page to render, then scroll to the section
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(scrollTo);
          if (el) {
            window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
          }
        }, 100);
      });
      // Clear the state so back-navigation doesn't re-scroll
      window.history.replaceState({}, '');
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]);
  return null;
}

const App = () => {
  const [cmdOpen, setCmdOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const gState = { armed: false, timer: null };
    const goToSection = (id) => {
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: id } });
      }
    };

    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen(o => !o);
        return;
      }
      if (cmdOpen) return;
      if (e.target.matches && e.target.matches('input, textarea')) return;
      if (e.key === '/' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setCmdOpen(true);
        return;
      }
      if (e.key === 'g') {
        gState.armed = true;
        clearTimeout(gState.timer);
        gState.timer = setTimeout(() => { gState.armed = false; }, 800);
        return;
      }
      if (gState.armed) {
        const map = { h: 'top', r: 'writing', w: 'work', s: 'skills', p: 'projects', c: 'contact' };
        const target = map[e.key.toLowerCase()];
        if (target) {
          if (target === 'top') { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
          else if (target === 'writing') navigate('/writing');
          else goToSection(target);
          gState.armed = false;
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cmdOpen, location.pathname, navigate]);

  return (
    <>
      <Navbar onOpenCmd={() => setCmdOpen(true)} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<Article />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
      <Analytics />
    </>
  );
};

export default App;
