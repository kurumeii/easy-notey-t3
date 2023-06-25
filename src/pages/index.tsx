import { Icons } from "@/components/Icons/Icons"
import AppBar from "@/components/Landing/AppBar"
import { buttonVariants } from "@/components/Ui/button"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import Typewriter from "typewriter-effect"

export default function LandingPage() {
  const descriptionText =
    "A simple but subtle web app for all your Markdown note-taking needs, mainly focused on productivity, powered by awesome open-source tech."
  return (
    <>
      <main className="h-screen w-full md:container">
        <AppBar
          className={cn(
            "container sticky inset-x-0 top-0 flex items-center justify-between bg-transparent py-3 backdrop-blur-md animate-in slide-in-from-top duration-300 md:my-5 md:rounded-3xl "
          )}
        />
        {/* Hero section */}
        <section className="container py-10">
          <h1 className="mx-auto text-center text-4xl font-extrabold leading-tight tracking-tighter animate-in slide-in-from-bottom-1/4 duration-1000 xl:max-w-5xl xl:text-6xl xl:leading-tight">
            The easy way for taking notes 🙌
          </h1>
          <div className="mt-4 grid items-center gap-2 md:grid-cols-2">
            <Typewriter
              options={{
                strings: descriptionText,
                autoStart: true,
                loop: false,
                wrapperClassName:
                  "mx-auto max-w-4xl text-center font-mono text-lg leading-tight tracking-tighter",
              }}
            />
            <figure className="mx-auto flex w-full items-center justify-center">
              <Image
                src={"/image/hero.svg"}
                alt="Hero background"
                width={1000}
                height={1000}
              />
            </figure>
          </div>
          <div className="mt-5 flex items-center justify-center gap-5">
            <Link
              href={siteConfig.code}
              target="_blank"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              <Icons.github className="mr-2 h-5 w-5" />
              Source
            </Link>
            <Link
              href={"/notes"}
              className={cn(buttonVariants({ variant: "default" }))}
            >
              <Icons.started className="mr-2 h-5 w-5" />
              Getting started
            </Link>
          </div>
          {/* Preview images */}
          <figure className="mx-auto flex w-full items-center justify-center ">
            <Image
              className="mx-auto mt-16 block max-w-xs rounded-lg border-2 border-border drop-shadow-2xl md:hidden"
              src="/image/notes-mobile-light.jpg"
              alt="A preview of the main dashboard for LuccaNotes"
              width={1000}
              height={1000}
            />

            {/* Hero image (desktop) */}
            <Image
              className="mx-auto mt-16 hidden rounded-lg border-2 border-border drop-shadow-2xl md:block lg:max-w-5xl xl:max-w-6xl"
              src="/image/notes-light.png"
              alt="A preview of the main dashboard for LuccaNotes"
              width={1000}
              height={1000}
            />
          </figure>
        </section>
        {/* Feats section */}
      </main>
    </>
  )
}
