import { Link } from 'react-router-dom';
import './ArticleCard.scss';

const ArticleCard = ({ article }) => {
  const isEmbedded = article.source === 'embedded';
  const Component = isEmbedded ? Link : 'a';
  const props = isEmbedded
    ? { to: `/writing/${article.slug}` }
    : { href: article.mediumUrl, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <Component className="article-card" {...props}>
      <span className="article-card__tag">{article.tag}</span>
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__desc">{article.description}</p>
      <div className="article-card__meta">
        <span>{article.date}</span>
        <span className="article-card__read">{article.readingTime} read</span>
      </div>
    </Component>
  );
};

export default ArticleCard;
