import "./searchbar.scss";
import searchIcon from "../../images/search.webp";
import React, { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeSearchBar } from "../../features/searchbar/searchBarSlice";
import { searchInYoutube } from "../../features/youtube-search/youtubeSearchSlice";
interface Props {}

const SearchBar: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const searchKeyWord = useAppSelector((state) => state.searchbar);
  const state = useAppSelector((state) => state);
  console.log(state);

  const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submited");
    e.preventDefault();
    dispatch(searchInYoutube(searchKeyWord));
    console.log("after submittion");
  };
  const handleSearchKeyWordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changeSearchBar(e.target.value));
  };

  return (
    <form onSubmit={handleSubmition} className="searchbar">
      <input
        type="search"
        className="searchbar__input"
        value={searchKeyWord}
        onChange={handleSearchKeyWordChange}
      />
      <button type="submit" className="searchbar__icon">
        <img src={searchIcon} alt="search Icon" />
      </button>
    </form>
  );
};

export default SearchBar;
