export interface Project {
  name: string;
  description: string;
  language: string;
  github: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'ChatPDF',
    description:
      'RAG-based PDF chat application that allows users to upload documents and ask questions with context-aware answers.',
    language: 'TypeScript',
    github: 'https://github.com/theprajwaldongare/ChatPDF',
    tags: ['RAG', 'LangChain', 'TypeScript', 'AI'],
    featured: true,
  },
  {
    name: 'Organize',
    description:
      'AI-powered agent designed to organize unstructured files and folders.',
    language: 'Python',
    github: 'https://github.com/theprajwaldongare/Organize',
    tags: ['Python', 'AI', 'Automation', 'Agent'],
    featured: true,
  },
  {
    name: 'NoSpam',
    description:
      'Machine learning-based spam message classification application.',
    language: 'Python / Jupyter Notebook',
    github: 'https://github.com/theprajwaldongare/NoSpam',
    tags: ['ML', 'NLP', 'scikit-learn', 'Python'],
  },
  {
    name: 'NextMovie',
    description: 'Machine learning-based movie recommendation system.',
    language: 'Python / Jupyter Notebook',
    github: 'https://github.com/theprajwaldongare/NextMovie',
    tags: ['ML', 'Recommendation', 'Python'],
  },
  {
    name: 'BookFlow',
    description: 'Book management system with a Node.js backend.',
    language: 'JavaScript',
    github: 'https://github.com/theprajwaldongare/BookFlow',
    tags: ['Node.js', 'REST API', 'JavaScript'],
  },
  {
    name: 'DarkNote',
    description: 'A note-taking extension built for Visual Studio Code.',
    language: 'JavaScript',
    github: 'https://github.com/theprajwaldongare/DarkNote',
    tags: ['VS Code', 'Extension', 'JavaScript'],
  },
  {
    name: 'Shortify',
    description:
      'URL shortening application for converting long URLs into shorter links.',
    language: 'JavaScript',
    github: 'https://github.com/theprajwaldongare/Shortify',
    tags: ['Node.js', 'JavaScript', 'Web App'],
  },
  {
    name: 'QuiteChat',
    description:
      'Multi-room real-time chatting application built using Socket.IO.',
    language: 'JavaScript',
    github: 'https://github.com/theprajwaldongare/QuiteChat',
    tags: ['Socket.IO', 'Real-time', 'JavaScript'],
  },
];

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'JavaScript', 'Java'],
  },
  {
    category: 'Web Development',
    items: ['React', 'TypeScript', 'Node.js', 'Flask', 'HTML', 'CSS'],
  },
  {
    category: 'Backend & Tools',
    items: ['REST APIs', 'Socket.IO', 'Git', 'GitHub'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['RAG', 'LangChain', 'Machine Learning', 'NLP', 'scikit-learn'],
  },
  {
    category: 'Other',
    items: ['VS Code Extension Development', 'Android Development', 'OpenCV'],
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
