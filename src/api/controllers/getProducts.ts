import { $api } from "@/api/axios/instance";
import { ProductSchema } from "@/types/ProductSchema";

export const getProducts = async (): Promise<ProductSchema[]> => {
  return (await $api.get("/products")).data;
};
