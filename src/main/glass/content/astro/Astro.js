import React, {useContext} from "react";
import './Astro.css'
import MiniData from "../miniData/MiniData";
import { MainDataContext } from "../../../../context/MainDataContext";


const Astro = (props) =>{
    const {obj} = useContext(MainDataContext);
    const sunrise = obj.forecast.forecastday[0].astro.sunrise;
    const sunset = obj.forecast.forecastday[0].astro.sunset;
    const moonrise = obj.forecast.forecastday[0].astro.moonrise;
    const moonset = obj.forecast.forecastday[0].astro.moonset;
    const moonill = obj.forecast.forecastday[0].astro.moon_illumination;
    const moonphase = obj.forecast.forecastday[0].astro.moon_phase;

    const val = [
        {
            id: 1,
            name: "Sunrise",
            icon: "sunrise.png",
            value: sunrise,
        },
        {
            id: 2,
            name: "Sunset",
            icon: "sunset.png",
            value: sunset,
        },
        {
            id: 3,
            name: "Moonrise",
            icon: "moonrise.png",
            value: moonrise,
        },
        {
            id: 4,
            name: "Moontset",
            icon: "moonset.png",
            value: moonset,
        },
        {
            id: 5,
            name: "Moon Phase",
            icon: "moon.png",
            value: moonphase,
        },
        {
            id: 6,
            name: "Moon Bright",
            icon: "bright.png",
            value: `${moonill}%`,
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

Astro.defaultProps = {
    cls: 'invisi'
}

export default Astro;