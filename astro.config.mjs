import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://crossinguard.dev',
  integrations: [
    sitemap(),
    icon(),
    starlight({
      title: 'crossinguard.dev',
      customCss: ['./src/styles/docs.css'],
      favicon: '/favicon.ico',
      social: {
        github: 'https://github.com/crossinguard/crossinguard.dev',
      },
      sidebar: [
        { label: 'Docs Overview', link: '/docs' },
        {
          label: 'Astro',
          autogenerate: { directory: 'astro' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
