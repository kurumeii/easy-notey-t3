import { api } from "@/utils/api"
import useGetSession from "./useGetSession"

export default function useGetTags(query?: string) {
  const { user } = useGetSession()
  return api.tags.getTag.useQuery(
    { tagName: query },
    {
      enabled: !!user,
      staleTime: 10 * 1000,
    }
  )
}
