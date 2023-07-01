import { z } from "zod"

export const AuthZod = {
  signInSchema: z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Not a valid email" })
      .trim(),
    password: z
      .string()
      .min(6, { message: "Password minimum length is 6 characters" })
      .trim(),
  }),
  signUpSchema: z.object({
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
  }),
}

export type SignIn = z.infer<(typeof AuthZod)["signInSchema"]>
export type SignUp = z.infer<(typeof AuthZod)["signUpSchema"]>
