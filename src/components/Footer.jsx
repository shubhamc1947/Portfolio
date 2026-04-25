import { useState } from 'react';
import social from '../data/social';
import './Footer.scss';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText('shubhamchat03@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="contact-slab" id="contact">
      <div className="contact__inner shell">
        <h2 className="contact__title">
          Let's build <em>something</em>.
        </h2>
        <p className="contact__sub">
          Currently shipping insurance infra at Covrzy. Open to interesting conversations - roles, collaborations, technical writing.
        </p>
        <button className="contact__email" onClick={copy}>
          <svg className="contact__email-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2"/>
            <path d="m3 7 9 6 9-6"/>
          </svg>
          {copied ? 'Copied to clipboard' : 'shubhamchat03@gmail.com'}
        </button>
        <div className="contact__socials">
          <a href="/shubham-chaturvedi-cv.pdf" target="_blank" rel="noreferrer">CV (PDF) ↗</a>
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
