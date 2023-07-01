import useGetNotes from "@/hooks/useGetNotes"
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux"
import useShortcutKey from "@/hooks/useShortcutKey"
import { type GetNote } from "@/lib/schemas/note"
import { setSearchQuery, setSorting } from "@/slices/searchSlice"
import { useRef } from "react"
import { useDebouncedCallback } from "use-debounce"
import { Icons } from "../Icons/Icons"
import { Button } from "../Ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../Ui/dropdown-menu"
import { Input } from "../Ui/input"

const options: Array<{
  id: GetNote["sortedBy"]["id"]
  text: string
  type: GetNote["sortedBy"]["type"]
}> = [
  { id: "createdAt", text: "Created at", type: "asc" },
  { id: "lastUpdated", text: "Last updated", type: "asc" },
]

const SearchBar = () => {
  const { searchQuery, sorting } = useAppSelector((s) => s.search)
  const dispatch = useAppDispatch()
  const debounced = useDebouncedCallback(
    (value: string) => dispatch(setSearchQuery(value)),
    500
  )

  const searchRef = useRef<HTMLInputElement | null>(null)
  const focusSearch = () => {
    searchRef.current?.focus()
  }
  useShortcutKey("k", focusSearch)
  const { isLoading } = useGetNotes({
    title: searchQuery,
    sortedBy: sorting,
    tagsId: [],
  })

  return (
    <>
      <div className="flex flex-1 items-center space-x-2 text-muted-foreground">
        {/* Input search */}
        <div className="relative flex flex-1 gap-2">
          <div className="flex-1">
            <Input
              name="search"
              type="text"
              placeholder="Search note by..."
              autoComplete="off"
              ref={searchRef}
              className="py-2 pr-20"
              defaultValue={searchQuery}
              onChange={(v) => debounced(v.target.value)}
            />
            <span className="absolute inset-y-0 right-0 flex select-none items-center pl-2 pr-5 text-xs uppercase">
              {isLoading ? (
                <Icons.loading className="h-5 w-5" />
              ) : (
                <Icons.search className="h-5 w-5" />
              )}
            </span>
          </div>
        </div>
        {/* Filtering options */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-fit">
              {options.find((o) => o.id === sorting.id)?.text}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuRadioGroup
              value={sorting.id}
              onValueChange={(value) =>
                dispatch(
                  setSorting({
                    id: value as typeof sorting.id,
                    type: sorting.type,
                  })
                )
              }
            >
              {options.map((o) => (
                <DropdownMenuRadioItem key={o.id} value={o.id}>
                  {o.text}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* ASC or DESC */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="outline">
              {sorting.type === "asc" ? (
                <Icons.ascSort className="h-5 w-5" />
              ) : (
                <Icons.descSort className="h-5 w-5" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() =>
                dispatch(
                  setSorting({
                    id: sorting.id,
                    type: "asc",
                  })
                )
              }
            >
              <Icons.ascSort className="mr-2 h-4 w-4" />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                dispatch(
                  setSorting({
                    id: sorting.id,
                    type: "desc",
                  })
                )
              }
            >
              <Icons.descSort className="mr-2 h-4 w-4" />
              Desc
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default SearchBar
