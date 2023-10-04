"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { memo, useEffect, useState } from "react";
import type { FC } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { User, UserValidator } from "@/types/User";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Button } from "@/components/Button";
import { useLogin } from "@/hooks/useLogin";

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
  const { mutate, isError, isLoading, error, data: responseToken } = useLogin();

  const onSubmit: SubmitHandler<User> = async (data) => {
    console.log("data", data);
    mutate(data);
  };

  useEffect(() => {
    if (responseToken) {
      console.log("responseToken", responseToken);
      document.cookie = `token=${responseToken.token}`;
      router.push("/products");
    }
  }, [responseToken, router]);

  return (
    <form
      className={`${className} w-[409px] min-h-[382px] flex flex-col gap-8 bg-white rounded-2xl justify-center p-8 border border-black`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className='font-bold text-base text-center'>Welcome</h2>
      <div className='flex flex-col gap-6'>
        <Input
          type='username'
          placeholder='Username'
          {...register("username")}
        />
        {errors.username?.message && <Label>{errors.username?.message}</Label>}
        <Input type='text' placeholder='Password' {...register("password")} />
        {errors.password?.message && <Label>{errors.password?.message}</Label>}
      </div>
      {isError && (
        <p className='text-black'>
          {error.response?.status === 403 ? "User not found" : null}
        </p>
      )}
      <Button loading={isLoading} type='submit'>
        Log in
      </Button>
    </form>
  );
});
