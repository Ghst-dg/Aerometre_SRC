import React from "react";
import './GFooter.css'

const GFooter = (props) => {

    const func1 = () => props.func('aqiData', 'invisi', 'invisi', 'Air Quality');
    const func2 = () => props.func('invisi', 'wData', 'invisi', 'Weather');
    const func3 = () => props.func('invisi', 'invisi', 'astroData', 'Astronomy');


    return(
        <div className="GFooter">
            <button className = "GFButton" onClick = {func1}>Air Quality</button>
            <button className = "GFButton" onClick = {func2}>Weather</button>
            <button className = "GFButton" onClick = {func3}>Astronomy</button>
        </div>
    );
}

export default GFooter;