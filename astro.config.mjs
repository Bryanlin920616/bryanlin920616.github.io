import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bryanlin920616.github.io',
  base: '/portfolio',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
});
