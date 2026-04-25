// src/pages/Writing.jsx
import ScrollReveal from '../components/ScrollReveal';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import articles from '../data/articles';
import './Writing.scss';

const MEDIUM_URL = 'https://medium.com/@shubhamchat224122';

const Writing = () => {
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="writing-page">
      <div className="writing-page__inner">
        <ScrollReveal>
          <h1 className="writing-page__title">Writing</h1>
          <p className="writing-page__sub">
            Selected articles on debugging, scaling, and engineering nuance. Two featured in the <a href="https://medium.com/dev-simplified" target="_blank" rel="noreferrer"><em>Dev Simplified</em></a> publication. Full archive on Medium.
          </p>
        </ScrollReveal>

        <div className="writing-page__grid">
          {sorted.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.05} className="writing-page__cell">
              <ArticleCard article={article} />
            </ScrollReveal>
          ))}
          <ScrollReveal delay={sorted.length * 0.05} className="writing-page__cell">
            <a className="archive-card" href={MEDIUM_URL} target="_blank" rel="noreferrer">
              <span className="archive-card__label">Full archive</span>
              <h3 className="archive-card__title">More on Medium</h3>
              <p className="archive-card__desc">
                10 published articles - frontend, backend, debugging, scale, and the occasional clever workaround.
              </p>
              <span className="archive-card__cta">
                Visit Medium <span className="archive-card__arr">↗</span>
              </span>
            </a>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Writing;
