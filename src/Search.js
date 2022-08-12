import React, { useState } from "react";
import Weather from "./Weather";

import "./App.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [showCity, setShowCity] = useState("Kyiv");

  function GetCity(e) {
    e.preventDefault();
    setShowCity(city);
  }

  function GetValueCity(e) {
    setCity(e.target.value);
  }

  return (
    <div>
      <form className="search-form" onSubmit={GetCity}>
        <input
          type="search"
          placeholder="Type a city.."
          autoFocus="on"
          autoComplete="off"
          className="city-input"
          onChange={GetValueCity}
        />
        <input type="submit" value="Search" className="city_search" />
        <button className="current_btn">Current</button>
      </form>
      <Weather showCity={showCity} />
    </div>
  );
}
