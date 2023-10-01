"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductSchema } from "@/types/ProductSchema";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      const products = queryClient.getQueryData([
        "products",
      ]) as ProductSchema[];
      const productId = products.findIndex((item) => item.id === Number(id));
      const deleted = products.splice(productId, 1);
      queryClient.setQueryData(["products"], products);
      return new Promise<ProductSchema>((resolve, reject) => {
        resolve(deleted[0]);
      });
    },
  });
};
