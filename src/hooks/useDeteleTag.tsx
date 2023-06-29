import { api } from "@/utils/api"
import { useState } from "react"
import useGetTags from "./useGetTags"
import { useToast } from "./useToast"

export default function useDeteleTag() {
  const { toast } = useToast()
  const { refetch } = useGetTags()
  const [idSelected, setIdSelected] = useState("")

  const deleteTag = api.tags.deleteTag.useMutation({
    onError(error) {
      toast({
        variant: "destructive",
        description: error.message ?? "Something went wrong",
        title: "Erro has been occured",
      })
    },
    onMutate({ tagId }) {
      setIdSelected(tagId)
    },
    async onSuccess() {
      toast({
        title: "Tag has been deleted ⚔",
        duration: 2 * 1000,
      })
      await refetch()
    },
  })
  return {
    ...deleteTag,
    idSelected,
  }
}
