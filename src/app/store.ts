import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchBarSlice from "../features/searchbar/searchBarSlice";
import videosSlice from "../features/videos/videosSlice";
import youtubeSearchSlice from "../features/youtube-search/youtubeSearchSlice";

export const store = configureStore({
  reducer: {
    searchbar: searchBarSlice,
    youtubeSearchResult: youtubeSearchSlice,
    videosDetails: videosSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
