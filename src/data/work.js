// src/data/work.js

const work = [
  {
    slug: 'covrzy',
    company: 'Covrzy',
    role: 'Software Developer Engineer',
    duration: '2024 — Present',
    highlight: 'Built AWS infra handling 400K+ reservations/month with <200ms response time',
    techStack: ['Golang', 'Node.js', 'React', 'PostgreSQL', 'TypeScript', 'MySQL', 'AWS', 'Strapi', 'Next.js'],
    content: {
      intro: 'At Covrzy, I work on the core insurance infrastructure — building scalable backend systems that power multiple product lines.',
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
      metrics: [
        { value: '400K+', label: 'Reservations/mo' },
        { value: '<200ms', label: 'Response time' },
        { value: '99.9%', label: 'Uptime' },
      ],
      products: [
        { name: 'Blog', url: 'https://covrzy.com/blog' },
      ],
    },
  },
  {
    slug: 'weknow',
    company: 'Weknow Technology',
    role: 'Software Developer Engineer → Intern',
    duration: '2023 — 2024',
    highlight: 'Engineered government survey portal serving 60,000+ users across Uttar Pradesh',
    techStack: ['JavaScript', 'React', 'PHP', 'MySQL', 'Node.js', 'TypeScript', 'jQuery'],
    content: {
      intro: 'My first engineering role — started as an intern building school ERPs, grew into building government-scale systems serving tens of thousands of users.',
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
          title: 'Internship — Foundation Building',
          body: 'Designed a complete School ERP system covering dynamic content management, real-time data interaction, and admin control. Built and optimized a Hotel Billing System with itemized billing, tax calculations, and printable invoice generation.',
        },
      ],
      metrics: [
        { value: '60K+', label: 'Users served' },
        { value: '1,000+', label: 'Employees managed' },
        { value: '5→1 day', label: 'Process time cut' },
      ],
      products: [
        { name: 'KNIPSS', url: 'https://knipssexams.in/' },
        { name: 'UPRNSS', url: 'https://uprnss.org/' },
      ],
    },
  },
];

export default work;
