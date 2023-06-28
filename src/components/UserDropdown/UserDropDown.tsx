import useGetSession from "@/hooks/useGetSession"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { Icons } from "../Icons/Icons"
import AvatarSkeleton from "../Skeletons/AvatarSkeleton"
import { Avatar, AvatarFallback, AvatarImage } from "../Ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../Ui/dropdown-menu"

const UserDropDown = () => {
  const { isLoading, user } = useGetSession()
  if (isLoading) return <AvatarSkeleton />
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {user?.image && <AvatarImage src={user.image} alt="User avatar" />}
          <AvatarFallback>
            <span className="sr-only">{user?.email ?? user?.name}</span>
            <Icons.userIcon className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={"/notes"}>Go to notes</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => void signOut()}
          className="text-destructive hover:bg-destructive hover:text-destructive-foreground focus:bg-destructive focus:text-destructive-foreground"
        >
          <Icons.signOut className="mr-2 h-5 w-5" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropDown
