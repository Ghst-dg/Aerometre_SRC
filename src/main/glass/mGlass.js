import React, {useState} from "react";
import './mGlass.css'
import GTitle from "./header/GTitle";
import GFooter from "./footer/GFooter";
import MGContent from "./content/MGContent";

const MGlass = () =>{

    const[aqi, setAQI] = useState('aqiData');
    const[w, setW] = useState('invisi');
    const[astro, setAstro] = useState('invisi');
    const[title, setTitle] = useState('Air Quality');

    const func = (a, b, c, d) => {
        setAQI(a);
        setW(b);
        setAstro(c);
        setTitle(d);
    }

    return(
        <div className = "mGlassSlab">
            <GTitle gtitle = {title}/>
            <MGContent dataAQI = {aqi} dataW = {w} dataASTRO = {astro}/>
            <GFooter func = {func}/>
        </div>
    );
}

export default MGlass;