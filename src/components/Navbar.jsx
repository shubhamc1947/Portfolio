import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = ({ onOpenCmd }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const scrollToId = (e, id) => {
    if (!isHome) return;
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav__shell">
          <Link to="/" className="logo">
            <span className="logo__glyph">s</span>
            <span className="logo__dot" />
            <span className="logo__glyph">c</span>
          </Link>
          <div className="nav__links">
            <Link to="/writing" className="nav__link-desktop">Writing</Link>
            <Link to={isHome ? '#work' : '/'} className="nav__link-desktop" onClick={isHome ? (e) => scrollToId(e, 'work') : undefined}>Work</Link>
            <Link to={isHome ? '#contact' : '/'} className="nav__link-desktop" onClick={isHome ? (e) => scrollToId(e, 'contact') : undefined}>Contact</Link>
            {onOpenCmd && (
              <button className="nav__cmd" onClick={onOpenCmd} title="Command palette">
                <span className="nav__cmd-label">Search</span>
                <span className="nav__kbd">⌘K</span>
              </button>
            )}
            <button className="nav__hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu__inner" onClick={e => e.stopPropagation()}>
            <Link to="/writing" onClick={() => setMenuOpen(false)}>Writing</Link>
            <Link to={isHome ? '#work' : '/'} onClick={(e) => { if (isHome) { scrollToId(e, 'work'); } else { setMenuOpen(false); } }}>Work</Link>
            <Link to={isHome ? '#contact' : '/'} onClick={(e) => { if (isHome) { scrollToId(e, 'contact'); } else { setMenuOpen(false); } }}>Contact</Link>
            {onOpenCmd && (
              <button onClick={() => { setMenuOpen(false); onOpenCmd(); }}>Search ⌘K</button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
