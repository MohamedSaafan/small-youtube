import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";

const initialState = "";

const searchbarSlice = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    changeSearchBar: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { changeSearchBar } = searchbarSlice.actions;
export default searchbarSlice.reducer;
