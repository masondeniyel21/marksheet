
import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, "Email or username is required.")
    .max(254, "Email or username is too long."),

  password: z
    .string()
    .min(1, "Password is required.")
    .max(128, "Password is too long."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
