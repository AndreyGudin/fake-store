import type { FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";
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
    <div
      className={`${className} w-[500px]  flex flex-col gap-4 border border-black items-center p-3 h-fit`}
    >
      <img
        src={product.image}
        alt={product.title}
        className='w-[400px]'
        loading='lazy'
      />
      <span>{product.title}</span>
      <Link href={`/${product.id}`}>
        <button>More</button>
      </Link>
    </div>
  );
};
