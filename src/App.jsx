import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Writing from './pages/Writing';
import Article from './pages/Article';
import CaseStudy from './pages/CaseStudy';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<Article />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
      <Analytics />
    </>
  );
};

export default App;
