import { api } from "@/utils/api"
import { useEffect, useMemo } from "react"
import useGetTag from "./useGetTag"
import { useToast } from "./useToast"

export default function useGetNoteById(noteId: string) {
  const { toast } = useToast()
  const noteQuery = api.notes.getNoteById.useQuery(
    { noteId },
    {
      enabled: false,
      staleTime: 1000
    }
  )
  const { tagOptions } = useGetTag()
  
    const selectedTags = useMemo(() => noteQuery.data?.tags.map((tag) => {
        const idx = tagOptions.findIndex((opt) => opt.value === tag.id)
        return tagOptions[idx]
      }), [noteQuery.data?.tags, tagOptions])

  useEffect(() => {
    noteQuery.error &&
      toast({
        variant: "destructive",
        title: "An error has occured",
        description: noteQuery.error.message ?? "Something went wrong",
      })
  }, [noteQuery.error, toast])

  return {
    ...noteQuery,
    selectedTags
  }
}
