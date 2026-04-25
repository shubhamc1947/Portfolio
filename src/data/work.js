const work = [
  // Temporarily hidden - re-enable when ready
  /* {
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
        {
          title: "What I'm learning",
          body: 'The product side of engineering. Building MVPs that scale, deciding what to ship vs defer, designing flow from sketch to production. Working close to the founders, the feedback loop is short and the learning compounds.',
        },
      ],
      products: [],
    },
  }, */
  {
    slug: 'covrzy',
    company: 'Covrzy',
    role: 'Software Developer Engineer',
    year: '2024 - 2026',
    highlight: 'Built AWS infra handling 600K+ bookings/month at sub-200ms p95 - shipped Health and Liability product lines end-to-end.',
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
          body: 'Architected and optimized AWS infra (EC2, S3, RDS, API Gateway, ALB, CloudWatch) for Travel APIs - 600K+ monthly bookings, 99.9% uptime, sub-200ms p95 latency.',
        },
        {
          title: 'Shipping New Product Lines',
          body: 'Shipped Health and Liability web apps from zero in Node/TS/React - full-stack from API design and schema through to the public landing pages, delivered within 5 months of project kick-off.',
        },
        {
          title: 'Ops Velocity',
          body: 'Cut client response time from 24h to 1h by integrating Slack Webhooks across every product for zero-delay request routing. Added MSG91 + Heltar WhatsApp to the stack.',
        },
        {
          title: 'What I learned',
          body: 'Where I learned to operate at scale. AWS infrastructure, CI/CD pipelines, deployment discipline, and the rigor of holding sub-200ms p95 under real request volume.',
        },
      ],
      products: [],
    },
  },
  {
    slug: 'weknow',
    company: 'Weknow Technology',
    role: 'Intern → SDE',
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
        {
          title: 'What I learned',
          body: 'First engineering role - where I learned what production code actually looks like. SDLC discipline, role-based access control, schema design that survives change. Real users, not class projects.',
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
