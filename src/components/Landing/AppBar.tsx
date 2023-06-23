import { Sheet, SheetContent, SheetTrigger } from "@/components/Ui/sheet"
import useResponsive from "@/hooks/useResponsive"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Icons } from "../Icons/Icons"
import { Button } from "../Ui/button"
import { Separator } from "../Ui/separator"
import MenuBar from "./MenuBar"

type Props = {
  className?: string
}

const AppBar = ({ className }: Props) => {
  const { screen } = useResponsive()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <nav className={className}>
        {/* Logo brand section */}
        <Link className="flex items-center gap-3" href="/">
          <div className="flex h-12 w-12 flex-grow items-center justify-center rounded-full bg-primary">
            <Icons.logo className="h-6 w-6 fill-white" />
          </div>
          <span className="hidden text-xl font-semibold md:block">
            Easy Note-y
          </span>
        </Link>
        {/* Appbar burger on small screen */}
        {/* Right menu on medium screen */}
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
      </nav>
      {screen.sm && <Separator />}
    </>
  )
}
export default AppBar
