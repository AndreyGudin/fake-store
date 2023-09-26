"use client";

import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/api/controllers/getProduct";

export const useProduct = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });
};
