import MangageTagForm from "../Forms/MangageTagForm"
import { Icons } from "../Icons/Icons"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../Ui/dialog"
import { DropdownMenuItem } from "../Ui/dropdown-menu"

const MangageTagsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Icons.tags className="mr-2 h-5 w-5" />
          Manage tags
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manage tags</DialogTitle>
        </DialogHeader>
        <MangageTagForm />
      </DialogContent>
    </Dialog>
  )
}

export default MangageTagsModal
