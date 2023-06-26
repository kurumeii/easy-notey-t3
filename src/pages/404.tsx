import { buttonVariants } from "@/components/Ui/button"
import { cn } from "@/lib/utils"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <section className="flex h-screen w-full flex-col items-center justify-center">
        <figure className="relative h-96 w-96">
          <Image
            src="/image/not-found.svg"
            alt="Not found"
            sizes="100vw"
            fill
            className="object-fill"
          />
        </figure>
        <h1 className="text-3xl tracking-wide">
          It seems that you&apos;ve got lost in the sauce
        </h1>
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "secondary",
            })
          )}
        >
          Click to turn back
        </Link>
      </section>
    </>
  )
}

export default NotFoundPage
