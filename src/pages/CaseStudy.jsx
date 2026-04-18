// src/pages/CaseStudy.jsx
import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import work from '../data/work';
import './CaseStudy.scss';

const CaseStudy = () => {
  const { slug } = useParams();
  const job = work.find((w) => w.slug === slug);

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

  return (
    <main className="case-study">
      <div className="case-study__inner">
        <Link to="/" className="case-study__back">← Back home</Link>

        <ScrollReveal>
          <header className="case-study__header">
            <span className="case-study__duration">{job.duration}</span>
            <h1 className="case-study__title">{job.company}</h1>
            <p className="case-study__role">{job.role}</p>
          </header>
        </ScrollReveal>

        <ScrollReveal>
          <p className="case-study__intro">{job.content.intro}</p>
        </ScrollReveal>

        {job.content.metrics && (
          <ScrollReveal>
            <div className="case-study__metrics">
              {job.content.metrics.map((m) => (
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
      </div>
      <Footer />
    </main>
  );
};

export default CaseStudy;
