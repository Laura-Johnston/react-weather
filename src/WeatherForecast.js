import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastData from "./ForecastData";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function setLoad() {
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let forecastURL = `https://api.openweathermap.org/data/2.5/onecall?
      lat=${lat}&lon=${lon}&units=metric&appid=546237bee9562b5e4e711682a4279901`;
    axios.get(forecastURL).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="row">
        {forecastData.map(function (dayForecast, index) {
          if (index < 4) {
            return (
              <div className="col" key={index}>
                <WeatherForecastData data={dayForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    setLoad();

    return null;
  }
}
