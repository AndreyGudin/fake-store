"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ProductSchema } from "@/types/ProductSchema";

export const useProduct = (productId: string) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => {
      const products = queryClient.getQueryData([
        "limitedProducts",
      ]) as ProductSchema[];
      const product = products.find((item) => item.id === Number(productId));
      console.log("useproduct", product);
      return new Promise<ProductSchema | undefined>((resolve, reject) =>
        resolve(product)
      );
    },
  });
};
