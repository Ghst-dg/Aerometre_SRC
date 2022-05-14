import React from 'react';
import './MDContent.css';

const MDContent = (props) => {

    return (
        <div className = "miniContent">
            <span className='miniContentText' dangerouslySetInnerHTML={{__html: props.text}}/>
        </div>
    );
}

export default MDContent;