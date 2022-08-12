import React, { useState } from "react";
import axios from "axios";
import Today from "./Today";

import "./App.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.showCity);
  const [temp, setTemp] = useState(null);
  const [discript, setDiscript] = useState("");
  const [hamidity, setHamidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState("");

  async function searchCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.showCity}&appid=03cc9b8479bb5a2db9ec53fe58f6ab8a&units=metric`;
    await axios.get(apiUrl).then(GetWeather);
  }

  function GetWeather(response) {
    setTemp(Math.round(response.data.main.temp));
    setHamidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setDiscript(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
    setCity(response.data.name);
  }

  searchCity(city);

  return (
    <div>
      <h1>{props.showCity}</h1>
      <ul>
        <Today />
        <li id="description">{discript}</li>
      </ul>
      <div className="row">
        <div className="col_left">
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt={props.discript}
            className="weather-icon float-left"
            id="icon"
          />
          <span className="temperature" id="temperature">
            {temp}
          </span>
          <span className="units">°C</span>
        </div>
        <div className="col_right">
          <ul>
            <li>
              Humidity: <span id="humidity">{hamidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
