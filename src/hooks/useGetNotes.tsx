import { type GetNote } from "@/lib/schemas/note"
import { api } from "@/utils/api"
import useGetSession from "./useGetSession"

type GetNoteProps = GetNote

export default function useGetNotes(props: GetNoteProps) {
  const { user } = useGetSession()
  return api.notes.getNotes.useInfiniteQuery(
    {
      ...props,
    },
    {
      enabled: !!user,
      staleTime: 10 * 1000,
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  )
}
