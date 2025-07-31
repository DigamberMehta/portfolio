export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface TechStack {
  category: string;
  technologies: {
    name: string;
    icon: string;
    color: string;
  }[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Modern dashboard with real-time data visualization, machine learning insights, and predictive analytics.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TypeScript', 'D3.js', 'Python', 'TensorFlow'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    id: '2',
    title: 'Blockchain DeFi Platform',
    description: 'Decentralized finance platform with smart contracts, yield farming, and automated market making.',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    id: '3',
    title: 'Neural Network Visualizer',
    description: 'Interactive tool for visualizing and training neural networks with real-time performance metrics.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'React', 'WebGL', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  },
  {
    id: '4',
    title: 'Cloud Infrastructure Manager',
    description: 'Multi-cloud management platform with automated scaling, monitoring, and cost optimization.',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Go', 'Kubernetes', 'React', 'AWS', 'Terraform'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  }
];

export const techStack: TechStack[] = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', icon: '⚛️', color: '#61DAFB' },
      { name: 'TypeScript', icon: '📘', color: '#3178C6' },
      { name: 'Next.js', icon: '▲', color: '#000000' },
      { name: 'Tailwind', icon: '🎨', color: '#06B6D4' },
      { name: 'Three.js', icon: '🎲', color: '#000000' },
      { name: 'Framer Motion', icon: '🎬', color: '#0055FF' }
    ]
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: '🟢', color: '#339933' },
      { name: 'Python', icon: '🐍', color: '#3776AB' },
      { name: 'Go', icon: '🐹', color: '#00ADD8' },
      { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
      { name: 'Redis', icon: '🔴', color: '#DC382D' },
      { name: 'Docker', icon: '🐳', color: '#2496ED' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    technologies: [
      { name: 'AWS', icon: '☁️', color: '#FF9900' },
      { name: 'Kubernetes', icon: '⚙️', color: '#326CE5' },
      { name: 'Terraform', icon: '🏗️', color: '#7B42BC' },
      { name: 'GitHub Actions', icon: '🔄', color: '#2088FF' },
      { name: 'Monitoring', icon: '📊', color: '#FF6B6B' },
      { name: 'Security', icon: '🔒', color: '#4ECDC4' }
    ]
  }
];

export const personalInfo = {
  name: 'Alex Chen',
  title: 'Full Stack Developer & AI Enthusiast',
  location: 'San Francisco, CA',
  email: 'alex@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  bio: 'Passionate about building scalable applications and exploring the intersection of AI and web technologies. Always eager to tackle complex challenges and create innovative solutions.',
  experience: '5+ Years',
  projectsCompleted: '50+',
  clientsSatisfied: '100%'
};