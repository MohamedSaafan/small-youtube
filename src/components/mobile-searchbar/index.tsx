import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeSearchBar } from "../../features/searchbar/searchBarSlice";
import { searchInYoutube } from "../../features/youtube-search/youtubeSearchSlice";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {}

const MobileSearchBar: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const [searchKeyWord, setSearchKeyWord] = useState("keyword");
  const [shouldDisplayInput, setShouldDisplayInput] = useState(false);

  const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // put the search keyword in the store
    dispatch(changeSearchBar(searchKeyWord));
    // make the actual search
    dispatch(searchInYoutube(searchKeyWord));
    setShouldDisplayInput(false);
  };

  const handleSearchKeyWordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchKeyWord(e.target.value);
  };
  const handleSeachIconClick = () => {
    setShouldDisplayInput(true);
  };

  return (
    <form onSubmit={handleSubmition} className="searchbar searchbar-mobile">
      {shouldDisplayInput ? (
        ""
      ) : (
        <h1 className="searchbar__searchkeyword">{searchKeyWord}</h1>
      )}
      <input
        type="search"
        className="searchbar__input"
        value={searchKeyWord}
        onChange={handleSearchKeyWordChange}
        style={{ display: `${shouldDisplayInput ? "block" : "none"}` }}
        autoFocus
      />
      <button
        className="searchbar__icon"
        type="button"
        onClick={handleSeachIconClick}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default MobileSearchBar;
