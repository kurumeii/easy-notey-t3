import { api } from "@/utils/api"
import { useEffect, useMemo } from "react"
import { useToast } from "./useToast"

export default function useGetTag(tagName?: string) {
  const getTag = api.tags.getTag.useQuery(
    {
      tagName,
    },
    {
      enabled: true,
      staleTime: 1 * 1000,
    }
  )
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

  const tagOptions = useMemo(
    () =>
      getTag.data
        ? getTag.data.map((tag) => ({
            value: tag.id,
            label: tag.label,
          }))
        : [],
    [getTag.data]
  )

  return {
    ...getTag,
    tagOptions,
  }
}
