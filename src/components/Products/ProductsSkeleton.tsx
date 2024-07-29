import type { FC } from "react";
import { ProductCardSkeleton } from "@/components/ProductCard";

interface ProductsSkeletonProps {
  className?: string;
}

export const ProductsSkeleton: FC<ProductsSkeletonProps> = ({
  className = "",
}: ProductsSkeletonProps) => {
  return (
    <div className={`${className} flex gap-7 flex-wrap justify-center`}>
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
};
