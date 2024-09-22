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

const personasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = {
  stories: storiesCollection,
  personas: personasCollection,
};
