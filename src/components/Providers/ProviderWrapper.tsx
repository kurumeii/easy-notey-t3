import { nextSeoConfig, themeConfig } from "@/lib/configs"
import nextFonts from "@/lib/fonts"
import { cn } from "@/lib/utils"
import store from "@/store"
import { Analytics } from "@vercel/analytics/react"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { DefaultSeo } from "next-seo"
import { ThemeProvider } from "next-themes"
import { type PropsWithChildren } from "react"
import { Provider as ReduxProvider } from "react-redux"
import { Toaster } from "../Ui/toaster"

type Props = PropsWithChildren<{
  session?: Session
  routerKey?: string
}>

const ProviderWrapper = ({ session, children }: Props) => (
  <SessionProvider session={session}>
    <ReduxProvider store={store}>
      <ThemeProvider {...themeConfig}>
        <DefaultSeo {...nextSeoConfig} />
        <main
          className={cn(
            nextFonts,
            "relative scroll-smooth bg-neutral-200 font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground dark:bg-neutral-900"
          )}
        >
          {children}
          <Toaster />
          <Analytics />
        </main>
      </ThemeProvider>
    </ReduxProvider>
  </SessionProvider>
)

export default ProviderWrapper
