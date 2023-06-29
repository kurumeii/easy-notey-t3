import SearchBar from "@/components/Dashboard/SearchBar"
import Toolbar from "@/components/Dashboard/Toolbar"
import FloatButton from "@/components/FloatButton/FloatButton"
import { Icons } from "@/components/Icons/Icons"
import AppBar from "@/components/Landing/AppBar"
import UserDropDown from "@/components/UserDropdown/UserDropDown"
import { getServerAuthSession } from "@/server/auth"
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next"
import Head from "next/head"
import Link from "next/link"

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const sessionData = await getServerAuthSession(ctx)
  if (!sessionData) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    }
  }
  return {
    props: {
      sessionData,
    },
  }
}

const UserNotePage = ({
  sessionData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Your notes | Easey notey</title>
      </Head>
      <AppBar className="sticky inset-x-0 top-0 z-20 flex w-full items-center justify-between bg-muted px-5 py-3 animate-in slide-in-from-top-full duration-500 md:px-10">
        <div className="flex w-full items-center gap-2">
          <Link className="flex items-center gap-3 font-semibold " href="/">
            <div className="flex h-12 w-12 flex-grow items-center justify-center rounded-full bg-primary">
              <Icons.logo className="h-6 w-6 fill-primary-foreground" />
            </div>
            <span className="hidden text-xl md:block">Easy Note-y</span>
          </Link>
          <Icons.slash className="h-5 w-5" />
          <span className="inline-flex items-center justify-center">
            <Icons.at className="mr-1 h-5 w-5" />
            {sessionData.user.name}
          </span>
        </div>
        <UserDropDown />
      </AppBar>
      <div className="bg-background py-10">
        <div className="container flex w-full items-stretch gap-3">
          <SearchBar />
          <Toolbar />
        </div>
        <FloatButton className="fixed bottom-0 left-0 mx-3 pb-3" />
      </div>
    </>
  )
}

export default UserNotePage
