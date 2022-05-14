import React from "react";
import './GTitle.css'

const GTitle = (props) =>{
    return(
        <div className = "GTitle">
            <span className="GTitleText">{props.gtitle}</span>
            <div className = "wMark">
            <a href="https://www.weatherapi.com/" title="Free Weather API" className="listen"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" className="watermark"/></a>
            </div>
        </div>
    );
}

export default GTitle;