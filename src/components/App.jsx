import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel/Carousel";
import MainBar from "./MainBar/MainBar";
import "../common/reset.css";

function App() {
  return (
    <>
      <MainBar />
      <div style={{ height: "50px" }}></div>
      <Carousel />
    </>
  );
}

export default App;
