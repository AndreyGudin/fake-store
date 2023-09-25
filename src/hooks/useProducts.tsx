"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/controllers/getProducts";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
