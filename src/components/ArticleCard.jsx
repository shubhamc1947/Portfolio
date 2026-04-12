// src/components/ArticleCard.jsx
import { Link } from 'react-router-dom';
import './ArticleCard.scss';

const ArticleCard = ({ article }) => {
  const linkTo = article.source === 'embedded'
    ? `/writing/${article.slug}`
    : article.mediumUrl;

  const linkProps = article.source === 'embedded'
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' };

  const Component = article.source === 'embedded' ? Link : 'a';
  const href = article.source === 'embedded' ? undefined : linkTo;
  const to = article.source === 'embedded' ? linkTo : undefined;

  return (
    <Component className="article-card" to={to} href={href} {...linkProps}>
      <span className="article-card__tag">{article.tag}</span>
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__desc">{article.description}</p>
      <div className="article-card__meta">
        <span>{article.readingTime}</span>
        <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
      </div>
    </Component>
  );
};

export default ArticleCard;
