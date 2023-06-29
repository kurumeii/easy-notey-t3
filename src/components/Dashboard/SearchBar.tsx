import { type Note } from "@prisma/client"
import { useState } from "react"
import { Icons } from "../Icons/Icons"
import { Button } from "../Ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../Ui/dropdown-menu"
import { Input } from "../Ui/input"

type Options = Pick<Note, "title" | "createdAt" | "lastUpdated" | "content">

type UnionOption = keyof Options

const options: Array<{
  id: UnionOption
  text: string
}> = [
  { id: "title", text: "Title" },
  { id: "content", text: "Content" },
  { id: "createdAt", text: "Created at" },
  { id: "lastUpdated", text: "Last updated" },
]

const SearchBar = () => {
  const [option, setOption] = useState<UnionOption>("title")
  return (
    <>
      <div className="flex flex-1 items-center space-x-2 text-muted-foreground">
        {/* Input search */}
        <div className="relative flex flex-1 items-center">
          <Input
            type="text"
            placeholder="Search note by..."
            className="py-2 pl-10 pr-3"
          />
          <span className="absolute inset-y-0 flex items-center px-2">
            <Icons.search className="h-5 w-5" />
          </span>
        </div>
        {/* Filtering options */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-fit">
              {options.find((o) => o.id === option)?.text}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Sorting by: </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={option}
              onValueChange={(value) => setOption(value as UnionOption)}
            >
              {options.map((o) => (
                <DropdownMenuRadioItem key={o.id} value={o.id}>
                  {o.text}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default SearchBar
