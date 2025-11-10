import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";


function WeatherForecast({ data }) {
    const { day, img, imgAlt, conditions, time } = data;

    return (
        <div className="weather">
            <h2>{day}</h2>
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <WeatherData conditions={conditions} time={time} />
        </div>
    );
}

export default WeatherForecast;