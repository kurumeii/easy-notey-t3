import { api } from "@/utils/api"
import { useEffect } from "react"
import useGetSession from "./useGetSession"
import { useToast } from "./useToast"

export default function useGetTags(query?: string) {
  const { user } = useGetSession()
  const { toast } = useToast()
  const queryResult = api.tags.getTag.useQuery(
    { tagName: query },
    {
      enabled: !!user,
      staleTime: 10 * 1000,
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

  return query
}
