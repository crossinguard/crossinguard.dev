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
      title: 'crossinguard.dev docs',
      logo: {
        src: './src/assets/cg-logo.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/docs.css'],
      favicon: '/favicon.ico',
      social: {
        github: 'https://github.com/crossinguard/crossinguard.dev',
      },
      sidebar: [
        { label: 'Docs Overview', link: '/docs' },
        {
          label: 'Web Dev',
          autogenerate: { directory: 'webdev' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
