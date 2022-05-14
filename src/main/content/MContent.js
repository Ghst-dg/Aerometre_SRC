import React from 'react';
import './MContent.css';
import MLSide from './leftside/MLSide';
import MCenter from './center/MCenter';
import MRSide from './rightside/MRSide';

const MContent = () => {
    return (
        <div className = "MContent">
            <MLSide/>
            <MCenter/>
            <MRSide/>
        </div>
    );
}

export default MContent;