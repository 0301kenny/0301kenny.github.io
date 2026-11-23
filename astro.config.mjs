import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://0301kenny.github.io',
  // 隱藏數據版（VARIANT=lite）部署在 /lite/，輸出到 dist-lite，再由部署流程併進 dist/lite
  base: process.env.VARIANT === 'lite' ? '/lite/' : '/',
  outDir: process.env.VARIANT === 'lite' ? './dist-lite' : './dist',
  trailingSlash: 'always',
  i18n: {
    locales: ['zh-tw', 'en'],
    defaultLocale: 'zh-tw',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
