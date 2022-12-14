import { useAppSelector } from "../../app/hooks";
import Spinner from "../spinner";
import Header from "./components/header";
import Video from "./components/video";
import "./searchlist.scss";
interface Props {}

const SearchList: React.FC<Props> = (props) => {
  const searchResult = useAppSelector((state) => state.youtubeSearchResult);
  const searchItems = searchResult.data?.items;
  if (searchResult.loading === "pending") return <Spinner />;
  if (searchResult.loading === "failed")
    return <h1>{searchResult.errorMessage}</h1>;
  if (searchItems) {
    return (
      <div className="outer-container searchlist-container">
        <Header />
        <section className="searchlist container">
          {searchItems.map((item) => {
            if (item.id.kind === "youtube#video")
              return <Video {...item} key={item.id.videoId + item.kind} />;
            return <div> {item.id.kind}</div>;
          })}
        </section>
      </div>
    );
  }
  return <div></div>;
};
export default SearchList;
