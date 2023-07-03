import { configureStore } from "@reduxjs/toolkit"
import { noteReducer } from "./slices/noteSlice"
import { searchReducer } from "./slices/searchSlice"

const store = configureStore({
  reducer: {
    search: searchReducer,
    note: noteReducer,
  },
})

export default store
