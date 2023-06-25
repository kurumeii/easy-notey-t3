import AppBar from "@/components/Landing/AppBar"
import { cn } from "@/lib/utils"
import { getServerAuthSession } from "@/server/auth"
import { type GetServerSidePropsContext } from "next"

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(ctx)
  if (session) {
    return {
      redirect: {
        destination: "/notes",
      },
    }
  }
  return {
    props: {},
  }
}

export default function LandingPage() {
  return (
    <>
      <section className="h-screen w-full">
        <AppBar
          className={cn(
            "container sticky flex items-center justify-between bg-transparent py-3 backdrop-blur-xl animate-in slide-in-from-top duration-300 md:top-5 md:w-11/12 md:rounded-3xl md:border md:border-border"
          )}
        />
      </section>
    </>
  )
}
