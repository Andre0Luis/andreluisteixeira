// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// No GitHub Pages, o workflow informa SITE e BASE a partir da configuração do repositório
// (domínio próprio ou github.io/<repo>). Localmente, valem os padrões abaixo.
const site = process.env.SITE || 'https://andreluisteixeira.dev';
const base = process.env.BASE || '/';

export default defineConfig({
  site,
  base,
  integrations: [vue()],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: { include: ['vue'] },
  },
});
