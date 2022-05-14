import React, {useContext} from "react";
import './W.css'
import MiniData from "../miniData/MiniData";
import { MainDataContext } from "../../../../context/MainDataContext";

const W = (props) =>{
    const {obj} = useContext(MainDataContext);

    const val = [
        {
            id: 1,
            name: "Feels Like",
            icon: "thermometer.png",
            value: `${obj.current.feelslike_c}<sup>&deg;C</sup>`
        },
        {
            id: 2,
            name: "Max Temp",
            icon: "thermometer.png",
            value: `${obj.forecast.forecastday[0].day.maxtemp_c}<sup>&deg;C</sup>`
        },
        {
            id: 3,
            name: "Min Temp",
            icon: "thermometer.png",
            value: `${obj.forecast.forecastday[0].day.mintemp_c}<sup>&deg;C</sup>`
        },
        {
            id: 4,
            name: "Avg Temp",
            icon: "thermometer.png",
            value: `${obj.forecast.forecastday[0].day.avgtemp_c}<sup>&deg;C</sup>`
        },
        {
            id: 5,
            name: "Wind Speed",
            icon: "windsock.png",
            value: `${obj.current.wind_kph} km/h`
        },
        {
            id: 6,
            name: "Max Wind Speed",
            icon: "windsock.png",
            value: `${obj.forecast.forecastday[0].day.maxwind_kph} km/h`
        },
        {
            id: 7,
            name: "Wind Direction",
            icon: "wind-direction.png",
            value: `${obj.current.wind_dir}`
        },
        {
            id: 8,
            name: "Pressure",
            icon: "gauge.png",
            value: `${obj.current.pressure_mb} MBar`
        },
        {
            id: 9,
            name: "Precipitation",
            icon: "rain.png",
            value: `${obj.current.precip_mm} mm`
        },
        {
            id: 10,
            name: "Total Precip",
            icon: "rain.png",
            value: `${obj.forecast.forecastday[0].day.totalprecip_mm} mm`
        },
        {
            id: 11,
            name: "Humidity",
            icon: "humidity.png",
            value: `${obj.current.humidity}%`
        },
        {
            id: 12,
            name: "Avg Humidity",
            icon: "humidity.png",
            value: `${obj.forecast.forecastday[0].day.avghumidity}%`
        },
        {
            id: 13,
            name: "Cloud",
            icon: "cloud.png",
            value: `${obj.current.cloud}%`
        },
        {
            id: 14,
            name: "Visibility",
            icon: "visibility.png",
            value: `${obj.current.vis_km} km`
        },
        {
            id: 15,
            name: "Avg Visibility",
            icon: "visibility.png",
            value: `${obj.forecast.forecastday[0].day.avgvis_km} km`
        },
        {
            id: 16,
            name: "UV Index",
            icon: "rays.png",
            value: obj.current.uv
        },
        {
            id: 17,
            name: "Gust Speed",
            icon: "gust.png",
            value: `${obj.current.gust_kph} km/h`
        },
        {
            id: 18,
            name: "Heat Index",
            icon: "heat.png",
            value: `${props.hi} <sup>&deg;C</sup>`
        },
        {
            id: 19,
            name: "Windchill",
            icon: "chills.png",
            value: `${props.wc} <sup>&deg;C</sup>`
        },
        {
            id: 20,
            name: "Dew Point",
            icon: "dew-point.png",
            value: `${props.dp} <sup>&deg;C</sup>`
        }
    ]

    return(
        <div className = {props.cls}>
            {val.map(val => (
                <MiniData key = {val.id} icon = {val.icon} title = {val.name} data = {val.value}/>
            ))}
        </div>
    );
}

W.defaultProps = {
    cls: 'invisi',
    hi: "-",
    wc: "-",
    dp: "-"
}

export default W;