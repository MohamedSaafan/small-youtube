import "./navbar.scss";
import youtubeIcon from "../../images/youtube.png";
import SearchBar from "../searchbar";
const NavBar: React.FC<{}> = (props) => {
  return (
    <header className="header container">
      <div className="header__logo">
        <img src={youtubeIcon} alt="youtube icon" />
        <span>EG</span>
      </div>
      <div className="header__searchbar">
        <SearchBar />
      </div>
    </header>
  );
};
export default NavBar;
