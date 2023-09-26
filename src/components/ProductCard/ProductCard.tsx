import type { FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  className?: string;
  product: ProductSchema;
}

export const ProductCard: FC<ProductCardProps> = ({
  product,
  className = "",
}: ProductCardProps) => {
  return (
    <div className={`${className} flex flex-col gap-4 border border-black`}>
      <img
        src={product.image}
        alt={product.title}
        className='w-[400px] h-[400px]'
        loading='lazy'
      />
      <Link href={`/${product.id}`}>{product.title}</Link>
    </div>
  );
};
