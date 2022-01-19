import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel/Carousel";
import MainBar from "./MainBar/MainBar";
import "../common/reset.css";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <MainBar />
      <div className={styles.divider}></div>
      <Carousel />
    </>
  );
}

export default App;
