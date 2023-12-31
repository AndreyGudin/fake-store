import { z } from "zod";

export const UserValidator = z.object({
  username: z.string().min(1, { message: "Required" }),
  password: z.string().min(7, { message: "Password must have min 7 symbols" }),
});

export type User = z.infer<typeof UserValidator>;
