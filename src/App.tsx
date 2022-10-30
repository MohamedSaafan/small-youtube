import moment from "moment";
import { useEffect, useState } from "react";
import { buildSearchURL } from "./api/urlBuilder";
import { useAppDispatch } from "./app/hooks";
import NavBar from "./components/navbar";
import SearchList from "./components/searchList";
import { searchInYoutube } from "./features/youtube-search/youtubeSearchSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // fill in the store at the first to avoid rendering a blank search result
    dispatch(searchInYoutube(""));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <SearchList />
    </div>
  );
}

export default App;
