// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://best-invoicegenerator.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'it', 'nl', 'pt', 'ar', 'ja'],
    routing: { prefixDefaultLocale: false }
  },
  vite: { plugins: [tailwindcss()] }
});
