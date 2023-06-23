import { cn } from "@/lib/utils"
import {
  BookBookmark,
  FacebookLogo,
  GithubLogo,
  GoogleLogo,
  SignIn,
  TwitterLogo,
} from "@phosphor-icons/react"
import {
  Loader2Icon,
  LockIcon,
  MenuIcon,
  UnlockIcon,
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
  loading: (props: LucideProps) => (
    <Loader2Icon {...props} className={cn(props.className, "animate-spin")} />
  ),
  lock: LockIcon,
  unlock: UnlockIcon,
}
