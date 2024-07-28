"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductSchema } from "@/types/ProductSchema";

export const usePutProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProduct: ProductSchema) => {
      const products = queryClient.getQueryData([
        "limitedProducts",
      ]) as ProductSchema[];
      const productId = products.findIndex(
        (item) => item.id === Number(newProduct.id)
      );
      products[productId] = newProduct;
      queryClient.setQueryData(["limitedProducts"], products);
      return new Promise<ProductSchema>((resolve, reject) => {
        resolve(newProduct);
      });
    },
  });
};
