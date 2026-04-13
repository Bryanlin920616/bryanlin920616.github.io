export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  videoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Project Name',
    description: '描述這個 project 做什麼、解決什麼問題。',
    tags: ['Node.js', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/your-username/project',
    featured: true,
  },
];

export const featuredProjects = projects.filter(p => p.featured);
