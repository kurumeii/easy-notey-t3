import { cn } from "@/lib/utils"
import {
  At,
  BookBookmark,
  Command,
  Devices,
  DotsThree,
  Eye,
  FacebookLogo,
  FloppyDisk,
  GithubLogo,
  GoogleLogo,
  Keyboard,
  MagnifyingGlass,
  Moon,
  SignIn,
  SignOut,
  Sparkle,
  Sun,
  TwitterLogo,
} from "@phosphor-icons/react"
import {
  Check,
  ChevronDown,
  ChevronRight,
  Loader2Icon,
  LockIcon,
  MenuIcon,
  PlusIcon,
  TagsIcon,
  UnlockIcon,
  User2Icon,
  X,
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
  markdown: (props?: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("icon icon-tabler icon-tabler-markdown", props?.className)}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
      <path d="M7 15v-6l2 2l2 -2v6"></path>
      <path d="M14 13l2 2l2 -2m-2 2v-6"></path>
    </svg>
  ),
  save: FloppyDisk,
  tags: TagsIcon,
  preview: Eye,
  keyboard: Keyboard,
  search: MagnifyingGlass,
  floatMenu: Command,
  sun: Sun,
  moon: Moon,
  device: Devices,
  slash: ChevronRight,
  at: At,
  create: PlusIcon,
  toolbar: DotsThree,
  chevronDown: ChevronDown,
  check: Check,
  close: X,
}

export type IconProps = (typeof Icons)[keyof typeof Icons]
