import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// const blogCollection = defineCollection({
//   type: 'content',
//   schema: z.object({
//     title: z.string(),
//     author: z.string(),
//     description: z.string(),
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//     heroImage: z.string().optional(),
//     tags: z.array(z.string()),
//   }),
// });
const storiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = {
  // blog: blogCollection,
  stories: storiesCollection,
  docs: defineCollection({ schema: docsSchema() }),
};
