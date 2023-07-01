import useCreateNote from "@/hooks/useCreateNote"
import useGetTags from "@/hooks/useGetTags"
import { NoteZod, type CreateNewNote } from "@/lib/schemas/note"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMemo, type Dispatch, type SetStateAction } from "react"
import { useForm } from "react-hook-form"
import ReactSelect from "react-select"
import makeAnimated from "react-select/animated"
import { Icons } from "../Icons/Icons"
import { Button } from "../Ui/button"
import { DialogFooter } from "../Ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../Ui/form"
import { Input } from "../Ui/input"

const animatedComponents = makeAnimated()

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const CreateNewNoteForm = (props: Props) => {
  const { setOpen } = props
  const { data: tagsData } = useGetTags()
  const { mutate: createNoteMutation, isLoading: createNoteLoading } =
    useCreateNote()
  const tagOptions = useMemo(
    () =>
      tagsData
        ? tagsData.map((tag) => ({
            value: tag.id,
            label: tag.label,
          }))
        : [],
    [tagsData]
  )

  const form = useForm<CreateNewNote>({
    resolver: zodResolver(NoteZod["createNewNoteSchema"]),
    defaultValues: {
      title: "",
      tags: [],
    },
  })

  const onSubmit = ({ tags, title }: CreateNewNote) => {
    createNoteMutation({
      title,
      tags,
    })
    setOpen(false)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(evn) => void form.handleSubmit(onSubmit)(evn)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:text-destructive after:content-['*']">
                Title
              </FormLabel>
              <FormControl>
                <Input placeholder="Your awesome title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <ReactSelect
                  {...field}
                  isClearable
                  isSearchable
                  isMulti
                  components={animatedComponents}
                  options={tagOptions}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button disabled={createNoteLoading} type="submit">
            {createNoteLoading ? (
              <>
                <Icons.loading className="mr-2 h-5 w-5" />
                <span>Creating...</span>
              </>
            ) : (
              <>
                <span>Confirm</span>
              </>
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}

export default CreateNewNoteForm
