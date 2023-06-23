import { env } from "@/env.mjs"
import { prisma } from "@/server/db"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { compareSync } from "bcrypt"
import { type GetServerSidePropsContext } from "next"
import { getServerSession, type NextAuthOptions } from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: ({ user, token }) => {
      if (user) {
        token.id = user.id
      }
      return {
        ...token,
      }
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      }
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          throw new Error("Invalid credentials")
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        if (!user) {
          throw new Error("Invalid credentials")
        }
        const savedPw = user.password
        if (!savedPw) {
          throw new Error("Email has been linked to an OAuth")
        }
        const isTheSame = compareSync(credentials.password, savedPw)
        if (!isTheSame) {
          throw new Error("Incorrect password")
        }
        return user
      },
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"]
  res: GetServerSidePropsContext["res"]
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions)
}
