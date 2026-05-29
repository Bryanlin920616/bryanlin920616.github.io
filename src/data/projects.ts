export interface Project {
  title: string;
  year: number;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  thumbnail?: string;
  lang?: 'zh' | 'en' | 'both';
  primaryLink?: string;
}

export const projects: Project[] = [
  {
    title: 'Rockman Remake',
    year: 2023,
    description: '用課程提供的遊戲框架復刻 Rockman。除了角色、敵人和 Boss 狀態機，也順手寫了一個 Python 地圖工具，把原本要手動排很久的 40K+ 地塊生出來。是我第一個用C++寫的Project，也是第一次感受到OOP的魅力。',
    tags: ['C++', 'OOP', 'FSM', 'Game Dev', 'Python'],
    github: 'https://github.com/AidChen0509/Rockman',
    demo: 'https://www.youtube.com/watch?v=ZsLQwx-Hp84',
    featured: true,
    thumbnail: '/projects/rockman-init-background.bmp',
    lang: 'zh',
  },
];

export const featuredProjects = projects.filter(p => p.featured);
