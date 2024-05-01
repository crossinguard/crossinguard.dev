import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const storiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    era: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  stories: storiesCollection,
  docs: defineCollection({ schema: docsSchema() }),
};
