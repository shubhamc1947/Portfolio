const work = [
  {
    slug: 'shifu',
    company: 'Shifu Ventures',
    role: 'Product Engineer',
    year: '2026 - now',
    highlight: 'Building internal tools, databases, and zero-to-one products for a venture studio - end-to-end across frontend, backend, and deploy.',
    techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Vercel'],
    metrics: [
      { value: '0→1', label: 'products' },
      { value: 'E2E', label: 'ownership' },
      { value: 'Studio', label: '+ portfolio' },
    ],
    content: {
      intro: 'Product engineer at a venture studio - I build software for the studio itself and for the portfolio companies it incubates. Internal tools, internal databases, operational dashboards, and the occasional zero-to-one product.',
      sections: [
        {
          title: 'End-to-end ownership',
          body: 'Front-end, back-end, deployment - all mine. Every project is owned from sketch to production, which means I make the calls on stack, architecture, and shipping cadence.',
        },
        {
          title: 'Close to the founders',
          body: 'Working directly with the founders, co-founders, and software veterans who run the studio. The feedback loop is short, the context is dense, and the learning compounds fast.',
        },
      ],
      products: [],
    },
  },
  {
    slug: 'covrzy',
    company: 'Covrzy',
    role: 'Software Developer Engineer',
    year: '2024 - 2026',
    highlight: 'Built AWS infra handling 600K+ bookings/month at sub-200ms p95 - drove 966K+ impressions and 12.6K+ clicks in 5 months.',
    techStack: ['Go', 'TypeScript', 'Node.js', 'React', 'Next.js', 'PostgreSQL', 'AWS'],
    metrics: [
      { value: '600K+', label: 'monthly bookings' },
      { value: '<200ms', label: 'p95 response' },
      { value: '99.9%', label: 'uptime' },
    ],
    content: {
      intro: 'At Covrzy, I worked on the core insurance infrastructure - building scalable backend systems that power multiple product lines.',
      sections: [
        {
          title: 'Scaling Reservation Infrastructure',
          body: 'Architected and optimized AWS infra (EC2, S3, RDS, API Gateway, ALB, CloudWatch) for Travel APIs - 600K+ monthly bookings, 99.9% uptime, <200ms averages.',
        },
        {
          title: 'Product Reach',
          body: 'Shipped web apps in Node/TS/React for Health and Liability that drove 966K+ impressions and 12.6K+ clicks within 5 months of launch.',
        },
        {
          title: 'Ops Velocity',
          body: 'Cut client response time from 24h to 1h by integrating Slack Webhooks across every product for zero-delay request routing. Added MSG91 + Heltar WhatsApp to the stack.',
        },
      ],
      products: [
        { name: 'Blog', url: 'https://covrzy.com/blog' },
      ],
    },
  },
  {
    slug: 'weknow',
    company: 'Weknow Technology',
    role: 'SDE → Intern',
    year: '2023 - 24',
    highlight: 'Engineered a government survey portal serving 60,000+ users across Uttar Pradesh.',
    techStack: ['JavaScript', 'React', 'PHP', 'MySQL', 'Node.js', 'TypeScript'],
    metrics: [
      { value: '60K+', label: 'users' },
      { value: '1,000+', label: 'employees' },
      { value: '5→1 day', label: 'process time' },
    ],
    content: {
      intro: 'My first engineering role - started as an intern building school ERPs, grew into building government-scale systems serving tens of thousands of users.',
      sections: [
        {
          title: 'Government Survey Portal',
          body: 'Designed and shipped a survey portal that collected data from 60K+ users across Uttar Pradesh, with multi-layer verification and automated ID-card generation.',
        },
        {
          title: 'College ERP & Payment Integration',
          body: 'Automated the exam re-evaluation flow at KNIPSS - integrated CCAvenue payments, cut manual process from 5 days to 1.',
        },
        {
          title: 'Payroll System (HRMS)',
          body: 'Built UPRNSS Payroll for 1,000+ employees using TypeScript, MySQL, Node.js, and React.',
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
