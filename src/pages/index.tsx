import FloatButton from "@/components/FloatButton/FloatButton"
import { Icons } from "@/components/Icons/Icons"
import AppBar from "@/components/Landing/AppBar"
import Features from "@/components/Landing/Features"
import Footer from "@/components/Landing/Footer"
import HeroSection from "@/components/Landing/HeroSection"
import MenuBar from "@/components/Landing/MenuBar"
import Technologies from "@/components/Landing/Technologies"
import { Button } from "@/components/Ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/Ui/sheet"
import useResponsive from "@/hooks/useResponsive"
import { getServerAuthSession } from "@/server/auth"
import { type GetServerSideProps } from "next"
import Link from "next/link"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx)
  if (session) {
    return {
      redirect: {
        permanent: true,
        destination: "/notes",
      },
    }
  }
  return {
    props: {
      session,
    },
  }
}

export default function LandingPage() {
  const { screen } = useResponsive()

  return (
    <>
      <AppBar className="sticky inset-x-0 top-0 z-20 flex w-full items-center justify-between bg-transparent px-5 py-3 backdrop-blur-lg animate-in slide-in-from-top-full duration-500 md:my-5 ">
        <Link className="flex items-center gap-3" href="/">
          <div className="flex h-12 w-12 flex-grow items-center justify-center rounded-full bg-primary">
            <Icons.logo className="h-6 w-6 fill-white" />
          </div>
          <span className="hidden text-xl font-semibold md:block">
            Easy Note-y
          </span>
        </Link>
        {screen.sm ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Icons.burger className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full">
              <MenuBar />
            </SheetContent>
          </Sheet>
        ) : (
          <MenuBar />
        )}
      </AppBar>
      {/* Hero section */}
      <HeroSection className="container py-10" />
      {/* Feats section */}
      <Features className="container py-20" />
      {/* Techs section */}
      <Technologies className="container py-20" />
      {/* Float buttons */}
      <FloatButton className="sticky bottom-0 left-0 p-5" />
      {/* Footer */}
      <Footer className="flex w-full items-end justify-end px-6 py-3 text-muted-foreground" />
    </>
  )
}
