import type store from "@/store"
import { type Note } from "@prisma/client"
import { type PropsWithChildren } from "react"

export type FramerVariant = PropsWithChildren<{
  className?: string
}>

export type NoteSortedByOptions = Pick<Note, "createdAt" | "lastUpdated">

export type UnionNoteSortedByOption = keyof NoteSortedByOptions

export type ReactSelectOption = {
  label: string
  value: string
}

export type SkeletonProps = {
  number?: number
  rounded?: boolean
  className?: string
}

export type RootState = ReturnType<(typeof store)["getState"]>

export type AppDispatch = (typeof store)["dispatch"]
