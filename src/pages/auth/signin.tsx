import SignInForm from "@/components/Forms/SignInForm"
import { getServerAuthSession } from "@/server/auth"
import { type GetServerSidePropsContext } from "next"
import Head from "next/head"

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(context)

  if (session) {
    return {
      redirect: { destination: "/notes" },
    }
  }

  return { props: {} }
}

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>Sign in page</title>
      </Head>
      <section className="flex h-screen w-full items-center justify-center">
        <SignInForm />
      </section>
    </>
  )
}

export default SignInPage
