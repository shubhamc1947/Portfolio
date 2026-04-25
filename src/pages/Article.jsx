// src/pages/Article.jsx
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import articles from '../data/articles';
import Footer from '../components/Footer';
import './Article.scss';

const articleModules = import.meta.glob('../content/articles/*.md', { query: '?raw', import: 'default' });

const Article = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const meta = articles.find((a) => a.slug === slug);

  useEffect(() => {
    const externalUrl = meta?.externalUrl || meta?.mediumUrl;
    if (meta && meta.source !== 'embedded' && externalUrl) {
      window.location.replace(externalUrl);
      return;
    }
    const path = `../content/articles/${slug}.md`;
    if (articleModules[path]) {
      articleModules[path]().then(setContent);
    }
  }, [slug, meta]);

  if (!meta) {
    return (
      <main className="article-page">
        <div className="article-page__inner">
          <h1>Article not found</h1>
          <Link to="/writing">← Back to writing</Link>
        </div>
      </main>
    );
  }

  if (meta.source !== 'embedded') {
    const dest = meta.platform || (meta.source === 'linkedin' ? 'LinkedIn' : 'Medium');
    return (
      <main className="article-page">
        <div className="article-page__inner">
          <p style={{ color: 'var(--ink-3)', fontFamily: 'var(--mono)', fontSize: 13 }}>
            Redirecting to {dest}…
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="article-page">
      <div className="article-page__inner">
        <Link to="/writing" className="article-page__back">← Back to writing</Link>
        <header className="article-page__header">
          <span className="article-page__tag">{meta.tag}</span>
          <h1 className="article-page__title">{meta.title}</h1>
          <div className="article-page__meta">
            <span>{meta.readingTime} read</span>
            <span>·</span>
            <span>{new Date(meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </header>
        <article className="article-page__content">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {content}
          </ReactMarkdown>
        </article>
      </div>
      <Footer />
    </main>
  );
};

export default Article;
