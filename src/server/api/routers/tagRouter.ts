import { TagZod } from "@/lib/schemas/tag"
import { TRPCError } from "@trpc/server"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const tagRouter = createTRPCRouter({
  createNewTag: protectedProcedure
    .input(TagZod["createTagSchema"])
    .mutation(async ({ input, ctx }) => {
      try {
        const { color, name } = input
        const countTag = await ctx.prisma.tag.count({
          where: {
            label: name,
          },
        })
        if (countTag > 0) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Already existed tag with name: " + name,
          })
        }
        return await ctx.prisma.tag.create({
          data: {
            label: name,
            color,
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
  getAllTags: protectedProcedure
    .input(TagZod["inifityTagSchema"])
    .query(async ({ ctx, input }) => {
      try {
        const limit = input.limit ?? 6
        const tags = await ctx.prisma.tag.findMany({
          take: limit + 1,
          where: {
            userId: ctx.session.user.id,
            label: {
              mode: "insensitive",
              contains: input.tagName,
            },
          },
          cursor: input.cursor ? { id: input.cursor } : undefined,
          orderBy: {
            createdAt: "desc",
          },
        })
        if (!tags) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Cannot found any tag",
          })
        }
        const nextCursor = tags.length > limit ? tags.pop()?.id : undefined
        return {
          tags,
          nextCursor,
        }
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error as string,
        })
      }
    }),
  getTag: protectedProcedure
    .input(TagZod["findTagSchema"])
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tag.findMany({
          where: {
            ...(input.tagName && {
              label: {
                startsWith: input.tagName,
                mode: "insensitive",
              },
            }),
            userId: ctx.session.user.id,
          },
          orderBy: {
            createdAt: "desc",
          },
        })
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error as string,
        })
      }
    }),
  deleteTag: protectedProcedure
    .input(TagZod["deleteTagSchema"])
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tag.delete({
          where: {
            id: input.tagId,
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
