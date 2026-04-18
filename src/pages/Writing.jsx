// src/pages/Writing.jsx
import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import articles from '../data/articles';
import './Writing.scss';

const allTags = ['All', ...new Set(articles.map((a) => a.tag))];

const Writing = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? articles
    : articles.filter((a) => a.tag === activeTag);

  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="writing-page">
      <div className="writing-page__inner">
        <ScrollReveal>
          <h1 className="writing-page__title">Writing</h1>
          <p className="writing-page__sub">
            Thinking about engineering problems - from scaling infrastructure to debugging CSS ghost bugs.
          </p>
        </ScrollReveal>

        <div className="writing-page__filters">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-pill ${activeTag === tag ? 'filter-pill--active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="writing-page__grid">
          {sorted.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.05}>
              <ArticleCard article={article} />
            </ScrollReveal>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Writing;
