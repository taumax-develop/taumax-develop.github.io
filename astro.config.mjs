// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  site: 'https://taumax-develop.github.io',
  integrations: [mdx(), sitemap()],
});
