import CreateNewForm from "../Forms/CreateNewForm"
import { Icons } from "../Icons/Icons"
import { Button } from "../Ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../Ui/dialog"
import { DropdownMenuItem } from "../Ui/dropdown-menu"

const CreateNewModal = () => {
  return (
    <Dialog>
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
        <CreateNewForm>
          <DialogFooter>
            <Button type="submit">Confirm</Button>
          </DialogFooter>
        </CreateNewForm>
      </DialogContent>
    </Dialog>
  )
}

export default CreateNewModal
