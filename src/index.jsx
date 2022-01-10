import React from "react";
import ReactDOM from "react-dom";
import "./common/reset.css";
import MainBar from "./components/MainBar/MainBar";

function App() {
  return (
    <>
      <MainBar />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
