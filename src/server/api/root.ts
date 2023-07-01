import { createTRPCRouter } from "@/server/api/trpc"
import { authRouter } from "./routers/authRouter"
import { noteRouter } from "./routers/noteRouter"
import { tagRouter } from "./routers/tagRouter"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  tags: tagRouter,
  notes: noteRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
