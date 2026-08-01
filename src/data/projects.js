// src/data/projects.js

const projects = [
  {
    name: 'SafeMap',
    description: 'Thread-safe in-memory key-value store with 64-bucket sharded locking, benchmarked at 4,300+ JSON tx/s.',
    techStack: ['Go', 'Concurrency', 'REST API', 'Benchmarking'],
    github: 'https://github.com/shubhamc1947/safemap',
  },
  {
    name: 'CollabCode',
    description: 'Real-time collaborative code editor: live multi-user editing over Socket.IO, with multi-language support.',
    techStack: ['MongoDB', 'React', 'Node.js', 'Socket.io', 'Framer Motion'],
    github: 'https://github.com/shubhamc1947/Colla8-Code',
    live: 'https://colla8code.vercel.app/',
  },
  {
    name: 'OpenPen',
    description: 'MERN stack blogging platform with secure JWT-based authentication.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/shubhamc1947/OpenPen',
    live: 'https://openpen.vercel.app/',
  },
];

export default projects;
