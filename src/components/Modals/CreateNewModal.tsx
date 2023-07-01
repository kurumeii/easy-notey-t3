import { useState } from "react"
import CreateNewNoteForm from "../Forms/CreateNewNoteForm"
import { Icons } from "../Icons/Icons"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../Ui/dialog"
import { DropdownMenuItem } from "../Ui/dropdown-menu"

const CreateNewModal = () => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Icons.create className="mr-2 h-5 w-5" />
          Create new note
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New note</DialogTitle>
        </DialogHeader>
        {/* Create new form */}
        <CreateNewNoteForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

export default CreateNewModal
