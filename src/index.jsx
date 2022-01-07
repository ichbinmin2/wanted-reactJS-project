import ReactDOM from "react-dom";
import React from "react";
import MainBar from "./components/MainBar/MainBar";

function App() {
  return (
    <>
      <MainBar />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
