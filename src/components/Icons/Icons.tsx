import { cn } from "@/lib/utils"
import {
  BookBookmark,
  FacebookLogo,
  GithubLogo,
  GoogleLogo,
  SignIn,
  SignOut,
  Sparkle,
  TwitterLogo,
} from "@phosphor-icons/react"
import {
  Loader2Icon,
  LockIcon,
  MenuIcon,
  UnlockIcon,
  User2Icon,
  type LucideProps,
} from "lucide-react"

export const Icons = {
  github: GithubLogo,
  twitter: TwitterLogo,
  facebook: FacebookLogo,
  google: GoogleLogo,
  logo: BookBookmark,
  burger: MenuIcon,
  signIn: SignIn,
  signOut: SignOut,
  loading: (props: LucideProps) => (
    <Loader2Icon {...props} className={cn(props.className, "animate-spin")} />
  ),
  lock: LockIcon,
  unlock: UnlockIcon,
  started: Sparkle,
  userIcon: User2Icon,
}
