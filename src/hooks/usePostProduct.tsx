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
          console.log("oldData", oldData);
          console.log("newData", [...(oldData as ProductSchema[]), data]);
          return oldData ? [...oldData, data] : oldData;
        }
      );
      console.log("success mutation");
      console.log("data in query", data);
      console.log(
        "querydata in query:",
        queryClient.getQueryData(["products"])
      );
      console.log("state in query:", queryClient.getQueryState(["products"]));
      console.log("cache in query:", queryClient.getQueryCache());
    },
  });
};
