"use client";

import type { FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";

interface ProductInfoProps {
  className?: string;
  product: ProductSchema;
}

export const ProductInfo: FC<ProductInfoProps> = ({
  product,
  className = "",
}: ProductInfoProps) => {
  return (
    <div className={`${className} flex flex-col gap-4`}>
      <img src={product.image} className='w-[400px] w-[400px]' />
      <span>{product.category}</span>
      <span>{product.title}</span>
      <span>{product.description}</span>
      <span>{product.price}</span>
    </div>
  );
};
