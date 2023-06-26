import { Dialog, DialogContent, DialogTrigger } from "@/components/Ui/dialog"
import useGetSession from "@/hooks/useGetSession"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { type MouseEvent } from "react"
import { Icons } from "../Icons/Icons"
import AuthModal from "../Modals/AuthModal"
import AvatarSkeleton from "../Skeletons/AvatarSkeleton"
import { Button, buttonVariants } from "../Ui/button"
import UserDropDown from "../UserDropdown/UserDropDown"

const items = [
  { text: "Features", id: "#features" },
  { text: "Tech", id: "#tech" },
]

const MenuBar = () => {
  const { user, isLoading } = useGetSession()
  const handleScroll = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <>
      <div className="flex h-full flex-col items-start justify-start gap-5 font-semibold sm:flex-row sm:items-center sm:justify-center">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.id}
            scroll={false}
            onClick={handleScroll}
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "select-none capitalize"
            )}
          >
            {item.text}
          </Link>
        ))}

        {isLoading ? (
          <AvatarSkeleton />
        ) : user ? (
          <UserDropDown />
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-semibold">
                Login <Icons.signIn className="ml-2 h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AuthModal />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </>
  )
}

export default MenuBar
