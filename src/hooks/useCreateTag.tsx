import { api } from "@/utils/api"
import { useToast } from "./useToast"

export default function useCreateTag() {
  const { toast } = useToast()
  const cacheTags = api.useContext().tags.getAllTags
  return api.tags.createNewTag.useMutation({
    onError(error) {
      toast({
        variant: "destructive",
        description: error.message ?? "Something went wrong",
        title: "Erro has been occured",
      })
    },
    async onSuccess() {
      toast({
        title: "A new tag has been created ✨",
        duration: 2 * 1000,
      })
      await cacheTags.invalidate()
    },
  })
}
