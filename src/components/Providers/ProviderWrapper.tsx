import { nextSeoConfig, themeConfig } from "@/lib/configs"
import nextFonts from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { DefaultSeo } from "next-seo"
import { ThemeProvider } from "next-themes"
import { type PropsWithChildren } from "react"
import { Toaster } from "../Ui/toaster"

type Props = PropsWithChildren<{
  session?: Session
  routerKey?: string
}>

const ProviderWrapper = ({ session, children }: Props) => (
  <SessionProvider session={session}>
    <ThemeProvider {...themeConfig}>
      <DefaultSeo {...nextSeoConfig} />
      <main
        className={cn(
          nextFonts,
          "bg-background font-sans text-foreground antialiased"
        )}
      >
        {children}
        <Toaster />
      </main>
    </ThemeProvider>
  </SessionProvider>
)

export default ProviderWrapper
