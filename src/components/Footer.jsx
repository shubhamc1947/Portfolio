import social from '../data/social';
import './Footer.scss';

const Footer = () => {
  const copy = () => {
    navigator.clipboard?.writeText('shubhamchat224122@gmail.com');
  };

  return (
    <footer className="contact-slab" id="contact">
      <div className="contact__inner shell">
        <h2 className="contact__title">
          Let's build <em>something</em>.
        </h2>
        <p className="contact__sub">
          Currently shipping at Shifu Ventures. Open to interesting conversations - roles, collaborations, writing.
        </p>
        <button className="contact__email" onClick={copy}>
          <svg className="contact__email-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2"/>
            <path d="m3 7 9 6 9-6"/>
          </svg>
          shubhamchat224122@gmail.com
        </button>
        <div className="contact__socials">
          {social.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
          ))}
        </div>
        <div className="contact__foot">
          <span>© 2026 Shubham Chaturvedi · built with care</span>
          <span>Press ⌘K to navigate</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
