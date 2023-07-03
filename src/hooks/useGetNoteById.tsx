import { api } from "@/utils/api"
import { useEffect } from "react"
import { useToast } from "./useToast"

export default function useGetNoteById(noteId: string) {
  const { toast } = useToast()
  const noteQuery = api.notes.getNoteById.useQuery(
    { noteId },
    {
      enabled: false,
      staleTime: 20 * 1000,
    }
  )
  useEffect(() => {
    noteQuery.error &&
      toast({
        variant: "destructive",
        title: "An error has occured",
        description: noteQuery.error.message ?? "Something went wrong",
      })
  }, [noteQuery.error, toast])

  return noteQuery
}
