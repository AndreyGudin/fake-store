import type { FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";

interface ProductCardProps {
  className?: string;
  product: ProductSchema;
}

export const ProductCard: FC<ProductCardProps> = ({
  product,
  className = "",
}: ProductCardProps) => {
  return <div className={`${className}`}>{JSON.stringify(product)}</div>;
};
