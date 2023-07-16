import MangageTagForm from "../Forms/MangageTagForm"
import { Icons } from "../Icons/Icons"
import { DropdownMenuItem } from "../Ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../Ui/sheet"

const MangageTagsModal = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Icons.tags className="mr-2 h-5 w-5" />
          Manage tags
        </DropdownMenuItem>
      </SheetTrigger>
      <SheetContent className="w-full md:w-2/3 lg:w-1/2">
        <SheetHeader>
          <SheetTitle>Manage tags</SheetTitle>
        </SheetHeader>
        <MangageTagForm />
      </SheetContent>
    </Sheet>
  )
}

export default MangageTagsModal
