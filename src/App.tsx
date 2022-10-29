import { useEffect, useState } from "react";
import { buildSearchURL } from "./api/queries";
import Spinner from "./components/spinner";
import NavBar from "./components/navbar";
import SearchList from "./components/searchList";

function App() {
  const url = buildSearchURL("funny channels");
  const [respone, setResponse] = useState("");

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
