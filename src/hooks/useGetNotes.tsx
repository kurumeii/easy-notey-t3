import { type GetNote } from "@/lib/schemas/note"
import { api } from "@/utils/api"
import { useEffect } from "react"
import { useToast } from "./useToast"

type GetNoteProps = GetNote

export default function useGetNotes(props: GetNoteProps) {
  const { toast } = useToast()
  const notesQuery = api.notes.getNotes.useInfiniteQuery(
    {
      ...props,
    },
    {
      staleTime: 10 * 1000,
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  )
  useEffect(() => {
    notesQuery.error &&
      toast({
        variant: "destructive",
        title: "An error has occured",
        description: notesQuery.error.message ?? "Something went wrong",
      })
  }, [notesQuery.error, toast])

  return notesQuery
}
