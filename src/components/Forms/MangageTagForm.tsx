import { TagZod, type CreateTag } from "@/lib/schemas/tag"
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Ui/select"
import { available_colors } from "@/constants"
import useCreateTag from "@/hooks/useCreateTag"
import useDeteleTag from "@/hooks/useDeteleTag"
import useGetTags from "@/hooks/useGetTags"
import { Icons } from "../Icons/Icons"
import SkeletonTagPill from "../Skeletons/SkeletonTagPill"
import TagColorCircle from "../Tags/TagColorCircle"
import TagPill from "../Tags/TagPill"
import { Button } from "../Ui/button"
import { ScrollArea } from "../Ui/scroll-area"
import { SheetFooter } from "../Ui/sheet"

const LIMIT = 6

const MangageTagForm = () => {
  const form = useForm<CreateTag>({
    resolver: zodResolver(TagZod["createTagSchema"]),
    defaultValues: {
      name: "",
    },
  })

  const { mutate: createTagMutation, isLoading: createTagLoading } =
    useCreateTag()

  const {
    mutate: deleteTagMutation,
    isLoading: deleteTagLoading,
    idSelected,
  } = useDeteleTag()

  const {
    data: tagsData,
    isLoading: tagsLoading,
    isFetchingNextPage: fetchingNextTags,
    fetchNextPage: getNextTag,
    hasNextPage: hasNextTag,
  } = useGetTags({
    limit: LIMIT,
  })

  const deleteTag = (id: string) =>
    deleteTagMutation({
      tagId: id,
    })

  const onSubmit = (data: CreateTag) => {
    createTagMutation({
      color: data.color,
      name: data.name,
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(evn) => void form.handleSubmit(onSubmit)(evn)}
        className="space-y-8"
      >
        {/* Tag list */}
        <div className="grid gap-1">
          <h4 className="text-xl font-semibold">All tags</h4>
          {!tagsData || tagsData.pages.some((p) => p.tags.length === 0) ? (
            <h3 className="text-sm text-muted-foreground">Nothing here</h3>
          ) : (
            <ScrollArea className="max-h-52 w-full rounded-sm border border-border duration-300  hover:shadow-lg">
              <div className="m-5 grid grid-cols-2 grid-rows-2 gap-3 md:grid-cols-4">
                {tagsLoading ? (
                  <SkeletonTagPill number={5} className="h-10 w-32" />
                ) : (
                  tagsData?.pages?.flatMap(({ tags }) =>
                    tags.map(({ id, label, color }) => (
                      <TagPill
                        key={id}
                        label={label}
                        color={color}
                        loading={id === idSelected ? deleteTagLoading : false}
                        className="flex h-full flex-1 items-center justify-center p-3 text-xs"
                        destructive
                        deletable
                        onClickDelete={() => deleteTag(id)}
                      />
                    ))
                  )
                )}
                {fetchingNextTags ? (
                  <SkeletonTagPill number={3} />
                ) : (
                  hasNextTag && (
                    <Button
                      type="button"
                      variant="link"
                      className="mt-3"
                      onClick={() => void getNextTag()}
                    >
                      Get {LIMIT} more
                    </Button>
                  )
                )}
              </div>
            </ScrollArea>
          )}
        </div>
        {/* Create new tag */}
        <div className="grid gap-2">
          <h4 className="text-xl font-semibold">Create new tag</h4>
          <FormField
            control={form.control}
            name="name"
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
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:text-destructive after:content-['*']">
                  Color
                </FormLabel>
                <Select
                  defaultValue={field.value}
                  autoComplete="true"
                  onValueChange={(val) => {
                    const selectedColor =
                      available_colors.find((ac) => ac.color === val)?.color ??
                      "darkGray"
                    field.onChange(selectedColor)
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a color" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-52">
                    {available_colors.map(({ color, text }) => (
                      <SelectItem key={color} value={color}>
                        <div className="inline-flex w-full items-center">
                          <TagColorCircle
                            color={color}
                            size={"md"}
                            className="mr-2"
                          />
                          <span>{text}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <SheetFooter>
          <Button disabled={createTagLoading} type="submit">
            {createTagLoading ? (
              <>
                <Icons.loading className="mr-2 h-5 w-5" />
                Submitting
              </>
            ) : (
              <>
                <Icons.check className="mr-2 h-5 w-5" />
                Confirm
              </>
            )}
          </Button>
        </SheetFooter>
      </form>
    </Form>
  )
}

export default MangageTagForm
