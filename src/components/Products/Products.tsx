"use client";

import { useEffect, type FC } from "react";
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
  const { data: products } = useProducts();

  useEffect(() => {
    console.log("limitedProducts.length", limitedProducts?.length);
    console.log("products.length", products?.length);
    console.log("products", products);
    console.log("limitedProducts", limitedProducts);
  }, [limitedProducts, products]);
  if (isLoading) return <ProductsSkeleton />;

  const onClick = () => {
    console.log("limitedProductsOnClick", limitedProducts);
    refetch();
  };

  return (
    <section className={`${className} flex flex-col items-center gap-6`}>
      <div className='w-full flex gap-7 flex-wrap justify-center'>
        {limitedProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Button
        className='w-[200px]'
        variant={"default"}
        onClick={onClick}
        disabled={limitedProducts?.length! >= products?.length!}
      >
        Загрузить больше
      </Button>
    </section>
  );
};
