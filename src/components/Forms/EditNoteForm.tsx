/* eslint-disable @typescript-eslint/ban-ts-comment */
import useEditNote from "@/hooks/useEditNote"
import useGetTag from "@/hooks/useGetTag"
import { NoteZod, type EditNoteSchema } from "@/lib/schemas/note"
import { type RouterOutputs } from "@/utils/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Icons } from "../Icons/Icons"
import ReactSelect from "../ReactSelect/ReactSelect"
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

type Props = {
  noteData: RouterOutputs["notes"]["getNoteById"]
  selectedTags: (
    | {
        value: string
        label: string
      }
    | undefined
  )[]
  toggleModal: () => void
}

function EditNoteForm({ noteData, selectedTags, toggleModal }: Props) {
  const { mutate: editNoteMutation, isLoading: edittingNote } = useEditNote()

  const { tagOptions, isLoading: tagsLoading } = useGetTag()

  const form = useForm<EditNoteSchema>({
    resolver: zodResolver(NoteZod["editNoteSchema"]),
    defaultValues: {
      noteId: noteData.id,
      title: noteData.title,
      tags: selectedTags,
    },
  })

  const onSubmit = (data: EditNoteSchema) => {
    editNoteMutation({
      noteId: data.noteId,
      title: data.title,
      tags: data.tags,
    })
    !edittingNote && toggleModal()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(evn) => void form.handleSubmit(onSubmit)(evn)}
        className="space-y-8"
      >
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:text-destructive after:content-['*']">
                  Name tag
                </FormLabel>
                <FormControl>
                  <Input
                    autoFocus
                    autoComplete="off"
                    placeholder="Name your tag"
                    {...field}
                  />
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
                  {/* @ts-ignore-error */}
                  <ReactSelect
                    {...field}
                    isMulti
                    isSearchable
                    isClearable
                    isLoading={tagsLoading}
                    options={tagOptions}
                    defaultValue={noteData.tags}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <DialogFooter>
          <Button disabled={edittingNote} type="submit">
            {edittingNote ? (
              <>
                <Icons.loading className="mr-2 h-5 w-5" />
                <span>Loading...</span>
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

export default EditNoteForm
