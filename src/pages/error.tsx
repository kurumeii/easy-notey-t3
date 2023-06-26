import Head from "next/head"
import { useRouter } from "next/router"

const ErrorPage = () => {
  const { query } = useRouter()
  const errorAuth = query.error
  if (!errorAuth) return null
  return (
    <>
      <Head>
        <title>Error | Easy Notey</title>
      </Head>
      <section>
        {typeof errorAuth === "string" ? (
          <p>{errorAuth}</p>
        ) : (
          errorAuth.map((error, idx) => <p key={idx}>{error}</p>)
        )}
      </section>
    </>
  )
}

export default ErrorPage
