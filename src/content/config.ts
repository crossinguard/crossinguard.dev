import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.date(),
    image: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
  }),
});

export const collections = {
  notes: notesCollection,
};
