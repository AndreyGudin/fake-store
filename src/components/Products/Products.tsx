"use client";

import type { FC } from "react";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { ProductsSkeleton } from "./ProductsSkeleton";

interface ProductsProps {
  className?: string;
}
export const Products: FC<ProductsProps> = function Products({
  className = "",
}: ProductsProps) {
  const { data: products, isLoading } = useProducts();

  if (isLoading) return <ProductsSkeleton />;

  return (
    <section className={`${className} flex gap-7 flex-wrap justify-center`}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
