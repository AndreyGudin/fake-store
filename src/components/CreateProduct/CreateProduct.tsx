"use client";

import { type FC } from "react";
import { SubmitHandler } from "react-hook-form";

import { ProductSchema } from "@/types/ProductSchema";
import { usePostProduct } from "@/hooks/usePostProduct";
import { useProducts } from "@/hooks/useProducts";
import { ProductForm } from "@/components/ProductForm";
import { useToast } from "@/components/Toaster";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
interface CreateProductProps {
  className?: string;
}

export const CreateProduct: FC<CreateProductProps> = ({
  className = "",
}: CreateProductProps) => {
  const router = useRouter();
  const mutation = usePostProduct();
  const { data: products } = useProducts();
  const { toast } = useToast();
  const onSubmit: SubmitHandler<ProductSchema> = (data) => {
    const newProduct = {
      ...data,
      id: products?.length ? products?.length + 1 : Math.random() * 900 + 100,
    };
    mutation.mutate(newProduct);
    toast({
      title: "Выполнено",
      description: "Продукт добавлен успешно",
      action: <Check color='green' strokeWidth={"6px"} />,
    });
    router.push("/products");
  };

  return <ProductForm onSubmit={onSubmit} />;
};
