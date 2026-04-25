import { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import articles from '../data/articles';
import social from '../data/social';
import './CommandPalette.scss';

const CommandPalette = ({ open, onClose }) => {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const goToSection = (id) => {
    if (isHome) {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const commands = useMemo(() => {
    const jumps = [
      { group: 'navigate', icon: '§', title: 'Home', hint: 'g h', action: () => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
      { group: 'navigate', icon: '§', title: 'Writing', hint: 'g r', action: () => navigate('/writing') },
      { group: 'navigate', icon: '§', title: 'Skills', hint: 'g s', action: () => goToSection('skills') },
      { group: 'navigate', icon: '§', title: 'Projects', hint: 'g p', action: () => goToSection('projects') },
      { group: 'navigate', icon: '§', title: 'Contact', hint: 'g c', action: () => goToSection('contact') },
    ];
    const actions = [
      { group: 'actions', icon: '↓', title: 'Copy email address', hint: 'shubhamchat03@gmail.com', action: () => { navigator.clipboard?.writeText('shubhamchat03@gmail.com'); } },
      { group: 'actions', icon: '✉', title: 'Send email', hint: '', action: () => { window.location.href = 'mailto:shubhamchat03@gmail.com'; } },
    ];
    const articleCmds = articles.map(a => {
      const url = a.externalUrl || a.mediumUrl;
      return {
        group: 'writing', icon: '¶', title: a.title, hint: `${a.readingTime} read`,
        action: () => {
          if (a.source === 'embedded') {
            navigate(`/writing/${a.slug}`);
          } else if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
          }
        },
      };
    });
    const socialCmds = social.map(s => ({
      group: 'elsewhere', icon: '↗', title: s.name, hint: s.url.replace(/^https?:\/\//, ''),
      action: () => window.open(s.url, '_blank'),
    }));
    return [...jumps, ...actions, ...articleCmds, ...socialCmds];
  }, [navigate]);

  const filtered = useMemo(() => {
    if (!q.trim()) return commands;
    const n = q.toLowerCase();
    return commands.filter(c => c.title.toLowerCase().includes(n) || c.hint?.toLowerCase().includes(n) || c.group.includes(n));
  }, [q, commands]);

  useEffect(() => setSel(0), [q]);
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 20);
    else setQ('');
  }, [open]);

  const run = (i) => {
    const c = filtered[i];
    if (c) { c.action(); onClose(); }
  };

  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => Math.min(filtered.length - 1, s + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSel(s => Math.max(0, s - 1)); }
    else if (e.key === 'Enter') { e.preventDefault(); run(sel); }
    else if (e.key === 'Escape') { e.preventDefault(); onClose(); }
  };

  if (!open) return null;

  const groups = [];
  const seen = {};
  filtered.forEach((c, i) => {
    if (!seen[c.group]) { seen[c.group] = true; groups.push({ name: c.group, items: [] }); }
    groups[groups.length - 1].items.push({ ...c, _i: i });
  });

  return (
    <div className="cmdk-scrim" onClick={onClose}>
      <div className="cmdk" onClick={(e) => e.stopPropagation()} onKeyDown={onKey}>
        <div className="cmdk__head">
          <span className="cmdk__prompt">›</span>
          <input ref={inputRef} className="cmdk__input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search or jump to…" spellCheck="false" />
          <span className="cmdk__esc">esc</span>
        </div>
        <div className="cmdk__list">
          {filtered.length === 0 && <div className="cmdk__empty">No matches.</div>}
          {groups.map(g => (
            <div key={g.name}>
              <div className="cmdk__group-label">{g.name}</div>
              {g.items.map(it => (
                <div
                  key={it._i}
                  className={`cmdk__item ${it._i === sel ? 'cmdk__item--selected' : ''}`}
                  onMouseEnter={() => setSel(it._i)}
                  onClick={() => run(it._i)}
                >
                  <span className="cmdk__icon">{it.icon}</span>
                  <span className="cmdk__title">{it.title}</span>
                  <span className="cmdk__hint">{it.hint}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
