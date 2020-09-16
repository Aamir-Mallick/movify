import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import LeftContainer from "./Components/LeftContainer/LeftConainer";
import MainContainer from "./Components/MainContainer/MainContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LeftContainer />
      <MainContainer />
    </div>
  );
}

export default App;
