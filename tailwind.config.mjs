/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warm: {
          bg:      '#FAFAF8',
          surface: '#FFFFFF',
          fg:      '#1C1917',
          muted:   '#78716C',
          subtle:  '#A8A29E',
          border:  '#E7E5DF',
          accent:  '#D97706',
        },
        dark: {
          bg:      '#1A1917',
          surface: 'rgba(255,255,255,0.04)',
          fg:      '#F5F4F1',
          muted:   '#78716C',
          border:  'rgba(255,255,255,0.07)',
          accent:  '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
