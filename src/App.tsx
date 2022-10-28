import { useEffect, useState } from "react";
import { buildSearchURL } from "./api/queries";
import Spinner from "./components/spinner";
import NavBar from "./components/navbar";

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
      <Spinner />
    </div>
  );
}

export default App;
