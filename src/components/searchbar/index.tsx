import React from "react";
import DesktopSearchbar from "../desktop-searchbar";
import MobileSearchBar from "../mobile-searchbar";

interface Props {}

const SearchBar: React.FC<Props> = (props) => {
  return (
    <>
      <DesktopSearchbar /> <MobileSearchBar />
    </>
  );
};

export default SearchBar;
