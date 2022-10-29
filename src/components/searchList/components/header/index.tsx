import { useAppSelector } from "../../../../app/hooks";
import { numberWithCommas } from "../../../../helpers/numbers";
import "./header.scss";

const Header: React.FC<{}> = (props) => {
  const totalResults = useAppSelector(
    (state) => state.youtubeSearchResult.data?.pageInfo.totalResults
  );

  return (
    <header className="results-header container">
      <h2 className="results-header__heading">
        About {totalResults && numberWithCommas(totalResults)} filtered Results{" "}
      </h2>
      <button className="results-header__btn">FILTER</button>
    </header>
  );
};
export default Header;
