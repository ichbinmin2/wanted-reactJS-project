import React from "react";
import ReactDOM from "react-dom";

import Carousel from "components/Carousel/Carousel";
import MainBar from "components/MainBar/MainBar";

import "./common/reset.css";

function App() {
  return (
    <>
      <MainBar />
      <Carousel />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
