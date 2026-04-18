import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.scss';

const scrollToEl = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
};

const Navbar = ({ onOpenCmd }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      scrollToEl(id);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
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
            <a href="/#work" className="nav__link-desktop" onClick={(e) => handleSectionClick(e, 'work')}>Work</a>
            <a href="/#contact" className="nav__link-desktop" onClick={(e) => handleSectionClick(e, 'contact')}>Contact</a>
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
            <a href="/#work" onClick={(e) => handleSectionClick(e, 'work')}>Work</a>
            <a href="/#contact" onClick={(e) => handleSectionClick(e, 'contact')}>Contact</a>
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
