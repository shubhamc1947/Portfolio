// src/components/ArticleCard.jsx
import { Link } from 'react-router-dom';
import './ArticleCard.scss';

const tagColors = {
  Performance: '#e64d2e',
  Scale: '#2563eb',
  Backend: '#059669',
  Fundamentals: '#7c3aed',
  Frontend: '#d97706',
  DevOps: '#0891b2',
  Workflow: '#6b7280',
};

const ArticleCard = ({ article, index }) => {
  const linkTo = article.source === 'embedded'
    ? `/writing/${article.slug}`
    : article.mediumUrl;

  const linkProps = article.source === 'embedded'
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' };

  const Component = article.source === 'embedded' ? Link : 'a';
  const href = article.source === 'embedded' ? undefined : linkTo;
  const to = article.source === 'embedded' ? linkTo : undefined;
  const accentColor = tagColors[article.tag] || '#0a0a0a';

  return (
    <Component className="article-card" to={to} href={href} {...linkProps}>
      <div className="article-card__accent" style={{ background: accentColor }} />
      <div className="article-card__body">
        <div className="article-card__top">
          <span className="article-card__tag" style={{ color: accentColor }}>{article.tag}</span>
          {typeof index === 'number' && (
            <span className="article-card__num">{String(index + 1).padStart(2, '0')}</span>
          )}
        </div>
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__desc">{article.description}</p>
        <div className="article-card__meta">
          <span>{article.readingTime}</span>
          <span>·</span>
          <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
          <span className="article-card__read-link">Read →</span>
        </div>
      </div>
    </Component>
  );
};

export default ArticleCard;
