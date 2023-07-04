import { type PropsWithChildren } from "react"
import SkeletonTagPill from "../Skeletons/SkeletonTagPill"
import { ScrollArea } from "../Ui/scroll-area"

type TagProps = PropsWithChildren<{
  title: string
  skeletonNumber?: number
  isLoading?: boolean
  isEmpty?: boolean
  emptyMessage?: string
}>

const TagList = ({
  title,
  skeletonNumber = 5,
  isLoading,
  isEmpty,
  emptyMessage,
  children,
}: TagProps) => {
  return (
    <div className="grid gap-1">
      <h4 className="text-xl font-semibold">{title}</h4>
      {isEmpty ? (
        <h3 className="text-sm text-muted-foreground">{emptyMessage}</h3>
      ) : (
        <ScrollArea className="max-h-32 w-full rounded-sm border border-border duration-300  hover:shadow-lg">
          <div className="mx-2 my-5 grid grid-cols-2 grid-rows-2 gap-3 md:grid-cols-3">
            {isLoading ? (
              <SkeletonTagPill number={skeletonNumber} className="h-10 w-32" />
            ) : (
              children
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}

export default TagList
