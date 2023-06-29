import { api } from "@/utils/api"
import useGetSession from "./useGetSession"

export default function useGetTags() {
  const { user } = useGetSession()
  return api.tags.getTag.useQuery(undefined, {
    enabled: !!user,
    staleTime: 10 * 1000,
  })
}
