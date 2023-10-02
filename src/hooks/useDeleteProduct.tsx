"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductSchema } from "@/types/ProductSchema";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      const products = queryClient.getQueryData([
        "products",
      ]) as ProductSchema[];
      const productId = products.findIndex((item) => item.id === id);
      const changedProducts = products.toSpliced(productId, 1);
      queryClient.setQueryData(
        ["products"],
        (oldData: ProductSchema[] | undefined) => {
          return oldData ? changedProducts : oldData;
        }
      );
      return new Promise<ProductSchema>((resolve, reject) => {
        resolve(products[id]);
      });
    },
  });
};
