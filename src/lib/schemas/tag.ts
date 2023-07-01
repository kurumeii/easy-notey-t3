import { Color } from "@prisma/client"
import { z } from "zod"

export const TagZod = {
  createTagSchema: z.object({
    name: z.string().min(1, { message: "Name tag can not leave empty" }),
    color: z.nativeEnum(Color, { required_error: "Choose 1 color" }),
  }),
  deleteTagSchema: z.object({
    tagId: z.string().min(1, { message: "Action can not be done" }),
  }),
  findTagSchema: z.object({
    tagName: z.string().toLowerCase().optional(),
  }),
}

export type CreateTag = z.infer<(typeof TagZod)["createTagSchema"]>
