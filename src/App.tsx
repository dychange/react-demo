import { useState, type MouseEvent } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List";
import QuestionList from "./components/QuestionList";

function App() {
  return (
    <>
      <QuestionList />
      {/* <List /> */}
    </>
  );
}

export default App;
