import ProviderWrapper from "@/components/Providers/ProviderWrapper"
import "@/styles/globals.css"
import { api } from "@/utils/api"
import { type Session } from "next-auth"
import { type AppType } from "next/app"
import { type NextRouter } from "next/router"

type MyAppType = AppType<{ session?: Session }>

const MyApp: MyAppType = ({
  Component,
  pageProps: { session, ...pageProps },
  router,
}) => {
  const route = (router as NextRouter).route
  return (
    <ProviderWrapper session={session} routerKey={route}>
      <Component {...pageProps} />
    </ProviderWrapper>
  )
}

export default api.withTRPC(MyApp)
