import React from "react";
import './MGContent.css'
import AQI from "./aqi/AQI";
import Astro from "./astro/Astro";
import W from "./w/W";

const MGContent = (props) =>{
    return(
        <div className = "MGContent">
            <AQI cls = {props.dataAQI}/>
            <W cls = {props.dataW}/>
            <Astro cls = {props.dataASTRO}/>
        </div>
    );
}

export default MGContent;