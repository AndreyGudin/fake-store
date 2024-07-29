"use client";

import { useEffect, type FC, useState, useCallback } from "react";
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
import { useQueryClient } from "@tanstack/react-query";

interface ProductFormProps {
  className?: string;
  onSubmit: SubmitHandler<ProductSchema>;
  product?: ProductSchema;
  buttonName?: string;
  modifyButton?: boolean;
}

const defaultProduct = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};

export const ProductForm: FC<ProductFormProps> = ({
  onSubmit,
  className = "",
  buttonName = "Создать",
  modifyButton = false,
  product = defaultProduct,
}: ProductFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: zodResolver(ProductValidator),
    defaultValues: product,
  });
  const [disabledButton, setDisabledButton] = useState(modifyButton);

  const handleModify = useCallback(() => {
    setDisabledButton((state) => !state);
  }, []);

  return (
    <>
      <form
        className={`${className} flex flex-col gap-6 w-[400px] h-fit border border-blue-200 p-4`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          disabled={disabledButton}
          defaultValue={product.title}
          placeholder='Заголовок'
          {...register("title")}
        />
        {errors.title?.message && <p>{errors.title?.message as string}</p>}
        <Input
          disabled={disabledButton}
          defaultValue={product.price}
          placeholder='Цена'
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price?.message && <p>{errors.title?.message as string}</p>}
        <Input
          disabled={disabledButton}
          defaultValue={product.description}
          placeholder='Описание'
          {...register("description")}
        />
        {errors.description?.message && (
          <p>{errors.title?.message as string}</p>
        )}
        <Input
          disabled={disabledButton}
          defaultValue={product.category}
          placeholder='Категория'
          {...register("category")}
        />
        {errors.category?.message && <p>{errors.title?.message as string}</p>}
        <Input
          disabled={disabledButton}
          defaultValue={product.image}
          placeholder='Картинка'
          {...register("image")}
        />
        {errors.image?.message && <p>{errors.title?.message as string}</p>}
        <Select
          disabled={disabledButton}
          onValueChange={(v) =>
            setValue("rating", { rate: Number(v), count: 0 })
          }
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Оценить' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Оценка</SelectLabel>
              <SelectItem defaultChecked value='1'>
                1
              </SelectItem>
              <SelectItem value='2'>2</SelectItem>
              <SelectItem value='3'>3</SelectItem>
              <SelectItem value='4'>4</SelectItem>
              <SelectItem value='5'>5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.rating?.message && <p>{errors.rating?.message as string}</p>}
        <Button disabled={disabledButton} type='submit' variant={"default"}>
          {buttonName}
        </Button>
        {modifyButton && (
          <Button onClick={handleModify} type='button' variant={"default"}>
            Разблокировать
          </Button>
        )}
      </form>
    </>
  );
};
