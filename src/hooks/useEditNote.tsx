import { api } from "@/utils/api"
import { useToast } from "./useToast"

export default function useEditNote() {
  const { toast } = useToast()
  const ctx = api.useContext()
  return api.notes.editNote.useMutation({
    onError: (err) =>
      toast({
        variant: "destructive",
        title: "An error has been occured",
        description: err.message,
      }),
    onSuccess: async (updatedData, {noteId}) => {
      toast({
        title: "Successfully",
        description: "Your note has been changed ✨",
      })
      await ctx.notes.getNotes.invalidate()
      ctx.notes.getNoteById.setData({noteId}, updatedData)
    },
  })
}
