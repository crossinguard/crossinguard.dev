import { defineCollection, z } from 'astro:content';

const storiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    era: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  stories: storiesCollection,
};
