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
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductSchema>({ resolver: zodResolver(ProductValidator) });
  const mutation = usePostProduct();
  const { data: products } = useProducts();
  const router = useRouter();
  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<ProductSchema> = (data) => {
    const obj = {
      ...data,
      id: products?.length ? products?.length + 1 : 1,
    };
    console.log("success");
    // mutation.mutate(obj);
    mutation.mutate({
      id: 21,
      title: "123",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    });
  };

  useEffect(() => {
    console.log("errors", errors);
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [errors, watch]);

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
      <Button
        onClick={() => {
          console.log("data:", queryClient.getQueryData(["products"]));
          console.log("state:", queryClient.getQueryState(["products"]));
          console.log("cache:", queryClient.getQueryCache());
        }}
        variant={"default"}
      >
        Get
      </Button>
    </>
  );
};
