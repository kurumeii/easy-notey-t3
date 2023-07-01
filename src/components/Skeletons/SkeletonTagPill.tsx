import { cn } from "@/lib/utils"
import { type SkeletonProps } from "@/types"
import { Skeleton } from "../Ui/skeleton"

export default function SkeletonTagPill({
  className,
  number = 1,
  rounded,
}: SkeletonProps) {
  const arrayFormNumber = [...Array<typeof number>(number).keys()]
  return (
    <>
      {arrayFormNumber.map((v) => (
        <Skeleton
          key={v}
          className={cn("duration-1000", className, rounded && "rounded-full")}
        />
      ))}
    </>
  )
}
