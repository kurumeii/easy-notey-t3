import { FadeUp } from "@/components/Animations/FadeUp"
import { Icons } from "@/components/Icons/Icons"
import { buttonVariants } from "@/components/Ui/button"
import useResponsive from "@/hooks/useResponsive"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import Typewriter from "typewriter-effect"

const HeroSection = ({ className }: { className?: string }) => {
  const descriptionText =
    "A simple but subtle web app for all your Markdown note-taking needs, mainly focused on productivity, powered by awesome open-source tech."
  const { screen } = useResponsive()

  return (
    <section className={className}>
      <FadeUp className="mx-auto text-center text-4xl font-extrabold leading-tight tracking-tighter  xl:max-w-5xl xl:text-6xl xl:leading-tight">
        <h1>The easy way for taking notes 🙌</h1>
      </FadeUp>
      <div className="mt-4 grid items-center gap-2 md:grid-cols-2">
        {screen.sm ? (
          <h3 className="mx-auto max-w-4xl text-center font-mono text-lg leading-tight tracking-tighter">
            {descriptionText}
          </h3>
        ) : (
          <Typewriter
            options={{
              strings: descriptionText,
              autoStart: true,
              loop: false,
              wrapperClassName:
                "mx-auto max-w-4xl text-center font-mono text-lg leading-tight tracking-tighter",
            }}
          />
        )}

        <figure className="mx-auto flex w-full items-center justify-center delay-500">
          <Image
            src={"/image/hero.svg"}
            alt="Hero background"
            width={1000}
            height={1000}
          />
        </figure>
      </div>
      <FadeUp className="mt-5 flex items-center justify-center gap-5">
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
      </FadeUp>
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
  )
}

export default HeroSection
