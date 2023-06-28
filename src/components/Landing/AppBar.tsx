import useResponsive from "@/hooks/useResponsive"
import { type ReactNode } from "react"
import { Separator } from "../Ui/separator"

type Props = {
  className?: string
  children?: ReactNode
}

const AppBar = ({ className, children }: Props) => {
  const { screen } = useResponsive()

  return (
    <>
      <nav className={className}>
        {/* Logo brand section */}
        {children}
      </nav>
      {screen.sm && <Separator />}
    </>
  )
}
export default AppBar
