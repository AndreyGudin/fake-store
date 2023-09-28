import { z } from "zod";

export const ProductSchema2 = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  category: z.string(),
  description: z.string(),
  image: z.string(),
  rating: z.object({ rate: z.number(), count: z.number() }),
});

export type ProductSchema = z.infer<typeof ProductSchema2>;
