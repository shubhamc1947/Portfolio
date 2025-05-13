import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData } from '../../blogdata';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus,oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './blogpost.scss';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData.find(post => post.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="blog-post not-found">
        <div className="wrapper">
          <h2>Post not found</h2>
          <Link to="/blog" className="back-button">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="blog-post"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="wrapper">
        <Link to="/blog" className="back-button">← Back to Blog</Link>
        
        <div className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <div className="post-tags">
              {post.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="post-cover">
          <img src={post.coverImage} alt={post.title} />
        </div>
        
        <div className="post-content">
          <ReactMarkdown
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;