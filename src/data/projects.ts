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
    description: '以提供的遊戲框架重製經典橫向捲軸遊戲，運用 OOP（封裝、繼承、多型）架構場景、角色與敵人；Boss 攻擊模式以 FSM 實作。另以 Python（Pillow + NumPy）開發自動化地圖生成工具，將 2 個關卡共 40K+ 地塊的建立時間從數小時壓縮至數秒。',
    tags: ['C++', 'OOP', 'FSM', 'Game Dev', 'Python'],
    github: 'https://github.com/AidChen0509/Rockman',
    demo: 'https://www.youtube.com/watch?v=ZsLQwx-Hp84',
    featured: true,
    lang: 'zh',
  },
];

export const featuredProjects = projects.filter(p => p.featured);
