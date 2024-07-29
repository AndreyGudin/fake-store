"use client";

import { type FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";
import { useProduct } from "@/hooks/useProduct";
import { ProductForm } from "@/components/ProductForm";
import { SubmitHandler } from "react-hook-form";
import { useProducts } from "@/hooks/useProducts";
import { usePutProduct } from "@/hooks/usePutProduct";
import { useToast } from "@/components/Toaster";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProductInfoProps {
  className?: string;
  id: string;
}

export const ProductInfo: FC<ProductInfoProps> = ({
  id,
  className = "",
}: ProductInfoProps) => {
  const router = useRouter();
  const { data: product, isLoading, isFetching } = useProduct(id);
  const { toast } = useToast();
  const mutation = usePutProduct();

  if (isFetching) return <div>Loading</div>;

  const onSubmit: SubmitHandler<ProductSchema> = (data) => {
    const newProduct = {
      ...data,
      id: Number(id),
    };
    mutation.mutate(newProduct);
    toast({
      title: "Выполнено",
      description: " Продукт изменен успешно",
      action: <Check color='green' strokeWidth={"6px"} />,
    });
    router.push("/products");
  };

  return (
    <>
      {product ? (
        <ProductForm
          product={product}
          buttonName={"Сохранить"}
          onSubmit={onSubmit}
          modifyButton
        />
      ) : (
        <div>No info</div>
      )}
    </>
  );
};
