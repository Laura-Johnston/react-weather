import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastData(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  

  return (
    <div>
      {day()}
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <span className="WeatherForecast-temperature-max">{maxTemp()}</span>
      <span className="WeatherForecast-temperature-min">{minTemp()}</span>
    </div>
  );
}
