import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleScrollTo = (e, id) => {
    if (!isHome) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">SC</Link>
        <div className="navbar__links">
          <Link to="/writing">Writing</Link>
          {isHome ? (
            <a href="#work" onClick={(e) => handleScrollTo(e, 'work')}>Work</a>
          ) : (
            <Link to="/#work">Work</Link>
          )}
          {isHome ? (
            <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contact</a>
          ) : (
            <Link to="/#contact">Contact</Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
