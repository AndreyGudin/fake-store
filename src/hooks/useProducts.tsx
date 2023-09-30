"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "@/api/controllers/getProducts";

export const useProducts = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialData: () => {
      return queryClient.getQueryData(["products"]);
    },
    staleTime: Infinity,
  });
};
