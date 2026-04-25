import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '../components/Reveal';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import articles from '../data/articles';
import work from '../data/work';
import skills from '../data/skills';
import projects from '../data/projects';
import beyond from '../data/beyond';
import './Landing.scss';

const featuredSlugs = [
  'distributed-ledger-isolation-decimal-precision',
  'scaling-sitemap-millions-pages',
  'google-docs-dynamic-template-certificates',
  'chasing-ghost-bug-react-lazy-loading',
];

const PRIMARY_SKILLS = new Set(['TypeScript', 'Go', 'React', 'Node.js', 'PostgreSQL', 'AWS']);

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
};

const noMotion = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

const Landing = () => {
  const featured = featuredSlugs.map(s => articles.find(a => a.slug === s)).filter(Boolean);
  const reduce = useReducedMotion();
  const v = reduce ? noMotion : fadeUp;

  const handleWorkMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <main className="landing">
      {/* Hero */}
      <section className="hero" id="top">
        <motion.div
          className="hero__inner"
          initial="hidden"
          animate="show"
          variants={reduce ? { hidden: { opacity: 1 }, show: { opacity: 1 } } : {
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
        >
          <motion.div className="hero__eyebrow" variants={v}>Software Engineer · Writer</motion.div>
          <motion.h1 className="hero__title" variants={v}>
            I think deeply about<br />
            the systems I <em>build</em>.<br />
            <span className="hero__faded">Then I write about them.</span>
          </motion.h1>
          <motion.p className="hero__sub" variants={v}>
            <b>Software engineer at Covrzy.</b> Building the AWS infrastructure and product surfaces behind <b>600K+ insurance bookings/month</b> at sub-200ms p95 - Health and Liability product lines shipped end-to-end.
          </motion.p>
          <motion.div className="hero__ctas" variants={v}>
            <a href="#work" className="btn btn--primary" onClick={(e) => { e.preventDefault(); scrollToId('work'); }}>
              See my work <span className="btn__arr">→</span>
            </a>
            <a href="#writing" className="btn btn--secondary" onClick={(e) => { e.preventDefault(); scrollToId('writing'); }}>
              Read my writing <span className="btn__arr">→</span>
            </a>
          </motion.div>
          <motion.div className="hero__cv" variants={v}>
            <a href="/shubham-chaturvedi-cv.pdf" target="_blank" rel="noreferrer">
              Download CV (PDF) <span className="hero__cv-arr">↗</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee ticker */}
      <section className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...Array(2)].map((_, dup) => (
            <div className="ticker__group" key={dup}>
              <span className="ticker__item">600K+ bookings / month</span>
              <span className="ticker__dot">●</span>
              <span className="ticker__item">Sub-200ms p95</span>
              <span className="ticker__dot">●</span>
              <span className="ticker__item">99.9% uptime</span>
              <span className="ticker__dot">●</span>
              <span className="ticker__item">60K+ gov users served</span>
              <span className="ticker__dot">●</span>
              <span className="ticker__item">4,300+ JSON tx/s · SafeMap bench</span>
              <span className="ticker__dot">●</span>
              <span className="ticker__item">3 product lines shipped</span>
              <span className="ticker__dot">●</span>
              <span className="ticker__item">10 articles · Dev Simplified</span>
              <span className="ticker__dot">●</span>
              <span className="ticker__item">250+ engineers mentored</span>
              <span className="ticker__dot">●</span>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="philo shell">
        <Reveal y={8}>
          <div className="philo__mark">&ldquo;</div>
          <p className="philo__quote">
            Every system I ship, I break first.<span className="philo__break"><br /></span>
            Every bug I fix, I <span className="philo__accent">write about</span>.<span className="philo__break"><br /></span>
            The loop is how I get better.
          </p>
          <div className="philo__attr">- the thread through everything below</div>
        </Reveal>
      </section>

      {/* Writing */}
      <section className="block shell" id="writing">
        <div className="shell">
          <Reveal>
            <div className="sec-head">
              <div>
                <div className="sec-label">§ 01 · Writing</div>
                <h2 className="sec-title">Articles on the <em>craft</em>.</h2>
              </div>
              <Link className="sec-link" to="/writing">
                View all writing <span className="sec-link__arr">→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="writing-grid">
              {featured.map(a => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section className="work-slab" id="work">
        <div className="shell">
          <Reveal>
            <div className="sec-head">
              <div>
                <div className="sec-label" style={{ color: 'var(--night-ink-3)' }}>§ 02 · Work</div>
                <h2 className="sec-title" style={{ color: '#fff' }}>Where I&apos;ve <em>shipped</em>.</h2>
              </div>
              <Link className="sec-link" to="/work/covrzy" style={{ color: 'var(--night-ink-2)', borderColor: 'var(--night-line)' }}>
                View all work <span className="sec-link__arr">→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="work-list">
              {work.map(j => (
                <Link key={j.slug} to={`/work/${j.slug}`} className="work-card" onMouseMove={handleWorkMove}>
                  <div className="work-card__head">
                    <div>
                      <div className="work-card__company">{j.company}</div>
                      <div className="work-card__role">{j.role}</div>
                    </div>
                    <div className="work-card__year">{j.year}</div>
                  </div>
                  <p className="work-card__highlight">{j.highlight}</p>
                  <div className="work-card__metrics">
                    {j.metrics.map(m => (
                      <div className="work-card__metric" key={m.label}>
                        <div className="work-card__metric-v">{m.value}</div>
                        <div className="work-card__metric-l">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="work-card__stack">
                    {j.techStack.slice(0, 5).map(s => <span key={s} className="chip">{s}</span>)}
                    {j.techStack.length > 5 && <span className="chip chip--more">+{j.techStack.length - 5}</span>}
                  </div>
                  <div className="work-card__cta">
                    <span>Read case study</span>
                    <span className="work-card__cta-arr">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="block block--tight shell" id="skills">
        <div className="shell">
          <Reveal>
            <div className="sec-head">
              <div>
                <div className="sec-label">§ 03 · Stack</div>
                <h2 className="sec-title">What I reach for <em>daily</em>.</h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="stack-band">
              {skills.map(g => (
                <div className="stack-row" key={g.category}>
                  <div className="stack-row__k">{g.category}</div>
                  <div className="stack-row__v">
                    {g.items.map(s => (
                      <span key={s} className={`stack-item ${PRIMARY_SKILLS.has(s) ? 'stack-item--primary' : ''}`}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="block shell" id="projects">
        <div className="shell">
          <Reveal>
            <div className="sec-head">
              <div>
                <div className="sec-label">§ 04 · Side projects</div>
                <h2 className="sec-title">Shipped on weekends.</h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="proj-list">
              {projects.map(p => (
                <div className="proj-row" key={p.name}>
                  <div className="proj-row__name">{p.name}</div>
                  <div className="proj-row__desc">{p.description}</div>
                  <div className="proj-row__stack">{p.techStack.join(' · ')}</div>
                  <div className="proj-row__links">
                    <a href={p.github} target="_blank" rel="noreferrer">Source ↗</a>
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Beyond */}
      <section className="block shell" id="beyond">
        <div className="shell">
          <Reveal>
            <div className="sec-head">
              <div>
                <div className="sec-label">§ 05 · Beyond the job</div>
                <h2 className="sec-title">What I do when <em>no one&apos;s paying me</em>.</h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="beyond-grid">
              {beyond.map((b, i) => (
                <div className="beyond-card" key={i}>
                  <div className="beyond-card__value">{b.value}<span className="beyond-card__unit">{b.unit}</span></div>
                  <div className="beyond-card__label">{b.label}</div>
                  <div className="beyond-card__desc">{b.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Landing;
