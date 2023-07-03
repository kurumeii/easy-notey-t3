import { NoteZod } from "@/lib/schemas/note"
import { TRPCError } from "@trpc/server"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const noteRouter = createTRPCRouter({
  getNotes: protectedProcedure
    .input(NoteZod["getNoteSchema"])
    .query(async ({ ctx, input }) => {
      try {
        const limit = input.limit ?? 10 //The number of records fetch per request
        const notes = await ctx.prisma.note.findMany({
          take: limit + 1, // get an extra item at the end -> next cursor
          where: {
            title: {
              mode: "insensitive",
              contains: input.title,
            },
            userId: ctx.session.user.id,
            tagIds: {
              hasEvery: input.tagsId,
            },
          },
          orderBy: {
            [input.sortedBy.id]: input.sortedBy.type,
          },
          select: {
            id: true,
            createdAt: true,
            title: true,
            tags: {
              select: {
                label: true,
                color: true,
              },
            },
          },
          cursor: input.cursor
            ? {
                id: input.cursor,
              }
            : undefined,
        })
        const nextCursor = notes.length > limit ? notes.pop()?.id : undefined
        return {
          notes,
          nextCursor,
        }
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error as string,
        })
      }
    }),
  createNote: protectedProcedure
    .input(NoteZod["createNewNoteSchema"])
    .mutation(async ({ ctx, input }) => {
      try {
        const { tags, title } = input
        const countTitle = await ctx.prisma.note.count({
          where: {
            title,
            userId: ctx.session.user.id,
          },
        })
        if (countTitle > 0) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Already existed title with name: " + title,
          })
        }
        return await ctx.prisma.note.create({
          data: {
            tagIds: tags.map((tag) => tag.value),
            title,
            userId: ctx.session.user.id,
          },
        })
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error as string,
        })
      }
    }),
  getNoteById: protectedProcedure
    .input(NoteZod["getNoteById"])
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.note.findUnique({
          where: {
            id: input.noteId,
          },
          select: {
            id: true,
            title: true,
            tags: {
              select: {
                label: true,
                color: true,
              },
            },
          },
        })
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error as string,
        })
      }
    }),
})
