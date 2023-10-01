"use client";

import type { FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";
import { useProduct } from "@/hooks/useProduct";
import { ProductForm } from "@/components/ProductForm";

interface ProductInfoProps {
  className?: string;
  id: string;
}

export const ProductInfo: FC<ProductInfoProps> = ({
  id,
  className = "",
}: ProductInfoProps) => {
  const { data: product, isLoading } = useProduct(id);

  if (isLoading) return <div>Loading</div>;

  return (
    <>
      {product ? (
        <ProductForm
          defaultProduct={product}
          buttonName={"Save"}
          onSubmit={() => {}}
          modifyButton
        />
      ) : (
        <div>No info</div>
      )}
    </>
  );
};
