import { CreateTagSchema, DeleteTagSchema } from "@/lib/schemas"
import { TRPCError } from "@trpc/server"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const tagRouter = createTRPCRouter({
  createNewTag: protectedProcedure
    .input(CreateTagSchema)
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
  getTag: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.tag.findMany({
        where: {
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
    .input(DeleteTagSchema)
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
