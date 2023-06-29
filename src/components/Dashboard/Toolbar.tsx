import { Icons } from "../Icons/Icons"
import CreateNewModal from "../Modals/CreateNewModal"
import MangageTagsModal from "../Modals/MangageTagsModal"
import { Button } from "../Ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../Ui/dropdown-menu"

const Toolbar = () => {
  return (
    <>
      <div className="inline-flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Icons.toolbar className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <CreateNewModal />
            <MangageTagsModal />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default Toolbar
