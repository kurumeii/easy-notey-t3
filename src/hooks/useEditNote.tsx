import { api } from "@/utils/api"
import { useToast } from "./useToast"

export default function useEditNote() {
  const { toast } = useToast()
  const cachedNote = api.useContext().notes.getNotes
  return api.notes.editNote.useMutation({
    onError: (err) =>
      toast({
        variant: "destructive",
        title: "An error has been occured",
        description: err.message,
      }),
    onSuccess: async () => {
      toast({
        title: "Successfully",
        description: "Your note has been changed ✨",
      })
      await cachedNote.invalidate()
    },
  })
}
