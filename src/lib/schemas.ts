import { z } from "zod"

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Not a valid email" })
    .trim(),
  password: z
    .string()
    .min(6, { message: "Password minimum length is 6 characters" })
    .trim(),
})

export type SignInForm = z.infer<typeof SignInSchema>

export const SignUpSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Not a valid email" })
    .trim(),
  name: z.string(),
  password: z
    .string()
    .min(6, { message: "Password minimum length is 6 characters" })
    .trim(),
  rePassword: z
    .string()
    .min(6, { message: "Confirm password minimum length is 6 characters" })
    .trim(),
})

export type SignUpForm = z.infer<typeof SignUpSchema>
