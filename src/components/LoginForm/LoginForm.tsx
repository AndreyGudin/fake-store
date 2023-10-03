"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { memo, useState } from "react";
import type { FC } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { User, UserValidator } from "@/types/User";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Button } from "@/components/Button";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(function LoginForm({
  className = "",
}: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(UserValidator) });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit: SubmitHandler<User> = async (data) => {};

  return (
    <form
      className={`${className} w-[409px] min-h-[382px] flex flex-col gap-8 bg-white rounded-2xl justify-center p-8`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className='font-bold text-base text-center'>Вход</h2>
      <div className='flex flex-col gap-6'>
        <Input
          type='username'
          placeholder='Username'
          {...register("username")}
        />
        {errors.username?.message && <Label>{errors.username?.message}</Label>}
        <Input type='text' title='Password' {...register("password")} />
        {errors.password?.message && <Label>{errors.password?.message}</Label>}
      </div>
      <Button type='submit'>Войти</Button>
    </form>
  );
});
