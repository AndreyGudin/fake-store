"use client";

import type { FC } from "react";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { ProductsSkeleton } from "./ProductsSkeleton";
import { useGetLimitProducts } from "@/hooks/useGetLimitProducts";
import { Button } from "@/components/Button";

interface ProductsProps {
  className?: string;
}
export const Products: FC<ProductsProps> = function Products({
  className = "",
}: ProductsProps) {
  useProducts();
  const { data: limitedProducts, refetch, isLoading } = useGetLimitProducts(4);

  if (isLoading) return <ProductsSkeleton />;

  const onClick = () => {
    console.log("limitedProductsOnClick", limitedProducts);
    refetch();
  };

  return (
    <section className={`${className} flex gap-7 flex-wrap justify-center`}>
      {limitedProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Button className='w-[200px]' variant={"default"} onClick={onClick}>
        Загрузить больше
      </Button>
    </section>
  );
};
