"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductSchema } from "@/types/ProductSchema";

export const usePostProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProduct: ProductSchema) => {
      return new Promise<ProductSchema>((resolve, reject) => {
        resolve(newProduct);
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["products"],
        (oldData: ProductSchema[] | undefined) => {
          return oldData ? [...oldData, data] : oldData;
        }
      );
    },
  });
};
