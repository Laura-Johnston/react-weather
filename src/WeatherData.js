import React from "react";
import DateForToday from "./DateForToday";
import WeatherIcon from "./WeatherIcon";

export default function WInfo(props) {
  //console.log({props.data.date.description})
  return (
    <div className="weather-info">
      <div className='row'>
        <div className='col-7'>
          <div className="main-infos">
          <h1>{props.data.city}</h1>
          <DateForToday date={props.data.date} />         
          <WeatherIcon code={props.data.icon} size={60} className="main-infos-icon"/>
        </div>
        </div>
        <div className='col-5 float-r'>
          <ul>
        <li>
        <h3 className="text-capitalize">{props.data.description}</h3>     
        </li>
        <li className="temperature">{Math.round(props.data.temperature)}°C
        </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
