/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warm: {
          bg:            '#FAFAF7',   // warm paper-white
          surface:       '#FFFFFF',
          'surface-2':   '#F2EEE7',   // slightly deeper warm surface for cards
          fg:            '#1C1814',   // warm near-black
          muted:         '#6B635A',   // warm mid-gray
          subtle:        '#A39B91',   // lighter label text
          border:        '#E6E1D9',   // warm divider
          accent:        '#B45309',   // refined amber (amber-700, 4.7:1 on white)
          'accent-light':'#FDF5E8',   // amber wash for badges
        },
        dark: {
          bg:            '#1A1714',   // warm very-dark
          surface:       'rgba(255,248,240,0.05)',
          'surface-2':   'rgba(255,248,240,0.09)',
          fg:            '#F5F1EB',   // warm near-white
          muted:         '#8B7F74',
          border:        'rgba(255,245,230,0.09)',
          accent:        '#E8920C',   // brighter amber for dark surfaces
          'accent-wash': 'rgba(232,146,12,0.14)',
        },
      },
      fontFamily: {
        sans:    ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        display: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
