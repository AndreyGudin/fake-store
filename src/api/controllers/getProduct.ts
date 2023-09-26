import { $api } from "@/api/axios/instance";
import { ProductSchema } from "@/types/ProductSchema";

export const getProduct = async (id: string): Promise<ProductSchema> => {
  const result = await $api.get(`/products/${id}`);
  return result.data;
};
