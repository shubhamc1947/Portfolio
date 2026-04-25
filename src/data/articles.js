// src/data/articles.js

const articles = [
  {
    slug: 'distributed-ledger-isolation-decimal-precision',
    title: 'Lessons from Building a Distributed Ledger Service',
    description: 'Isolation levels and decimal precision in a Go ledger handling thousands of concurrent transactions across EC2 instances. The tradeoffs that matter for financial correctness.',
    tag: 'Distributed Systems',
    date: '2025-10-04',
    readingTime: '4 min',
    source: 'linkedin',
    platform: 'LinkedIn',
    externalUrl: 'https://www.linkedin.com/posts/shubhamchat03_distributedsystems-golang-databasedesign-activity-7379935244042489856-dqxP',
  },
  {
    slug: 'chasing-ghost-bug-react-lazy-loading',
    title: 'Chasing a Ghost Bug in React Lazy Loading: A CSS Story',
    description: 'A debugging story - React lazy loading failed silently because of a stale `visibility: hidden` rule. How I traced it.',
    tag: 'Performance',
    date: '2025-06-09',
    readingTime: '8 min',
    source: 'medium',
    externalUrl: 'https://medium.com/@shubhamchat224122/chasing-a-ghost-bug-in-react-lazy-loading-a-css-story-c4c7d33fafe2',
  },
  {
    slug: 'scaling-sitemap-millions-pages',
    title: 'Scaling sitemap.xml for Millions of Dynamic Pages',
    description: 'Single-file sitemap.xml breaks at scale. Splitting, indexing, and streaming generation for millions of dynamic pages.',
    tag: 'Scale',
    date: '2025-07-03',
    readingTime: '10 min',
    source: 'medium',
    publication: 'Dev Simplified',
    externalUrl: 'https://medium.com/dev-simplified/do-you-really-know-how-to-scale-sitemap-xml-for-millions-of-dynamic-pages-1bfaf779007d',
  },
  {
    slug: 'google-docs-dynamic-template-certificates',
    title: 'Google Docs as a Dynamic Template for Certificates and Invoices',
    description: 'A classic problem solved differently - using the Google Docs API instead of PDF libraries.',
    tag: 'Backend',
    date: '2025-06-22',
    readingTime: '8 min',
    source: 'medium',
    publication: 'Dev Simplified',
    externalUrl: 'https://medium.com/dev-simplified/have-you-ever-tried-google-docs-as-a-dynamic-template-for-generating-certificates-invoices-74abcafde3e0',
  },
];

export default articles;
