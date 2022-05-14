import React from "react";
import './buttonContainer.css';
import LHSearchBox from "./search/searchContainer";

const LButtons = () => {
    return (
        <div className="lButtonContainer">
            <button className = "lButton"><a href = "https://www.airnow.gov/aqi/aqi-basics/">AQI</a></button>
            <button className = "lButton"><a href = "https://www.weatherapi.com/">weatherAPI</a></button>
            <LHSearchBox />
        </div>
    );
}

export default LButtons;