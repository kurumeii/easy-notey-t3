import { AuthZod } from "@/lib/schemas/auth"
import { TRPCError } from "@trpc/server"
import { genSaltSync, hashSync } from "bcrypt"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      AuthZod.signUpSchema.pick({
        email: true,
        name: true,
        password: true,
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const { email, name, password } = input
        const countUser = await ctx.prisma.user.count({
          where: {
            email: input.email,
          },
        })
        const isUserEmailAlreadyExisted = countUser > 0
        if (isUserEmailAlreadyExisted)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Email has already existed",
          })
        const salt = genSaltSync(12)
        const hashedPw = hashSync(password, salt)
        const user = await ctx.prisma.user.create({
          data: {
            name,
            email,
            password: hashedPw,
          },
          select: {
            id: true,
          },
        })
        return user
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error as string,
        })
      }
    }),
})
