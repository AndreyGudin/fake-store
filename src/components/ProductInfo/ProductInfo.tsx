"use client";

import type { FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";
import { useProduct } from "@/hooks/useProduct";

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
        <div className={`${className} flex flex-col gap-4`}>
          <img src={product.image} className='w-[400px] w-[400px]' />
          <span>{product.category}</span>
          <span>{product.title}</span>
          <span>{product.description}</span>
          <span>{product.price}</span>
        </div>
      ) : (
        <div>No info</div>
      )}
    </>
  );
};
