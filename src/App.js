import Search from "./Search";
import React from "react";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Search />
        <Forecast />
      </div>
      <p className="footer">
        <a
          href="https://github.com/ValentynaBaranova/my-ap-Weather"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourse code
        </a>{" "}
        by Valentyna Baranova
      </p>
    </div>
  );
}

export default App;
