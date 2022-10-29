import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";
import { buildGetVideosUrl } from "../../api/urlBuilder";

interface VideosDetailsState {
  data: VideoDetails[];
  loading: "pending" | "rejected" | "idle";
  errorMessage: string;
}
const initialState: VideosDetailsState = {
  data: [],
  loading: "idle",
  errorMessage: "",
};
export const getVideoDetails = createAsyncThunk(
  "youtubeDetails/getVideosList",
  async (videosIDs: string, thunkApi) => {
    const fetchVideosUrl = buildGetVideosUrl(videosIDs);
    try {
      const data = await api<VideoDetailsResponse>(fetchVideosUrl);
      return data.items;
    } catch (err) {
      throw new Error("failed loading Video Details");
    }
  }
);
const videosDetailsSlice = createSlice({
  name: "videosDetails/videos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getVideoDetails.fulfilled, (state, action) => {
      state.loading = "idle";
      if (action.payload) state.data = action.payload;
    });
    builder.addCase(getVideoDetails.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getVideoDetails.rejected, (state, action) => {
      state.loading = "rejected";
      state.errorMessage = "Error Loading Videos Details";
    });
  },
});

export default videosDetailsSlice.reducer;
