// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Single source of truth for the canonical origin (P4). Canonical, hreflang, OG,
  // robots.txt and sitemap all derive from this — never hardcode the origin again.
  site: 'https://zettabit.it',
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