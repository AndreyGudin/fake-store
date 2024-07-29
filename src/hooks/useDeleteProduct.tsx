"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductSchema } from "@/types/ProductSchema";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      const limitedProducts = queryClient.getQueryData([
        "limitedProducts",
      ]) as ProductSchema[];
      const products = queryClient.getQueryData([
        "products",
      ]) as ProductSchema[];

      const productId = products.findIndex((item) => item.id === id);

      const changedProducts = [...products];
      const changedLimitedProducts = [...limitedProducts];

      changedProducts.splice(productId, 1);
      changedLimitedProducts.splice(productId, 1);

      queryClient.setQueryData(
        ["limitedProducts"],
        (oldData: ProductSchema[] | undefined) => {
          return oldData ? changedLimitedProducts : oldData;
        }
      );
      queryClient.setQueryData(
        ["product"],
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
