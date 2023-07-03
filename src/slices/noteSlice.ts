import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type State = {
  noteId: string
}

const initialState: State = {
  noteId: "",
}

const noteSlice = createSlice({
  name: "Note",
  initialState,
  reducers: {
    setNoteId: (state, action: PayloadAction<State>) => {
      state.noteId = action.payload.noteId
    },
  },
})

export const { setNoteId } = noteSlice.actions

export const noteReducer = noteSlice.reducer
