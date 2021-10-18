import React from "react";
import DateForToday from "./DateForToday";
import WeatherIcon from "./WeatherIcon";

export default function WInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateForToday date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.date.description}</li>
      </ul>
      <div className="row ">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={24} />
          <br />
          {Math.round(props.data.temperature)}
        </div>
      </div>

      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
