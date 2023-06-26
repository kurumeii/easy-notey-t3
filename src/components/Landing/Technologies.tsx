import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Ui/tooltip"

type Tech = {
  title: string
  link: string
  logo: string
}

const techs: Tech[] = [
  {
    title: "Typescript",
    link: "https://www.typescriptlang.org/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org/",
    logo: "https://raw.githubusercontent.com/ChromeUniverse/luccanotes/43f5671e1d4597fd585e01df83b55d1aca438556/public/images/logos/nextjs-dark.svg",
  },
  {
    title: "Prisma",
    link: "https://www.prisma.io/",
    logo: "https://raw.githubusercontent.com/ChromeUniverse/luccanotes/main/public/images/logos/prisma.jpg",
  },
  {
    title: "MongoDB",
    link: "https://www.mongodb.com/",
    logo: "/image/mongodb.png",
  },
  {
    title: "tRPC",
    link: "https://trpc.io/",
    logo: "https://trpc.io/img/logo.svg",
  },
  {
    title: "React Query",
    link: "https://tanstack.com/query/latest",
    logo: "https://raw.githubusercontent.com/ChromeUniverse/luccanotes/43f5671e1d4597fd585e01df83b55d1aca438556/public/images/logos/react-query.svg",
  },
  {
    title: "NextAuth.js",
    link: "https://next-auth.js.org/",
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  {
    title: "Tailwind css",
    link: "https://tailwindcss.com/",
    logo: "https://raw.githubusercontent.com/ChromeUniverse/luccanotes/43f5671e1d4597fd585e01df83b55d1aca438556/public/images/logos/tailwindcss.svg",
  },
  {
    title: "Radix ui",
    link: "https://radix-ui.com/",
    logo: "https://avatars.githubusercontent.com/u/75042455?s=200&v=4",
  },
  {
    title: "Code mirror",
    link: "https://codemirror.net/",
    logo: "https://codemirror.net/style/logo.svg",
  },
  {
    title: "Zod",
    link: "https://zod.dev/",
    logo: "https://zod.dev/logo.svg",
  },
  {
    title: "T3 Env",
    link: "https://env.t3.gg/",
    logo: "https://avatars.githubusercontent.com/u/108266839?s=200&v=4",
  },
  {
    title: "Phosphor Icon",
    link: "https://phosphoricons.com/",
    logo: "https://raw.githubusercontent.com/phosphor-icons/homepage/master/meta/phosphor-mark-tight-yellow.png",
  },
  {
    title: "Lucide Icon",
    link: "https://lucide.dev/",
    logo: "https://avatars.githubusercontent.com/u/66879934?s=200&v=4",
  },
]

const Technologies = ({ className }: { className?: string }) => {
  return (
    <>
      <section id="tech" className={cn(className)}>
        <div className="mx-auto space-y-3 px-6">
          <h2 className="font-semibold text-primary">Technologies</h2>
          <p className="text-3xl font-extrabold md:text-4xl">
            Built with awesome open source stack
          </p>
          <p className="max-w-3xl text-muted-foreground">
            Thanks to the amazing people who build and maintain the programming
            languages, libraries, frameworks, databases, tooling, and platforms
            that power this web app. Go check them out!
          </p>
          <div className="grid grid-cols-3 place-items-center gap-x-8 gap-y-10 px-2.5 pt-12 sm:grid-cols-4 md:grid-cols-6 md:px-0">
            {techs.map((t) => (
              <Fragment key={t.title}>
                <Link
                  className="relative mx-auto flex items-center justify-center transition-all hover:scale-110 md:w-20"
                  href={t.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Image
                          src={t.logo}
                          alt={`${t.title}- logo`}
                          width={100}
                          height={100}
                          className="rounded-2xl object-contain drop-shadow-lg md:h-20 md:w-20"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Technologies
