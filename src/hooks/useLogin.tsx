"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductSchema } from "@/types/ProductSchema";
import { User } from "@/types/User";
import { logIn } from "@/api/controllers/logIn";
import { AxiosError } from "axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: (user: User) => logIn(user),
    onError: (error: AxiosError) => {
      if (error.response?.status === 403) return "User not found";
    },
  });
};
