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
  return <div className={`$ {className}`}></div>;
};
