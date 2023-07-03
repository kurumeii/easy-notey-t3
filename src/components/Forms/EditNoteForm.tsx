import { NoteZod, type EditNoteSchema } from "@/lib/schemas/note"
import { type RouterOutputs } from "@/utils/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
}

function EditNoteForm({ noteData }: Props) {
  const form = useForm<EditNoteSchema>({
    resolver: zodResolver(NoteZod["editNoteSchema"]),
    defaultValues: {
      title: noteData?.title,
      tags: noteData?.tags,
    },
  })

  const onSubmit = (data: EditNoteSchema) => console.log(data)

  return (
    <Form {...form}>
      <form
        onSubmit={(evn) => void form.handleSubmit(onSubmit)(evn)}
        className="space-y-8"
      >
        <div className="grid gap-2">
          <h4 className="text-xl font-semibold">Create new tag</h4>
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
        </div>
      </form>
    </Form>
  )
}

export default EditNoteForm
