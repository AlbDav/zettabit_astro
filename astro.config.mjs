// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Single source of truth for the canonical origin (P4). Change here at migration
  // time (zettabit.it) and canonical / hreflang / OG / sitemap all follow.
  site: 'https://zettabit.netlify.app',
  i18n: {
    // Italian is the primary market (P5.1): IT in root, EN under /en/.
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});