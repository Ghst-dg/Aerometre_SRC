import React, {useContext} from 'react';
import './MLSide.css';
import MLIcon from './leftContent/MLIcon';
import { MainDataContext } from '../../../context/MainDataContext';

const MLSide = () => {
    const {obj} = useContext(MainDataContext);
    const aq = Math.round(obj.current.air_quality.pm2_5);
    let aqi = '-';

    if(aq <= 50)
    {
        aqi = 'Good'
    }
    else if(aq <= 100)
    {
        aqi = 'Moderate'
    }
    else if(aq <= 150)
    {
        aqi = 'Bad'
    }
    else if(aq <= 200)
    {
        aqi = 'Unhealthy'
    }
    else if(aq <= 300)
    {
        aqi = 'Very Unhealthy'
    }
    else if(301 <= aq)
    {
        aqi = 'Hazardous'
    }

    return (
        <div className = "leftSide">
            <MLIcon text = {obj.current.condition.text} val = "w"/>
            <MLIcon text = {aqi} val = "a"/>
        </div>
    );
}

export default MLSide;