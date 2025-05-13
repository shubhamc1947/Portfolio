import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData } from '../../blogdata';
import './blog.scss';

const Blog = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div className="blog">
      <motion.div 
        className="wrapper"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="heading">Code : Blog</div>
        <div className="blog-description">
          Thoughts, tutorials, and insights on web development and technology.
        </div>
        <div className="blog-list">
          {blogData.map((post, index) => (
            <motion.div 
              className="blog-card"
              key={post.id}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="blog-image">
                <img src={post.coverImage} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-date">{post.date}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-summary">{post.summary}</p>
                <div className="blog-tags">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/blog/${post.slug}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Blog;