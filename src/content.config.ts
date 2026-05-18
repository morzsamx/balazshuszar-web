import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const references = defineCollection({
  loader: glob({ base: './src/references', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.coerce.number(),
    yearEnd: z.coerce.number().optional(),
    description: z.string().optional(),
    tools: z.array(z.enum([
      "vray",
      "3dsmax",
      "photoshop",
      "illustrator",
      "voxedit"
    ])).default([])
  }),
});


export const collections = { references };