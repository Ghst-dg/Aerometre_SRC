import React from 'react';
import './MDIcon.css';

const MDIcon = (props) => {
    return (
        <div className = "GIconContainer">
            <img src = {props.pic} alt = "." className = "GIcon"/>
        </div>
    );
}

export default MDIcon;