"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ProductSchema } from "@/types/ProductSchema";

export const useGetLimitProducts = (limit: number) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["limitedProducts"],
    queryFn: () => {
      const products = queryClient.getQueryData([
        "products",
      ]) as ProductSchema[];
      const limitedProducts = queryClient.getQueryData([
        "limitedProducts",
      ]) as ProductSchema[];
      console.log("limitedProducts", limitedProducts);

      const productsNumber = products.length;
      let result: ProductSchema[] | undefined = [];
      if (limitedProducts) {
        if (limit <= productsNumber) {
          if (limitedProducts.length + limit <= productsNumber) {
            console.log("add");

            const slice = products.slice(
              limitedProducts.length,
              limitedProducts.length + limit
            );
            result = [...limitedProducts, ...slice];
          } else {
            const slice = products.slice(limitedProducts.length);
            result = [...limitedProducts, ...slice];
          }
        }
      } else {
        result = products.slice(0, limit);
      }

      console.log("result", result);
      return new Promise<ProductSchema[] | undefined>((resolve, reject) =>
        resolve(result)
      );
    },
    initialData: () => {
      return queryClient.getQueryData(["limitedProducts"]);
    },
    staleTime: Infinity,
  });
};
