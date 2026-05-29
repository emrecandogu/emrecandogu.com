// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://emrecandogu.com',
  integrations: [
    sitemap({
      filter: (page) =>
        ![
          '/dev-tools',
          '/publications',
          '/talks',
          '/tags',
          '/posts',
        ].some((path) => new URL(page).pathname.startsWith(path)),
    }),
  ],
});
