// src/components/Footer.jsx
import { motion } from 'framer-motion';
import social from '../data/social';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <motion.h2
          className="footer__heading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's build something.
        </motion.h2>
        <p className="footer__sub">
          Currently engineering at Covrzy. Open to interesting conversations.
        </p>
        <a href="mailto:shubhamchat03@gmail.com" className="footer__email">
          shubhamchat03@gmail.com
        </a>
        <div className="footer__socials">
          {social.map((item) => (
            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          ))}
        </div>
        <div className="footer__bottom">
          <span className="footer__npx">npx shubhamc1947</span>
          <span className="footer__copy">&copy; {new Date().getFullYear()} Shubham Chaturvedi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
