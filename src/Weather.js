import React, { useState } from "react";
import WInfo from "./WeatherData";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import Date from "./DateForToday";

export default function Weather(props) {
  const [theWeather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function findWeather(response) {
    console.log(response.data.dt*1000);
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      coords: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function citySubmit(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "546237bee9562b5e4e711682a4279901";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(findWeather);
  }

  if (theWeather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control"
                autoFocus="on"
                onChange={citySubmit}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WInfo data={theWeather} />
        <WeatherForecast coordinates={theWeather.coords} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
