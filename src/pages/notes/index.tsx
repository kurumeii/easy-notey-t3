import { Button } from "@/components/Ui/button"
import { getServerAuthSession } from "@/server/auth"
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next"
import { signOut } from "next-auth/react"
import Head from "next/head"

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const sessionData = await getServerAuthSession(ctx)
  if (sessionData) {
    return {
      props: {
        sessionData,
      },
    }
  }
  return {
    redirect: {
      destination: "/",
      permanent: true,
    },
  }
}

const UserNotePage = ({
  sessionData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{sessionData.user.email} | Easey notey</title>
      </Head>
      Hello {sessionData.user.name}
      <Button onClick={() => void signOut()}>Sign out</Button>
    </>
  )
}

export default UserNotePage
