import React from "react";
import './header.css'
import LogoContainer from "./logo/logoContainer";
import LButtons from "./buttons/buttonContainer";

const LHeader = () => {
    return(
    <div className = "lTitle">
        <LogoContainer/>
        <LButtons/>
    </div>
    );
};

export default LHeader;