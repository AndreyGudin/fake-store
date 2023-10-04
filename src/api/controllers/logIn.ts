import { $api } from "@/api/axios/instance";
import { User } from "@/types/User";

export const logIn = async (user: User): Promise<Record<"token", string>> => {
  const result = await $api.post("/auth/login", user);
  return result.data;
};
