import { type GetNote } from "@/lib/schemas/note"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type State = {
  searchQuery: string
  sorting: GetNote["sortedBy"]
}

const initialState: State = {
  searchQuery: "",
  sorting: {
    id: "createdAt",
    type: "desc",
  },
}

export const searchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<State["searchQuery"]>) => {
      state.searchQuery = action.payload
    },
    setSorting: (state, action: PayloadAction<State["sorting"]>) => {
      state.sorting.id = action.payload.id
      state.sorting.type = action.payload.type
    },
  },
})

export const { setSearchQuery, setSorting } = searchSlice.actions

export const searchReducer = searchSlice.reducer
