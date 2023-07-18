import useGetNoteById from "@/hooks/useGetNoteById"
import { useState } from "react"
import EditNoteForm from "../Forms/EditNoteForm"
import { Icons } from "../Icons/Icons"
import SkeletonCards from "../Skeletons/SkeletonCards"
import { Button } from "../Ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../Ui/dialog"

function EditNoteModal({ noteId }: { noteId: string }) {
  const [isOpen, setOpen] = useState(false)

  //Get note by id query
  const {
    isLoading: gettingNote,
    data: noteData,
    refetch: fetchNote,
    selectedTags
  } =
    useGetNoteById(noteId)

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" onClick={() => void fetchNote()}>
          <Icons.edit className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit note</DialogTitle>
        </DialogHeader>
        {gettingNote ? (
          <SkeletonCards number={2} className="h-32 w-full" />
        ) : !noteData || !selectedTags ? (
          <h3>Error when fetching data</h3>
        ) : (
          <EditNoteForm
            noteData={noteData}
            selectedTags={selectedTags}
            toggleModal={() => setOpen((prev) => !prev)}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

export default EditNoteModal
