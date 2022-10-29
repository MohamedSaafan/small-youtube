import moment from "moment";
import { useEffect, useState } from "react";
import { buildSearchURL } from "./api/urlBuilder";
import NavBar from "./components/navbar";
import SearchList from "./components/searchList";

function App() {
  const url = buildSearchURL("funny channels");
  const [respone, setResponse] = useState("");
  console.log(moment().diff("2020-05-22T16:24:20Z", "months"));
  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then(console.log);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <SearchList />
    </div>
  );
}

export default App;
