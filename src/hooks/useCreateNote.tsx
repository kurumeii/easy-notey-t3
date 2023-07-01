import { api } from "@/utils/api"
import { useToast } from "./useToast"

export default function useCreateNote() {
  const { toast } = useToast()
  const apiContext = api.useContext()
  const noteClient = apiContext.notes.getNotes
  return api.notes.createNote.useMutation({
    onError(error) {
      toast({
        variant: "destructive",
        description: error.message ?? "Something went wrong",
        title: "Erro has been occured",
      })
    },
    onSuccess() {
      toast({
        title: "Congratz your note has been created ✨",
        duration: 2 * 1000,
      })

      void noteClient.invalidate()
    },
  })
}
