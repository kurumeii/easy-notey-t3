import { z } from "zod"

export const NoteZod = {
  createNewNoteSchema: z.object({
    title: z
      .string()
      .min(1, { message: "Title can not leave empty" })
      .max(50, { message: "Name exceed 50 characters limit" }),
    tags: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .array(),
  }),
  getNoteSchema: z.object({
    limit: z.number().min(1).max(50).default(10).optional(),
    cursor: z.string().optional(),
    tagsId: z.string().array(),
    sortedBy: z.object({
      id: z.enum(["createdAt", "lastUpdated"]),
      type: z.enum(["asc", "desc"]),
    }),
    title: z.string().max(50).trim().optional(),
  }),
  getNoteById: z.object({
    noteId: z.string(),
  }),
  editNoteSchema: z.object({
    noteId: z.string(),
    title: z
      .string()
      .min(1, { message: "Title can not leave empty" })
      .max(50, { message: "Name exceed 50 characters limit" }),
    tags: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .array(),
  }),
}
export type GetNote = z.infer<(typeof NoteZod)["getNoteSchema"]>
export type CreateNewNote = z.infer<(typeof NoteZod)["createNewNoteSchema"]>
export type EditNoteSchema = z.infer<(typeof NoteZod)["editNoteSchema"]>
