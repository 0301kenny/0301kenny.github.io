import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://0301kenny.github.io',
  base: '/',
  trailingSlash: 'always',
  i18n: {
    locales: ['zh-tw', 'en'],
    defaultLocale: 'zh-tw',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
