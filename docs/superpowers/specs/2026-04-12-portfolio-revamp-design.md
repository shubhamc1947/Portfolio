# Portfolio Revamp - Design Spec

**Date:** 2026-04-12
**Status:** Approved

## Identity & Framing

- **Identity:** The Storyteller - narrative-driven, scroll-based experience
- **Framing:** The Mind - lead with thinking (writing, engineering philosophy), then show the work that proves it
- **Visual Direction:** Clean Modernist - light background, bold typography, high contrast. Linear/Vercel energy.
- **Structure:** Hybrid - cinematic landing scroll + dedicated subpages for depth

## Target Audience

- Senior engineers evaluating Shubham's capabilities
- Awwwards judges (site should be submission-ready)
- Must NOT look AI-generated

## Site Architecture

### Routes

| Route | Purpose |
|-------|---------|
| `/` | Landing page - the 60-second story scroll |
| `/writing` | All articles - Medium imports + original pieces, filterable by tag |
| `/writing/:slug` | Individual article - full content, optimized reading experience |
| `/work/covrzy` | Case study - Covrzy role, full narrative |
| `/work/weknow` | Case study - Weknow Technology, both roles as one arc |

### Landing Page Scroll Chapters

1. **Hero** - "I think deeply about the systems I build." Bold statement, not a greeting. 400K metric for credibility. Two CTAs: "Read my writing" and "See my work". No hero image - words are the hero.
2. **Philosophy Statement** - Short punchy bridge quote. "Most engineers ship features. I think about why the feature exists, then build it so it lasts."
3. **Featured Writing** - 4 hand-picked articles as cards (React Lazy Loading, Scaling Sitemaps, Database Indexing, Browser URL). Tags by engineering domain. Links to `/writing/:slug`.
4. **Work** - Clean clickable list. Each role: company name, title, one standout metric, date range, arrow. Click → case study page.
5. **Skills** - Grouped by capability: Languages, Frontend, Backend, Databases, Cloud & DevOps, Workflow. Pill-style tags, not icon cards.
6. **Projects** - 2-3 side projects shown as compact cards (CollabCode, OpenPen, ShopHere). Name, one-line description, tech stack pills, GitHub + live links. Lightweight - not case studies, just proof of breadth.
7. **Contact** - Dark footer block. "Let's build something." Direct email link, social links. No contact form. "npx shubhamc1947" as subtle easter egg.

## Pages Detail

### `/writing` - Writing Index

- Grid of all articles (Medium + original)
- Each card: tag, title, one-line hook, reading time, date
- Filterable by tag/category
- Categories: Performance, Scale, Backend, Fundamentals, Frontend, DevOps

### `/writing/:slug` - Article Page

- Clean reading experience optimized for long-form technical content
- Typography-first design (good line-height, max-width ~680px for readability)
- Articles stored as MDX or Markdown files in the repo
- Medium articles: embed content directly (not just links)
- Support for code blocks, images, callouts

### `/work/covrzy` - Case Study

- Full narrative: the company context, problems faced, approach, architecture decisions, impact
- Key metrics: 400K+ reservations/month, <200ms response time, 99.9% uptime, response time reduction from 24hrs to 1hr
- Tech: Golang, Node.js, React, PostgreSQL, TypeScript, MySQL, AWS, Strapi, Next.js
- Products: Health (health.covrzy.com), Liability (start.covrzy.com), Blog (covrzy.com/blog)

### `/work/weknow` - Case Study

- Combined narrative: intern → SDE arc
- Key projects: KNIPSS College ERP (exam reevaluation, CCAvenue), Government survey portal (60K+ users, UP), UPRNSS Payroll/HRMS (1000+ employees)
- Tech: JavaScript, React, PHP, MySQL, Node.js, TypeScript
- Growth story: from building school ERPs to government-scale systems

## Visual Design System

### Color Palette

- **Background:** `#fafaf9` (warm off-white)
- **Text primary:** `#0a0a0a` (near-black)
- **Text secondary:** `#666666`
- **Text muted:** `#999999`
- **Border:** `#e5e5e5`
- **Card background:** `#ffffff`
- **Contact/footer:** `#0a0a0a` (dark block for contrast)
- **Accent:** Minimal - rely on typography weight and size for hierarchy, not color

### Typography

- **Font family:** System stack or Inter/Satoshi (clean, modern sans-serif)
- **Headings:** 700-800 weight, tight letter-spacing (-1px to -2px), large sizes (36-56px)
- **Body:** 400 weight, 14-16px, comfortable line-height (1.5-1.6)
- **Labels/tags:** 11-12px, uppercase, letter-spacing 2-4px, muted color
- **Monospace:** For code snippets, the npx command, reading time metadata

### Spacing & Layout

- **Max content width:** 1200px
- **Article reading width:** 680px
- **Section padding:** 80px vertical on landing, 60px on subpages
- **Card padding:** 24-28px
- **Grid gaps:** 24-32px
- **Border radius:** 10-12px for cards, 20-24px for pills/buttons

### Animation (Framer Motion)

- Scroll-triggered reveals (whileInView) - fade up, stagger children
- Hero text: faded line animates to full opacity on scroll
- Work cards: subtle arrow translate on hover
- Article cards: border color change + shadow on hover
- No bouncy/spring animations - use `ease` or `easeOut` curves
- No floating images or rotating elements

### Components to Remove

- Colored card grid with box shadows (neumorphism style)
- `<hr>` dividers between sections
- "Code : Work" / "Code : Projects" headings
- Multi-language greeting animations
- Floating hero image with bounce animation
- Flat skill icon grid (26 equal-weight cards)
- Contact form with EmailJS
- Dark theme (`#1e1e2e` background)
- About section with GIF
- Custom cursor component
- Tooltip-heavy interactions

## Technical Decisions

### Keep

- **Vite + React** - no framework switch needed
- **Framer Motion** - but used intentionally (scroll reveals, not bouncy hovers)
- **SCSS** - restructured with design tokens (CSS custom properties for spacing, type scale, colors)
- **Vercel deployment** - already configured
- **Vercel Analytics** - keep tracking

### Add

- **React Router** - for multi-page navigation (`react-router-dom`)
- **MDX or Markdown rendering** - for blog articles (e.g., `react-markdown` + `remark-gfm` + `rehype-highlight`)
- **Design tokens** - CSS custom properties for the entire design system
- **Proper font loading** - switch from Space Grotesk to Inter or Satoshi via `@font-face`

### Remove

- **react-tooltip** - no longer needed in new design
- **react-toastify** - no contact form
- **@emailjs/browser** - no contact form
- **Font Awesome CDN** - skill icons no longer used
- **Umami analytics script** - consolidate to Vercel Analytics only

### Data Architecture

- `src/data/articles.js` - article metadata (title, slug, tags, date, readingTime, source: 'medium' | 'original')
- `src/content/articles/*.mdx` - full article content for embedded pieces
- `src/data/work.js` - restructured work data (company, role, highlight metric, slug)
- `src/content/work/*.mdx` - case study content
- `src/data/skills.js` - skills grouped by category

## Content Requirements

Content that Shubham needs to write/provide:

1. **Philosophy statement** - 1-2 sentences about his engineering philosophy
2. **Covrzy case study** - expanded narrative (problem, approach, architecture, impact)
3. **Weknow case study** - expanded narrative covering both roles
4. **4 Medium articles** - content to embed directly (can start with the top 4, add more over time)
5. **Bio/tagline refinement** - current "Full Stack Wizard" → something more aligned with "The Mind" framing

## Out of Scope

- Dark mode toggle (single light theme)
- Blog CMS or admin panel
- Comments on articles
- Analytics dashboard
- Newsletter/subscription
- Custom domain setup (keep Vercel subdomain for now)
- Dedicated project detail pages (projects shown as compact cards on landing only)
