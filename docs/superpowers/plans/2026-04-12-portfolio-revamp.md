# Portfolio Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Shubham's portfolio as a storyteller-style, mind-first, clean modernist site with a cinematic landing scroll and dedicated subpages for writing and case studies.

**Architecture:** Hybrid SPA with React Router - a single-page cinematic scroll as the landing, plus dedicated routes for `/writing`, `/writing/:slug`, `/work/covrzy`, and `/work/weknow`. Content stored as JS data files and Markdown. Design system built on CSS custom properties.

**Tech Stack:** React 18, Vite, React Router, Framer Motion, SCSS with design tokens, react-markdown + remark-gfm + rehype-highlight for articles, Vercel Analytics.

**Spec:** `docs/superpowers/specs/2026-04-12-portfolio-revamp-design.md`

---

## File Structure

```
src/
├── main.jsx                          # Entry - wrap App in BrowserRouter
├── App.jsx                           # Routes definition
├── styles/
│   ├── tokens.scss                   # Design tokens (colors, spacing, type scale)
│   ├── global.scss                   # Reset, base styles, scrollbar, typography
│   └── mixins.scss                   # Responsive breakpoints, common patterns
├── data/
│   ├── social.js                     # Social links data
│   ├── skills.js                     # Skills grouped by category
│   ├── work.js                       # Work experience metadata
│   ├── projects.js                   # Side projects data
│   └── articles.js                   # Article metadata (title, slug, tags, etc.)
├── content/
│   └── articles/
│       ├── chasing-ghost-bug-react-lazy-loading.md
│       ├── scaling-sitemap-millions-pages.md
│       ├── speeding-up-backend-database-indexing.md
│       └── what-happens-when-you-type-url.md
├── components/
│   ├── Navbar.jsx                    # Top nav - logo, links, responsive
│   ├── Navbar.scss
│   ├── Footer.jsx                    # Dark contact footer
│   ├── Footer.scss
│   ├── ScrollReveal.jsx              # Reusable scroll-triggered animation wrapper
│   └── ArticleCard.jsx               # Reusable article card (used on landing + /writing)
│   └── ArticleCard.scss
├── pages/
│   ├── Landing.jsx                   # Full landing scroll (hero → philosophy → writing → work → skills → projects → footer)
│   ├── Landing.scss
│   ├── Writing.jsx                   # /writing - article index with filters
│   ├── Writing.scss
│   ├── Article.jsx                   # /writing/:slug - single article reader
│   ├── Article.scss
│   ├── CaseStudy.jsx                 # /work/:slug - case study page
│   └── CaseStudy.scss
```

---

### Task 1: Design Tokens & Global Styles

**Files:**
- Create: `src/styles/tokens.scss`
- Create: `src/styles/global.scss`
- Create: `src/styles/mixins.scss`
- Delete content from: `src/index.scss` (will be replaced)
- Delete content from: `src/app.scss` (will be replaced)

- [ ] **Step 1: Create design tokens file**

```scss
// src/styles/tokens.scss

:root {
  // Colors
  --color-bg: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #0a0a0a;
  --color-text-secondary: #666666;
  --color-text-muted: #999999;
  --color-border: #e5e5e5;
  --color-border-hover: #cccccc;
  --color-footer-bg: #0a0a0a;
  --color-footer-text: #ffffff;
  --color-footer-muted: #888888;
  --color-footer-link: #444444;

  // Typography
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  --text-xs: 0.75rem;    // 12px
  --text-sm: 0.875rem;   // 14px
  --text-base: 1rem;     // 16px
  --text-lg: 1.125rem;   // 18px
  --text-xl: 1.25rem;    // 20px
  --text-2xl: 1.5rem;    // 24px
  --text-3xl: 2.25rem;   // 36px
  --text-4xl: 3rem;      // 48px
  --text-5xl: 3.5rem;    // 56px

  // Spacing
  --space-1: 0.25rem;    // 4px
  --space-2: 0.5rem;     // 8px
  --space-3: 0.75rem;    // 12px
  --space-4: 1rem;       // 16px
  --space-6: 1.5rem;     // 24px
  --space-8: 2rem;       // 32px
  --space-10: 2.5rem;    // 40px
  --space-12: 3rem;      // 48px
  --space-16: 4rem;      // 64px
  --space-20: 5rem;      // 80px

  // Layout
  --max-width: 1200px;
  --reading-width: 680px;
  --nav-height: 64px;

  // Radius
  --radius-sm: 8px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-pill: 24px;

  // Shadows
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-card-hover: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

- [ ] **Step 2: Create mixins file**

```scss
// src/styles/mixins.scss

@mixin container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding-inline: var(--space-10);

  @media (max-width: 768px) {
    padding-inline: var(--space-6);
  }
}

@mixin reading-width {
  max-width: var(--reading-width);
  margin: 0 auto;
}

@mixin section-padding {
  padding-block: var(--space-20);

  @media (max-width: 768px) {
    padding-block: var(--space-12);
  }
}

@mixin label {
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-text-muted);
}

@mixin heading-xl {
  font-size: var(--text-5xl);
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1.05;

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
    letter-spacing: -1px;
  }
}

@mixin heading-lg {
  font-size: var(--text-3xl);
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: var(--text-2xl);
  }
}
```

- [ ] **Step 3: Create global styles file**

```scss
// src/styles/global.scss

@use 'tokens';
@use 'mixins';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-bg);
  color: var(--color-text);
  min-height: 100vh;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

button {
  font-family: inherit;
  cursor: pointer;
}

// Scrollbar
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-muted);
}
```

- [ ] **Step 4: Update index.scss to import new styles**

Replace `src/index.scss` entirely:

```scss
// src/index.scss
@use 'styles/global';
```

- [ ] **Step 5: Update index.html - swap fonts, remove Font Awesome & Umami**

Replace the Google Fonts link with Inter + JetBrains Mono. Remove Font Awesome CDN link. Remove Umami analytics script. Keep all OG/meta/JSON-LD tags.

In `index.html`, replace the fonts block:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Remove these lines:
- The Font Awesome `<link>` tag
- The Umami `<script>` tag

- [ ] **Step 6: Delete old style files**

Delete `src/app.scss` (no longer needed - App.jsx won't import it).

- [ ] **Step 7: Verify build works**

Run: `cd "d:/Practice Web/Portfolio" && npm run build`
Expected: Build succeeds (components will break but styles should compile)

- [ ] **Step 8: Commit**

```bash
git add src/styles/ src/index.scss index.html
git rm src/app.scss
git commit -m "feat: add design token system and global styles"
```

---

### Task 2: Data Layer

**Files:**
- Create: `src/data/social.js`
- Create: `src/data/skills.js`
- Create: `src/data/work.js`
- Create: `src/data/projects.js`
- Create: `src/data/articles.js`

- [ ] **Step 1: Create social links data**

```js
// src/data/social.js

const social = [
  { name: 'GitHub', url: 'https://github.com/shubhamc1947' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shubhamchat03' },
  { name: 'Medium', url: 'https://medium.com/@shubhamchat224122' },
  { name: 'Twitter', url: 'https://twitter.com/shubham_1947' },
];

export default social;
```

- [ ] **Step 2: Create grouped skills data**

```js
// src/data/skills.js

const skills = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'Java'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Framer Motion', 'Redux'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'WebSocket'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'EC2 / ECS / EKS', 'S3', 'CloudFront'],
  },
  {
    category: 'Workflow',
    items: ['Git', 'Jira', 'Bash', 'Firebase'],
  },
];

export default skills;
```

- [ ] **Step 3: Create work experience data**

```js
// src/data/work.js

const work = [
  {
    slug: 'covrzy',
    company: 'Covrzy',
    role: 'Software Developer Engineer',
    duration: '2024 - Present',
    highlight: 'Built AWS infra handling 400K+ reservations/month with <200ms response time',
    techStack: ['Golang', 'Node.js', 'React', 'PostgreSQL', 'TypeScript', 'MySQL', 'AWS', 'Strapi', 'Next.js'],
    content: {
      intro: 'At Covrzy, I work on the core insurance infrastructure - building scalable backend systems that power multiple product lines.',
      sections: [
        {
          title: 'Scaling Reservation Infrastructure',
          body: 'Created and implemented scalable AWS infrastructure using Golang that handles 400K+ reservations per month with a response time of less than 200ms and a 99.9% uptime rate.',
        },
        {
          title: 'Eliminating Communication Delays',
          body: 'Reduced client response time from 24 hours to 1 hour by integrating Slack Webhooks into all products (Health, Liability) for zero-delay client request routing. Integrated MSG91 email API and Heltar WhatsApp API for instantaneous communication.',
        },
        {
          title: 'Product Development',
          body: 'Developed scalable web applications using Node.js, TypeScript, and React. Implemented Strapi CMS for blog automation at covrzy.com/blog.',
        },
      ],
      products: [
        { name: 'Health', url: 'https://health.covrzy.com' },
        { name: 'Liability', url: 'https://start.covrzy.com' },
        { name: 'Blog', url: 'https://covrzy.com/blog' },
      ],
    },
  },
  {
    slug: 'weknow',
    company: 'Weknow Technology',
    role: 'Software Developer Engineer → Intern',
    duration: '2023 - 2024',
    highlight: 'Engineered government survey portal serving 60,000+ users across Uttar Pradesh',
    techStack: ['JavaScript', 'React', 'PHP', 'MySQL', 'Node.js', 'TypeScript', 'jQuery'],
    content: {
      intro: 'My first engineering role - started as an intern building school ERPs, grew into building government-scale systems serving tens of thousands of users.',
      sections: [
        {
          title: 'College ERP & Payment Integration',
          body: 'Automated the exam reevaluation module in KNIPSS College ERP, enabling online recheck applications and integrating CCAvenue Payment Gateway. Decreased manual process time from 5 days to 1 day.',
        },
        {
          title: 'Government Survey Portal',
          body: 'Engineered and designed a government survey portal that collected data from over 60,000+ users across Uttar Pradesh. Implemented multi-layer verification and automated ID card generation.',
        },
        {
          title: 'Payroll System (HRMS)',
          body: 'Developed UPRNSS Payroll System using Agile methodologies, optimizing salary management for 1,000+ employees using TypeScript, MySQL, Node.js, and React.',
        },
        {
          title: 'Internship - Foundation Building',
          body: 'Designed a complete School ERP system covering dynamic content management, real-time data interaction, and admin control. Built and optimized a Hotel Billing System with itemized billing, tax calculations, and printable invoice generation.',
        },
      ],
      products: [
        { name: 'KNIPSS', url: 'https://knipssexams.in/' },
        { name: 'UPRNSS', url: 'https://uprnss.org/' },
      ],
    },
  },
];

export default work;
```

- [ ] **Step 4: Create projects data**

```js
// src/data/projects.js

const projects = [
  {
    name: 'CollabCode',
    description: 'Real-time collaborative code editor with WebSocket integration and adaptable tab management.',
    techStack: ['MongoDB', 'React', 'Node.js', 'Socket.io', 'Framer Motion'],
    github: 'https://github.com/shubhamc1947/realtime-code-editor-MERN',
    live: 'https://colla8code.vercel.app/',
  },
  {
    name: 'OpenPen',
    description: 'MERN stack blogging platform with secure JWT-based authentication and UI/UX enhancements.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/shubhamc1947/OpenPen',
    live: 'https://openpen.vercel.app/',
  },
  {
    name: 'ShopHere',
    description: 'Responsive e-commerce site with advanced search, filtering, and secure payment gateway.',
    techStack: ['Bootstrap', 'React', 'RazorPay'],
    github: 'https://github.com/shubhamc1947/shophere',
    live: 'https://shophere8.netlify.app/',
  },
];

export default projects;
```

- [ ] **Step 5: Create articles metadata**

```js
// src/data/articles.js

const articles = [
  {
    slug: 'chasing-ghost-bug-react-lazy-loading',
    title: 'Chasing a Ghost Bug in React Lazy Loading: A CSS Story',
    description: 'Have you ever worked on frontend optimization and found the bug hiding in the last place you\'d look?',
    tag: 'Performance',
    date: '2025-06-09',
    readingTime: '8 min',
    source: 'embedded',
    mediumUrl: 'https://medium.com/@shubhamchat224122',
  },
  {
    slug: 'scaling-sitemap-millions-pages',
    title: 'Do You Really Know How to Scale sitemap.xml for Millions of Dynamic Pages?',
    description: 'A scenario where your e-commerce site hits 10,000 products - and your sitemap strategy falls apart.',
    tag: 'Scale',
    date: '2025-07-03',
    readingTime: '10 min',
    source: 'embedded',
    mediumUrl: 'https://medium.com/@shubhamchat224122',
  },
  {
    slug: 'speeding-up-backend-database-indexing',
    title: 'Speeding Up Your Backend with Database Indexing',
    description: 'That moment where your app starts to feel sluggish - and the fix is simpler than you think.',
    tag: 'Backend',
    date: '2025-05-10',
    readingTime: '7 min',
    source: 'embedded',
    mediumUrl: 'https://medium.com/@shubhamchat224122',
  },
  {
    slug: 'what-happens-when-you-type-url',
    title: 'What Happens When You Type a URL in Your Browser?',
    description: 'The journey from www.google.com to pixels on your screen - every step explained.',
    tag: 'Fundamentals',
    date: '2025-06-16',
    readingTime: '12 min',
    source: 'embedded',
    mediumUrl: 'https://medium.com/@shubhamchat224122',
  },
  {
    slug: 'reactjs-performance-optimization',
    title: 'ReactJS Performance Optimization: Best Practices for Speed and Efficiency',
    description: 'Performance is a key factor in delivering a smooth and responsive user experience.',
    tag: 'Performance',
    date: '2025-06-02',
    readingTime: '9 min',
    source: 'medium',
    mediumUrl: 'https://medium.com/@shubhamchat224122',
  },
  {
    slug: 'fixing-404-errors-vercel-react',
    title: 'Fixing 404 Errors on Vercel for Multipage React Apps with vercel.json',
    description: 'If you\'ve deployed a React.js application on Vercel and noticed that navigating directly to routes fails.',
    tag: 'DevOps',
    date: '2025-05-27',
    readingTime: '5 min',
    source: 'medium',
    mediumUrl: 'https://medium.com/@shubhamchat224122',
  },
  {
    slug: 'html-best-practices-seo',
    title: 'HTML Best Practices: Structuring for SEO and Clarity',
    description: 'Writing clean and semantic HTML isn\'t just aesthetics - it\'s how search engines understand your site.',
    tag: 'Frontend',
    date: '2025-05-19',
    readingTime: '6 min',
    source: 'medium',
    mediumUrl: 'https://medium.com/@shubhamchat224122',
  },
  {
    slug: 'html5-semantic-elements-aria',
    title: 'HTML5 Semantic Elements & ARIA: Building Accessible Web Pages',
    description: 'Web accessibility ensures that websites are usable by everyone.',
    tag: 'Frontend',
    date: '2025-05-12',
    readingTime: '7 min',
    source: 'medium',
    mediumUrl: 'https://medium.com/@shubhamchat224122',
  },
  {
    slug: 'git-stash-secret-weapon',
    title: 'A Quick Dive into Git Stash: Your Secret Weapon for Cleaner Workflows',
    description: 'Working on a feature, only to be interrupted by a sudden bug fix? Git stash has your back.',
    tag: 'Workflow',
    date: '2025-05-04',
    readingTime: '5 min',
    source: 'medium',
    mediumUrl: 'https://medium.com/@shubhamchat224122',
  },
  {
    slug: 'google-docs-dynamic-template-certificates',
    title: 'Have You Ever Tried Google Docs As a Dynamic Template For Generating Certificates, Invoices…',
    description: 'A classic problem solved differently - using Google Docs API instead of PDF libraries.',
    tag: 'Backend',
    date: '2025-06-22',
    readingTime: '8 min',
    source: 'medium',
    mediumUrl: 'https://medium.com/@shubhamchat224122',
  },
];

export default articles;
```

- [ ] **Step 6: Commit**

```bash
git add src/data/
git commit -m "feat: add structured data layer for portfolio content"
```

---

### Task 3: Router Setup & App Shell

**Files:**
- Modify: `src/main.jsx`
- Modify: `src/App.jsx`
- Create: `src/components/Navbar.jsx`
- Create: `src/components/Navbar.scss`
- Create: `src/components/ScrollReveal.jsx`

- [ ] **Step 1: Install dependencies**

```bash
cd "d:/Practice Web/Portfolio" && npm install react-router-dom react-markdown remark-gfm rehype-highlight
```

- [ ] **Step 2: Remove unused dependencies**

```bash
cd "d:/Practice Web/Portfolio" && npm uninstall react-tooltip react-toastify @emailjs/browser prop-types
```

- [ ] **Step 3: Rewrite main.jsx**

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```

- [ ] **Step 4: Rewrite App.jsx with routes**

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Writing from './pages/Writing';
import Article from './pages/Article';
import CaseStudy from './pages/CaseStudy';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<Article />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
      <Analytics />
    </>
  );
};

export default App;
```

- [ ] **Step 5: Create Navbar component**

```jsx
// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleScrollTo = (e, id) => {
    if (!isHome) return; // Let Link navigate if not on home
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">SC</Link>
        <div className="navbar__links">
          <Link to="/writing">Writing</Link>
          {isHome ? (
            <a href="#work" onClick={(e) => handleScrollTo(e, 'work')}>Work</a>
          ) : (
            <Link to="/#work">Work</Link>
          )}
          {isHome ? (
            <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contact</a>
          ) : (
            <Link to="/#contact">Contact</Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
```

- [ ] **Step 6: Create Navbar styles**

```scss
// src/components/Navbar.scss
@use '../styles/mixins';

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(250, 250, 249, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);

  &__inner {
    @include mixins.container;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--nav-height);
  }

  &__logo {
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--color-text);
  }

  &__links {
    display: flex;
    gap: var(--space-8);

    a {
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      transition: color 0.2s;

      &:hover {
        color: var(--color-text);
      }
    }

    @media (max-width: 480px) {
      gap: var(--space-6);
    }
  }
}
```

- [ ] **Step 7: Create ScrollReveal wrapper**

```jsx
// src/components/ScrollReveal.jsx
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
```

- [ ] **Step 8: Create placeholder pages so the app builds**

```jsx
// src/pages/Landing.jsx
const Landing = () => <div>Landing</div>;
export default Landing;
```

```jsx
// src/pages/Writing.jsx
const Writing = () => <div>Writing</div>;
export default Writing;
```

```jsx
// src/pages/Article.jsx
const Article = () => <div>Article</div>;
export default Article;
```

```jsx
// src/pages/CaseStudy.jsx
const CaseStudy = () => <div>Case Study</div>;
export default CaseStudy;
```

- [ ] **Step 9: Verify dev server runs**

Run: `cd "d:/Practice Web/Portfolio" && npm run dev`

Open browser - should see "Landing" text with the new navbar. Navigate to `/writing`, `/work/covrzy` - each should render its placeholder.

- [ ] **Step 10: Commit**

```bash
git add src/main.jsx src/App.jsx src/components/Navbar.jsx src/components/Navbar.scss src/components/ScrollReveal.jsx src/pages/
git commit -m "feat: add React Router, navbar, and page shell"
```

---

### Task 4: Footer Component

**Files:**
- Create: `src/components/Footer.jsx`
- Create: `src/components/Footer.scss`

- [ ] **Step 1: Create Footer component**

```jsx
// src/components/Footer.jsx
import { motion } from 'framer-motion';
import social from '../data/social';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <motion.h2
          className="footer__heading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's build something.
        </motion.h2>
        <p className="footer__sub">
          Currently engineering at Covrzy. Open to interesting conversations.
        </p>
        <a href="mailto:shubhamchat03@gmail.com" className="footer__email">
          shubhamchat03@gmail.com
        </a>
        <div className="footer__socials">
          {social.map((item) => (
            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          ))}
        </div>
        <div className="footer__bottom">
          <span className="footer__npx">npx shubhamc1947</span>
          <span className="footer__copy">&copy; {new Date().getFullYear()} Shubham Chaturvedi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 2: Create Footer styles**

```scss
// src/components/Footer.scss
@use '../styles/mixins';

.footer {
  background: var(--color-footer-bg);
  color: var(--color-footer-text);
  padding: var(--space-20) 0 var(--space-12);
  text-align: center;

  &__inner {
    @include mixins.container;
  }

  &__heading {
    font-size: var(--text-4xl);
    font-weight: 800;
    letter-spacing: -1.5px;
    margin-bottom: var(--space-4);

    @media (max-width: 768px) {
      font-size: var(--text-3xl);
    }
  }

  &__sub {
    color: var(--color-footer-muted);
    font-size: var(--text-base);
    margin-bottom: var(--space-8);
  }

  &__email {
    font-size: var(--text-xl);
    color: var(--color-footer-text);
    border-bottom: 2px solid var(--color-footer-link);
    padding-bottom: var(--space-1);
    transition: border-color 0.2s;

    &:hover {
      border-color: var(--color-footer-text);
    }
  }

  &__socials {
    margin-top: var(--space-10);
    display: flex;
    justify-content: center;
    gap: var(--space-8);

    a {
      color: var(--color-footer-muted);
      font-size: var(--text-sm);
      transition: color 0.2s;

      &:hover {
        color: var(--color-footer-text);
      }
    }
  }

  &__bottom {
    margin-top: var(--space-16);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-8);
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 576px) {
      flex-direction: column;
      gap: var(--space-4);
    }
  }

  &__npx {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--color-footer-link);
  }

  &__copy {
    font-size: var(--text-xs);
    color: var(--color-footer-link);
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.jsx src/components/Footer.scss
git commit -m "feat: add dark footer component with contact info"
```

---

### Task 5: ArticleCard Component

**Files:**
- Create: `src/components/ArticleCard.jsx`
- Create: `src/components/ArticleCard.scss`

- [ ] **Step 1: Create ArticleCard component**

```jsx
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
```

- [ ] **Step 2: Create ArticleCard styles**

```scss
// src/components/ArticleCard.scss

.article-card {
  display: block;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  transition: border-color 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    border-color: var(--color-border-hover);
    box-shadow: var(--shadow-card-hover);
  }

  &__tag {
    display: inline-block;
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--color-text-muted);
    margin-bottom: var(--space-3);
  }

  &__title {
    font-size: var(--text-lg);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: var(--space-2);
    color: var(--color-text);
  }

  &__desc {
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    line-height: 1.5;
    margin-bottom: var(--space-4);
  }

  &__meta {
    display: flex;
    gap: var(--space-4);
    font-size: var(--text-xs);
    color: var(--color-text-muted);
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ArticleCard.jsx src/components/ArticleCard.scss
git commit -m "feat: add reusable ArticleCard component"
```

---

### Task 6: Landing Page

**Files:**
- Modify: `src/pages/Landing.jsx`
- Create: `src/pages/Landing.scss`

- [ ] **Step 1: Build the full Landing page**

```jsx
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
            reservations/month. I write about the craft of engineering - from scaling
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
          <p className="philosophy__attr">- That's the thread through everything below.</p>
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
```

- [ ] **Step 2: Create Landing styles**

```scss
// src/pages/Landing.scss
@use '../styles/mixins';

.landing {
  padding-top: var(--nav-height);
}

// Hero
.hero {
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;

  &__inner {
    @include mixins.container;
    padding-block: var(--space-20);
  }

  &__label {
    @include mixins.label;
    display: block;
    margin-bottom: var(--space-6);
  }

  &__title {
    @include mixins.heading-xl;
    margin-bottom: var(--space-6);

    &--faded {
      opacity: 0.15;
      transition: opacity 0.8s ease;
    }
  }

  &__sub {
    font-size: var(--text-lg);
    color: var(--color-text-secondary);
    max-width: 520px;
    line-height: 1.5;
    margin-bottom: var(--space-8);
  }

  &__ctas {
    display: flex;
    gap: var(--space-3);
  }
}

// Buttons
.btn {
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-pill);
  font-size: var(--text-sm);
  font-weight: 500;
  transition: all 0.2s;
  display: inline-block;

  &--primary {
    background: var(--color-text);
    color: var(--color-bg);
    border: 1px solid var(--color-text);

    &:hover {
      opacity: 0.85;
    }
  }

  &--secondary {
    background: transparent;
    color: var(--color-text);
    border: 1px solid var(--color-border);

    &:hover {
      border-color: var(--color-text);
    }
  }
}

// Philosophy
.philosophy {
  @include mixins.section-padding;
  text-align: center;

  &__quote {
    @include mixins.container;
    font-size: var(--text-3xl);
    font-weight: 700;
    line-height: 1.3;
    max-width: 680px;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
      font-size: var(--text-2xl);
    }
  }

  &__attr {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    margin-top: var(--space-4);
  }
}

// Writing Preview
.writing-preview {
  @include mixins.section-padding;
  background: var(--color-bg);

  &__inner {
    @include mixins.container;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: var(--space-10);

    h2 {
      @include mixins.heading-lg;
    }

    a {
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      border-bottom: 1px solid var(--color-border);
      padding-bottom: 2px;
      transition: color 0.2s;

      &:hover {
        color: var(--color-text);
      }
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}

// Work Preview
.work-preview {
  @include mixins.section-padding;

  &__inner {
    @include mixins.container;
  }

  &__heading {
    @include mixins.heading-lg;
    margin-bottom: var(--space-6);
  }
}

.work-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-8) 0;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;

  &:hover .work-card__arrow {
    transform: translateX(4px);
  }

  &__left {
    h3 {
      font-size: var(--text-xl);
      font-weight: 600;
      margin-bottom: var(--space-1);
    }
  }

  &__role {
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
  }

  &__highlight {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    margin-top: var(--space-2);
    font-style: italic;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: var(--space-6);
    flex-shrink: 0;
  }

  &__duration {
    font-size: var(--text-sm);
    color: var(--color-text-muted);

    @media (max-width: 576px) {
      display: none;
    }
  }

  &__arrow {
    font-size: var(--text-xl);
    color: var(--color-border);
    transition: transform 0.2s;
  }
}

// Skills
.skills-section {
  @include mixins.section-padding;

  &__inner {
    @include mixins.container;
  }

  &__heading {
    @include mixins.heading-lg;
    margin-bottom: var(--space-10);
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.skill-group {
  &__title {
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--color-text-muted);
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-2);
    border-bottom: 1px solid var(--color-border);
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
}

.skill-pill {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: var(--space-1) var(--space-4);
  border-radius: var(--radius-pill);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

// Projects
.projects-section {
  @include mixins.section-padding;

  &__inner {
    @include mixins.container;
  }

  &__heading {
    @include mixins.heading-lg;
    margin-bottom: var(--space-10);
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: var(--color-border-hover);
    box-shadow: var(--shadow-card-hover);
  }

  &__name {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-2);
  }

  &__desc {
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    line-height: 1.5;
    margin-bottom: var(--space-4);
  }

  &__stack {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
  }

  &__links {
    display: flex;
    gap: var(--space-4);

    a {
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      transition: color 0.2s;

      &:hover {
        color: var(--color-text);
      }
    }
  }
}
```

- [ ] **Step 3: Verify landing page renders**

Run: `npm run dev`

Open browser at `/` - should see full landing scroll: Hero → Philosophy → Writing cards → Work list → Skills grid → Projects → Dark footer.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Landing.jsx src/pages/Landing.scss
git commit -m "feat: build complete landing page with all scroll sections"
```

---

### Task 7: Writing Index Page

**Files:**
- Modify: `src/pages/Writing.jsx`
- Create: `src/pages/Writing.scss`

- [ ] **Step 1: Build Writing page**

```jsx
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

  // Sort by date descending
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
```

- [ ] **Step 2: Create Writing styles**

```scss
// src/pages/Writing.scss
@use '../styles/mixins';

.writing-page {
  padding-top: calc(var(--nav-height) + var(--space-16));

  &__inner {
    @include mixins.container;
    padding-bottom: var(--space-20);
  }

  &__title {
    @include mixins.heading-xl;
    margin-bottom: var(--space-4);
  }

  &__sub {
    font-size: var(--text-lg);
    color: var(--color-text-secondary);
    max-width: 520px;
    margin-bottom: var(--space-10);
  }

  &__filters {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-10);
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}

.filter-pill {
  background: transparent;
  border: 1px solid var(--color-border);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-pill);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-text);
    color: var(--color-text);
  }

  &--active {
    background: var(--color-text);
    color: var(--color-bg);
    border-color: var(--color-text);
  }
}
```

- [ ] **Step 3: Verify `/writing` page works**

Run dev server, navigate to `/writing`. Should see title, subtitle, filter pills, and article grid. Click filter pills - grid should filter.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Writing.jsx src/pages/Writing.scss
git commit -m "feat: add writing index page with tag filtering"
```

---

### Task 8: Article Page with Markdown Rendering

**Files:**
- Modify: `src/pages/Article.jsx`
- Create: `src/pages/Article.scss`
- Create: `src/content/articles/chasing-ghost-bug-react-lazy-loading.md`
- Create: `src/content/articles/scaling-sitemap-millions-pages.md`
- Create: `src/content/articles/speeding-up-backend-database-indexing.md`
- Create: `src/content/articles/what-happens-when-you-type-url.md`

- [ ] **Step 1: Create placeholder article markdown files**

Create 4 markdown files in `src/content/articles/`. Each should have a placeholder body that Shubham will replace with real content from his Medium articles. Example for one:

```md
<!-- src/content/articles/chasing-ghost-bug-react-lazy-loading.md -->

Have you ever worked on frontend optimization and found the bug hiding in the last place you'd look?

This article explores a real debugging story - a ghost bug that appeared when implementing React lazy loading, and how it turned out to be a CSS issue all along.

---

*Full content coming soon. In the meantime, read it on [Medium](https://medium.com/@shubhamchat224122).*
```

Create similar placeholders for the other 3 articles.

- [ ] **Step 2: Configure Vite to import markdown files as raw text**

In `vite.config.js`, add the `assetsInclude` option or use raw import - Vite supports `?raw` suffix natively, so no config change needed. Articles will be imported as:

```js
import(`../content/articles/${slug}.md?raw`)
```

- [ ] **Step 3: Build Article page**

```jsx
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
    const path = `../content/articles/${slug}.md`;
    if (articleModules[path]) {
      articleModules[path]().then(setContent);
    }
  }, [slug]);

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

  return (
    <main className="article-page">
      <div className="article-page__inner">
        <Link to="/writing" className="article-page__back">← Back to writing</Link>
        <header className="article-page__header">
          <span className="article-page__tag">{meta.tag}</span>
          <h1 className="article-page__title">{meta.title}</h1>
          <div className="article-page__meta">
            <span>{meta.readingTime}</span>
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
```

- [ ] **Step 4: Create Article styles**

```scss
// src/pages/Article.scss
@use '../styles/mixins';

.article-page {
  padding-top: calc(var(--nav-height) + var(--space-12));

  &__inner {
    @include mixins.reading-width;
    padding-inline: var(--space-6);
    padding-bottom: var(--space-20);
  }

  &__back {
    display: inline-block;
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    margin-bottom: var(--space-10);
    transition: color 0.2s;

    &:hover {
      color: var(--color-text);
    }
  }

  &__header {
    margin-bottom: var(--space-12);
  }

  &__tag {
    @include mixins.label;
    display: block;
    margin-bottom: var(--space-4);
  }

  &__title {
    font-size: var(--text-4xl);
    font-weight: 800;
    letter-spacing: -1.5px;
    line-height: 1.1;
    margin-bottom: var(--space-4);

    @media (max-width: 768px) {
      font-size: var(--text-3xl);
    }
  }

  &__meta {
    display: flex;
    gap: var(--space-3);
    font-size: var(--text-sm);
    color: var(--color-text-muted);
  }

  &__content {
    font-size: var(--text-base);
    line-height: 1.75;
    color: var(--color-text);

    h2 {
      font-size: var(--text-2xl);
      font-weight: 700;
      margin-top: var(--space-12);
      margin-bottom: var(--space-4);
    }

    h3 {
      font-size: var(--text-xl);
      font-weight: 600;
      margin-top: var(--space-10);
      margin-bottom: var(--space-3);
    }

    p {
      margin-bottom: var(--space-4);
    }

    a {
      color: var(--color-text);
      text-decoration: underline;
      text-underline-offset: 3px;

      &:hover {
        text-decoration-color: var(--color-text-muted);
      }
    }

    code {
      font-family: var(--font-mono);
      font-size: 0.9em;
      background: rgba(0, 0, 0, 0.04);
      padding: 2px 6px;
      border-radius: 4px;
    }

    pre {
      background: #1e1e2e;
      color: #e0e0e0;
      padding: var(--space-6);
      border-radius: var(--radius-md);
      overflow-x: auto;
      margin-bottom: var(--space-6);

      code {
        background: none;
        padding: 0;
        color: inherit;
      }
    }

    blockquote {
      border-left: 3px solid var(--color-border);
      padding-left: var(--space-6);
      margin: var(--space-6) 0;
      color: var(--color-text-secondary);
      font-style: italic;
    }

    ul, ol {
      padding-left: var(--space-6);
      margin-bottom: var(--space-4);

      li {
        list-style: disc;
        margin-bottom: var(--space-2);
      }
    }

    ol li {
      list-style: decimal;
    }

    img {
      border-radius: var(--radius-md);
      margin: var(--space-6) 0;
    }

    hr {
      border: none;
      border-top: 1px solid var(--color-border);
      margin: var(--space-10) 0;
    }
  }
}
```

- [ ] **Step 5: Verify article page works**

Run dev server, navigate to `/writing/chasing-ghost-bug-react-lazy-loading`. Should see back link, tag, title, meta info, and the markdown content rendered with proper typography.

- [ ] **Step 6: Commit**

```bash
git add src/pages/Article.jsx src/pages/Article.scss src/content/
git commit -m "feat: add article reader with markdown rendering"
```

---

### Task 9: Case Study Page

**Files:**
- Modify: `src/pages/CaseStudy.jsx`
- Create: `src/pages/CaseStudy.scss`

- [ ] **Step 1: Build CaseStudy page**

```jsx
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
```

- [ ] **Step 2: Create CaseStudy styles**

```scss
// src/pages/CaseStudy.scss
@use '../styles/mixins';

.case-study {
  padding-top: calc(var(--nav-height) + var(--space-12));

  &__inner {
    @include mixins.reading-width;
    padding-inline: var(--space-6);
    padding-bottom: var(--space-20);
  }

  &__back {
    display: inline-block;
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    margin-bottom: var(--space-10);
    transition: color 0.2s;

    &:hover {
      color: var(--color-text);
    }
  }

  &__header {
    margin-bottom: var(--space-10);
  }

  &__duration {
    @include mixins.label;
    display: block;
    margin-bottom: var(--space-4);
  }

  &__title {
    font-size: var(--text-5xl);
    font-weight: 800;
    letter-spacing: -2px;
    margin-bottom: var(--space-2);

    @media (max-width: 768px) {
      font-size: var(--text-3xl);
    }
  }

  &__role {
    font-size: var(--text-lg);
    color: var(--color-text-secondary);
  }

  &__intro {
    font-size: var(--text-xl);
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-16);
    max-width: 600px;
  }

  &__sections {
    margin-bottom: var(--space-16);
  }

  &__section {
    margin-bottom: var(--space-12);

    h2 {
      font-size: var(--text-2xl);
      font-weight: 700;
      margin-bottom: var(--space-4);
    }

    p {
      font-size: var(--text-base);
      line-height: 1.75;
      color: var(--color-text-secondary);
    }
  }

  &__tech {
    margin-bottom: var(--space-10);

    h3 {
      font-size: var(--text-xs);
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--color-text-muted);
      margin-bottom: var(--space-4);
    }
  }

  &__pills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  &__products {
    h3 {
      font-size: var(--text-xs);
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--color-text-muted);
      margin-bottom: var(--space-4);
    }
  }

  &__product-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-6);

    a {
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      transition: color 0.2s;

      &:hover {
        color: var(--color-text);
      }
    }
  }
}
```

- [ ] **Step 3: Verify case study pages work**

Navigate to `/work/covrzy` and `/work/weknow`. Both should render with header, intro, sections, tech stack, and product links.

- [ ] **Step 4: Commit**

```bash
git add src/pages/CaseStudy.jsx src/pages/CaseStudy.scss
git commit -m "feat: add case study page for work experience"
```

---

### Task 10: Cleanup & Vercel Config

**Files:**
- Delete: old component directories (`src/components/hero/`, `src/components/about/`, `src/components/skills/`, `src/components/skillcard/`, `src/components/work/`, `src/components/workcard/`, `src/components/project/`, `src/components/projectcard/`, `src/components/contact/`, `src/components/cursor/`, `src/components/navbar/`)
- Delete: `src/jobdata.js`, `src/projectdata.js`, `src/Skill.jsx`, `src/store/`
- Delete: `src/components/hero/socialLinks.js`
- Create: `vercel.json` (for SPA routing)

- [ ] **Step 1: Create vercel.json for client-side routing**

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

This ensures all routes (e.g., `/writing`, `/work/covrzy`) are handled by React Router, not Vercel's 404.

- [ ] **Step 2: Remove old component directories and data files**

```bash
cd "d:/Practice Web/Portfolio"
git rm -r src/components/hero/ src/components/about/ src/components/skills/ src/components/skillcard/ src/components/work/ src/components/workcard/ src/components/project/ src/components/projectcard/ src/components/contact/ src/components/cursor/ src/components/navbar/
git rm src/jobdata.js src/projectdata.js src/Skill.jsx
git rm -r src/store/
```

- [ ] **Step 3: Verify build passes**

```bash
cd "d:/Practice Web/Portfolio" && npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Verify dev server - test all routes**

Run `npm run dev` and test:
- `/` - Full landing scroll works
- `/writing` - Article grid with filters
- `/writing/chasing-ghost-bug-react-lazy-loading` - Article reader
- `/work/covrzy` - Case study
- `/work/weknow` - Case study
- Nav links work on all pages
- Footer renders on all pages
- Scroll-to-section links work on landing page

- [ ] **Step 5: Commit**

```bash
git add vercel.json
git commit -m "feat: cleanup old components, add Vercel SPA routing

Remove all legacy components, data files, and styles.
Add vercel.json rewrites for client-side routing."
```

---

### Task 11: Polish & Responsive Testing

- [ ] **Step 1: Add scroll-to-top on route change**

In `src/App.jsx`, add a scroll restoration component:

```jsx
// Add to App.jsx, before <Routes>
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// In the App component, add <ScrollToTop /> before <Routes>
```

- [ ] **Step 2: Update meta tags in index.html**

Update the `<title>` and meta descriptions to match the new positioning:

```html
<title>Shubham Chaturvedi - Software Engineer & Writer</title>
<meta name="description" content="I think deeply about the systems I build, then write about them. Software Engineer at Covrzy, building infrastructure at scale.">
```

Update OG and Twitter meta tags similarly.

- [ ] **Step 3: Test responsive breakpoints**

Test in browser dev tools at these widths:
- 1440px (desktop)
- 1024px (tablet landscape)
- 768px (tablet)
- 480px (mobile)
- 375px (small mobile)

Check: nav layout, hero text sizing, article grid (2 → 1 col), skills grid (3 → 2 → 1), project grid, work cards, footer.

- [ ] **Step 4: Final build check**

```bash
cd "d:/Practice Web/Portfolio" && npm run build && npm run preview
```

Open the preview URL and test all routes again in the production build.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add scroll restoration, update meta tags, responsive polish"
```
