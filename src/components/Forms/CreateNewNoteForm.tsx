/* eslint-disable @typescript-eslint/ban-ts-comment */
import useCreateNote from "@/hooks/useCreateNote"
import useGetTag from "@/hooks/useGetTag"
import { NoteZod, type CreateNewNote } from "@/lib/schemas/note"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMemo, type Dispatch, type SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { createFilter } from "react-select"
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
  setOpen: Dispatch<SetStateAction<boolean>>
}

const CreateNewNoteForm = (props: Props) => {
  const { setOpen } = props
  const { data: tagsData, isLoading: tagsLoading } = useGetTag()
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
                {/* @ts-ignore-error */}
                <ReactSelect
                  {...field}
                  isMulti
                  isSearchable
                  isClearable
                  isLoading={tagsLoading}
                  options={tagOptions}
                  filterOption={createFilter({
                    matchFrom: "start",
                    ignoreCase: true,
                  })}
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
