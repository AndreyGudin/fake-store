import type { FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";
import Image from "next/image";

interface ProductCardProps {
  className?: string;
  product: ProductSchema;
}

export const ProductCard: FC<ProductCardProps> = ({
  product,
  className = "",
}: ProductCardProps) => {
  return (
    <div className={`${className} flex flex-col gap-4`}>
      <Image src={product.image} alt={product.title} width={400} height={400} />
      <span>{product.title}</span>
    </div>
  );
};
