import { z } from "zod";

export const ProductValidator = z.object({
  id: z.number(),
  title: z.string().min(1, { message: "Required" }),
  price: z.number().min(1, { message: "Required" }),
  category: z.string().min(1, { message: "Required" }),
  description: z.string().min(1, { message: "Required" }),
  image: z.string(),
  rating: z.object({ rate: z.number(), count: z.number() }),
});

export type ProductSchema = z.infer<typeof ProductValidator>;
