"use client";

import { useState, type FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";
import { useProduct } from "@/hooks/useProduct";
import { ProductForm } from "@/components/ProductForm";
import { SubmitHandler } from "react-hook-form";
import { useProducts } from "@/hooks/useProducts";
import { usePutProduct } from "@/hooks/usePutProduct";

interface ProductInfoProps {
  className?: string;
  id: string;
}

export const ProductInfo: FC<ProductInfoProps> = ({
  id,
  className = "",
}: ProductInfoProps) => {
  const { data: product, isLoading } = useProduct(id);
  const { data: products } = useProducts();
  const mutation = usePutProduct();

  if (isLoading) return <div>Loading</div>;

  const onSubmit: SubmitHandler<ProductSchema> = (data) => {
    const newProduct = {
      ...data,
      id: Number(id),
    };
    mutation.mutate(newProduct);
  };

  return (
    <>
      {product ? (
        <ProductForm
          defaultProduct={product}
          buttonName={"Save"}
          onSubmit={onSubmit}
          modifyButton
        />
      ) : (
        <div>No info</div>
      )}
    </>
  );
};
