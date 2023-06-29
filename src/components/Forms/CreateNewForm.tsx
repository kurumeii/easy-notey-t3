import { CreateNewNoteSchema, type CreateNewNoteForm } from "@/lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { type PropsWithChildren } from "react"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../Ui/form"
import { Input } from "../Ui/input"

const CreateNewForm = ({ children }: PropsWithChildren) => {
  const form = useForm<CreateNewNoteForm>({
    resolver: zodResolver(CreateNewNoteSchema),
    defaultValues: {
      tags: [],
      title: "",
    },
  })

  const onSubmit = (data: CreateNewNoteForm) => {
    console.log(data)
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
                <Input autoComplete="off" placeholder="(Optional)" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {children}
      </form>
    </Form>
  )
}

export default CreateNewForm
