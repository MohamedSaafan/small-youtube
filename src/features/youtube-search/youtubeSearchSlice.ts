import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../api";
import { buildGetVideosUrl, buildSearchURL } from "../../api/urlBuilder";
import { getVideoDetails } from "../videos/videosSlice";
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
  "youtubeSearch/searchInYoutube",
  async (searchKeyWord: string, thunkApi) => {
    // build the Url
    const url = buildSearchURL(searchKeyWord);
    try {
      const data = await api<YoutubeSearchResult>(url);
      // extract videos ID's and get their details
      const videoIDs: string[] = [];
      data.items.forEach((item) => {
        if (item.id.kind === "youtube#video") {
          videoIDs.push(item.id.videoId);
        }
      });
      // dispatch getVideos Details
      thunkApi.dispatch(getVideoDetails(videoIDs.toString()));
      return data;
    } catch (err) {
      thunkApi.rejectWithValue(new Error(JSON.stringify(err)));
    }
  }
);
const youtubeSearchSlice = createSlice({
  name: "youtubeSearch/",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchInYoutube.fulfilled, (state, action) => {
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
