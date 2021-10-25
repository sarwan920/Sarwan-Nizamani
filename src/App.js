import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/ClipLoader";

import Introduction from "./components/Introduction";

const override = css`
  position: absolute;

  top: 40%;

  left: 50%;

  transform: translate(-50%, -50%);

  margin: 0;
`;

function App() {
  let [loading, setLoading] = useState(false);
  // let [color, setColor] = useState();
  const color = "#ffffff";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <BeatLoader color={color} loading={loading} css={override} size={100} />
    );
  }

  return (
    <div className="App">
      <Header />

      <Introduction  />
      


    </div>
  );
}

export default App;
