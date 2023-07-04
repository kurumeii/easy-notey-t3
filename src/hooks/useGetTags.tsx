import { type GetTag } from "@/lib/schemas/tag"
import { api } from "@/utils/api"
import { useEffect } from "react"
import useGetSession from "./useGetSession"
import { useToast } from "./useToast"

export default function useGetTags(props?: GetTag) {
  const { user } = useGetSession()
  const { toast } = useToast()
  const queryResult = api.tags.getAllTags.useInfiniteQuery(
    {
      limit: props?.limit ?? 6,
      tagName: props?.tagName,
    },
    {
      enabled: !!user,
      staleTime: 10 * 1000,
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  )
  useEffect(() => {
    queryResult.error &&
      toast({
        variant: "destructive",
        title: "An error has occured",
        description: queryResult.error.message ?? "Something went wrong",
      })
  }, [queryResult.error, toast])

  return queryResult
}
