import { useAppSelector } from "../../app/hooks";
import Spinner from "../spinner";
import "./searchlist.scss";
interface Props {}

const SearchList: React.FC<Props> = (props) => {
  const searchResult = useAppSelector((state) => state.youtubeSearchResult);
  if (searchResult.loading === "pending") return <Spinner />;
  if (searchResult.loading === "failed")
    return <h1>{searchResult.errorMessage}</h1>;
  return <div>Search list</div>;
};
export default SearchList;
