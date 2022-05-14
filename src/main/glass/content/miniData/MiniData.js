import React from "react";
import './MiniData.css'
import MDIcon from "./mdIcon/MDIcon";
import MDText from "./mdText/MDText";


const MiniData = (props) =>{
    return(
        <div className = "dataBox">
            <MDIcon pic = {props.icon}/>
            <MDText title = {props.title} data = {props.data}/>
        </div>
    );
}

export default MiniData;