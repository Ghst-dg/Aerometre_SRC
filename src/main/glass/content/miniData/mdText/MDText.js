import React from 'react';
import './MDText.css';
import MDtitle from './MDTitle/MDtitle';
import MDContent from './MDContent/MDContent';

const MDText = (props) => {
    return (
        <div className = "GMDText">
            <MDtitle text = {props.title}/>
            <MDContent text = {props.data}/>
        </div>
    );
}

export default MDText;