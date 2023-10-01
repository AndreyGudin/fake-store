"use client";

import { type FC } from "react";
import { SubmitHandler } from "react-hook-form";

import { ProductSchema, ProductValidator } from "@/types/ProductSchema";
import { usePostProduct } from "@/hooks/usePostProduct";
import { useProducts } from "@/hooks/useProducts";
import { ProductForm } from "@/components/ProductForm";

interface CreateProductProps {
  className?: string;
}

export const CreateProduct: FC<CreateProductProps> = ({
  className = "",
}: CreateProductProps) => {
  const mutation = usePostProduct();
  const { data: products } = useProducts();

  const onSubmit: SubmitHandler<ProductSchema> = (data) => {
    const newProduct = {
      ...data,
      id: products?.length ? products?.length + 1 : Math.random() * 900 + 100,
    };
    mutation.mutate(newProduct);
  };

  return <ProductForm onSubmit={onSubmit} />;
};
