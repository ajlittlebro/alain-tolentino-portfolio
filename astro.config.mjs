// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Public URL of the site. Adjust before deploying (or set SITE_URL in .env).
const site = process.env.SITE_URL ?? 'https://alain-tolentino.vercel.app';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'de', locales: { de: 'de-DE', en: 'en-US' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
