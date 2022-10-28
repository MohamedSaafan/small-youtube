import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, buildSearchURL } from "../../api/queries";
interface searchState {
  data: null | YoutubeSearchResult;
  loading: "idle" | "pending" | "succeeded" | "failed";
  errorMessage: string;
}

const initialState: searchState = {
  data: null,
  loading: "idle",
  errorMessage: "",
};

export const searchInYoutube = createAsyncThunk(
  "youtubeSearchResylts/searchInYoutube",
  async (searchKeyWord: string, thunkApi) => {
    // build the Url
    const url = buildSearchURL(searchKeyWord);
    try {
      const data = await api<YoutubeSearchResult>(url);
      return data;
    } catch (err) {
      thunkApi.rejectWithValue(new Error(JSON.stringify(err)));
    }
  }
);
const youtubeSearchSlice = createSlice({
  name: "youtubeSearchResults",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchInYoutube.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = "idle";
      if (!action.payload) {
        state.errorMessage = "failed";
      }
      if (action.payload) state.data = action.payload;
    });
    builder.addCase(searchInYoutube.rejected, (state, action) => {
      state.loading = "failed";
      state.errorMessage = "Error Loading Youtube data , Request Rejected";
    });
    builder.addCase(searchInYoutube.pending, (state, action) => {
      state.loading = "pending";
    });
  },
});

export default youtubeSearchSlice.reducer;
