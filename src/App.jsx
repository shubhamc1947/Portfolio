import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Landing from './pages/Landing';
import Writing from './pages/Writing';
import Article from './pages/Article';
import CaseStudy from './pages/CaseStudy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const App = () => {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const gState = { armed: false, timer: null };
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
        const scrollToId = (id) => {
          const el = document.getElementById(id);
          if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
        };
        const map = { h: 'top', r: 'writing', w: 'work', s: 'skills', p: 'projects', c: 'contact' };
        const target = map[e.key.toLowerCase()];
        if (target) {
          if (target === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
          else scrollToId(target);
          gState.armed = false;
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cmdOpen]);

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
