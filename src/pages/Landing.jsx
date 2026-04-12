// src/pages/Landing.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import articles from '../data/articles';
import work from '../data/work';
import skills from '../data/skills';
import projects from '../data/projects';
import './Landing.scss';

const featuredSlugs = [
  'chasing-ghost-bug-react-lazy-loading',
  'scaling-sitemap-millions-pages',
  'speeding-up-backend-database-indexing',
  'what-happens-when-you-type-url',
];

const Landing = () => {
  const featured = featuredSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean);

  return (
    <main className="landing">
      {/* Hero */}
      <section className="hero">
        <div className="hero__inner">
          <motion.span
            className="hero__label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Software Engineer · Writer
          </motion.span>
          <motion.h1
            className="hero__title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            I think deeply about<br />the systems I build.
            <span className="hero__title--faded"><br />Then I write about them.</span>
          </motion.h1>
          <motion.p
            className="hero__sub"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Software Engineer at Covrzy, building infrastructure that handles 400K+
            reservations/month. I write about the craft of engineering — from scaling
            sitemaps to chasing ghost bugs.
          </motion.p>
          <motion.div
            className="hero__ctas"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Link to="/writing" className="btn btn--primary">Read my writing →</Link>
            <a href="#work" className="btn btn--secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See my work →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy">
        <ScrollReveal>
          <blockquote className="philosophy__quote">
            "Most engineers ship features.<br />
            I think about why the feature exists,<br />
            then build it so it lasts."
          </blockquote>
          <p className="philosophy__attr">— That's the thread through everything below.</p>
        </ScrollReveal>
      </section>

      {/* Featured Writing */}
      <section className="writing-preview">
        <div className="writing-preview__inner">
          <ScrollReveal>
            <div className="writing-preview__header">
              <h2>Writing</h2>
              <Link to="/writing">View all articles →</Link>
            </div>
          </ScrollReveal>
          <div className="writing-preview__grid">
            {featured.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.1}>
                <ArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="work-preview" id="work">
        <div className="work-preview__inner">
          <ScrollReveal>
            <h2 className="work-preview__heading">Work</h2>
          </ScrollReveal>
          {work.map((job, i) => (
            <ScrollReveal key={job.slug} delay={i * 0.1}>
              <Link to={`/work/${job.slug}`} className="work-card">
                <div className="work-card__left">
                  <h3>{job.company}</h3>
                  <span className="work-card__role">{job.role}</span>
                  <p className="work-card__highlight">{job.highlight}</p>
                </div>
                <div className="work-card__right">
                  <span className="work-card__duration">{job.duration}</span>
                  <span className="work-card__arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <div className="skills-section__inner">
          <ScrollReveal>
            <h2 className="skills-section__heading">Tools & Technologies</h2>
          </ScrollReveal>
          <div className="skills-grid">
            {skills.map((group, i) => (
              <ScrollReveal key={group.category} delay={i * 0.05}>
                <div className="skill-group">
                  <h4 className="skill-group__title">{group.category}</h4>
                  <div className="skill-group__items">
                    {group.items.map((skill) => (
                      <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section">
        <div className="projects-section__inner">
          <ScrollReveal>
            <h2 className="projects-section__heading">Projects</h2>
          </ScrollReveal>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ScrollReveal key={project.name} delay={i * 0.1}>
                <div className="project-card">
                  <h3 className="project-card__name">{project.name}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__stack">
                    {project.techStack.map((t) => (
                      <span key={t} className="skill-pill">{t}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live →</a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Landing;
