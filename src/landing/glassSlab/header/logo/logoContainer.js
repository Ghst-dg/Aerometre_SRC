import React from "react";
import './logoContainer.css'

const LogoContainer = () => {
    return (
        <div className = "logoContainer">
            <img src = "./logo.png" className = 'logo' alt = "logo"/>
            <h1 className = "logoTitle">Aerometre</h1>
        </div>
    );
}

export default LogoContainer;