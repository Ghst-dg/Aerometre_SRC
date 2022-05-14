import React, {useContext} from "react";
import './AQI.css'
import MiniData from "../miniData/MiniData";
import { MainDataContext } from "../../../../context/MainDataContext";

const AQI = (props) =>{
    const {obj} = useContext(MainDataContext);
    let co = Math.round(obj.current.air_quality.co);
    let no2 = Math.round(obj.current.air_quality.no2);
    let o3 = Math.round(obj.current.air_quality.o3);
    let so2 = Math.round(obj.current.air_quality.so2);

    if(isNaN(co))
    {
        co = '-';
    }

    if(isNaN(no2))
    {
        no2 = '-';
    }

    if(isNaN(o3))
    {
        o3 = '-';
    }

    if(isNaN(so2))
    {
        so2 = '-';
    }

    const val = [
        {
            id: 1,
            name: "CO",
            icon: "co.png",
            value: `${co} &mu;g/m<sup>3</sup>`,
        },
        {
            id: 2,
            name: "O<sub>3</sub>",
            icon: "o3.png",
            value: `${o3} &mu;g/m<sup>3</sup>`,
        },
        {
            id: 3,
            name: "NO<sub>2</sub>",
            icon: "no2.png",
            value: `${no2} &mu;g/m<sup>3</sup>`
        },
        {
            id: 4,
            name: "SO<sub>2</sub>",
            icon: "so2.png",
            value: `${so2} &mu;g/m<sup>3</sup>`,
        }
    ]

    return(
        <div className = {props.cls}>
            {val.map(val =>
                <MiniData key = {val.id} icon = {val.icon} title = {val.name} data = {val.value}/>
            )}
        </div>
    );
}

AQI.defaultProps = {
    cls: "aqiData",
}

export default AQI;