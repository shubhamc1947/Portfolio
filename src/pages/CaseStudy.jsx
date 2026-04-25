// src/pages/CaseStudy.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import work from '../data/work';
import './CaseStudy.scss';

const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const currentIndex = work.findIndex((w) => w.slug === slug);
  const job = work[currentIndex];
  const prev = currentIndex > 0 ? work[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < work.length - 1 ? work[currentIndex + 1] : null;

  if (!job) {
    return (
      <main className="case-study">
        <div className="case-study__inner">
          <h1>Not found</h1>
          <Link to="/">← Back home</Link>
        </div>
      </main>
    );
  }

  const goToWorkSection = (e) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'work' } });
  };

  return (
    <main className="case-study">
      <div className="case-study__inner">
        <Link to="/" className="case-study__back">← Back home</Link>

        <ScrollReveal>
          <header className="case-study__header">
            <span className="case-study__duration">{job.year}</span>
            <h1 className="case-study__title">{job.company}</h1>
            <p className="case-study__role">{job.role}</p>
          </header>
        </ScrollReveal>

        <ScrollReveal>
          <p className="case-study__intro">{job.content.intro}</p>
        </ScrollReveal>

        {job.metrics && job.metrics.length > 0 && (
          <ScrollReveal>
            <div className="case-study__metrics">
              {job.metrics.map((m) => (
                <div key={m.label} className="case-study__metric">
                  <span className="case-study__metric-value">{m.value}</span>
                  <span className="case-study__metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        <div className="case-study__sections">
          {job.content.sections.map((section, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="case-study__section">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="case-study__tech">
            <h3>Tech Stack</h3>
            <div className="case-study__pills">
              {job.techStack.map((t) => (
                <span key={t} className="skill-pill">{t}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {job.content.products && job.content.products.length > 0 && (
          <ScrollReveal>
            <div className="case-study__products">
              <h3>Products</h3>
              <div className="case-study__product-links">
                {job.content.products.map((p) => (
                  <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">
                    {p.name} →
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <nav className="case-study__pager" aria-label="Case study navigation">
            <div className="case-study__pager-slot">
              {prev && (
                <Link to={`/work/${prev.slug}`} className="case-study__pager-link case-study__pager-link--prev">
                  <span className="case-study__pager-dir">← Previous</span>
                  <span className="case-study__pager-title">{prev.company}</span>
                </Link>
              )}
            </div>
            <a href="/#work" onClick={goToWorkSection} className="case-study__pager-all">All work</a>
            <div className="case-study__pager-slot case-study__pager-slot--end">
              {next && (
                <Link to={`/work/${next.slug}`} className="case-study__pager-link case-study__pager-link--next">
                  <span className="case-study__pager-dir">Next →</span>
                  <span className="case-study__pager-title">{next.company}</span>
                </Link>
              )}
            </div>
          </nav>
        </ScrollReveal>
      </div>
      <Footer />
    </main>
  );
};

export default CaseStudy;
