import { api } from "@/utils/api"
import { useEffect } from "react"
import { useToast } from "./useToast"

export default function useGetTag(tagName?: string) {
  const getTag = api.tags.getTag.useQuery({
    tagName,
  })
  const { toast } = useToast()
  useEffect(() => {
    if (getTag.error) {
      toast({
        variant: "destructive",
        title: "An error has been occured",
        description: getTag.error.message,
      })
    }
  }, [getTag.error, toast])

  return getTag
}
