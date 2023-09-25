"use client";

import type { FC } from "react";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useProducts } from "@/hooks/useProducts";

interface ProductsProps {
  className?: string;
}

export const Products: FC<ProductsProps> = function Products({
  className = "",
}: ProductsProps) {
  const { data: products, isLoading } = useProducts();
  console.log(products);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={`${className}`}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
