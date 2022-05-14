import React, {useContext} from 'react';
import './MRSide.css';
import MRContent from './rightContent/MRContent';
import { MainDataContext } from '../../../context/MainDataContext';

const MRSide = () => {
    const {obj} = useContext(MainDataContext);
    return (
        <div className = "rightSide">
            <MRContent data = {obj.current.temp_c} isW = '1'/>
            <MRContent data = {obj.current.air_quality.pm2_5} isW = '0'/>
        </div>
    );
}

export default MRSide;