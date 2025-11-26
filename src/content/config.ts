import { defineCollection, z } from "astro:content";

const books = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    autor: z.string(),
    img: z.string(),
    readingTime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      Colombia: z.string().url(),
    }),
  })
})

export const collections = { books }