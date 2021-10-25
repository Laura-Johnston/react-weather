import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastData(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu"," Fri", "Sat"];

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
    <div className="foreC-icon">
    <span className="forecast-icon">
  <WeatherIcon code={props.data.weather[0].icon} size={46} />
    </span>
    <div className="forecastDay">
      {day()}
    </div>
    <div className="forecastMinAndMaxtemp">
      <span className="WeatherForecast-temperature-max">{maxTemp()}</span>
      <span className="WeatherForecast-temperature-min"> | {minTemp()}</span>
    </div></div>
  );
}
