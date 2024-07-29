import { z } from "zod";

export const ProductValidator = z.object({
  title: z.string().min(1, { message: "Обязательно для заполнения" }),
  price: z.number().min(1, { message: "Обязательно для заполнения" }),
  category: z.string().min(1, { message: "Обязательно для заполнения" }),
  description: z.string().min(1, { message: "Обязательно для заполнения" }),
  image: z.optional(z.string()),
  rating: z.object({ rate: z.number(), count: z.number() }),
});

export type ProductSchema = z.infer<typeof ProductValidator> & { id: number };
