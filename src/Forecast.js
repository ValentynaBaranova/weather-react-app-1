import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./App.css";

export default function Forecast() {
  return (
    <div className="forecact">
      <div>
        <h2>Sat</h2>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="red"
          size={40}
          animate={true}
        />

        <p>24°C</p>
      </div>
      <div>
        <h2>Sun</h2>
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="red"
          size={40}
          animate={true}
        />

        <p>27°C</p>
      </div>
      <div>
        <h2>Mon</h2>
        <ReactAnimatedWeather
          icon="RAIN"
          color="red"
          size={40}
          animate={true}
        />
        <p>28°C</p>
      </div>
      <div>
        <h2>Thu</h2>
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="red"
          size={40}
          animate={true}
        />
        <p>24°C</p>
      </div>
      <div>
        <h2>Wed</h2>
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="red"
          size={40}
          animate={true}
        />
        <p>24°C</p>
      </div>
    </div>
  );
}
