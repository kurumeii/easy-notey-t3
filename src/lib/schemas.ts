import { Color } from "@prisma/client"
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

export const CreateNewNoteSchema = z.object({
  title: z.string().min(1, { message: "Title can not leave empty" }),
  tags: z.string().array(),
})

export type CreateNewNoteForm = z.infer<typeof CreateNewNoteSchema>

export const CreateTagSchema = z.object({
  name: z.string().min(1, { message: "Name tag can not leave empty" }),
  color: z.nativeEnum(Color, { required_error: "Choose 1 color" }),
})

export type CreateTagSchemaForm = z.infer<typeof CreateTagSchema>

export const DeleteTagSchema = z.object({
  tagId: z.string().min(1, { message: "Action can not be done" }),
})
