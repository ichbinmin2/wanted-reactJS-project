import React from "react";
import ReactDOM from "react-dom";

import "./common/reset.css";
import Carousel from "./components/Carousel/Carousel";
import MainBar from "./components/MainBar/MainBar";

function App() {
  return (
    <>
      <MainBar />
      <Carousel />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
