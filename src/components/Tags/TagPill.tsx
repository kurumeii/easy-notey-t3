import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Icons } from "../Icons/Icons"
import { Button } from "../Ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Ui/tooltip"
const tagPillStyles = cva("py-1 px-4 select-none", {
  variants: {
    color: {
      sky: "bg-sky-200 text-sky-700",
      red: "bg-red-200 text-red-700",
      green: "bg-green-200 text-green-700",
      violet: "bg-violet-200 text-violet-700",
      yellow: "bg-yellow-200 text-yellow-700",
      lightGray: "bg-gray-300 text-gray-700",
      darkGray: "bg-gray-700 text-gray-300",
    },
    deletable: {
      true: "rounded-none rounded-l-md",
      false: "rounded",
    },
  },
  defaultVariants: {
    color: "sky",
    deletable: false,
  },
})

type TagPillProps = {
  label: string
  loading?: boolean
  destructive?: boolean
  onClickDelete?: () => void
}

type TagPillVariantProps = VariantProps<typeof tagPillStyles> &
  TagPillProps & {
    className?: string
  }

export default function TagPill({
  loading,
  label,
  color,
  deletable,
  destructive,
  className,
  onClickDelete,
}: TagPillVariantProps) {
  return (
    <div className="inline-flex">
      <div
        className={cn(
          tagPillStyles({ color, deletable, className }),
          "flex-1 "
        )}
      >
        <span
          title={label}
          className="w-full max-w-[100px] truncate text-ellipsis"
        >
          {label}
        </span>
      </div>
      {deletable && (
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                className="flex h-full items-center justify-center rounded-none rounded-r-md pl-1 pr-2.5"
                onClick={onClickDelete}
                disabled={loading}
                type="button"
              >
                {loading ? (
                  <Icons.loading className="h-5 w-5" />
                ) : (
                  <Icons.close className="h-5 w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              {!loading && (
                <span>{destructive ? "Delete tag" : "Remove tag"}</span>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}
