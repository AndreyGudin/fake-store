import { Skeleton } from "@/components/Skeleton";
import { memo } from "react";
import type { FC } from "react";

interface ProductCardSkeletonProps {
  className?: string;
}

export const ProductCardSkeleton: FC<ProductCardSkeletonProps> = ({
  className = "",
}: ProductCardSkeletonProps) => {
  return (
    <div
      className={`${className} w-fit h-fit flex flex-col gap-4 border border-slate-100 items-center p-3`}
    >
      <Skeleton className=' w-[500px] h-[500px]' />
      <Skeleton className=' w-[500px] h-[50px]' />
      <Skeleton className=' w-[100px] h-[50px]' />
    </div>
  );
};
