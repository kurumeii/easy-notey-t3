import { cn } from "@/lib/utils"
import {
  IconBrandGoogle,
  IconDots,
  IconKeyboard,
  IconSparkles,
} from "@tabler/icons-react"
import {
  AtSignIcon,
  BookMarkedIcon,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUpIcon,
  CommandIcon,
  EditIcon,
  EyeIcon,
  FacebookIcon,
  GithubIcon,
  Laptop2Icon,
  Loader2Icon,
  LockIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  MoonIcon,
  PlusIcon,
  SaveIcon,
  SearchIcon,
  SortAsc,
  SortDesc,
  SunIcon,
  TagsIcon,
  TwitterIcon,
  UnlockIcon,
  User2Icon,
  X,
  type LucideProps,
} from "lucide-react"

export type IconProps = LucideProps

export const Icons = {
  github: GithubIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  google: IconBrandGoogle,
  logo: BookMarkedIcon,
  burger: MenuIcon,
  signIn: LogInIcon,
  signOut: LogOutIcon,
  loading: (props: IconProps) => (
    <Loader2Icon {...props} className={cn(props.className, "animate-spin")} />
  ),
  lock: LockIcon,
  unlock: UnlockIcon,
  started: IconSparkles,
  userIcon: User2Icon,
  markdown: (props: IconProps) => (
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
  save: SaveIcon,
  tags: TagsIcon,
  preview: EyeIcon,
  keyboard: IconKeyboard,
  search: SearchIcon,
  floatMenu: CommandIcon,
  sun: SunIcon,
  moon: MoonIcon,
  device: Laptop2Icon,
  slash: ChevronRight,
  at: AtSignIcon,
  create: PlusIcon,
  toolbar: IconDots,
  chevronDown: ChevronDown,
  chevronUp: ChevronUpIcon,
  ascSort: SortAsc,
  descSort: SortDesc,
  check: Check,
  close: X,
  edit: EditIcon,
}
