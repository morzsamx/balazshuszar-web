import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { toolKeys } from './lib/tools.ts';

const references = defineCollection({
  loader: glob({ base: './src/references', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.coerce.number(),
    yearEnd: z.coerce.number().optional(),
    tools: z.array(z.enum(toolKeys)).default([])
  }),
});


export const collections = { references };