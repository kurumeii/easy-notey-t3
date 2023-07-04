import { api } from "@/utils/api"
import { useState } from "react"
import { useToast } from "./useToast"

export default function useDeteleTag() {
  const { toast } = useToast()
  const tagCache = api.useContext().tags.getAllTags
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
      await tagCache.refetch()
    },
  })
  return {
    ...deleteTag,
    idSelected,
  }
}
