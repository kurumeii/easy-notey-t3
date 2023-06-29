import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const circleTag = cva("rounded-full select-none", {
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
    size: {
      sm: "w-2 h-2",
      md: "w-3 h-3",
      lg: "w-5 h-5",
    },
  },
  defaultVariants: {
    color: "sky",
    size: "md",
  },
})

type TagColorProps = VariantProps<typeof circleTag> & {
  className?: string
}

const TagColorCircle = ({ color, className, size }: TagColorProps) => {
  return <div className={cn(circleTag({ color, className, size }))} />
}

export default TagColorCircle
