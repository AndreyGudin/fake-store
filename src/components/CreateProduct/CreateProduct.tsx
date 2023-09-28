"use client";

import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/Input";
import { ProductValidator } from "@/types/ProductSchema";
import { Button } from "@/components/Button";

interface CreateProductProps {
  className?: string;
}

export const CreateProduct: FC<CreateProductProps> = ({
  className = "",
}: CreateProductProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProductValidator),
  });
  return (
    <form
      className={`${className} flex flex-col gap-6 w-[400px] h-fit border border-blue-200 p-4`}
    >
      <Input placeholder='Title' {...register("title")} />
      {errors.title?.message && <p>{errors.title?.message as string}</p>}
      <Input placeholder='Price' {...register("price")} />
      {errors.price?.message && <p>{errors.title?.message as string}</p>}
      <Input placeholder='Description' {...register("description")} />
      {errors.description?.message && <p>{errors.title?.message as string}</p>}
      <Input placeholder='Category' {...register("category")} />
      {errors.category?.message && <p>{errors.title?.message as string}</p>}
      <Input placeholder='Image' {...register("image")} />
      {errors.image?.message && <p>{errors.title?.message as string}</p>}
      <Button type='submit' variant={"default"}>
        Create
      </Button>
    </form>
  );
};
