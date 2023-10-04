"use client";

import { useState, type FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";
import { useProduct } from "@/hooks/useProduct";
import { ProductForm } from "@/components/ProductForm";
import { SubmitHandler } from "react-hook-form";
import { useProducts } from "@/hooks/useProducts";
import { usePutProduct } from "@/hooks/usePutProduct";
import { useToast } from "@/components/Toaster";
import { Check } from "lucide-react";

interface ProductInfoProps {
  className?: string;
  id: string;
}

export const ProductInfo: FC<ProductInfoProps> = ({
  id,
  className = "",
}: ProductInfoProps) => {
  const { data: product, isLoading } = useProduct(id);
  const { toast } = useToast();
  const mutation = usePutProduct();

  if (isLoading) return <div>Loading</div>;

  const onSubmit: SubmitHandler<ProductSchema> = (data) => {
    const newProduct = {
      ...data,
      id: Number(id),
    };
    mutation.mutate(newProduct);
    toast({
      title: "Done",
      description: " Product has been modified successfully",
      action: <Check color='green' strokeWidth={"6px"} />,
    });
  };

  return (
    <>
      {product ? (
        <ProductForm
          defaultProduct={product}
          buttonName={"Save"}
          onSubmit={onSubmit}
          modifyButton
        />
      ) : (
        <div>No info</div>
      )}
    </>
  );
};
