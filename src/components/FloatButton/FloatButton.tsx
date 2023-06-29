import useCustomTheme from "@/hooks/useCustomTheme"
import useShortcutKey from "@/hooks/useShortcutKey"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Appear } from "../Animations/Appear"
import { Icons } from "../Icons/Icons"
import { Button } from "../Ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../Ui/popover"

const FloatButton = ({ className }: { className?: string }) => {
  const [isOpened, setOpen] = useState<boolean>(false)
  const toggleOpenCmd = () => {
    setOpen((prev) => !prev)
  }
  useShortcutKey("/", toggleOpenCmd)

  const { isDarkTheme, isLightTheme, isSystemDevice, changeTheme } =
    useCustomTheme()
  return (
    <>
      <Appear className={cn(className)}>
        <Popover open={isOpened} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="default" size="icon" className="rounded-full">
              <Icons.floatMenu className="h-6 w-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="my-2 w-fit rounded-full border-none bg-transparent p-0 shadow-sm"
          >
            <div className="flex flex-col gap-3">
              <Button
                variant={isLightTheme ? "default" : "outline"}
                size="icon"
                className="rounded-full"
                onClick={() => changeTheme("light")}
              >
                <Icons.sun className="h-6 w-6" />
              </Button>
              <Button
                variant={isDarkTheme ? "default" : "outline"}
                size="icon"
                className="rounded-full"
                onClick={() => changeTheme("dark")}
              >
                <Icons.moon className="h-6 w-6" />
              </Button>
              <Button
                variant={isSystemDevice ? "default" : "outline"}
                size="icon"
                className="rounded-full"
                onClick={() => changeTheme("system")}
              >
                <Icons.device className="h-6 w-6" />
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </Appear>
    </>
  )
}

export default FloatButton
