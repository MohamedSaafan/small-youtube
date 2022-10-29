import "./searchbar.scss";
import searchIcon from "../../images/search.webp";
import React, { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeSearchBar } from "../../features/searchbar/searchBarSlice";
import { searchInYoutube } from "../../features/youtube-search/youtubeSearchSlice";
interface Props {}

const SearchBar: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const [searchKeyWord, setSearchKeyWord] = useState("");

  const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submited");
    e.preventDefault();
    // put the search keyword in the store
    dispatch(changeSearchBar(searchKeyWord));
    // make the actual search
    dispatch(searchInYoutube(searchKeyWord));
    console.log("after submittion");
  };
  const handleSearchKeyWordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchKeyWord(e.target.value);
  };

  return (
    <form onSubmit={handleSubmition} className="searchbar">
      <input
        type="search"
        className="searchbar__input"
        value={searchKeyWord}
        onChange={handleSearchKeyWordChange}
        autoFocus
      />
      <button type="submit" className="searchbar__icon">
        <img src={searchIcon} alt="search Icon" />
      </button>
    </form>
  );
};

export default SearchBar;
