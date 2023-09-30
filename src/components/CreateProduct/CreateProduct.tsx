"use client";

import { useEffect, type FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/Input";
import { ProductSchema, ProductValidator } from "@/types/ProductSchema";
import { Button } from "@/components/Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { usePostProduct } from "@/hooks/usePostProduct";
import { useProducts } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

interface CreateProductProps {
  className?: string;
}

export const CreateProduct: FC<CreateProductProps> = ({
  className = "",
}: CreateProductProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductSchema>({ resolver: zodResolver(ProductValidator) });
  const mutation = usePostProduct();
  const { data: products } = useProducts();
  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<ProductSchema> = (data) => {
    const newProduct = {
      ...data,
      id: products?.length ? products?.length + 1 : Math.random() * 900 + 100,
    };
    mutation.mutate(newProduct);
  };

  return (
    <>
      <form
        className={`${className} flex flex-col gap-6 w-[400px] h-fit border border-blue-200 p-4`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input placeholder='Title' {...register("title")} />
        {errors.title?.message && <p>{errors.title?.message as string}</p>}
        <Input
          placeholder='Price'
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price?.message && <p>{errors.title?.message as string}</p>}
        <Input placeholder='Description' {...register("description")} />
        {errors.description?.message && (
          <p>{errors.title?.message as string}</p>
        )}
        <Input placeholder='Category' {...register("category")} />
        {errors.category?.message && <p>{errors.title?.message as string}</p>}
        <Input placeholder='Image' {...register("image")} />
        {errors.image?.message && <p>{errors.title?.message as string}</p>}
        <Select
          onValueChange={(v) =>
            setValue("rating", { rate: Number(v), count: 0 })
          }
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Rate a product' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Rating</SelectLabel>
              <SelectItem value='1'>1</SelectItem>
              <SelectItem value='2'>2</SelectItem>
              <SelectItem value='3'>3</SelectItem>
              <SelectItem value='4'>4</SelectItem>
              <SelectItem value='5'>5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.rating?.message && <p>{errors.rating?.message as string}</p>}
        <Button type='submit' variant={"default"}>
          Create
        </Button>
      </form>
    </>
  );
};
