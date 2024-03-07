// 1. Import utilities from `astro:content`
import { z, reference, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string().max(150, 'Descriptions is too long'),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    author: reference('authors'),
    publishDate: z.date(),
    isDraft: z.boolean(),
  }),
});

const authorCollection = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    porfolio: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
  'authors': authorCollection,
};